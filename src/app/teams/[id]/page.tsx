import { notFound } from "next/navigation";
import Link from "next/link";
import { teams, groupMatches, probabilitySnapshots, getTeamById } from "@/data/tournament-data";
import { cn, eloToLabel, formColor, pct } from "@/lib/utils";
import DataBanner from "@/components/ui/DemoBanner";
import ModelBanner from "@/components/ui/ModelBanner";
import MatchCard from "@/components/match/MatchCard";
import { ArrowLeft, Star, Shield, Zap } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return teams.map(t => ({ id: t.id }));
}

export default async function TeamDetailPage({ params }: Props) {
  const { id } = await params;
  const team = getTeamById(id);
  if (!team) notFound();

  const teamMatches = groupMatches.filter(m => m.homeTeamId === team.id || m.awayTeamId === team.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <Link href="/teams" className="text-sm text-gray-500 flex items-center gap-1 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Teams
      </Link>

      <DataBanner />

      {/* Team header */}
      <div className="bg-surface border border-white/10 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="text-6xl">{team.flagEmoji}</span>
            <div>
              <h1 className="text-2xl font-bold text-white">{team.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 text-sm">{team.code}</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-400 text-sm">{team.confederation}</span>
                <span className="text-gray-600">·</span>
                <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded">Group {team.group}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className={cn("text-3xl font-bold", team.eloRating >= 1800 ? "text-gold" : "text-white")}>
              {team.eloRating}
            </div>
            <div className="text-xs text-gray-500">Elo Rating</div>
            <div className={cn(
              "text-xs mt-1 px-2 py-0.5 rounded inline-block",
              team.eloRating >= 1800 ? "bg-gold/20 text-gold" :
              team.eloRating >= 1700 ? "bg-blue-900/40 text-blue-300" :
              "bg-gray-800 text-gray-400"
            )}>
              {eloToLabel(team.eloRating)}
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-surface border border-white/10 rounded-lg p-4">
          <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Shield className="h-3 w-3" />FIFA Ranking</div>
          <div className="text-2xl font-bold text-white">#{team.fifaRanking}</div>
        </div>
        <div className="bg-surface border border-white/10 rounded-lg p-4">
          <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Zap className="h-3 w-3 text-yellow-400" />Attack</div>
          <div className="text-2xl font-bold text-white">{team.attackStrength.toFixed(2)}</div>
          <div className="text-xs text-gray-600">Strength index</div>
        </div>
        <div className="bg-surface border border-white/10 rounded-lg p-4">
          <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Shield className="h-3 w-3 text-blue-400" />Defense</div>
          <div className="text-2xl font-bold text-white">{team.defenseStrength.toFixed(2)}</div>
          <div className="text-xs text-gray-600">Vulnerability index</div>
        </div>
        <div className="bg-surface border border-white/10 rounded-lg p-4">
          <div className="text-gray-500 text-xs mb-1 flex items-center gap-1"><Star className="h-3 w-3 text-gold" />Star Player</div>
          <div className="text-sm font-semibold text-white leading-tight">{team.starPlayer}</div>
        </div>
      </div>

      {/* Recent form */}
      <div className="bg-surface border border-white/10 rounded-xl p-4">
        <h2 className="text-white font-semibold mb-3">Recent Form</h2>
        <div className="flex items-center gap-2">
          {team.recentForm.map((r, i) => (
            <div key={i} className={cn("w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm", formColor(r))}>
              {r}
            </div>
          ))}
          <span className="text-gray-600 text-xs ml-2">(Most recent →)</span>
        </div>
      </div>

      {/* xG bars */}
      <div className="bg-surface border border-white/10 rounded-xl p-4">
        <h2 className="text-white font-semibold mb-3">Model Strength Profile</h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Attack Strength</span>
              <span>{team.attackStrength.toFixed(2)} / 2.00</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-yellow-500 rounded-full" style={{ width: `${(team.attackStrength / 2) * 100}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Defense Strength (lower = better)</span>
              <span>{team.defenseStrength.toFixed(2)} / 2.00</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${(team.defenseStrength / 2) * 100}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Elo Rating</span>
              <span>{team.eloRating} / 2000</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: `${(team.eloRating / 2000) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Group matches */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold">Group Stage Fixtures</h2>
        </div>
        <ModelBanner />
        <div className="space-y-3 mt-3">
          {teamMatches.map(m => (
            <MatchCard
              key={m.id}
              match={m}
              probability={probabilitySnapshots.find(p => p.matchId === m.id)}
            />
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-600 text-center">
        Manager: {team.manager}
      </div>
    </div>
  );
}

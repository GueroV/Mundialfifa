import { notFound } from "next/navigation";
import Link from "next/link";
import { teams, groups, groupMatches, probabilitySnapshots, initialStandings } from "@/data/tournament-data";
import GroupTable from "@/components/group/GroupTable";
import MatchCard from "@/components/match/MatchCard";
import DataBanner from "@/components/ui/DemoBanner";
import ModelBanner from "@/components/ui/ModelBanner";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return groups.map(g => ({ id: g }));
}

export default async function GroupDetailPage({ params }: Props) {
  const { id } = await params;
  const group = id.toUpperCase();
  if (!groups.includes(group)) notFound();

  const groupTeams = teams.filter(t => t.group === group);
  const matches = groupMatches.filter(m => m.group === group);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <Link href="/groups" className="text-sm text-gray-500 flex items-center gap-1 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Groups
      </Link>

      <DataBanner />

      <h1 className="text-2xl font-bold text-white">Group {group}</h1>

      {/* Teams */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {groupTeams.map(t => (
          <Link key={t.id} href={`/teams/${t.id}`} className="bg-surface border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors text-center">
            <div className="text-3xl mb-2">{t.flagEmoji}</div>
            <div className="text-white font-medium text-sm">{t.shortName}</div>
            <div className="text-xs text-gray-500 mt-1">#{t.fifaRanking} FIFA</div>
            <div className="text-xs text-gray-600 mt-0.5">{t.eloRating} Elo</div>
          </Link>
        ))}
      </div>

      {/* Standings */}
      <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-white font-semibold">Standings</h2>
          <p className="text-xs text-gray-500 mt-1">All teams start with 0 points — tournament has not yet begun</p>
        </div>
        <div className="p-4">
          <GroupTable standings={initialStandings} group={group} />
        </div>
      </div>

      {/* Matches */}
      <div className="bg-surface border border-white/10 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-white font-semibold">Fixtures</h2>
        </div>
        <ModelBanner />
        <div className="p-4 space-y-3">
          {matches.map(m => (
            <MatchCard
              key={m.id}
              match={m}
              probability={probabilitySnapshots.find(p => p.matchId === m.id)}
            />
          ))}
        </div>
      </div>

      {/* Qualification info */}
      <div className="bg-surface border border-white/10 rounded-xl p-4 text-sm text-gray-400">
        <h3 className="text-white font-medium mb-2">Qualification Rules</h3>
        <ul className="space-y-1 text-xs">
          <li>• Top 2 teams from each group qualify directly for the Round of 32</li>
          <li>• The 8 best third-place teams across all 12 groups also qualify</li>
          <li>• Tiebreakers: Points → Goal difference → Goals scored → Head-to-head</li>
        </ul>
      </div>
    </div>
  );
}

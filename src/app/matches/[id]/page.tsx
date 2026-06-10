import { notFound } from "next/navigation";
import Link from "next/link";
import { allMatches, probabilitySnapshots, getTeamById, venues } from "@/data/tournament-data";
import { cn, formatDateTime, stageName, pct } from "@/lib/utils";
import DataBanner from "@/components/ui/DemoBanner";
import ModelBanner from "@/components/ui/ModelBanner";
import { ArrowLeft, MapPin, Clock } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return allMatches.map(m => ({ id: m.id }));
}

export default async function MatchDetailPage({ params }: Props) {
  const { id } = await params;
  const match = allMatches.find(m => m.id === id);
  if (!match) notFound();

  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  const venue = venues.find(v => v.id === match.venueId);
  const prob = probabilitySnapshots.find(p => p.matchId === match.id);

  const isKnockout = match.homeTeamId.startsWith("TBD");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <Link href="/matches" className="text-sm text-gray-500 flex items-center gap-1 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Fixtures
      </Link>

      <DataBanner />

      {/* Match header */}
      <div className="bg-surface border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
          <span>{stageName(match.stage)}{match.group ? ` · Group ${match.group}` : ""} · Match #{match.matchNumber}</span>
          <span className={cn(
            "px-2 py-0.5 rounded text-xs",
            match.status === "live" ? "bg-red-600 text-white" :
            match.status === "completed" ? "bg-gray-700 text-gray-400" :
            "bg-blue-900/40 text-blue-300"
          )}>
            {match.status === "live" ? "LIVE" : match.status === "completed" ? "Full Time" : "Upcoming"}
          </span>
        </div>

        {isKnockout ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">🔜</div>
            <p>Teams to be determined</p>
            <p className="text-xs mt-1">{formatDateTime(match.kickoffUtc)}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-6">
            <div className="flex-1 text-right">
              <Link href={`/teams/${home?.id}`} className="hover:opacity-80 transition-opacity">
                <div className="text-5xl mb-2">{home?.flagEmoji}</div>
                <div className="font-bold text-white text-lg">{home?.shortName}</div>
                <div className="text-xs text-gray-500">{home?.name}</div>
              </Link>
            </div>

            <div className="text-center min-w-[80px]">
              {match.status === "completed" || match.status === "live" ? (
                <div className="text-3xl font-bold text-white">{match.homeScore} – {match.awayScore}</div>
              ) : (
                <div className="text-gray-600 text-sm">vs</div>
              )}
            </div>

            <div className="flex-1 text-left">
              <Link href={`/teams/${away?.id}`} className="hover:opacity-80 transition-opacity">
                <div className="text-5xl mb-2">{away?.flagEmoji}</div>
                <div className="font-bold text-white text-lg">{away?.shortName}</div>
                <div className="text-xs text-gray-500">{away?.name}</div>
              </Link>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDateTime(match.kickoffUtc)}</span>
          {venue && <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{venue.name}, {venue.city}</span>}
        </div>
      </div>

      {/* Probabilities */}
      {prob && !isKnockout && (
        <div className="bg-surface border border-white/10 rounded-xl p-6">
          <ModelBanner />
          <h2 className="text-white font-semibold mt-4 mb-4">Win Probabilities</h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{pct(prob.homeWin)}</div>
              <div className="text-xs text-gray-500">{home?.shortName} Win</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">{pct(prob.draw)}</div>
              <div className="text-xs text-gray-500">Draw</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{pct(prob.awayWin)}</div>
              <div className="text-xs text-gray-500">{away?.shortName} Win</div>
            </div>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden mb-4">
            <div className="bg-blue-500" style={{ width: `${prob.homeWin * 100}%` }} />
            <div className="bg-gray-600" style={{ width: `${prob.draw * 100}%` }} />
            <div className="bg-orange-500" style={{ width: `${prob.awayWin * 100}%` }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded p-3 text-center">
              <div className="text-white font-semibold">{prob.homeXG.toFixed(2)}</div>
              <div className="text-xs text-gray-500">{home?.shortName} xG</div>
            </div>
            <div className="bg-white/5 rounded p-3 text-center">
              <div className="text-white font-semibold">{prob.awayXG.toFixed(2)}</div>
              <div className="text-xs text-gray-500">{away?.shortName} xG</div>
            </div>
            <div className="bg-white/5 rounded p-3 text-center">
              <div className="text-white font-semibold">{pct(prob.over25)}</div>
              <div className="text-xs text-gray-500">Over 2.5 goals</div>
            </div>
            <div className="bg-white/5 rounded p-3 text-center">
              <div className="text-white font-semibold">{pct(prob.btts)}</div>
              <div className="text-xs text-gray-500">Both Teams Score</div>
            </div>
          </div>

          <div className="mt-3 text-center text-xs text-gray-600">
            Most likely score: <span className="text-white font-medium">{prob.mostLikelyScore}</span>
          </div>
        </div>
      )}

      {/* Venue info */}
      {venue && (
        <div className="bg-surface border border-white/10 rounded-xl p-4">
          <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> Venue
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div>
              <div className="text-gray-500 text-xs">Stadium</div>
              <div className="text-white">{venue.name}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">City</div>
              <div className="text-white">{venue.city}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">Country</div>
              <div className="text-white">{venue.country}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">Capacity</div>
              <div className="text-white">{venue.capacity.toLocaleString()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

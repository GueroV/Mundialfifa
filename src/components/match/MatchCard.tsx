import Link from "next/link";
import { cn, formatDateTime, stageName } from "@/lib/utils";
import type { Match, ProbabilitySnapshot } from "@/data/types";
import { getTeamById, venues } from "@/data/tournament-data";
import FlagIcon from "@/components/ui/FlagIcon";

interface Props {
  match: Match;
  probability?: ProbabilitySnapshot;
  compact?: boolean;
}

export default function MatchCard({ match, probability, compact = false }: Props) {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  const venue = venues.find(v => v.id === match.venueId);
  const isKnockout = match.homeTeamId.startsWith("tbd");

  return (
    <Link
      href={`/matches/${match.id}`}
      className={cn(
        "block bg-surface border border-white/10 rounded-lg hover:border-accent/40 transition-colors group",
        compact ? "p-3" : "p-4"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-medium">
          {stageName(match.stage)}{match.group ? ` · Group ${match.group}` : ""}
          {match.matchday ? ` · MD${match.matchday}` : ""}
        </span>
        <span className={cn(
          "text-xs px-2 py-0.5 rounded font-mono",
          match.status === "live"      ? "bg-red-600 text-white animate-pulse" :
          match.status === "completed" ? "bg-gray-700 text-gray-400" :
                                         "bg-blue-900/40 text-blue-300"
        )}>
          {match.status === "live"      ? "LIVE" :
           match.status === "completed" ? "FT" :
           formatDateTime(match.kickoffUtc)}
        </span>
      </div>

      {isKnockout ? (
        <div className="text-center text-gray-500 text-sm py-2">To be determined</div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 justify-end min-w-0">
            <span className={cn("font-semibold text-white truncate", compact ? "text-sm" : "text-base")}>
              {home?.shortName ?? match.homeTeamId}
            </span>
            {home && <FlagIcon code={home.code} size={compact ? "sm" : "md"} />}
          </div>

          <div className="flex items-center justify-center min-w-[52px]">
            {match.status === "completed" || match.status === "live" ? (
              <span className="text-white font-bold text-lg tabular-nums">
                {match.homeScore ?? 0}–{match.awayScore ?? 0}
              </span>
            ) : (
              <span className="text-gray-600 text-xs font-medium">vs</span>
            )}
          </div>

          <div className="flex-1 flex items-center gap-2 min-w-0">
            {away && <FlagIcon code={away.code} size={compact ? "sm" : "md"} />}
            <span className={cn("font-semibold text-white truncate", compact ? "text-sm" : "text-base")}>
              {away?.shortName ?? match.awayTeamId}
            </span>
          </div>
        </div>
      )}

      {probability && !isKnockout && !compact && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span className="font-mono">{(probability.homeWin * 100).toFixed(0)}%</span>
            <span className="text-gray-600">Draw {(probability.draw * 100).toFixed(0)}%</span>
            <span className="font-mono">{(probability.awayWin * 100).toFixed(0)}%</span>
          </div>
          <div className="flex h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500" style={{ width: `${probability.homeWin * 100}%` }} />
            <div className="bg-gray-600" style={{ width: `${probability.draw * 100}%` }} />
            <div className="bg-orange-500" style={{ width: `${probability.awayWin * 100}%` }} />
          </div>
        </div>
      )}

      {venue && !compact && (
        <div className="mt-2 text-xs text-gray-600">📍 {venue.name}, {venue.city}</div>
      )}
    </Link>
  );
}

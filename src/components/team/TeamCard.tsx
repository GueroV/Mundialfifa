import Link from "next/link";
import { cn, eloToLabel, formColor } from "@/lib/utils";
import type { Team } from "@/data/types";

interface Props {
  team: Team;
  showGroup?: boolean;
}

export default function TeamCard({ team, showGroup = true }: Props) {
  return (
    <Link
      href={`/teams/${team.id}`}
      className="block bg-surface border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{team.flagEmoji}</span>
          <div>
            <div className="font-semibold text-white text-sm">{team.name}</div>
            <div className="text-xs text-gray-500">{team.code} · {team.confederation}</div>
          </div>
        </div>
        {showGroup && (
          <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded font-medium">
            Group {team.group}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
        <div className="bg-white/5 rounded p-2">
          <div className="text-gray-500">FIFA Rank</div>
          <div className="text-white font-semibold">#{team.fifaRanking}</div>
        </div>
        <div className="bg-white/5 rounded p-2">
          <div className="text-gray-500">Elo Rating</div>
          <div className={cn("font-semibold", team.eloRating >= 1800 ? "text-gold" : "text-white")}>
            {team.eloRating}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={cn(
          "text-xs px-2 py-0.5 rounded",
          team.eloRating >= 1800 ? "bg-gold/20 text-gold" :
          team.eloRating >= 1700 ? "bg-blue-900/40 text-blue-300" :
          team.eloRating >= 1600 ? "bg-green-900/40 text-green-400" :
          "bg-gray-800 text-gray-400"
        )}>
          {eloToLabel(team.eloRating)}
        </span>
        <div className="flex gap-1">
          {team.recentForm.slice(-5).map((r, i) => (
            <span key={i} className={cn("w-5 h-5 rounded-sm text-white text-[10px] flex items-center justify-center font-bold", formColor(r))}>
              {r}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2 text-xs text-gray-600 truncate">{team.starPlayer}</div>
    </Link>
  );
}

import { cn } from "@/lib/utils";
import type { GroupStanding } from "@/data/types";
import { getTeamById } from "@/data/tournament-data";
import FlagIcon from "@/components/ui/FlagIcon";

interface Props {
  standings: GroupStanding[];
  group: string;
}

export default function GroupTable({ standings, group }: Props) {
  const sorted = [...standings]
    .filter(s => s.group === group)
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      return b.goalsFor - a.goalsFor;
    });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 text-xs border-b border-white/10">
            <th className="text-left py-2 px-2 font-medium">#</th>
            <th className="text-left py-2 px-2 font-medium">Team</th>
            <th className="text-center py-2 px-2 font-medium">P</th>
            <th className="text-center py-2 px-2 font-medium">W</th>
            <th className="text-center py-2 px-2 font-medium">D</th>
            <th className="text-center py-2 px-2 font-medium">L</th>
            <th className="text-center py-2 px-2 font-medium">GF</th>
            <th className="text-center py-2 px-2 font-medium">GA</th>
            <th className="text-center py-2 px-2 font-medium">GD</th>
            <th className="text-center py-2 px-2 font-medium font-bold">Pts</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s, idx) => {
            const team = getTeamById(s.teamId);
            const isQualified = idx < 2;
            return (
              <tr
                key={s.teamId}
                className={cn(
                  "border-b border-white/5 hover:bg-white/5 transition-colors",
                  isQualified ? "border-l-2 border-l-accent" : ""
                )}
              >
                <td className="py-2 px-2 text-gray-500">{idx + 1}</td>
                <td className="py-2 px-2">
                  <div className="flex items-center gap-2">
                    {team && <FlagIcon code={team.code} size="sm" />}
                    <span className={cn("font-medium", isQualified ? "text-white" : "text-gray-300")}>
                      {team?.shortName ?? s.teamId}
                    </span>
                  </div>
                </td>
                <td className="text-center py-2 px-2 text-gray-400">{s.played}</td>
                <td className="text-center py-2 px-2 text-gray-400">{s.won}</td>
                <td className="text-center py-2 px-2 text-gray-400">{s.drawn}</td>
                <td className="text-center py-2 px-2 text-gray-400">{s.lost}</td>
                <td className="text-center py-2 px-2 text-gray-400">{s.goalsFor}</td>
                <td className="text-center py-2 px-2 text-gray-400">{s.goalsAgainst}</td>
                <td className={cn("text-center py-2 px-2", s.goalDifference > 0 ? "text-green-400" : s.goalDifference < 0 ? "text-red-400" : "text-gray-400")}>
                  {s.goalDifference > 0 ? "+" : ""}{s.goalDifference}
                </td>
                <td className="text-center py-2 px-2 font-bold text-white">{s.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center gap-2 mt-2 px-2 text-xs text-gray-600">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span>Top 2 advance to Round of 32</span>
      </div>
    </div>
  );
}

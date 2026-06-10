import { teams, groups } from "@/data/tournament-data";
import TeamCard from "@/components/team/TeamCard";
import DemoBanner from "@/components/ui/DemoBanner";

export default function TeamsPage() {
  const sortedByElo = [...teams].sort((a, b) => b.eloRating - a.eloRating);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <DemoBanner />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Teams</h1>
        <span className="text-sm text-gray-500">{teams.length} qualified nations</span>
      </div>

      {/* By Group */}
      {groups.map(group => {
        const groupTeams = teams.filter(t => t.group === group);
        return (
          <div key={group}>
            <h2 className="text-gray-400 text-sm font-medium mb-3 border-b border-white/10 pb-2">Group {group}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {groupTeams.map(t => (
                <TeamCard key={t.id} team={t} showGroup={false} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import Link from "next/link";
import { teams, groups, initialStandings } from "@/data/tournament-data";
import GroupTable from "@/components/group/GroupTable";
import DataBanner from "@/components/ui/DemoBanner";
import { ArrowRight } from "lucide-react";

export default function GroupsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <DataBanner />
      <h1 className="text-2xl font-bold text-white">Groups</h1>
      <p className="text-gray-400 text-sm">12 groups of 4 teams. Top 2 from each group + 8 best third-place teams advance to the Round of 32.</p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {groups.map(group => {
          const groupTeams = teams.filter(t => t.group === group);
          return (
            <div key={group} className="bg-surface border border-white/10 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="text-white font-bold">Group {group}</h2>
                <Link href={`/groups/${group}`} className="text-xs text-accent flex items-center gap-1 hover:underline">
                  Details <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <GroupTable standings={initialStandings} group={group} />
              <div className="p-3 flex flex-wrap gap-1">
                {groupTeams.map(t => (
                  <Link key={t.id} href={`/teams/${t.id}`} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 rounded px-2 py-1 text-xs text-gray-300 transition-colors">
                    <span>{t.flagEmoji}</span>{t.shortName}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { allMatches, probabilitySnapshots, groups } from "@/data/tournament-data";
import MatchCard from "@/components/match/MatchCard";
import DataBanner from "@/components/ui/DemoBanner";
import Link from "next/link";
import type { MatchStage } from "@/data/types";
import { stageName } from "@/lib/utils";

const stages: MatchStage[] = ["group", "round_of_32", "round_of_16", "quarter_final", "semi_final", "third_place", "final"];

export default function MatchesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <DataBanner />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Fixtures</h1>
        <span className="text-sm text-gray-500">{allMatches.length} total matches</span>
      </div>

      {stages.map(stage => {
        const stageMatches = allMatches.filter(m => m.stage === stage);
        if (stageMatches.length === 0) return null;

        return (
          <div key={stage}>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              {stageName(stage)}
              <span className="text-gray-600 text-sm font-normal ml-2">({stageMatches.length} matches)</span>
            </h2>

            {stage === "group" ? (
              // Group stage: show by group
              groups.map(g => {
                const gMatches = stageMatches.filter(m => m.group === g);
                return (
                  <div key={g} className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-400 text-sm font-medium">Group {g}</h3>
                      <Link href={`/groups/${g}`} className="text-xs text-accent hover:underline">View group</Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {gMatches.map(m => (
                        <MatchCard
                          key={m.id}
                          match={m}
                          probability={probabilitySnapshots.find(p => p.matchId === m.id)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {stageMatches.map(m => (
                  <MatchCard
                    key={m.id}
                    match={m}
                    probability={probabilitySnapshots.find(p => p.matchId === m.id)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

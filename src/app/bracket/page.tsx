import { allMatches } from "@/data/tournament-data";
import DemoBanner from "@/components/ui/DemoBanner";
import { stageName, formatDate } from "@/lib/utils";
import type { MatchStage } from "@/data/types";
import Link from "next/link";

const knockoutStages: MatchStage[] = ["round_of_32", "round_of_16", "quarter_final", "semi_final", "final"];

export default function BracketPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <DemoBanner />
      <h1 className="text-2xl font-bold text-white">Knockout Bracket</h1>
      <p className="text-gray-400 text-sm">
        The knockout stage begins July 4, 2026. Teams TBD following the group stage.
      </p>

      <div className="bg-surface border border-white/10 rounded-xl p-6">
        <div className="text-center py-8 text-gray-500">
          <div className="text-5xl mb-4">🏆</div>
          <p className="text-lg font-medium text-white mb-2">Bracket Available After Group Stage</p>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            The full interactive bracket will be populated once the group stage concludes (July 3, 2026)
            and all 32 knockout stage participants are known.
          </p>
        </div>
      </div>

      {/* Knockout schedule overview */}
      {knockoutStages.map(stage => {
        const matches = allMatches.filter(m => m.stage === stage);
        return (
          <div key={stage} className="bg-surface border border-white/10 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-white font-semibold">{stageName(stage)}</h2>
              <p className="text-xs text-gray-500 mt-1">{matches.length} matches</p>
            </div>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {matches.map(m => (
                <Link
                  key={m.id}
                  href={`/matches/${m.id}`}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-colors"
                >
                  <div className="text-xs text-gray-500 mb-2">{formatDate(m.kickoffUtc, { month: "short", day: "numeric" })}</div>
                  <div className="text-sm text-gray-300">TBD vs TBD</div>
                  <div className="text-xs text-gray-600 mt-1">Match #{m.matchNumber}</div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

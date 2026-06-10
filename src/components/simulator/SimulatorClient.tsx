"use client";

import { useState, useCallback } from "react";
import { runSimulation } from "@/lib/simulation";
import type { SimulationResult } from "@/data/types";
import { teams } from "@/data/tournament-data";
import { pct } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import ModelBanner from "@/components/ui/ModelBanner";

export default function SimulatorClient() {
  const [results, setResults] = useState<SimulationResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [simCount, setSimCount] = useState(5000);

  const runSim = useCallback(async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 50));
    const res = runSimulation(simCount);
    const sorted = res.sort((a, b) => b.champion - a.champion);
    setResults(sorted);
    setLoading(false);
  }, [simCount]);

  const topTeams = results?.slice(0, 24) ?? [];

  return (
    <div className="space-y-6">
      <ModelBanner />

      <div className="bg-surface border border-white/10 rounded-lg p-4">
        <h2 className="text-white font-semibold mb-4">Simulation Settings</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Simulations</label>
            <select
              value={simCount}
              onChange={e => setSimCount(Number(e.target.value))}
              className="bg-black/30 border border-white/20 rounded px-3 py-1.5 text-sm text-white"
            >
              <option value={1000}>1,000 (Fast)</option>
              <option value={5000}>5,000 (Balanced)</option>
              <option value={10000}>10,000 (Accurate)</option>
            </select>
          </div>
          <button
            onClick={runSim}
            disabled={loading}
            className="mt-4 flex items-center gap-2 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white font-medium px-6 py-2 rounded transition-colors"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Simulating..." : "Run Simulation"}
          </button>
        </div>
      </div>

      {results && (
        <div className="bg-surface border border-white/10 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-white font-semibold">Tournament Win Probabilities</h2>
            <p className="text-xs text-gray-500 mt-1">Based on {simCount.toLocaleString()} Monte Carlo simulations</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs text-gray-500">
                  <th className="text-left py-2 px-4">Team</th>
                  <th className="text-center py-2 px-3">R32</th>
                  <th className="text-center py-2 px-3">R16</th>
                  <th className="text-center py-2 px-3">QF</th>
                  <th className="text-center py-2 px-3">SF</th>
                  <th className="text-center py-2 px-3">Final</th>
                  <th className="text-center py-2 px-3 text-gold">🏆 Win</th>
                </tr>
              </thead>
              <tbody>
                {topTeams.map(r => {
                  const team = teams.find(t => t.id === r.teamId);
                  return (
                    <tr key={r.teamId} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <span>{team?.flagEmoji}</span>
                          <span className="text-white font-medium">{team?.shortName}</span>
                          <span className="text-xs text-gray-600">Group {team?.group}</span>
                        </div>
                      </td>
                      <td className="text-center py-2 px-3 text-gray-400">{pct(r.roundOf32, 0)}</td>
                      <td className="text-center py-2 px-3 text-gray-400">{pct(r.roundOf16, 0)}</td>
                      <td className="text-center py-2 px-3 text-gray-400">{pct(r.quarterFinal, 0)}</td>
                      <td className="text-center py-2 px-3 text-gray-400">{pct(r.semiFinal, 0)}</td>
                      <td className="text-center py-2 px-3 text-gray-300">{pct(r.final, 0)}</td>
                      <td className="text-center py-2 px-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white/10 rounded-full h-1.5 max-w-[60px]">
                            <div className="bg-gold h-1.5 rounded-full" style={{ width: `${Math.min(r.champion * 100 * 3, 100)}%` }} />
                          </div>
                          <span className="text-gold font-semibold text-xs min-w-[36px]">{pct(r.champion, 1)}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!results && !loading && (
        <div className="text-center py-16 text-gray-600">
          <div className="text-4xl mb-4">⚽</div>
          <p>Click "Run Simulation" to compute tournament win probabilities</p>
        </div>
      )}
    </div>
  );
}

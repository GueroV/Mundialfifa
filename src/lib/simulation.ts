"use client";

import { teams, getTeamById, groups, groupMatches, computeProbabilities } from "@/data/tournament-data";
import type { SimulationResult } from "@/data/types";

export function runSimulation(simCount = 5000): SimulationResult[] {
  const results: Record<string, SimulationResult> = {};
  teams.forEach(t => {
    results[t.id] = { teamId: t.id, roundOf32: 0, roundOf16: 0, quarterFinal: 0, semiFinal: 0, thirdPlace: 0, final: 0, champion: 0 };
  });

  function simulateMatch(homeId: string, awayId: string): string {
    const home = getTeamById(homeId);
    const away = getTeamById(awayId);
    if (!home || !away) return homeId;
    const probs = computeProbabilities(home, away, true);
    const r = Math.random();
    if (r < probs.homeWin) return homeId;
    if (r < probs.homeWin + probs.draw) return Math.random() < 0.5 ? homeId : awayId;
    return awayId;
  }

  for (let sim = 0; sim < simCount; sim++) {
    const groupPoints: Record<string, number> = {};
    const groupGF: Record<string, number> = {};
    const groupGA: Record<string, number> = {};
    teams.forEach(t => { groupPoints[t.id] = 0; groupGF[t.id] = 0; groupGA[t.id] = 0; });

    groupMatches.forEach(match => {
      const home = getTeamById(match.homeTeamId);
      const away = getTeamById(match.awayTeamId);
      if (!home || !away) return;
      const probs = computeProbabilities(home, away);
      const hg = Math.max(0, Math.round(probs.homeXG + (Math.random() - 0.5) * 1.5));
      const ag = Math.max(0, Math.round(probs.awayXG + (Math.random() - 0.5) * 1.5));
      groupGF[home.id] += hg; groupGA[home.id] += ag;
      groupGF[away.id] += ag; groupGA[away.id] += hg;
      if (hg > ag) groupPoints[home.id] += 3;
      else if (hg === ag) { groupPoints[home.id]++; groupPoints[away.id]++; }
      else groupPoints[away.id] += 3;
    });

    const r32Teams: string[] = [];
    const thirdPlace: { id: string; pts: number; gd: number; gf: number }[] = [];

    groups.forEach(group => {
      const gTeams = teams.filter(t => t.group === group);
      const sorted = [...gTeams].sort((a, b) => {
        const pd = groupPoints[b.id] - groupPoints[a.id];
        if (pd !== 0) return pd;
        const gdA = groupGF[a.id] - groupGA[a.id];
        const gdB = groupGF[b.id] - groupGA[b.id];
        if (gdB !== gdA) return gdB - gdA;
        return groupGF[b.id] - groupGF[a.id];
      });
      r32Teams.push(sorted[0].id, sorted[1].id);
      results[sorted[0].id].roundOf32++;
      results[sorted[1].id].roundOf32++;
      thirdPlace.push({ id: sorted[2].id, pts: groupPoints[sorted[2].id], gd: groupGF[sorted[2].id] - groupGA[sorted[2].id], gf: groupGF[sorted[2].id] });
    });

    const best8 = [...thirdPlace].sort((a, b) => b.pts !== a.pts ? b.pts - a.pts : b.gd !== a.gd ? b.gd - a.gd : b.gf - a.gf).slice(0, 8).map(t => t.id);
    best8.forEach(id => { r32Teams.push(id); results[id].roundOf32++; });

    const bracket32 = r32Teams.slice(0, 32);
    // Shuffle
    for (let i = bracket32.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bracket32[i], bracket32[j]] = [bracket32[j], bracket32[i]];
    }

    function playRound(ids: string[], key: keyof SimulationResult): string[] {
      const winners: string[] = [];
      for (let i = 0; i < ids.length; i += 2) {
        const w = simulateMatch(ids[i], ids[i + 1]);
        results[w][key]++;
        winners.push(w);
      }
      return winners;
    }

    const r16 = playRound(bracket32, "roundOf16");
    const qf = playRound(r16, "quarterFinal");
    const sf = playRound(qf, "semiFinal");

    // Semi-final losers
    const sfLosers = qf.filter(id => !sf.includes(id));
    if (sfLosers.length >= 2) {
      const tp = simulateMatch(sfLosers[0], sfLosers[1]);
      results[tp].thirdPlace++;
    }

    if (sf.length >= 2) {
      results[sf[0]].final++;
      results[sf[1]].final++;
      const champ = simulateMatch(sf[0], sf[1]);
      results[champ].champion++;
    }
  }

  return teams.map(t => ({
    teamId: t.id,
    roundOf32: results[t.id].roundOf32 / simCount,
    roundOf16: results[t.id].roundOf16 / simCount,
    quarterFinal: results[t.id].quarterFinal / simCount,
    semiFinal: results[t.id].semiFinal / simCount,
    thirdPlace: results[t.id].thirdPlace / simCount,
    final: results[t.id].final / simCount,
    champion: results[t.id].champion / simCount,
  }));
}

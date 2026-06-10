import Link from "next/link";
import { tournament, teams, groups, groupMatches, probabilitySnapshots, venues } from "@/data/tournament-data";
import DemoBanner from "@/components/ui/DemoBanner";
import MatchCard from "@/components/match/MatchCard";
import { formatDate, stageName } from "@/lib/utils";
import { Calendar, Users, MapPin, BarChart2, Trophy, ArrowRight } from "lucide-react";

export default function HomePage() {
  const upcomingMatches = groupMatches.slice(0, 6);
  const groupNames = groups;

  // Confederation breakdown
  const confCounts = teams.reduce((acc, t) => {
    acc[t.confederation] = (acc[t.confederation] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <DemoBanner />

      {/* Hero */}
      <div className="bg-surface border border-white/10 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">⚽</span>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{tournament.name}</h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              {formatDate(tournament.startDate)} – {formatDate(tournament.endDate)} · {tournament.hostCountries.join(", ")}
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="bg-accent/20 border border-accent/30 rounded-lg px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-accent">{tournament.totalTeams}</div>
              <div className="text-xs text-gray-400">Teams</div>
            </div>
            <div className="bg-gold/20 border border-gold/30 rounded-lg px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-gold">{tournament.totalMatches}</div>
              <div className="text-xs text-gray-400">Matches</div>
            </div>
            <div className="bg-blue-900/30 border border-blue-600/30 rounded-lg px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-blue-300">{tournament.groups}</div>
              <div className="text-xs text-gray-400">Groups</div>
            </div>
            <div className="bg-purple-900/30 border border-purple-600/30 rounded-lg px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-purple-300">{venues.length}</div>
              <div className="text-xs text-gray-400">Venues</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { href: "/groups", icon: BarChart2, label: "Groups & Standings", desc: "12 groups, 4 teams each" },
          { href: "/matches", icon: Calendar, label: "Fixtures", desc: "All 104 matches" },
          { href: "/teams", icon: Users, label: "Teams", desc: "48 nations" },
          { href: "/simulator", icon: Trophy, label: "Simulator", desc: "Monte Carlo predictions" },
        ].map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-surface border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors flex flex-col gap-2"
          >
            <item.icon className="h-5 w-5 text-accent" />
            <div className="font-medium text-white text-sm">{item.label}</div>
            <div className="text-xs text-gray-500">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* Tournament Format */}
      <div className="bg-surface border border-white/10 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
          <Trophy className="h-4 w-4 text-gold" />
          Tournament Format
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { stage: "Group Stage", teams: "48 teams", matches: "72 matches", desc: "12 groups of 4" },
            { stage: "Round of 32", teams: "32 teams", matches: "16 matches", desc: "Top 2 + best 8 thirds" },
            { stage: "Round of 16", teams: "16 teams", matches: "8 matches", desc: "Single elimination" },
            { stage: "QF → Final", teams: "8 → 2", matches: "7 matches", desc: "QF, SF, 3rd place, Final" },
          ].map(item => (
            <div key={item.stage} className="bg-white/5 rounded-lg p-3">
              <div className="text-white font-medium text-xs">{item.stage}</div>
              <div className="text-accent text-sm font-semibold mt-1">{item.teams}</div>
              <div className="text-gray-500 text-xs">{item.matches}</div>
              <div className="text-gray-600 text-xs mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Upcoming Matches */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              Opening Fixtures
            </h2>
            <Link href="/matches" className="text-xs text-accent flex items-center gap-1 hover:underline">
              All matches <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-2">
            {upcomingMatches.map(m => (
              <MatchCard
                key={m.id}
                match={m}
                probability={probabilitySnapshots.find(p => p.matchId === m.id)}
                compact
              />
            ))}
          </div>
        </div>

        {/* Groups Overview */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-accent" />
              Groups
            </h2>
            <Link href="/groups" className="text-xs text-accent flex items-center gap-1 hover:underline">
              All groups <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {groupNames.map(g => {
              const gTeams = teams.filter(t => t.group === g);
              return (
                <Link
                  key={g}
                  href={`/groups/${g}`}
                  className="bg-surface border border-white/10 rounded-lg p-2 hover:border-white/20 transition-colors"
                >
                  <div className="text-xs text-gray-500 mb-1.5 font-medium">Group {g}</div>
                  <div className="space-y-1">
                    {gTeams.map(t => (
                      <div key={t.id} className="flex items-center gap-1.5 text-xs">
                        <span className="text-sm">{t.flagEmoji}</span>
                        <span className="text-gray-300 truncate">{t.shortName}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Confederation breakdown */}
      <div className="bg-surface border border-white/10 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          Qualified Teams by Confederation
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(confCounts).map(([conf, count]) => (
            <div key={conf} className="text-center bg-white/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-white">{count}</div>
              <div className="text-xs text-gray-400 mt-1">{conf}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hosts */}
      <div className="bg-surface border border-white/10 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4">Host Countries & Venues</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { country: "🇺🇸 United States", venues: venues.filter(v => v.country === "USA").length, desc: "11 venues across the country" },
            { country: "🇨🇦 Canada", venues: venues.filter(v => v.country === "Canada").length, desc: "Toronto & Vancouver" },
            { country: "🇲🇽 Mexico", venues: venues.filter(v => v.country === "Mexico").length, desc: "Mexico City, Guadalajara & Monterrey" },
          ].map(h => (
            <div key={h.country} className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-medium">{h.country}</div>
              <div className="text-3xl font-bold text-accent mt-2">{h.venues}</div>
              <div className="text-xs text-gray-500 mt-1">venues · {h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

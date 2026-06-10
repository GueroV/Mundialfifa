import DataBanner from "@/components/ui/DemoBanner";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { teams, venues, allMatches, tournament } from "@/data/tournament-data";

type StatusType = "demo" | "verified" | "unavailable";

function StatusBadge({ status }: { status: StatusType }) {
  if (status === "verified") return (
    <span className="flex items-center gap-1 text-green-400 text-xs">
      <CheckCircle className="h-3.5 w-3.5" /> Verified
    </span>
  );
  if (status === "demo") return (
    <span className="flex items-center gap-1 text-yellow-400 text-xs">
      <AlertCircle className="h-3.5 w-3.5" /> Demo/Estimated
    </span>
  );
  return (
    <span className="flex items-center gap-1 text-red-400 text-xs">
      <XCircle className="h-3.5 w-3.5" /> Not Available
    </span>
  );
}

const dataItems: { category: string; item: string; status: StatusType; notes: string }[] = [
  { category: "Tournament", item: "Tournament name, dates, host countries", status: "verified", notes: "FIFA World Cup 2026, June 11 – July 19" },
  { category: "Tournament", item: "Total teams (48)", status: "verified", notes: "Expanded format confirmed by FIFA" },
  { category: "Tournament", item: "Total matches (104)", status: "verified", notes: "72 group + 32 knockout" },
  { category: "Tournament", item: "Format (12 groups of 4)", status: "verified", notes: "Official FIFA format" },
  { category: "Teams", item: "Qualified nation list", status: "demo", notes: "Based on publicly available qualification results as of knowledge cutoff. Requires official FIFA verification." },
  { category: "Teams", item: "Group assignments", status: "demo", notes: "Estimated based on reported draw. Verify against official FIFA draw results." },
  { category: "Teams", item: "FIFA rankings", status: "demo", notes: "Approximate values — rankings change monthly" },
  { category: "Teams", item: "Elo ratings", status: "demo", notes: "Estimated for model purposes, not official FIFA ratings" },
  { category: "Teams", item: "Star players / managers", status: "demo", notes: "Current at knowledge cutoff, subject to change" },
  { category: "Venues", item: "16 official venues", status: "verified", notes: "USA (11), Canada (2), Mexico (3) as confirmed by FIFA" },
  { category: "Venues", item: "Venue capacities", status: "demo", notes: "Approximate values from public sources" },
  { category: "Matches", item: "Group stage schedule (72 matches)", status: "demo", notes: "Estimated dates — official schedule not yet finalized at data creation" },
  { category: "Matches", item: "Knockout stage matches", status: "demo", notes: "Teams TBD, dates estimated" },
  { category: "Model", item: "Win probabilities", status: "demo", notes: "Computed from estimated Elo ratings using Poisson+DC model" },
  { category: "Model", item: "xG values", status: "demo", notes: "Model output, not measured xG" },
  { category: "Model", item: "Corners prediction", status: "unavailable", notes: "Requires event-level data not available in demo" },
  { category: "Model", item: "Live scores", status: "unavailable", notes: "Static demo — no live data feed" },
  { category: "Model", item: "Historical match results", status: "unavailable", notes: "Not included in demo dataset" },
];

const categories = [...new Set(dataItems.map(d => d.category))];

export default function DataStatusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <DataBanner />

      <h1 className="text-2xl font-bold text-white">Data Status</h1>
      <p className="text-gray-400 text-sm">
        Transparency report on the data used in this dashboard. The WC2026 Analytics Dashboard uses a mix of
        verified facts and estimated demo data.
      </p>

      <div className="flex items-center gap-6 text-xs text-gray-400 bg-surface border border-white/10 rounded-lg p-4">
        <span className="flex items-center gap-1 text-green-400"><CheckCircle className="h-4 w-4" /> Verified — confirmed fact</span>
        <span className="flex items-center gap-1 text-yellow-400"><AlertCircle className="h-4 w-4" /> Demo/Estimated — approximate, needs verification</span>
        <span className="flex items-center gap-1 text-red-400"><XCircle className="h-4 w-4" /> Not Available — feature not implemented</span>
      </div>

      {categories.map(cat => (
        <div key={cat} className="bg-surface border border-white/10 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-white font-semibold">{cat}</h2>
          </div>
          <div className="divide-y divide-white/5">
            {dataItems.filter(d => d.category === cat).map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="flex-1">
                  <div className="text-sm text-white">{item.item}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.notes}</div>
                </div>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-surface border border-white/10 rounded-xl p-6 text-sm text-gray-400 space-y-2">
        <h2 className="text-white font-semibold">Data Sources</h2>
        <ul className="space-y-1 list-disc pl-4 text-xs">
          <li>FIFA official website (fifa.com) — tournament format, venues, official draw</li>
          <li>Public qualification results from confederation competitions</li>
          <li>Historical Elo ratings from eloratings.net methodology</li>
          <li>Academic: Dixon & Coles (1997) — "Modelling Association Football Scores and Inefficiencies in the Football Betting Market"</li>
        </ul>
        <p className="text-xs mt-3 text-gray-600">
          This dashboard is not affiliated with FIFA. All data should be verified against official FIFA sources before use.
        </p>
      </div>

      <div className="bg-surface border border-white/10 rounded-xl p-4 text-xs text-gray-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><span className="text-gray-400">Total Teams:</span> {teams.length}</div>
          <div><span className="text-gray-400">Total Matches:</span> {allMatches.length}</div>
          <div><span className="text-gray-400">Venues:</span> {venues.length}</div>
          <div><span className="text-gray-400">Tournament Start:</span> {tournament.startDate.slice(0,10)}</div>
        </div>
      </div>
    </div>
  );
}

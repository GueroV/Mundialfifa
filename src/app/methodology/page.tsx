import DataBanner from "@/components/ui/DemoBanner";
import ModelBanner from "@/components/ui/ModelBanner";

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <DataBanner />
      <ModelBanner />

      <h1 className="text-2xl font-bold text-white">Methodology</h1>
      <p className="text-gray-400 text-sm">
        How the WC2026 Analytics Dashboard computes match probabilities and tournament simulations.
      </p>

      <div className="space-y-6">
        <Section title="1. Team Ratings — Elo System">
          <p>Each team is assigned an Elo rating based on historical FIFA World Cup and qualification performance. The Elo system, originally developed for chess, provides a consistent method for rating team strength across confederations.</p>
          <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Ratings range approximately 1200 (weakest) to 1850+ (strongest)</li>
            <li>For this demo, ratings are estimated based on FIFA rankings, recent results, and historical World Cup performance</li>
            <li>Ratings are converted to attack/defense strength parameters (normalized 0–2 scale)</li>
          </ul>
        </Section>

        <Section title="2. Match Probabilities — Poisson Model">
          <p>Match outcome probabilities use an independent Poisson goals model:</p>
          <div className="bg-black/30 border border-white/10 rounded p-3 font-mono text-sm mt-2 space-y-1">
            <div>λ_home = base_rate × attack_home / defense_away × home_advantage</div>
            <div>λ_away = base_rate × attack_away / defense_home</div>
          </div>
          <ul className="list-disc pl-4 space-y-1 mt-3">
            <li><strong className="text-white">base_rate</strong>: 1.35 goals per match (global average)</li>
            <li><strong className="text-white">home_advantage</strong>: 1.08× multiplier (not applied at neutral venues)</li>
            <li>λ represents expected goals (xG) for each team</li>
            <li>P(home wins) = Σ P(home goals = i) × P(away goals = j) for all i &gt; j</li>
          </ul>
        </Section>

        <Section title="3. Dixon-Coles Adjustment">
          <p>
            The Dixon-Coles (1997) correction adjusts the independence assumption of the basic Poisson model
            for low-scoring scorelines (0-0, 1-0, 0-1, 1-1) which are systematically over/under-predicted.
          </p>
          <div className="bg-black/30 border border-white/10 rounded p-3 font-mono text-sm mt-2 space-y-1">
            <div>ρ = -0.13 (correlation parameter)</div>
            <div>τ(0,0) = 1 − λ_h × λ_a × ρ</div>
            <div>τ(1,0) = 1 + λ_a × ρ</div>
            <div>τ(0,1) = 1 + λ_h × ρ</div>
            <div>τ(1,1) = 1 − ρ</div>
          </div>
        </Section>

        <Section title="4. Monte Carlo Tournament Simulation">
          <p>
            Tournament outcomes are simulated using Monte Carlo methods. Each simulation:
          </p>
          <ol className="list-decimal pl-4 space-y-1 mt-2">
            <li>Plays out all 72 group stage matches using the Poisson model</li>
            <li>Determines group standings (points, GD, GF tiebreakers)</li>
            <li>Selects top 2 from each group + best 8 third-place teams</li>
            <li>Simulates knockout rounds (draws resolved by coin flip in the model)</li>
            <li>Records round reached for each team</li>
          </ol>
          <p className="mt-2">Running multiple simulations provides probability distributions for each stage. Default: 5,000 simulations (configurable up to 10,000).</p>
        </Section>

        <Section title="5. Corners Model">
          <div className="bg-yellow-900/30 border border-yellow-600/40 rounded p-3 text-yellow-200 text-sm">
            ⚠️ Corners/set-piece prediction is not available in this version. Corners data requires detailed match-level event data which is not included in this demo dataset.
          </div>
        </Section>

        <Section title="6. Limitations & Caveats">
          <ul className="list-disc pl-4 space-y-1">
            <li>Team ratings are estimated, not calibrated on historical data</li>
            <li>Injuries, suspensions, weather, and tactical matchups are not modeled</li>
            <li>The model assumes team quality is stable throughout the tournament</li>
            <li>Knockout stage bracket seeding is randomized in simulations (actual draw TBD)</li>
            <li>All probabilities are point-in-time estimates based on demo data</li>
          </ul>
        </Section>

        <Section title="Model Version">
          <div className="bg-white/5 rounded p-3 font-mono text-xs space-y-1">
            <div>Version: v1.0-poisson-dc</div>
            <div>Base rate: 1.35 goals/match</div>
            <div>Home advantage: 1.08×</div>
            <div>DC rho: -0.13</div>
            <div>Max goals computed: 7</div>
            <div>Monte Carlo default: 5,000 simulations</div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-6">
      <h2 className="text-white font-semibold mb-3">{title}</h2>
      <div className="text-gray-400 text-sm space-y-2">{children}</div>
    </div>
  );
}

import DemoBanner from "@/components/ui/DemoBanner";
import SimulatorClient from "@/components/simulator/SimulatorClient";

export default function SimulatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <DemoBanner />
      <div>
        <h1 className="text-2xl font-bold text-white">Tournament Simulator</h1>
        <p className="text-gray-400 text-sm mt-1">
          Monte Carlo simulation using Poisson goal model with Dixon-Coles adjustment.
          Results update each run due to randomness.
        </p>
      </div>
      <SimulatorClient />
    </div>
  );
}

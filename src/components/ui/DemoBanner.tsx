import { CheckCircle } from "lucide-react";

export default function DataBanner() {
  return (
    <div className="bg-green-900/30 border border-green-600/40 rounded-lg px-4 py-3 flex items-start gap-3 text-sm text-green-200">
      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-green-400" />
      <span>
        <strong className="text-green-400">Official Data</strong> — Groups and schedule reflect the official FIFA World Cup 2026 draw (December 5, 2025).
        Match schedule sourced from FIFA.com and verified against ESPN, NBC Sports, and Sky Sports.
        Probabilities are model estimates — see{" "}
        <a href="/methodology" className="underline hover:text-green-100">methodology</a> for details.
      </span>
    </div>
  );
}

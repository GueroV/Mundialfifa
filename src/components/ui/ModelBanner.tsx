import { Info } from "lucide-react";

export default function ModelBanner() {
  return (
    <div className="bg-blue-900/30 border border-blue-600/40 rounded-lg px-4 py-3 flex items-start gap-3 text-sm text-blue-200">
      <Info className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" />
      <span>
        <strong className="text-blue-400">Model Estimate</strong> — Not affiliated with FIFA. Probabilities are statistical estimates only, not predictions or betting advice.
      </span>
    </div>
  );
}

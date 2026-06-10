import { AlertTriangle } from "lucide-react";

export default function DemoBanner() {
  return (
    <div className="bg-yellow-900/40 border border-yellow-600/50 rounded-lg px-4 py-3 flex items-start gap-3 text-sm text-yellow-200">
      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-yellow-400" />
      <span>
        <strong className="text-yellow-400">Demo Data</strong> — This application uses estimated/demo data.
        Official 2026 World Cup data will be integrated when available. Group assignments and fixtures require official FIFA verification.
      </span>
    </div>
  );
}

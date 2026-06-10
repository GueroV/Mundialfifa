// Maps FIFA 3-letter codes to ISO 3166-1 alpha-2 codes used by flag-icons
const FIFA_TO_ISO: Record<string, string> = {
  // Group A
  MEX: "mx", RSA: "za", KOR: "kr", CZE: "cz",
  // Group B
  CAN: "ca", BIH: "ba", QAT: "qa", SUI: "ch",
  // Group C
  BRA: "br", MAR: "ma", HAI: "ht", SCO: "gb-sct",
  // Group D
  USA: "us", PAR: "py", AUS: "au", TUR: "tr",
  // Group E
  GER: "de", CUW: "cw", CIV: "ci", ECU: "ec",
  // Group F
  NED: "nl", JPN: "jp", SWE: "se", TUN: "tn",
  // Group G
  BEL: "be", EGY: "eg", IRN: "ir", NZL: "nz",
  // Group H
  ESP: "es", CPV: "cv", KSA: "sa", URU: "uy",
  // Group I
  FRA: "fr", SEN: "sn", IRQ: "iq", NOR: "no",
  // Group J
  ARG: "ar", DZA: "dz", AUT: "at", JOR: "jo",
  // Group K
  POR: "pt", COD: "cd", UZB: "uz", COL: "co",
  // Group L
  ENG: "gb-eng", CRO: "hr", GHA: "gh", PAN: "pa",
};

interface FlagIconProps {
  code: string;         // FIFA 3-letter code (e.g. "BRA") or team id (e.g. "bra")
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  rounded?: boolean;
}

const SIZE_CLASSES = {
  sm:  "w-5 h-4",
  md:  "w-7 h-5",
  lg:  "w-9 h-6",
  xl:  "w-12 h-9",
};

export default function FlagIcon({ code, size = "md", className = "", rounded = true }: FlagIconProps) {
  const upper = code.toUpperCase();
  const iso = FIFA_TO_ISO[upper];

  if (!iso) {
    // Fallback: show a neutral placeholder
    return (
      <span
        className={`inline-block bg-gray-700 border border-white/10 ${SIZE_CLASSES[size]} ${rounded ? "rounded-sm" : ""} ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={`fi fi-${iso} ${SIZE_CLASSES[size]} inline-block ${rounded ? "rounded-sm" : ""} ${className}`}
      style={{ backgroundSize: "cover" }}
      role="img"
      aria-label={`Flag of ${upper}`}
    />
  );
}

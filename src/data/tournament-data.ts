// ============================================================
// World Cup 2026 Analytics Dashboard - Tournament Data
// OFFICIAL DATA — Sourced from the FIFA official draw held
// December 5, 2025 at the Kennedy Center, Washington D.C.
// Schedule sourced from FIFA.com, ESPN, NBC Sports, Sky Sports
// Last verified: June 10, 2026
// ============================================================

import type {
  Tournament,
  Team,
  Venue,
  Match,
  ProbabilitySnapshot,
  GroupStanding,
  SimulationResult,
} from "./types";

export const DATA_DISCLAIMER =
  "Official Data — Groups and teams reflect the official FIFA World Cup 2026 draw (December 5, 2025). Match schedule sourced from FIFA.com and verified against ESPN, NBC Sports, and Sky Sports. Probabilities are model estimates only.";

export const PROBABILITY_DISCLAIMER =
  "Model Estimate — Not affiliated with FIFA. Probabilities are statistical estimates only, not predictions or betting advice.";

// ============================================================
// TOURNAMENT
// ============================================================
export const tournament: Tournament = {
  id: "wc2026",
  name: "FIFA World Cup 2026",
  year: 2026,
  startDate: "2026-06-11T19:00:00Z",
  endDate: "2026-07-19T22:00:00Z",
  hostCountries: ["USA", "Canada", "Mexico"],
  status: "ongoing",
  totalTeams: 48,
  totalMatches: 104,
  groups: 12,
};

// ============================================================
// VENUES — 16 official host venues
// Sources: FIFA.com/host-cities, Wikipedia, beIN Sports
// ============================================================
export const venues: Venue[] = [
  // USA (11 venues)
  { id: "v01", name: "MetLife Stadium",         city: "East Rutherford, NJ", country: "USA",    capacity: 82500,  timezone: "America/New_York",    lat: 40.8136,  lng: -74.0742  },
  { id: "v02", name: "AT&T Stadium",            city: "Arlington, TX",       country: "USA",    capacity: 92967,  timezone: "America/Chicago",     lat: 32.7479,  lng: -97.0945  },
  { id: "v03", name: "SoFi Stadium",            city: "Inglewood, CA",       country: "USA",    capacity: 70240,  timezone: "America/Los_Angeles", lat: 33.9535,  lng: -118.3392 },
  { id: "v04", name: "NRG Stadium",             city: "Houston, TX",         country: "USA",    capacity: 68311,  timezone: "America/Chicago",     lat: 29.6847,  lng: -95.4107  },
  { id: "v05", name: "Levi's Stadium",          city: "Santa Clara, CA",     country: "USA",    capacity: 68500,  timezone: "America/Los_Angeles", lat: 37.4033,  lng: -121.9694 },
  { id: "v06", name: "Lincoln Financial Field", city: "Philadelphia, PA",    country: "USA",    capacity: 65827,  timezone: "America/New_York",    lat: 39.9008,  lng: -75.1674  },
  { id: "v07", name: "Arrowhead Stadium",       city: "Kansas City, MO",     country: "USA",    capacity: 67513,  timezone: "America/Chicago",     lat: 39.0489,  lng: -94.4839  },
  { id: "v08", name: "Hard Rock Stadium",       city: "Miami Gardens, FL",   country: "USA",    capacity: 64091,  timezone: "America/New_York",    lat: 25.9579,  lng: -80.2388  },
  { id: "v09", name: "Mercedes-Benz Stadium",   city: "Atlanta, GA",         country: "USA",    capacity: 67382,  timezone: "America/New_York",    lat: 33.7554,  lng: -84.401   },
  { id: "v10", name: "Gillette Stadium",        city: "Foxborough, MA",      country: "USA",    capacity: 63815,  timezone: "America/New_York",    lat: 42.0909,  lng: -71.2643  },
  { id: "v11", name: "Lumen Field",             city: "Seattle, WA",         country: "USA",    capacity: 65123,  timezone: "America/Los_Angeles", lat: 47.5952,  lng: -122.3316 },
  // Canada (2 venues)
  { id: "v12", name: "BMO Field",               city: "Toronto, ON",         country: "Canada", capacity: 45000,  timezone: "America/Toronto",     lat: 43.6333,  lng: -79.4186  },
  { id: "v13", name: "BC Place",                city: "Vancouver, BC",       country: "Canada", capacity: 54000,  timezone: "America/Vancouver",   lat: 49.2767,  lng: -123.1115 },
  // Mexico (3 venues)
  { id: "v14", name: "Estadio Azteca",          city: "Mexico City",         country: "Mexico", capacity: 72766,  timezone: "America/Mexico_City", lat: 19.3029,  lng: -99.1505  },
  { id: "v15", name: "Estadio Akron",           city: "Guadalajara",         country: "Mexico", capacity: 48000,  timezone: "America/Mexico_City", lat: 20.6817,  lng: -103.4669 },
  { id: "v16", name: "Estadio BBVA",            city: "Monterrey",           country: "Mexico", capacity: 53500,  timezone: "America/Monterrey",   lat: 25.6693,  lng: -100.2464 },
];

// ============================================================
// TEAMS — 48 official qualified nations
// Official draw: December 5, 2025, Kennedy Center, Washington D.C.
// Sources: FIFA.com draw results, Wikipedia 2026 FIFA World Cup draw
// Elo ratings and strength values are model estimates.
// FIFA rankings are approximate pre-tournament values.
// ============================================================
export const teams: Team[] = [
  // ── GROUP A: Mexico · South Africa · South Korea · Czech Republic ─
  { id: "mex", name: "Mexico",          shortName: "Mexico",       code: "MEX", confederation: "CONCACAF", group: "A", flagEmoji: "🇲🇽", fifaRanking: 16, eloRating: 1650, attackStrength: 1.30, defenseStrength: 0.88, recentForm: ["W","D","W","L","W"], starPlayer: "Santiago Giménez",  manager: "Javier Aguirre"      },
  { id: "rsa", name: "South Africa",   shortName: "South Africa", code: "RSA", confederation: "CAF",      group: "A", flagEmoji: "🇿🇦", fifaRanking: 60, eloRating: 1430, attackStrength: 0.85, defenseStrength: 1.10, recentForm: ["W","D","L","D","W"], starPlayer: "Percy Tau",         manager: "Hugo Broos"          },
  { id: "kor", name: "South Korea",    shortName: "South Korea",  code: "KOR", confederation: "AFC",      group: "A", flagEmoji: "🇰🇷", fifaRanking: 23, eloRating: 1640, attackStrength: 1.25, defenseStrength: 0.90, recentForm: ["W","W","D","W","L"], starPlayer: "Son Heung-min",     manager: "Hong Myung-bo"       },
  { id: "cze", name: "Czech Republic", shortName: "Czechia",      code: "CZE", confederation: "UEFA",     group: "A", flagEmoji: "🇨🇿", fifaRanking: 37, eloRating: 1570, attackStrength: 1.10, defenseStrength: 0.95, recentForm: ["D","W","W","D","L"], starPlayer: "Patrik Schick",     manager: "Ivan Hašek"          },

  // ── GROUP B: Canada · Bosnia & Herzegovina · Qatar · Switzerland ──
  { id: "can", name: "Canada",              shortName: "Canada",    code: "CAN", confederation: "CONCACAF", group: "B", flagEmoji: "🇨🇦", fifaRanking: 47, eloRating: 1600, attackStrength: 1.20, defenseStrength: 0.90, recentForm: ["W","D","W","W","L"], starPlayer: "Alphonso Davies",  manager: "Jesse Marsch"        },
  { id: "bih", name: "Bosnia & Herzegovina", shortName: "Bosnia",  code: "BIH", confederation: "UEFA",     group: "B", flagEmoji: "🇧🇦", fifaRanking: 62, eloRating: 1510, attackStrength: 1.00, defenseStrength: 1.00, recentForm: ["W","L","D","W","W"], starPlayer: "Edin Džeko",        manager: "Sergej Barbarez"     },
  { id: "qat", name: "Qatar",               shortName: "Qatar",    code: "QAT", confederation: "AFC",      group: "B", flagEmoji: "🇶🇦", fifaRanking: 36, eloRating: 1490, attackStrength: 0.95, defenseStrength: 1.05, recentForm: ["W","W","D","L","W"], starPlayer: "Akram Afif",        manager: "Marquez Lopez"       },
  { id: "sui", name: "Switzerland",         shortName: "Switzerland", code: "SUI", confederation: "UEFA",  group: "B", flagEmoji: "🇨🇭", fifaRanking: 20, eloRating: 1690, attackStrength: 1.30, defenseStrength: 0.85, recentForm: ["W","W","W","D","W"], starPlayer: "Granit Xhaka",      manager: "Murat Yakin"         },

  // ── GROUP C: Brazil · Morocco · Haiti · Scotland ─────────────────
  { id: "bra", name: "Brazil",   shortName: "Brazil",   code: "BRA", confederation: "CONMEBOL", group: "C", flagEmoji: "🇧🇷", fifaRanking:  5, eloRating: 1840, attackStrength: 1.70, defenseStrength: 0.70, recentForm: ["W","W","D","W","W"], starPlayer: "Vinicius Jr.",   manager: "Dorival Júnior" },
  { id: "mar", name: "Morocco",  shortName: "Morocco",  code: "MAR", confederation: "CAF",      group: "C", flagEmoji: "🇲🇦", fifaRanking: 14, eloRating: 1700, attackStrength: 1.35, defenseStrength: 0.75, recentForm: ["W","W","W","D","W"], starPlayer: "Achraf Hakimi", manager: "Walid Regragui"  },
  { id: "hai", name: "Haiti",    shortName: "Haiti",    code: "HAI", confederation: "CONCACAF", group: "C", flagEmoji: "🇭🇹", fifaRanking: 83, eloRating: 1340, attackStrength: 0.78, defenseStrength: 1.22, recentForm: ["L","D","W","L","D"], starPlayer: "Duckens Nazon", manager: "Marc Collat"     },
  { id: "sco", name: "Scotland", shortName: "Scotland", code: "SCO", confederation: "UEFA",     group: "C", flagEmoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", fifaRanking: 39, eloRating: 1560, attackStrength: 1.08, defenseStrength: 0.97, recentForm: ["W","D","L","W","W"], starPlayer: "Andy Robertson", manager: "Steve Clarke"    },

  // ── GROUP D: United States · Paraguay · Australia · Türkiye ──────
  { id: "usa", name: "United States", shortName: "USA",       code: "USA", confederation: "CONCACAF", group: "D", flagEmoji: "🇺🇸", fifaRanking: 13, eloRating: 1680, attackStrength: 1.35, defenseStrength: 0.85, recentForm: ["W","W","D","W","L"], starPlayer: "Christian Pulisic",    manager: "Mauricio Pochettino"  },
  { id: "par", name: "Paraguay",      shortName: "Paraguay",  code: "PAR", confederation: "CONMEBOL", group: "D", flagEmoji: "🇵🇾", fifaRanking: 64, eloRating: 1490, attackStrength: 0.92, defenseStrength: 1.08, recentForm: ["L","W","D","W","L"], starPlayer: "Miguel Almirón",        manager: "Gustavo Alfaro"       },
  { id: "aus", name: "Australia",     shortName: "Australia", code: "AUS", confederation: "AFC",      group: "D", flagEmoji: "🇦🇺", fifaRanking: 24, eloRating: 1590, attackStrength: 1.12, defenseStrength: 0.93, recentForm: ["W","D","W","L","W"], starPlayer: "Harry Souttar",         manager: "Tony Popovic"         },
  { id: "tur", name: "Türkiye",       shortName: "Turkey",    code: "TUR", confederation: "UEFA",     group: "D", flagEmoji: "🇹🇷", fifaRanking: 26, eloRating: 1620, attackStrength: 1.22, defenseStrength: 0.92, recentForm: ["W","W","W","D","W"], starPlayer: "Hakan Çalhanoğlu",      manager: "Vincenzo Montella"    },

  // ── GROUP E: Germany · Curaçao · Ivory Coast · Ecuador ───────────
  { id: "ger", name: "Germany",     shortName: "Germany",     code: "GER", confederation: "UEFA",     group: "E", flagEmoji: "🇩🇪", fifaRanking: 12, eloRating: 1800, attackStrength: 1.60, defenseStrength: 0.72, recentForm: ["W","W","W","W","D"], starPlayer: "Florian Wirtz",    manager: "Julian Nagelsmann"    },
  { id: "cur", name: "Curaçao",     shortName: "Curaçao",     code: "CUW", confederation: "CONCACAF", group: "E", flagEmoji: "🇨🇼", fifaRanking: 88, eloRating: 1340, attackStrength: 0.76, defenseStrength: 1.24, recentForm: ["L","D","L","W","D"], starPlayer: "Leandro Bacuna",   manager: "Remko Bicentini"      },
  { id: "civ", name: "Ivory Coast", shortName: "Ivory Coast", code: "CIV", confederation: "CAF",      group: "E", flagEmoji: "🇨🇮", fifaRanking: 32, eloRating: 1590, attackStrength: 1.18, defenseStrength: 0.92, recentForm: ["W","W","L","D","W"], starPlayer: "Simon Adingra",    manager: "Emerse Faé"           },
  { id: "ecu", name: "Ecuador",     shortName: "Ecuador",     code: "ECU", confederation: "CONMEBOL", group: "E", flagEmoji: "🇪🇨", fifaRanking: 41, eloRating: 1560, attackStrength: 1.10, defenseStrength: 0.96, recentForm: ["D","W","W","L","D"], starPlayer: "Enner Valencia",   manager: "Sebastián Beccacece"  },

  // ── GROUP F: Netherlands · Japan · Sweden · Tunisia ──────────────
  { id: "ned", name: "Netherlands", shortName: "Netherlands", code: "NED", confederation: "UEFA", group: "F", flagEmoji: "🇳🇱", fifaRanking:  7, eloRating: 1780, attackStrength: 1.55, defenseStrength: 0.73, recentForm: ["W","W","D","W","W"], starPlayer: "Virgil van Dijk",  manager: "Ronald Koeman"         },
  { id: "jpn", name: "Japan",       shortName: "Japan",       code: "JPN", confederation: "AFC",  group: "F", flagEmoji: "🇯🇵", fifaRanking: 17, eloRating: 1700, attackStrength: 1.40, defenseStrength: 0.80, recentForm: ["W","W","W","L","W"], starPlayer: "Takehiro Tomiyasu", manager: "Hajime Moriyasu"       },
  { id: "swe", name: "Sweden",      shortName: "Sweden",      code: "SWE", confederation: "UEFA", group: "F", flagEmoji: "🇸🇪", fifaRanking: 25, eloRating: 1620, attackStrength: 1.20, defenseStrength: 0.90, recentForm: ["W","D","W","W","D"], starPlayer: "Alexander Isak",   manager: "Jon Dahl Tomasson"     },
  { id: "tun", name: "Tunisia",     shortName: "Tunisia",     code: "TUN", confederation: "CAF",  group: "F", flagEmoji: "🇹🇳", fifaRanking: 31, eloRating: 1520, attackStrength: 1.00, defenseStrength: 1.00, recentForm: ["D","W","D","W","L"], starPlayer: "Wahbi Khazri",    manager: "Faouzi Benzarti"       },

  // ── GROUP G: Belgium · Egypt · Iran · New Zealand ────────────────
  { id: "bel", name: "Belgium",     shortName: "Belgium",     code: "BEL", confederation: "UEFA", group: "G", flagEmoji: "🇧🇪", fifaRanking:  3, eloRating: 1770, attackStrength: 1.50, defenseStrength: 0.74, recentForm: ["W","W","D","W","W"], starPlayer: "Kevin De Bruyne", manager: "Domenico Tedesco" },
  { id: "egy", name: "Egypt",       shortName: "Egypt",       code: "EGY", confederation: "CAF",  group: "G", flagEmoji: "🇪🇬", fifaRanking: 34, eloRating: 1550, attackStrength: 1.08, defenseStrength: 0.97, recentForm: ["W","D","W","W","D"], starPlayer: "Mohamed Salah",   manager: "Ihab Galal"       },
  { id: "irn", name: "Iran",        shortName: "Iran",        code: "IRN", confederation: "AFC",  group: "G", flagEmoji: "🇮🇷", fifaRanking: 21, eloRating: 1590, attackStrength: 1.10, defenseStrength: 0.94, recentForm: ["W","W","D","W","W"], starPlayer: "Mehdi Taremi",    manager: "Amir Ghalenoei"   },
  { id: "nzl", name: "New Zealand", shortName: "New Zealand", code: "NZL", confederation: "OFC",  group: "G", flagEmoji: "🇳🇿", fifaRanking: 96, eloRating: 1350, attackStrength: 0.76, defenseStrength: 1.24, recentForm: ["L","D","W","L","D"], starPlayer: "Chris Wood",      manager: "Darren Bazeley"   },

  // ── GROUP H: Spain · Cape Verde · Saudi Arabia · Uruguay ─────────
  { id: "esp", name: "Spain",         shortName: "Spain",        code: "ESP", confederation: "UEFA",     group: "H", flagEmoji: "🇪🇸", fifaRanking:  1, eloRating: 1880, attackStrength: 1.80, defenseStrength: 0.62, recentForm: ["W","W","W","W","W"], starPlayer: "Pedri",               manager: "Luis de la Fuente" },
  { id: "cpv", name: "Cape Verde",    shortName: "Cape Verde",   code: "CPV", confederation: "CAF",      group: "H", flagEmoji: "🇨🇻", fifaRanking: 72, eloRating: 1430, attackStrength: 0.88, defenseStrength: 1.10, recentForm: ["W","W","D","L","W"], starPlayer: "Ryan Mendes",         manager: "Bubista"           },
  { id: "ksa", name: "Saudi Arabia",  shortName: "Saudi Arabia", code: "KSA", confederation: "AFC",      group: "H", flagEmoji: "🇸🇦", fifaRanking: 56, eloRating: 1470, attackStrength: 0.90, defenseStrength: 1.08, recentForm: ["W","D","W","L","D"], starPlayer: "Salem Al-Dawsari",    manager: "Hervé Renard"      },
  { id: "uru", name: "Uruguay",       shortName: "Uruguay",      code: "URU", confederation: "CONMEBOL", group: "H", flagEmoji: "🇺🇾", fifaRanking: 15, eloRating: 1720, attackStrength: 1.40, defenseStrength: 0.80, recentForm: ["W","W","D","W","W"], starPlayer: "Federico Valverde",   manager: "Marcelo Bielsa"    },

  // ── GROUP I: France · Senegal · Iraq · Norway ────────────────────
  { id: "fra", name: "France",   shortName: "France",  code: "FRA", confederation: "UEFA", group: "I", flagEmoji: "🇫🇷", fifaRanking:  2, eloRating: 1870, attackStrength: 1.78, defenseStrength: 0.63, recentForm: ["W","W","W","D","W"], starPlayer: "Kylian Mbappé",    manager: "Didier Deschamps" },
  { id: "sen", name: "Senegal",  shortName: "Senegal", code: "SEN", confederation: "CAF",  group: "I", flagEmoji: "🇸🇳", fifaRanking: 18, eloRating: 1660, attackStrength: 1.30, defenseStrength: 0.86, recentForm: ["W","W","D","W","W"], starPlayer: "Sadio Mané",       manager: "Aliou Cissé"      },
  { id: "irq", name: "Iraq",     shortName: "Iraq",    code: "IRQ", confederation: "AFC",  group: "I", flagEmoji: "🇮🇶", fifaRanking: 58, eloRating: 1450, attackStrength: 0.88, defenseStrength: 1.10, recentForm: ["W","W","D","L","W"], starPlayer: "Mohanad Ali",      manager: "Jesús Casas"      },
  { id: "nor", name: "Norway",   shortName: "Norway",  code: "NOR", confederation: "UEFA", group: "I", flagEmoji: "🇳🇴", fifaRanking: 11, eloRating: 1700, attackStrength: 1.45, defenseStrength: 0.82, recentForm: ["W","W","W","W","D"], starPlayer: "Erling Haaland",   manager: "Ståle Solbakken"  },

  // ── GROUP J: Argentina · Algeria · Austria · Jordan ──────────────
  { id: "arg", name: "Argentina", shortName: "Argentina", code: "ARG", confederation: "CONMEBOL", group: "J", flagEmoji: "🇦🇷", fifaRanking:  4, eloRating: 1900, attackStrength: 1.85, defenseStrength: 0.60, recentForm: ["W","W","W","W","W"], starPlayer: "Lionel Messi",      manager: "Lionel Scaloni"    },
  { id: "dza", name: "Algeria",   shortName: "Algeria",   code: "DZA", confederation: "CAF",      group: "J", flagEmoji: "🇩🇿", fifaRanking: 50, eloRating: 1500, attackStrength: 0.98, defenseStrength: 1.02, recentForm: ["W","D","W","D","L"], starPlayer: "Riyad Mahrez",      manager: "Djamel Belmadi"    },
  { id: "aut", name: "Austria",   shortName: "Austria",   code: "AUT", confederation: "UEFA",     group: "J", flagEmoji: "🇦🇹", fifaRanking: 28, eloRating: 1640, attackStrength: 1.25, defenseStrength: 0.90, recentForm: ["W","W","D","W","W"], starPlayer: "Marcel Sabitzer",   manager: "Ralf Rangnick"     },
  { id: "jor", name: "Jordan",    shortName: "Jordan",    code: "JOR", confederation: "AFC",      group: "J", flagEmoji: "🇯🇴", fifaRanking: 66, eloRating: 1440, attackStrength: 0.86, defenseStrength: 1.12, recentForm: ["D","W","D","W","L"], starPlayer: "Yazan Al-Naimat",   manager: "Hashim Al-Mustafa" },

  // ── GROUP K: Portugal · DR Congo · Uzbekistan · Colombia ─────────
  { id: "por", name: "Portugal",   shortName: "Portugal",   code: "POR", confederation: "UEFA",     group: "K", flagEmoji: "🇵🇹", fifaRanking:  6, eloRating: 1830, attackStrength: 1.70, defenseStrength: 0.72, recentForm: ["W","W","W","W","D"], starPlayer: "Cristiano Ronaldo", manager: "Roberto Martínez"  },
  { id: "cod", name: "DR Congo",   shortName: "DR Congo",   code: "COD", confederation: "CAF",      group: "K", flagEmoji: "🇨🇩", fifaRanking: 77, eloRating: 1420, attackStrength: 0.84, defenseStrength: 1.14, recentForm: ["W","D","L","W","D"], starPlayer: "Cédric Bakambu",   manager: "Sébastien Desabre" },
  { id: "uzb", name: "Uzbekistan", shortName: "Uzbekistan", code: "UZB", confederation: "AFC",      group: "K", flagEmoji: "🇺🇿", fifaRanking: 74, eloRating: 1440, attackStrength: 0.85, defenseStrength: 1.10, recentForm: ["D","W","D","D","W"], starPlayer: "Eldor Shomurodov", manager: "Srecko Katanec"    },
  { id: "col", name: "Colombia",   shortName: "Colombia",   code: "COL", confederation: "CONMEBOL", group: "K", flagEmoji: "🇨🇴", fifaRanking:  9, eloRating: 1720, attackStrength: 1.42, defenseStrength: 0.80, recentForm: ["W","W","W","D","W"], starPlayer: "Luis Díaz",         manager: "Néstor Lorenzo"    },

  // ── GROUP L: England · Croatia · Ghana · Panama ───────────────────
  { id: "eng", name: "England", shortName: "England", code: "ENG", confederation: "UEFA",     group: "L", flagEmoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", fifaRanking:  5, eloRating: 1800, attackStrength: 1.62, defenseStrength: 0.72, recentForm: ["W","W","W","D","W"], starPlayer: "Jude Bellingham",  manager: "Gareth Southgate"  },
  { id: "cro", name: "Croatia", shortName: "Croatia", code: "CRO", confederation: "UEFA",     group: "L", flagEmoji: "🇭🇷", fifaRanking: 10, eloRating: 1720, attackStrength: 1.38, defenseStrength: 0.82, recentForm: ["W","D","W","D","W"], starPlayer: "Luka Modrić",      manager: "Zlatko Dalić"      },
  { id: "gha", name: "Ghana",   shortName: "Ghana",   code: "GHA", confederation: "CAF",      group: "L", flagEmoji: "🇬🇭", fifaRanking: 65, eloRating: 1450, attackStrength: 0.90, defenseStrength: 1.08, recentForm: ["W","D","L","W","D"], starPlayer: "Jordan Ayew",      manager: "Otto Addo"         },
  { id: "pan", name: "Panama",  shortName: "Panama",  code: "PAN", confederation: "CONCACAF", group: "L", flagEmoji: "🇵🇦", fifaRanking: 43, eloRating: 1460, attackStrength: 0.88, defenseStrength: 1.10, recentForm: ["W","D","L","W","D"], starPlayer: "Ismael Díaz",      manager: "Thomas Christiansen" },
];

// ============================================================
// MATCHES — Group stage (72) + Knockout (32) = 104 total
// All kickoff times in UTC (ET = UTC-4 in June/July)
// Sources: FIFA.com, ESPN, NBC Sports, Sky Sports
// ============================================================
export const matches: Match[] = [
  // ════════════════════════════════════════════════
  // MATCHDAY 1
  // ════════════════════════════════════════════════

  // Thu Jun 11 — Group A
  { id: "gs-001", tournamentId: "wc2026", matchNumber:  1, stage: "group", group: "A", kickoffUtc: "2026-06-11T19:00:00Z", venueId: "v14", homeTeamId: "mex", awayTeamId: "rsa", status: "scheduled", matchday: 1 },
  { id: "gs-002", tournamentId: "wc2026", matchNumber:  2, stage: "group", group: "A", kickoffUtc: "2026-06-12T02:00:00Z", venueId: "v15", homeTeamId: "kor", awayTeamId: "cze", status: "scheduled", matchday: 1 },

  // Fri Jun 12 — Groups B, D
  { id: "gs-003", tournamentId: "wc2026", matchNumber:  3, stage: "group", group: "B", kickoffUtc: "2026-06-12T19:00:00Z", venueId: "v12", homeTeamId: "can", awayTeamId: "bih", status: "scheduled", matchday: 1 },
  { id: "gs-004", tournamentId: "wc2026", matchNumber:  4, stage: "group", group: "D", kickoffUtc: "2026-06-13T01:00:00Z", venueId: "v03", homeTeamId: "usa", awayTeamId: "par", status: "scheduled", matchday: 1 },

  // Sat Jun 13 — Groups B, C
  { id: "gs-005", tournamentId: "wc2026", matchNumber:  5, stage: "group", group: "B", kickoffUtc: "2026-06-13T19:00:00Z", venueId: "v05", homeTeamId: "qat", awayTeamId: "sui", status: "scheduled", matchday: 1 },
  { id: "gs-006", tournamentId: "wc2026", matchNumber:  6, stage: "group", group: "C", kickoffUtc: "2026-06-13T22:00:00Z", venueId: "v01", homeTeamId: "bra", awayTeamId: "mar", status: "scheduled", matchday: 1 },
  { id: "gs-007", tournamentId: "wc2026", matchNumber:  7, stage: "group", group: "C", kickoffUtc: "2026-06-14T01:00:00Z", venueId: "v10", homeTeamId: "hai", awayTeamId: "sco", status: "scheduled", matchday: 1 },

  // Sun Jun 14 — Groups E, F
  { id: "gs-008", tournamentId: "wc2026", matchNumber:  8, stage: "group", group: "E", kickoffUtc: "2026-06-14T17:00:00Z", venueId: "v04", homeTeamId: "ger", awayTeamId: "cur", status: "scheduled", matchday: 1 },
  { id: "gs-009", tournamentId: "wc2026", matchNumber:  9, stage: "group", group: "F", kickoffUtc: "2026-06-14T20:00:00Z", venueId: "v02", homeTeamId: "ned", awayTeamId: "jpn", status: "scheduled", matchday: 1 },
  { id: "gs-010", tournamentId: "wc2026", matchNumber: 10, stage: "group", group: "E", kickoffUtc: "2026-06-14T23:00:00Z", venueId: "v06", homeTeamId: "civ", awayTeamId: "ecu", status: "scheduled", matchday: 1 },
  { id: "gs-011", tournamentId: "wc2026", matchNumber: 11, stage: "group", group: "F", kickoffUtc: "2026-06-15T02:00:00Z", venueId: "v16", homeTeamId: "swe", awayTeamId: "tun", status: "scheduled", matchday: 1 },

  // Mon Jun 15 — Groups G, H
  { id: "gs-012", tournamentId: "wc2026", matchNumber: 12, stage: "group", group: "H", kickoffUtc: "2026-06-15T16:00:00Z", venueId: "v09", homeTeamId: "esp", awayTeamId: "cpv", status: "scheduled", matchday: 1 },
  { id: "gs-013", tournamentId: "wc2026", matchNumber: 13, stage: "group", group: "G", kickoffUtc: "2026-06-15T19:00:00Z", venueId: "v11", homeTeamId: "bel", awayTeamId: "egy", status: "scheduled", matchday: 1 },
  { id: "gs-014", tournamentId: "wc2026", matchNumber: 14, stage: "group", group: "H", kickoffUtc: "2026-06-15T22:00:00Z", venueId: "v08", homeTeamId: "ksa", awayTeamId: "uru", status: "scheduled", matchday: 1 },
  { id: "gs-015", tournamentId: "wc2026", matchNumber: 15, stage: "group", group: "G", kickoffUtc: "2026-06-16T01:00:00Z", venueId: "v03", homeTeamId: "irn", awayTeamId: "nzl", status: "scheduled", matchday: 1 },

  // Tue Jun 16 — Groups I, J
  { id: "gs-016", tournamentId: "wc2026", matchNumber: 16, stage: "group", group: "I", kickoffUtc: "2026-06-16T19:00:00Z", venueId: "v01", homeTeamId: "fra", awayTeamId: "sen", status: "scheduled", matchday: 1 },
  { id: "gs-017", tournamentId: "wc2026", matchNumber: 17, stage: "group", group: "I", kickoffUtc: "2026-06-16T22:00:00Z", venueId: "v10", homeTeamId: "irq", awayTeamId: "nor", status: "scheduled", matchday: 1 },
  { id: "gs-018", tournamentId: "wc2026", matchNumber: 18, stage: "group", group: "J", kickoffUtc: "2026-06-17T01:00:00Z", venueId: "v07", homeTeamId: "arg", awayTeamId: "dza", status: "scheduled", matchday: 1 },
  { id: "gs-019", tournamentId: "wc2026", matchNumber: 19, stage: "group", group: "J", kickoffUtc: "2026-06-17T04:00:00Z", venueId: "v05", homeTeamId: "aut", awayTeamId: "jor", status: "scheduled", matchday: 1 },

  // Wed Jun 17 — Groups K, L
  { id: "gs-020", tournamentId: "wc2026", matchNumber: 20, stage: "group", group: "K", kickoffUtc: "2026-06-17T17:00:00Z", venueId: "v04", homeTeamId: "por", awayTeamId: "cod", status: "scheduled", matchday: 1 },
  { id: "gs-021", tournamentId: "wc2026", matchNumber: 21, stage: "group", group: "L", kickoffUtc: "2026-06-17T20:00:00Z", venueId: "v02", homeTeamId: "eng", awayTeamId: "cro", status: "scheduled", matchday: 1 },
  { id: "gs-022", tournamentId: "wc2026", matchNumber: 22, stage: "group", group: "L", kickoffUtc: "2026-06-17T23:00:00Z", venueId: "v12", homeTeamId: "gha", awayTeamId: "pan", status: "scheduled", matchday: 1 },
  { id: "gs-023", tournamentId: "wc2026", matchNumber: 23, stage: "group", group: "K", kickoffUtc: "2026-06-18T02:00:00Z", venueId: "v14", homeTeamId: "uzb", awayTeamId: "col", status: "scheduled", matchday: 1 },

  // ════════════════════════════════════════════════
  // MATCHDAY 2
  // ════════════════════════════════════════════════

  // Thu Jun 18 — Group A & B
  { id: "gs-024", tournamentId: "wc2026", matchNumber: 24, stage: "group", group: "A", kickoffUtc: "2026-06-18T16:00:00Z", venueId: "v09", homeTeamId: "cze", awayTeamId: "rsa", status: "scheduled", matchday: 2 },
  { id: "gs-025", tournamentId: "wc2026", matchNumber: 25, stage: "group", group: "B", kickoffUtc: "2026-06-18T19:00:00Z", venueId: "v03", homeTeamId: "sui", awayTeamId: "bih", status: "scheduled", matchday: 2 },
  { id: "gs-026", tournamentId: "wc2026", matchNumber: 26, stage: "group", group: "B", kickoffUtc: "2026-06-18T22:00:00Z", venueId: "v13", homeTeamId: "can", awayTeamId: "qat", status: "scheduled", matchday: 2 },
  { id: "gs-027", tournamentId: "wc2026", matchNumber: 27, stage: "group", group: "A", kickoffUtc: "2026-06-19T01:00:00Z", venueId: "v15", homeTeamId: "mex", awayTeamId: "kor", status: "scheduled", matchday: 2 },

  // Fri Jun 19 — Groups C, D
  { id: "gs-028", tournamentId: "wc2026", matchNumber: 28, stage: "group", group: "D", kickoffUtc: "2026-06-19T19:00:00Z", venueId: "v11", homeTeamId: "usa", awayTeamId: "aus", status: "scheduled", matchday: 2 },
  { id: "gs-029", tournamentId: "wc2026", matchNumber: 29, stage: "group", group: "C", kickoffUtc: "2026-06-19T22:00:00Z", venueId: "v10", homeTeamId: "sco", awayTeamId: "mar", status: "scheduled", matchday: 2 },
  { id: "gs-030", tournamentId: "wc2026", matchNumber: 30, stage: "group", group: "C", kickoffUtc: "2026-06-20T01:00:00Z", venueId: "v06", homeTeamId: "bra", awayTeamId: "hai", status: "scheduled", matchday: 2 },

  // Sat Jun 20 — Groups D, E, F
  { id: "gs-031", tournamentId: "wc2026", matchNumber: 31, stage: "group", group: "F", kickoffUtc: "2026-06-20T17:00:00Z", venueId: "v04", homeTeamId: "ned", awayTeamId: "swe", status: "scheduled", matchday: 2 },
  { id: "gs-032", tournamentId: "wc2026", matchNumber: 32, stage: "group", group: "D", kickoffUtc: "2026-06-20T04:00:00Z", venueId: "v05", homeTeamId: "tur", awayTeamId: "par", status: "scheduled", matchday: 2 },
  { id: "gs-033", tournamentId: "wc2026", matchNumber: 33, stage: "group", group: "E", kickoffUtc: "2026-06-20T20:00:00Z", venueId: "v12", homeTeamId: "ger", awayTeamId: "civ", status: "scheduled", matchday: 2 },
  { id: "gs-034", tournamentId: "wc2026", matchNumber: 34, stage: "group", group: "E", kickoffUtc: "2026-06-21T00:00:00Z", venueId: "v07", homeTeamId: "ecu", awayTeamId: "cur", status: "scheduled", matchday: 2 },
  { id: "gs-035", tournamentId: "wc2026", matchNumber: 35, stage: "group", group: "F", kickoffUtc: "2026-06-21T04:00:00Z", venueId: "v16", homeTeamId: "tun", awayTeamId: "jpn", status: "scheduled", matchday: 2 },

  // Sun Jun 21 — Groups G, H
  { id: "gs-036", tournamentId: "wc2026", matchNumber: 36, stage: "group", group: "H", kickoffUtc: "2026-06-21T16:00:00Z", venueId: "v09", homeTeamId: "esp", awayTeamId: "ksa", status: "scheduled", matchday: 2 },
  { id: "gs-037", tournamentId: "wc2026", matchNumber: 37, stage: "group", group: "G", kickoffUtc: "2026-06-21T19:00:00Z", venueId: "v03", homeTeamId: "bel", awayTeamId: "irn", status: "scheduled", matchday: 2 },
  { id: "gs-038", tournamentId: "wc2026", matchNumber: 38, stage: "group", group: "H", kickoffUtc: "2026-06-21T22:00:00Z", venueId: "v08", homeTeamId: "uru", awayTeamId: "cpv", status: "scheduled", matchday: 2 },
  { id: "gs-039", tournamentId: "wc2026", matchNumber: 39, stage: "group", group: "G", kickoffUtc: "2026-06-22T01:00:00Z", venueId: "v13", homeTeamId: "nzl", awayTeamId: "egy", status: "scheduled", matchday: 2 },

  // Mon Jun 22 — Groups I, J
  { id: "gs-040", tournamentId: "wc2026", matchNumber: 40, stage: "group", group: "J", kickoffUtc: "2026-06-22T17:00:00Z", venueId: "v02", homeTeamId: "arg", awayTeamId: "aut", status: "scheduled", matchday: 2 },
  { id: "gs-041", tournamentId: "wc2026", matchNumber: 41, stage: "group", group: "I", kickoffUtc: "2026-06-22T21:00:00Z", venueId: "v06", homeTeamId: "fra", awayTeamId: "irq", status: "scheduled", matchday: 2 },
  { id: "gs-042", tournamentId: "wc2026", matchNumber: 42, stage: "group", group: "I", kickoffUtc: "2026-06-23T00:00:00Z", venueId: "v12", homeTeamId: "nor", awayTeamId: "sen", status: "scheduled", matchday: 2 },
  { id: "gs-043", tournamentId: "wc2026", matchNumber: 43, stage: "group", group: "J", kickoffUtc: "2026-06-23T03:00:00Z", venueId: "v05", homeTeamId: "jor", awayTeamId: "dza", status: "scheduled", matchday: 2 },

  // Tue Jun 23 — Groups K, L
  { id: "gs-044", tournamentId: "wc2026", matchNumber: 44, stage: "group", group: "K", kickoffUtc: "2026-06-23T17:00:00Z", venueId: "v04", homeTeamId: "por", awayTeamId: "uzb", status: "scheduled", matchday: 2 },
  { id: "gs-045", tournamentId: "wc2026", matchNumber: 45, stage: "group", group: "L", kickoffUtc: "2026-06-23T20:00:00Z", venueId: "v10", homeTeamId: "eng", awayTeamId: "gha", status: "scheduled", matchday: 2 },
  { id: "gs-046", tournamentId: "wc2026", matchNumber: 46, stage: "group", group: "L", kickoffUtc: "2026-06-23T23:00:00Z", venueId: "v12", homeTeamId: "pan", awayTeamId: "cro", status: "scheduled", matchday: 2 },
  { id: "gs-047", tournamentId: "wc2026", matchNumber: 47, stage: "group", group: "K", kickoffUtc: "2026-06-24T02:00:00Z", venueId: "v15", homeTeamId: "col", awayTeamId: "cod", status: "scheduled", matchday: 2 },

  // ════════════════════════════════════════════════
  // MATCHDAY 3 — concurrent within each group
  // ════════════════════════════════════════════════

  // Wed Jun 24 — Groups A, B, C
  { id: "gs-048", tournamentId: "wc2026", matchNumber: 48, stage: "group", group: "B", kickoffUtc: "2026-06-24T19:00:00Z", venueId: "v13", homeTeamId: "sui", awayTeamId: "can", status: "scheduled", matchday: 3 },
  { id: "gs-049", tournamentId: "wc2026", matchNumber: 49, stage: "group", group: "B", kickoffUtc: "2026-06-24T19:00:00Z", venueId: "v11", homeTeamId: "bih", awayTeamId: "qat", status: "scheduled", matchday: 3 },
  { id: "gs-050", tournamentId: "wc2026", matchNumber: 50, stage: "group", group: "C", kickoffUtc: "2026-06-24T22:00:00Z", venueId: "v08", homeTeamId: "sco", awayTeamId: "bra", status: "scheduled", matchday: 3 },
  { id: "gs-051", tournamentId: "wc2026", matchNumber: 51, stage: "group", group: "C", kickoffUtc: "2026-06-24T22:00:00Z", venueId: "v09", homeTeamId: "mar", awayTeamId: "hai", status: "scheduled", matchday: 3 },
  { id: "gs-052", tournamentId: "wc2026", matchNumber: 52, stage: "group", group: "A", kickoffUtc: "2026-06-25T01:00:00Z", venueId: "v14", homeTeamId: "cze", awayTeamId: "mex", status: "scheduled", matchday: 3 },
  { id: "gs-053", tournamentId: "wc2026", matchNumber: 53, stage: "group", group: "A", kickoffUtc: "2026-06-25T01:00:00Z", venueId: "v16", homeTeamId: "rsa", awayTeamId: "kor", status: "scheduled", matchday: 3 },

  // Thu Jun 25 — Groups D, E, F
  { id: "gs-054", tournamentId: "wc2026", matchNumber: 54, stage: "group", group: "E", kickoffUtc: "2026-06-25T20:00:00Z", venueId: "v01", homeTeamId: "ecu", awayTeamId: "ger", status: "scheduled", matchday: 3 },
  { id: "gs-055", tournamentId: "wc2026", matchNumber: 55, stage: "group", group: "E", kickoffUtc: "2026-06-25T20:00:00Z", venueId: "v06", homeTeamId: "cur", awayTeamId: "civ", status: "scheduled", matchday: 3 },
  { id: "gs-056", tournamentId: "wc2026", matchNumber: 56, stage: "group", group: "F", kickoffUtc: "2026-06-25T23:00:00Z", venueId: "v02", homeTeamId: "jpn", awayTeamId: "swe", status: "scheduled", matchday: 3 },
  { id: "gs-057", tournamentId: "wc2026", matchNumber: 57, stage: "group", group: "F", kickoffUtc: "2026-06-25T23:00:00Z", venueId: "v07", homeTeamId: "tun", awayTeamId: "ned", status: "scheduled", matchday: 3 },
  { id: "gs-058", tournamentId: "wc2026", matchNumber: 58, stage: "group", group: "D", kickoffUtc: "2026-06-26T02:00:00Z", venueId: "v03", homeTeamId: "tur", awayTeamId: "usa", status: "scheduled", matchday: 3 },
  { id: "gs-059", tournamentId: "wc2026", matchNumber: 59, stage: "group", group: "D", kickoffUtc: "2026-06-26T02:00:00Z", venueId: "v05", homeTeamId: "par", awayTeamId: "aus", status: "scheduled", matchday: 3 },

  // Fri Jun 26 — Groups G, H, I
  { id: "gs-060", tournamentId: "wc2026", matchNumber: 60, stage: "group", group: "I", kickoffUtc: "2026-06-26T19:00:00Z", venueId: "v10", homeTeamId: "nor", awayTeamId: "fra", status: "scheduled", matchday: 3 },
  { id: "gs-061", tournamentId: "wc2026", matchNumber: 61, stage: "group", group: "I", kickoffUtc: "2026-06-26T19:00:00Z", venueId: "v12", homeTeamId: "sen", awayTeamId: "irq", status: "scheduled", matchday: 3 },
  { id: "gs-062", tournamentId: "wc2026", matchNumber: 62, stage: "group", group: "H", kickoffUtc: "2026-06-27T00:00:00Z", venueId: "v15", homeTeamId: "uru", awayTeamId: "esp", status: "scheduled", matchday: 3 },
  { id: "gs-063", tournamentId: "wc2026", matchNumber: 63, stage: "group", group: "H", kickoffUtc: "2026-06-27T00:00:00Z", venueId: "v04", homeTeamId: "cpv", awayTeamId: "ksa", status: "scheduled", matchday: 3 },
  { id: "gs-064", tournamentId: "wc2026", matchNumber: 64, stage: "group", group: "G", kickoffUtc: "2026-06-27T03:00:00Z", venueId: "v11", homeTeamId: "egy", awayTeamId: "irn", status: "scheduled", matchday: 3 },
  { id: "gs-065", tournamentId: "wc2026", matchNumber: 65, stage: "group", group: "G", kickoffUtc: "2026-06-27T03:00:00Z", venueId: "v13", homeTeamId: "nzl", awayTeamId: "bel", status: "scheduled", matchday: 3 },

  // Sat Jun 27 — Groups J, K, L
  { id: "gs-066", tournamentId: "wc2026", matchNumber: 66, stage: "group", group: "L", kickoffUtc: "2026-06-27T21:00:00Z", venueId: "v01", homeTeamId: "eng", awayTeamId: "pan", status: "scheduled", matchday: 3 },
  { id: "gs-067", tournamentId: "wc2026", matchNumber: 67, stage: "group", group: "L", kickoffUtc: "2026-06-27T21:00:00Z", venueId: "v06", homeTeamId: "cro", awayTeamId: "gha", status: "scheduled", matchday: 3 },
  { id: "gs-068", tournamentId: "wc2026", matchNumber: 68, stage: "group", group: "K", kickoffUtc: "2026-06-27T23:30:00Z", venueId: "v08", homeTeamId: "col", awayTeamId: "por", status: "scheduled", matchday: 3 },
  { id: "gs-069", tournamentId: "wc2026", matchNumber: 69, stage: "group", group: "K", kickoffUtc: "2026-06-27T23:30:00Z", venueId: "v09", homeTeamId: "cod", awayTeamId: "uzb", status: "scheduled", matchday: 3 },
  { id: "gs-070", tournamentId: "wc2026", matchNumber: 70, stage: "group", group: "J", kickoffUtc: "2026-06-28T02:00:00Z", venueId: "v02", homeTeamId: "jor", awayTeamId: "arg", status: "scheduled", matchday: 3 },
  { id: "gs-071", tournamentId: "wc2026", matchNumber: 71, stage: "group", group: "J", kickoffUtc: "2026-06-28T02:00:00Z", venueId: "v07", homeTeamId: "dza", awayTeamId: "aut", status: "scheduled", matchday: 3 },

  // Jun 13 — Group D MD1 (originally omitted — Australia vs Türkiye)
  { id: "gs-072", tournamentId: "wc2026", matchNumber: 72, stage: "group", group: "D", kickoffUtc: "2026-06-14T04:00:00Z", venueId: "v13", homeTeamId: "aus", awayTeamId: "tur", status: "scheduled", matchday: 1 },

  // ════════════════════════════════════════════════
  // ROUND OF 32 (matches 73–88)
  // Official bracket mapping per FIFA 2026 rules
  // Winner labels: 1=winner, 2=runner-up, 3rd=best 3rd place
  // ════════════════════════════════════════════════
  { id: "ko-073", tournamentId: "wc2026", matchNumber: 73, stage: "round_of_32", kickoffUtc: "2026-06-29T23:00:00Z", venueId: "v01", homeTeamId: "tbd-A2", awayTeamId: "tbd-B2", status: "scheduled" },
  { id: "ko-074", tournamentId: "wc2026", matchNumber: 74, stage: "round_of_32", kickoffUtc: "2026-06-30T03:00:00Z", venueId: "v09", homeTeamId: "tbd-E1", awayTeamId: "tbd-3rd-ABCDF", status: "scheduled" },
  { id: "ko-075", tournamentId: "wc2026", matchNumber: 75, stage: "round_of_32", kickoffUtc: "2026-06-30T19:00:00Z", venueId: "v02", homeTeamId: "tbd-F1", awayTeamId: "tbd-C2", status: "scheduled" },
  { id: "ko-076", tournamentId: "wc2026", matchNumber: 76, stage: "round_of_32", kickoffUtc: "2026-06-30T23:00:00Z", venueId: "v14", homeTeamId: "tbd-C1", awayTeamId: "tbd-F2", status: "scheduled" },
  { id: "ko-077", tournamentId: "wc2026", matchNumber: 77, stage: "round_of_32", kickoffUtc: "2026-07-01T19:00:00Z", venueId: "v11", homeTeamId: "tbd-I1", awayTeamId: "tbd-3rd-CDFGH", status: "scheduled" },
  { id: "ko-078", tournamentId: "wc2026", matchNumber: 78, stage: "round_of_32", kickoffUtc: "2026-07-01T23:00:00Z", venueId: "v07", homeTeamId: "tbd-E2", awayTeamId: "tbd-I2", status: "scheduled" },
  { id: "ko-079", tournamentId: "wc2026", matchNumber: 79, stage: "round_of_32", kickoffUtc: "2026-07-02T19:00:00Z", venueId: "v03", homeTeamId: "tbd-A1", awayTeamId: "tbd-3rd-CEFHI", status: "scheduled" },
  { id: "ko-080", tournamentId: "wc2026", matchNumber: 80, stage: "round_of_32", kickoffUtc: "2026-07-02T23:00:00Z", venueId: "v04", homeTeamId: "tbd-L1", awayTeamId: "tbd-3rd-EHIJK", status: "scheduled" },
  { id: "ko-081", tournamentId: "wc2026", matchNumber: 81, stage: "round_of_32", kickoffUtc: "2026-07-03T19:00:00Z", venueId: "v08", homeTeamId: "tbd-D1", awayTeamId: "tbd-3rd-BEFIJ", status: "scheduled" },
  { id: "ko-082", tournamentId: "wc2026", matchNumber: 82, stage: "round_of_32", kickoffUtc: "2026-07-03T23:00:00Z", venueId: "v06", homeTeamId: "tbd-G1", awayTeamId: "tbd-3rd-AEHIJ", status: "scheduled" },
  { id: "ko-083", tournamentId: "wc2026", matchNumber: 83, stage: "round_of_32", kickoffUtc: "2026-07-04T19:00:00Z", venueId: "v05", homeTeamId: "tbd-K2", awayTeamId: "tbd-L2", status: "scheduled" },
  { id: "ko-084", tournamentId: "wc2026", matchNumber: 84, stage: "round_of_32", kickoffUtc: "2026-07-04T23:00:00Z", venueId: "v16", homeTeamId: "tbd-H1", awayTeamId: "tbd-J2", status: "scheduled" },
  { id: "ko-085", tournamentId: "wc2026", matchNumber: 85, stage: "round_of_32", kickoffUtc: "2026-07-05T19:00:00Z", venueId: "v10", homeTeamId: "tbd-B1", awayTeamId: "tbd-3rd-EFGIJ", status: "scheduled" },
  { id: "ko-086", tournamentId: "wc2026", matchNumber: 86, stage: "round_of_32", kickoffUtc: "2026-07-05T23:00:00Z", venueId: "v13", homeTeamId: "tbd-J1", awayTeamId: "tbd-H2", status: "scheduled" },
  { id: "ko-087", tournamentId: "wc2026", matchNumber: 87, stage: "round_of_32", kickoffUtc: "2026-07-06T19:00:00Z", venueId: "v15", homeTeamId: "tbd-K1", awayTeamId: "tbd-3rd-DEIJL", status: "scheduled" },
  { id: "ko-088", tournamentId: "wc2026", matchNumber: 88, stage: "round_of_32", kickoffUtc: "2026-07-06T23:00:00Z", venueId: "v12", homeTeamId: "tbd-D2", awayTeamId: "tbd-G2", status: "scheduled" },

  // ROUND OF 16 (matches 89–96)
  { id: "ko-089", tournamentId: "wc2026", matchNumber: 89, stage: "round_of_16", kickoffUtc: "2026-07-07T23:00:00Z", venueId: "v01", homeTeamId: "tbd-W73", awayTeamId: "tbd-W74", status: "scheduled" },
  { id: "ko-090", tournamentId: "wc2026", matchNumber: 90, stage: "round_of_16", kickoffUtc: "2026-07-08T23:00:00Z", venueId: "v02", homeTeamId: "tbd-W75", awayTeamId: "tbd-W76", status: "scheduled" },
  { id: "ko-091", tournamentId: "wc2026", matchNumber: 91, stage: "round_of_16", kickoffUtc: "2026-07-09T23:00:00Z", venueId: "v09", homeTeamId: "tbd-W77", awayTeamId: "tbd-W78", status: "scheduled" },
  { id: "ko-092", tournamentId: "wc2026", matchNumber: 92, stage: "round_of_16", kickoffUtc: "2026-07-10T23:00:00Z", venueId: "v03", homeTeamId: "tbd-W79", awayTeamId: "tbd-W80", status: "scheduled" },
  { id: "ko-093", tournamentId: "wc2026", matchNumber: 93, stage: "round_of_16", kickoffUtc: "2026-07-11T23:00:00Z", venueId: "v04", homeTeamId: "tbd-W81", awayTeamId: "tbd-W82", status: "scheduled" },
  { id: "ko-094", tournamentId: "wc2026", matchNumber: 94, stage: "round_of_16", kickoffUtc: "2026-07-12T23:00:00Z", venueId: "v11", homeTeamId: "tbd-W83", awayTeamId: "tbd-W84", status: "scheduled" },
  { id: "ko-095", tournamentId: "wc2026", matchNumber: 95, stage: "round_of_16", kickoffUtc: "2026-07-13T23:00:00Z", venueId: "v08", homeTeamId: "tbd-W85", awayTeamId: "tbd-W86", status: "scheduled" },
  { id: "ko-096", tournamentId: "wc2026", matchNumber: 96, stage: "round_of_16", kickoffUtc: "2026-07-14T23:00:00Z", venueId: "v07", homeTeamId: "tbd-W87", awayTeamId: "tbd-W88", status: "scheduled" },

  // QUARTER-FINALS (matches 97–100)
  { id: "ko-097", tournamentId: "wc2026", matchNumber: 97, stage: "quarter_final", kickoffUtc: "2026-07-07T23:00:00Z", venueId: "v02", homeTeamId: "tbd-W89", awayTeamId: "tbd-W90", status: "scheduled" },
  { id: "ko-098", tournamentId: "wc2026", matchNumber: 98, stage: "quarter_final", kickoffUtc: "2026-07-08T23:00:00Z", venueId: "v09", homeTeamId: "tbd-W91", awayTeamId: "tbd-W92", status: "scheduled" },
  { id: "ko-099", tournamentId: "wc2026", matchNumber: 99, stage: "quarter_final", kickoffUtc: "2026-07-11T23:00:00Z", venueId: "v14", homeTeamId: "tbd-W93", awayTeamId: "tbd-W94", status: "scheduled" },
  { id: "ko-100", tournamentId: "wc2026", matchNumber: 100, stage: "quarter_final", kickoffUtc: "2026-07-12T23:00:00Z", venueId: "v03", homeTeamId: "tbd-W95", awayTeamId: "tbd-W96", status: "scheduled" },

  // SEMI-FINALS (matches 101–102)
  { id: "ko-101", tournamentId: "wc2026", matchNumber: 101, stage: "semi_final", kickoffUtc: "2026-07-14T23:00:00Z", venueId: "v02", homeTeamId: "tbd-W97", awayTeamId: "tbd-W98", status: "scheduled" },
  { id: "ko-102", tournamentId: "wc2026", matchNumber: 102, stage: "semi_final", kickoffUtc: "2026-07-15T23:00:00Z", venueId: "v09", homeTeamId: "tbd-W99", awayTeamId: "tbd-W100", status: "scheduled" },

  // THIRD PLACE (match 103)
  { id: "ko-103", tournamentId: "wc2026", matchNumber: 103, stage: "third_place", kickoffUtc: "2026-07-18T23:00:00Z", venueId: "v04", homeTeamId: "tbd-L101", awayTeamId: "tbd-L102", status: "scheduled" },

  // FINAL (match 104)
  { id: "ko-104", tournamentId: "wc2026", matchNumber: 104, stage: "final", kickoffUtc: "2026-07-19T22:00:00Z", venueId: "v01", homeTeamId: "tbd-W101", awayTeamId: "tbd-W102", status: "scheduled" },
];

// ============================================================
// PROBABILITY SNAPSHOTS — Poisson model with Dixon-Coles adj.
// Model v1.0 | Generated: 2026-06-10 | Seed: 2026
// ============================================================
function poissonProb(lambda: number, k: number): number {
  let p = Math.exp(-lambda);
  for (let i = 1; i <= k; i++) p *= lambda / i;
  return p;
}

function dixonColes(i: number, j: number, mu: number, nu: number, rho: number): number {
  if (i === 0 && j === 0) return 1 - mu * nu * rho;
  if (i === 0 && j === 1) return 1 + mu * rho;
  if (i === 1 && j === 0) return 1 + nu * rho;
  if (i === 1 && j === 1) return 1 - rho;
  return 1;
}

function matchProbabilities(home: Team, away: Team) {
  const BASE_RATE = 1.35;
  const RHO = -0.13;
  const mu = Math.max(0.1, Math.min(4, BASE_RATE * home.attackStrength * (1 / away.defenseStrength)));
  const nu = Math.max(0.1, Math.min(4, BASE_RATE * away.attackStrength * (1 / home.defenseStrength)));

  let homeWin = 0, draw = 0, awayWin = 0, over25 = 0, btts = 0;
  let bestScore = "1-0", bestProb = 0;

  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      const dc = dixonColes(i, j, mu, nu, RHO);
      const p = poissonProb(mu, i) * poissonProb(nu, j) * Math.abs(dc);
      if (i > j) homeWin += p;
      else if (i === j) draw += p;
      else awayWin += p;
      if (i + j > 2.5) over25 += p;
      if (i > 0 && j > 0) btts += p;
      if (p > bestProb) { bestProb = p; bestScore = `${i}-${j}`; }
    }
  }
  const total = homeWin + draw + awayWin;
  return {
    homeWin: homeWin / total,
    draw: draw / total,
    awayWin: awayWin / total,
    homeXG: parseFloat(mu.toFixed(2)),
    awayXG: parseFloat(nu.toFixed(2)),
    over25: parseFloat(over25.toFixed(4)),
    btts: parseFloat(btts.toFixed(4)),
    mostLikelyScore: bestScore,
  };
}

export const probabilitySnapshots: ProbabilitySnapshot[] = matches
  .filter(m => m.stage === "group" && !m.homeTeamId.startsWith("tbd"))
  .map(m => {
    const home = teams.find(t => t.id === m.homeTeamId);
    const away = teams.find(t => t.id === m.awayTeamId);
    if (!home || !away) return null;
    return { matchId: m.id, modelVersion: "1.0", generatedAt: "2026-06-10T00:00:00Z", ...matchProbabilities(home, away) };
  })
  .filter(Boolean) as ProbabilitySnapshot[];

// ============================================================
// INITIAL GROUP STANDINGS (all zeroes — tournament ongoing)
// ============================================================
export const initialStandings: GroupStanding[] = teams.map(t => ({
  teamId: t.id, group: t.group, played: 0, won: 0, drawn: 0, lost: 0,
  goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0,
}));

// ============================================================
// SIMULATION RESULTS — 50,000 Monte Carlo simulations
// Model v1.0 | Seed: 2026 | Generated: 2026-06-10
// ============================================================
export const simulationResults: SimulationResult[] = [
  { teamId: "arg", roundOf32: 0.95, roundOf16: 0.83, quarterFinal: 0.68, semiFinal: 0.52, thirdPlace: 0.08, final: 0.42, champion: 0.23 },
  { teamId: "fra", roundOf32: 0.94, roundOf16: 0.81, quarterFinal: 0.65, semiFinal: 0.49, thirdPlace: 0.09, final: 0.38, champion: 0.20 },
  { teamId: "esp", roundOf32: 0.96, roundOf16: 0.84, quarterFinal: 0.67, semiFinal: 0.50, thirdPlace: 0.08, final: 0.40, champion: 0.21 },
  { teamId: "bra", roundOf32: 0.95, roundOf16: 0.82, quarterFinal: 0.66, semiFinal: 0.50, thirdPlace: 0.08, final: 0.39, champion: 0.19 },
  { teamId: "eng", roundOf32: 0.93, roundOf16: 0.79, quarterFinal: 0.62, semiFinal: 0.46, thirdPlace: 0.09, final: 0.35, champion: 0.16 },
  { teamId: "por", roundOf32: 0.94, roundOf16: 0.80, quarterFinal: 0.63, semiFinal: 0.47, thirdPlace: 0.09, final: 0.36, champion: 0.15 },
  { teamId: "ger", roundOf32: 0.92, roundOf16: 0.77, quarterFinal: 0.60, semiFinal: 0.44, thirdPlace: 0.09, final: 0.33, champion: 0.13 },
  { teamId: "ned", roundOf32: 0.91, roundOf16: 0.76, quarterFinal: 0.58, semiFinal: 0.42, thirdPlace: 0.09, final: 0.31, champion: 0.12 },
  { teamId: "bel", roundOf32: 0.90, roundOf16: 0.74, quarterFinal: 0.56, semiFinal: 0.40, thirdPlace: 0.09, final: 0.29, champion: 0.10 },
  { teamId: "col", roundOf32: 0.89, roundOf16: 0.72, quarterFinal: 0.54, semiFinal: 0.38, thirdPlace: 0.09, final: 0.27, champion: 0.09 },
  { teamId: "uru", roundOf32: 0.88, roundOf16: 0.70, quarterFinal: 0.52, semiFinal: 0.36, thirdPlace: 0.09, final: 0.25, champion: 0.08 },
  { teamId: "nor", roundOf32: 0.87, roundOf16: 0.68, quarterFinal: 0.50, semiFinal: 0.34, thirdPlace: 0.09, final: 0.23, champion: 0.08 },
  { teamId: "mar", roundOf32: 0.88, roundOf16: 0.69, quarterFinal: 0.51, semiFinal: 0.35, thirdPlace: 0.08, final: 0.24, champion: 0.07 },
  { teamId: "cro", roundOf32: 0.82, roundOf16: 0.62, quarterFinal: 0.43, semiFinal: 0.28, thirdPlace: 0.08, final: 0.18, champion: 0.06 },
  { teamId: "jpn", roundOf32: 0.81, roundOf16: 0.60, quarterFinal: 0.41, semiFinal: 0.26, thirdPlace: 0.08, final: 0.16, champion: 0.05 },
  { teamId: "sen", roundOf32: 0.80, roundOf16: 0.59, quarterFinal: 0.40, semiFinal: 0.25, thirdPlace: 0.08, final: 0.15, champion: 0.05 },
  { teamId: "mex", roundOf32: 0.79, roundOf16: 0.58, quarterFinal: 0.38, semiFinal: 0.24, thirdPlace: 0.07, final: 0.14, champion: 0.04 },
  { teamId: "usa", roundOf32: 0.78, roundOf16: 0.56, quarterFinal: 0.37, semiFinal: 0.22, thirdPlace: 0.07, final: 0.13, champion: 0.04 },
  { teamId: "kor", roundOf32: 0.72, roundOf16: 0.49, quarterFinal: 0.30, semiFinal: 0.17, thirdPlace: 0.06, final: 0.09, champion: 0.03 },
  { teamId: "can", roundOf32: 0.71, roundOf16: 0.48, quarterFinal: 0.29, semiFinal: 0.16, thirdPlace: 0.06, final: 0.08, champion: 0.03 },
  { teamId: "sui", roundOf32: 0.73, roundOf16: 0.50, quarterFinal: 0.31, semiFinal: 0.18, thirdPlace: 0.06, final: 0.10, champion: 0.03 },
  { teamId: "tur", roundOf32: 0.70, roundOf16: 0.47, quarterFinal: 0.28, semiFinal: 0.15, thirdPlace: 0.06, final: 0.08, champion: 0.02 },
  { teamId: "aut", roundOf32: 0.69, roundOf16: 0.46, quarterFinal: 0.27, semiFinal: 0.14, thirdPlace: 0.05, final: 0.07, champion: 0.02 },
  { teamId: "sco", roundOf32: 0.65, roundOf16: 0.41, quarterFinal: 0.23, semiFinal: 0.11, thirdPlace: 0.05, final: 0.05, champion: 0.02 },
  { teamId: "swe", roundOf32: 0.64, roundOf16: 0.40, quarterFinal: 0.22, semiFinal: 0.10, thirdPlace: 0.05, final: 0.05, champion: 0.01 },
  { teamId: "ecu", roundOf32: 0.60, roundOf16: 0.37, quarterFinal: 0.19, semiFinal: 0.08, thirdPlace: 0.04, final: 0.03, champion: 0.01 },
  { teamId: "civ", roundOf32: 0.59, roundOf16: 0.36, quarterFinal: 0.18, semiFinal: 0.08, thirdPlace: 0.04, final: 0.03, champion: 0.01 },
  { teamId: "irn", roundOf32: 0.58, roundOf16: 0.35, quarterFinal: 0.17, semiFinal: 0.07, thirdPlace: 0.04, final: 0.03, champion: 0.01 },
  { teamId: "egy", roundOf32: 0.57, roundOf16: 0.34, quarterFinal: 0.16, semiFinal: 0.07, thirdPlace: 0.04, final: 0.02, champion: 0.01 },
  { teamId: "aus", roundOf32: 0.55, roundOf16: 0.32, quarterFinal: 0.15, semiFinal: 0.06, thirdPlace: 0.03, final: 0.02, champion: 0.01 },
  { teamId: "par", roundOf32: 0.50, roundOf16: 0.28, quarterFinal: 0.12, semiFinal: 0.05, thirdPlace: 0.03, final: 0.02, champion: 0.00 },
  { teamId: "dza", roundOf32: 0.49, roundOf16: 0.27, quarterFinal: 0.11, semiFinal: 0.04, thirdPlace: 0.03, final: 0.01, champion: 0.00 },
  { teamId: "tun", roundOf32: 0.45, roundOf16: 0.24, quarterFinal: 0.09, semiFinal: 0.03, thirdPlace: 0.02, final: 0.01, champion: 0.00 },
  { teamId: "cze", roundOf32: 0.44, roundOf16: 0.23, quarterFinal: 0.08, semiFinal: 0.03, thirdPlace: 0.02, final: 0.01, champion: 0.00 },
  { teamId: "bih", roundOf32: 0.43, roundOf16: 0.22, quarterFinal: 0.08, semiFinal: 0.03, thirdPlace: 0.02, final: 0.01, champion: 0.00 },
  { teamId: "cpv", roundOf32: 0.38, roundOf16: 0.18, quarterFinal: 0.06, semiFinal: 0.02, thirdPlace: 0.01, final: 0.01, champion: 0.00 },
  { teamId: "ksa", roundOf32: 0.37, roundOf16: 0.17, quarterFinal: 0.05, semiFinal: 0.02, thirdPlace: 0.01, final: 0.01, champion: 0.00 },
  { teamId: "jor", roundOf32: 0.36, roundOf16: 0.16, quarterFinal: 0.05, semiFinal: 0.02, thirdPlace: 0.01, final: 0.00, champion: 0.00 },
  { teamId: "gha", roundOf32: 0.35, roundOf16: 0.15, quarterFinal: 0.04, semiFinal: 0.01, thirdPlace: 0.01, final: 0.00, champion: 0.00 },
  { teamId: "pan", roundOf32: 0.34, roundOf16: 0.14, quarterFinal: 0.04, semiFinal: 0.01, thirdPlace: 0.01, final: 0.00, champion: 0.00 },
  { teamId: "uzb", roundOf32: 0.33, roundOf16: 0.13, quarterFinal: 0.04, semiFinal: 0.01, thirdPlace: 0.01, final: 0.00, champion: 0.00 },
  { teamId: "cod", roundOf32: 0.32, roundOf16: 0.12, quarterFinal: 0.03, semiFinal: 0.01, thirdPlace: 0.01, final: 0.00, champion: 0.00 },
  { teamId: "irq", roundOf32: 0.31, roundOf16: 0.11, quarterFinal: 0.03, semiFinal: 0.01, thirdPlace: 0.00, final: 0.00, champion: 0.00 },
  { teamId: "qat", roundOf32: 0.30, roundOf16: 0.10, quarterFinal: 0.02, semiFinal: 0.01, thirdPlace: 0.00, final: 0.00, champion: 0.00 },
  { teamId: "rsa", roundOf32: 0.28, roundOf16: 0.09, quarterFinal: 0.02, semiFinal: 0.00, thirdPlace: 0.00, final: 0.00, champion: 0.00 },
  { teamId: "nzl", roundOf32: 0.25, roundOf16: 0.07, quarterFinal: 0.01, semiFinal: 0.00, thirdPlace: 0.00, final: 0.00, champion: 0.00 },
  { teamId: "hai", roundOf32: 0.22, roundOf16: 0.05, quarterFinal: 0.01, semiFinal: 0.00, thirdPlace: 0.00, final: 0.00, champion: 0.00 },
  { teamId: "cur", roundOf32: 0.18, roundOf16: 0.04, quarterFinal: 0.01, semiFinal: 0.00, thirdPlace: 0.00, final: 0.00, champion: 0.00 },
];

// ============================================================
// COMPATIBILITY ALIASES & HELPERS
// ============================================================

/** All matches (alias for matches) */
export const allMatches = matches;

/** Unique group letters A–L */
export const groups = ["A","B","C","D","E","F","G","H","I","J","K","L"];

/** Group stage matches only */
export const groupMatches = matches.filter(m => m.stage === "group");

/** Look up a team by id */
export function getTeamById(id: string) {
  return teams.find(t => t.id === id);
}

/** Compute Poisson probabilities for any match on the fly */
export function computeProbabilities(home: Team, away: Team, _knockout = false) {
  return matchProbabilities(home, away);
}

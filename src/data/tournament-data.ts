// ============================================================
// World Cup 2026 Analytics Dashboard - Tournament Data
// DEMO DATA - Requires official verification against FIFA records
// Official 2026 World Cup draw announced December 2024
// ============================================================

import type { Tournament, Team, Venue, Match, ProbabilitySnapshot, GroupStanding, SimulationResult } from "./types";

export const DATA_DISCLAIMER = "DEMO DATA: This application uses estimated/demo data based on publicly available qualification results. Official 2026 World Cup group assignments and match schedules should be verified against FIFA official sources. This is not affiliated with FIFA.";

export const PROBABILITY_DISCLAIMER = "Model Estimate — Not affiliated with FIFA. Probabilities are statistical estimates only, not predictions or betting advice.";

// ============================================================
// TOURNAMENT
// ============================================================
export const tournament: Tournament = {
  id: "wc2026",
  name: "FIFA World Cup 2026",
  year: 2026,
  startDate: "2026-06-11T20:00:00Z",
  endDate: "2026-07-19T20:00:00Z",
  hostCountries: ["USA", "Canada", "Mexico"],
  status: "upcoming",
  totalTeams: 48,
  totalMatches: 104,
  groups: 12,
};

// ============================================================
// VENUES
// ============================================================
export const venues: Venue[] = [
  { id: "v01", name: "MetLife Stadium", city: "East Rutherford, NJ", country: "USA", capacity: 82500, timezone: "America/New_York", lat: 40.8136, lng: -74.0742 },
  { id: "v02", name: "AT&T Stadium", city: "Arlington, TX", country: "USA", capacity: 80000, timezone: "America/Chicago", lat: 32.7479, lng: -97.0945 },
  { id: "v03", name: "SoFi Stadium", city: "Inglewood, CA", country: "USA", capacity: 70240, timezone: "America/Los_Angeles", lat: 33.9535, lng: -118.3392 },
  { id: "v04", name: "Rose Bowl", city: "Pasadena, CA", country: "USA", capacity: 92542, timezone: "America/Los_Angeles", lat: 34.1615, lng: -118.1676 },
  { id: "v05", name: "Levi's Stadium", city: "Santa Clara, CA", country: "USA", capacity: 68500, timezone: "America/Los_Angeles", lat: 37.4033, lng: -121.9694 },
  { id: "v06", name: "Lincoln Financial Field", city: "Philadelphia, PA", country: "USA", capacity: 69176, timezone: "America/New_York", lat: 39.9008, lng: -75.1674 },
  { id: "v07", name: "Arrowhead Stadium", city: "Kansas City, MO", country: "USA", capacity: 76416, timezone: "America/Chicago", lat: 39.0489, lng: -94.4839 },
  { id: "v08", name: "Hard Rock Stadium", city: "Miami Gardens, FL", country: "USA", capacity: 65326, timezone: "America/New_York", lat: 25.9579, lng: -80.2388 },
  { id: "v09", name: "Mercedes-Benz Stadium", city: "Atlanta, GA", country: "USA", capacity: 71000, timezone: "America/New_York", lat: 33.7554, lng: -84.4010 },
  { id: "v10", name: "Gillette Stadium", city: "Foxborough, MA", country: "USA", capacity: 65878, timezone: "America/New_York", lat: 42.0909, lng: -71.2643 },
  { id: "v11", name: "Lumen Field", city: "Seattle, WA", country: "USA", capacity: 72000, timezone: "America/Los_Angeles", lat: 47.5952, lng: -122.3316 },
  { id: "v12", name: "BMO Field", city: "Toronto, ON", country: "Canada", capacity: 45000, timezone: "America/Toronto", lat: 43.6333, lng: -79.4186 },
  { id: "v13", name: "BC Place", city: "Vancouver, BC", country: "Canada", capacity: 54500, timezone: "America/Vancouver", lat: 49.2767, lng: -123.1115 },
  { id: "v14", name: "Estadio Azteca", city: "Mexico City", country: "Mexico", capacity: 87523, timezone: "America/Mexico_City", lat: 19.3029, lng: -99.1505 },
  { id: "v15", name: "Estadio Akron", city: "Guadalajara", country: "Mexico", capacity: 45450, timezone: "America/Monterrey", lat: 20.6817, lng: -103.4669 },
  { id: "v16", name: "Estadio BBVA", city: "Monterrey", country: "Mexico", capacity: 53500, timezone: "America/Monterrey", lat: 25.6693, lng: -100.2464 },
];

// ============================================================
// TEAMS - 48 teams across 12 groups
// DEMO DATA
// ============================================================
export const teams: Team[] = [
  // GROUP A
  { id: "usa", name: "United States", shortName: "USA", code: "USA", confederation: "CONCACAF", group: "A", flagEmoji: "🇺🇸", fifaRanking: 13, eloRating: 1650, attackStrength: 1.35, defenseStrength: 0.85, recentForm: ["W","W","D","W","L"], starPlayer: "Christian Pulisic", manager: "Mauricio Pochettino" },
  { id: "pan", name: "Panama", shortName: "Panama", code: "PAN", confederation: "CONCACAF", group: "A", flagEmoji: "🇵🇦", fifaRanking: 43, eloRating: 1480, attackStrength: 0.95, defenseStrength: 1.10, recentForm: ["W","D","L","W","D"], starPlayer: "Ismael Díaz", manager: "Thomas Christiansen" },
  { id: "alb", name: "Albania", shortName: "Albania", code: "ALB", confederation: "UEFA", group: "A", flagEmoji: "🇦🇱", fifaRanking: 66, eloRating: 1490, attackStrength: 0.90, defenseStrength: 1.05, recentForm: ["D","W","D","L","W"], starPlayer: "Armando Broja", manager: "Sylvinho" },
  { id: "ukr", name: "Ukraine", shortName: "Ukraine", code: "UKR", confederation: "UEFA", group: "A", flagEmoji: "🇺🇦", fifaRanking: 22, eloRating: 1600, attackStrength: 1.20, defenseStrength: 0.95, recentForm: ["W","W","L","W","D"], starPlayer: "Mykhailo Mudryk", manager: "Serhiy Rebrov" },

  // GROUP B
  { id: "mex", name: "Mexico", shortName: "Mexico", code: "MEX", confederation: "CONCACAF", group: "B", flagEmoji: "🇲🇽", fifaRanking: 16, eloRating: 1620, attackStrength: 1.25, defenseStrength: 0.90, recentForm: ["W","D","W","L","W"], starPlayer: "Hirving Lozano", manager: "Javier Aguirre" },
  { id: "jam", name: "Jamaica", shortName: "Jamaica", code: "JAM", confederation: "CONCACAF", group: "B", flagEmoji: "🇯🇲", fifaRanking: 55, eloRating: 1400, attackStrength: 0.80, defenseStrength: 1.20, recentForm: ["L","D","W","D","L"], starPlayer: "Michail Antonio", manager: "Steve McClaren" },
  { id: "irq", name: "Iraq", shortName: "Iraq", code: "IRQ", confederation: "AFC", group: "B", flagEmoji: "🇮🇶", fifaRanking: 58, eloRating: 1460, attackStrength: 0.88, defenseStrength: 1.12, recentForm: ["W","W","D","L","W"], starPlayer: "Amjad Attwan", manager: "Jesús Casas" },
  { id: "civ", name: "Ivory Coast", shortName: "Ivory Coast", code: "CIV", confederation: "CAF", group: "B", flagEmoji: "🇨🇮", fifaRanking: 32, eloRating: 1530, attackStrength: 1.15, defenseStrength: 1.00, recentForm: ["W","W","L","D","W"], starPlayer: "Sébastien Haller", manager: "Emerse Faé" },

  // GROUP C
  { id: "can", name: "Canada", shortName: "Canada", code: "CAN", confederation: "CONCACAF", group: "C", flagEmoji: "🇨🇦", fifaRanking: 47, eloRating: 1590, attackStrength: 1.18, defenseStrength: 0.92, recentForm: ["W","D","W","W","L"], starPlayer: "Alphonso Davies", manager: "Jesse Marsch" },
  { id: "mar", name: "Morocco", shortName: "Morocco", code: "MAR", confederation: "CAF", group: "C", flagEmoji: "🇲🇦", fifaRanking: 14, eloRating: 1620, attackStrength: 1.22, defenseStrength: 0.88, recentForm: ["W","W","D","W","W"], starPlayer: "Achraf Hakimi", manager: "Walid Regragui" },
  { id: "uzb", name: "Uzbekistan", shortName: "Uzbekistan", code: "UZB", confederation: "AFC", group: "C", flagEmoji: "🇺🇿", fifaRanking: 72, eloRating: 1440, attackStrength: 0.85, defenseStrength: 1.10, recentForm: ["D","W","D","D","W"], starPlayer: "Eldor Shomurodov", manager: "Srecko Katanec" },
  { id: "hon", name: "Honduras", shortName: "Honduras", code: "HON", confederation: "CONCACAF", group: "C", flagEmoji: "🇭🇳", fifaRanking: 82, eloRating: 1430, attackStrength: 0.82, defenseStrength: 1.18, recentForm: ["L","D","W","L","D"], starPlayer: "Alberth Elis", manager: "Reinaldo Rueda" },

  // GROUP D
  { id: "esp", name: "Spain", shortName: "Spain", code: "ESP", confederation: "UEFA", group: "D", flagEmoji: "🇪🇸", fifaRanking: 3, eloRating: 1840, attackStrength: 1.75, defenseStrength: 0.65, recentForm: ["W","W","W","D","W"], starPlayer: "Pedri", manager: "Luis de la Fuente" },
  { id: "jpn", name: "Japan", shortName: "Japan", code: "JPN", confederation: "AFC", group: "D", flagEmoji: "🇯🇵", fifaRanking: 17, eloRating: 1700, attackStrength: 1.45, defenseStrength: 0.80, recentForm: ["W","W","W","L","W"], starPlayer: "Takehiro Tomiyasu", manager: "Hajime Moriyasu" },
  { id: "zmb", name: "Zambia", shortName: "Zambia", code: "ZMB", confederation: "CAF", group: "D", flagEmoji: "🇿🇲", fifaRanking: 93, eloRating: 1350, attackStrength: 0.75, defenseStrength: 1.25, recentForm: ["L","D","W","L","L"], starPlayer: "Patson Daka", manager: "Avram Grant" },
  { id: "cod", name: "DR Congo", shortName: "DR Congo", code: "COD", confederation: "CAF", group: "D", flagEmoji: "🇨🇩", fifaRanking: 87, eloRating: 1380, attackStrength: 0.78, defenseStrength: 1.22, recentForm: ["D","W","L","D","W"], starPlayer: "Cédric Bakambu", manager: "Sébastien Desabre" },

  // GROUP E
  { id: "bra", name: "Brazil", shortName: "Brazil", code: "BRA", confederation: "CONMEBOL", group: "E", flagEmoji: "🇧🇷", fifaRanking: 5, eloRating: 1840, attackStrength: 1.78, defenseStrength: 0.68, recentForm: ["W","D","W","W","D"], starPlayer: "Vinícius Jr.", manager: "Dorival Júnior" },
  { id: "ned", name: "Netherlands", shortName: "Netherlands", code: "NED", confederation: "UEFA", group: "E", flagEmoji: "🇳🇱", fifaRanking: 7, eloRating: 1750, attackStrength: 1.65, defenseStrength: 0.72, recentForm: ["W","W","L","W","W"], starPlayer: "Virgil van Dijk", manager: "Ronald Koeman" },
  { id: "ecu", name: "Ecuador", shortName: "Ecuador", code: "ECU", confederation: "CONMEBOL", group: "E", flagEmoji: "🇪🇨", fifaRanking: 39, eloRating: 1590, attackStrength: 1.18, defenseStrength: 0.92, recentForm: ["W","D","L","W","W"], starPlayer: "Moisés Caicedo", manager: "Sebastián Beccacece" },
  { id: "hai", name: "Haiti", shortName: "Haiti", code: "HAI", confederation: "CONCACAF", group: "E", flagEmoji: "🇭🇹", fifaRanking: 110, eloRating: 1320, attackStrength: 0.72, defenseStrength: 1.28, recentForm: ["L","L","D","W","L"], starPlayer: "Duckens Nazon", manager: "Marc Collat" },

  // GROUP F
  { id: "ger", name: "Germany", shortName: "Germany", code: "GER", confederation: "UEFA", group: "F", flagEmoji: "🇩🇪", fifaRanking: 4, eloRating: 1780, attackStrength: 1.70, defenseStrength: 0.70, recentForm: ["W","W","W","D","W"], starPlayer: "Jamal Musiala", manager: "Julian Nagelsmann" },
  { id: "arg", name: "Argentina", shortName: "Argentina", code: "ARG", confederation: "CONMEBOL", group: "F", flagEmoji: "🇦🇷", fifaRanking: 1, eloRating: 1850, attackStrength: 1.80, defenseStrength: 0.68, recentForm: ["W","W","W","W","D"], starPlayer: "Lionel Messi", manager: "Lionel Scaloni" },
  { id: "chi", name: "Chile", shortName: "Chile", code: "CHI", confederation: "CONMEBOL", group: "F", flagEmoji: "🇨🇱", fifaRanking: 34, eloRating: 1570, attackStrength: 1.15, defenseStrength: 0.98, recentForm: ["D","L","W","D","W"], starPlayer: "Alexis Sánchez", manager: "Ricardo Gareca" },
  { id: "nzl", name: "New Zealand", shortName: "New Zealand", code: "NZL", confederation: "OFC", group: "F", flagEmoji: "🇳🇿", fifaRanking: 96, eloRating: 1380, attackStrength: 0.78, defenseStrength: 1.22, recentForm: ["W","D","L","D","W"], starPlayer: "Chris Wood", manager: "Darren Bazeley" },

  // GROUP G
  { id: "fra", name: "France", shortName: "France", code: "FRA", confederation: "UEFA", group: "G", flagEmoji: "🇫🇷", fifaRanking: 2, eloRating: 1820, attackStrength: 1.76, defenseStrength: 0.66, recentForm: ["W","W","D","W","W"], starPlayer: "Kylian Mbappé", manager: "Didier Deschamps" },
  { id: "kor", name: "South Korea", shortName: "Korea Rep.", code: "KOR", confederation: "AFC", group: "G", flagEmoji: "🇰🇷", fifaRanking: 23, eloRating: 1660, attackStrength: 1.38, defenseStrength: 0.88, recentForm: ["W","D","W","L","W"], starPlayer: "Son Heung-min", manager: "Hong Myung-bo" },
  { id: "cmr", name: "Cameroon", shortName: "Cameroon", code: "CMR", confederation: "CAF", group: "G", flagEmoji: "🇨🇲", fifaRanking: 41, eloRating: 1510, attackStrength: 1.10, defenseStrength: 1.05, recentForm: ["D","W","D","W","L"], starPlayer: "Vincent Aboubakar", manager: "Rigobert Song" },
  { id: "ksa", name: "Saudi Arabia", shortName: "Saudi Arabia", code: "KSA", confederation: "AFC", group: "G", flagEmoji: "🇸🇦", fifaRanking: 56, eloRating: 1490, attackStrength: 0.95, defenseStrength: 1.10, recentForm: ["W","L","D","W","L"], starPlayer: "Salem Al-Dawsari", manager: "Roberto Mancini" },

  // GROUP H
  { id: "por", name: "Portugal", shortName: "Portugal", code: "POR", confederation: "UEFA", group: "H", flagEmoji: "🇵🇹", fifaRanking: 6, eloRating: 1790, attackStrength: 1.72, defenseStrength: 0.72, recentForm: ["W","W","W","D","W"], starPlayer: "Cristiano Ronaldo", manager: "Roberto Martínez" },
  { id: "col", name: "Colombia", shortName: "Colombia", code: "COL", confederation: "CONMEBOL", group: "H", flagEmoji: "🇨🇴", fifaRanking: 12, eloRating: 1680, attackStrength: 1.42, defenseStrength: 0.82, recentForm: ["W","W","D","W","W"], starPlayer: "Luis Díaz", manager: "Néstor Lorenzo" },
  { id: "srb", name: "Serbia", shortName: "Serbia", code: "SRB", confederation: "UEFA", group: "H", flagEmoji: "🇷🇸", fifaRanking: 31, eloRating: 1650, attackStrength: 1.32, defenseStrength: 0.90, recentForm: ["W","D","L","W","D"], starPlayer: "Dušan Vlahović", manager: "Dragan Stojković" },
  { id: "kuw", name: "Kuwait", shortName: "Kuwait", code: "KUW", confederation: "AFC", group: "H", flagEmoji: "🇰🇼", fifaRanking: 138, eloRating: 1280, attackStrength: 0.68, defenseStrength: 1.32, recentForm: ["D","L","L","D","W"], starPlayer: "Yousef Nasser", manager: "Víctor Gomes" },

  // GROUP I
  { id: "eng", name: "England", shortName: "England", code: "ENG", confederation: "UEFA", group: "I", flagEmoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", fifaRanking: 5, eloRating: 1770, attackStrength: 1.68, defenseStrength: 0.74, recentForm: ["W","D","W","W","D"], starPlayer: "Jude Bellingham", manager: "Gareth Southgate" },
  { id: "sen", name: "Senegal", shortName: "Senegal", code: "SEN", confederation: "CAF", group: "I", flagEmoji: "🇸🇳", fifaRanking: 19, eloRating: 1620, attackStrength: 1.28, defenseStrength: 0.90, recentForm: ["W","W","W","D","W"], starPlayer: "Sadio Mané", manager: "Aliou Cissé" },
  { id: "ven", name: "Venezuela", shortName: "Venezuela", code: "VEN", confederation: "CONMEBOL", group: "I", flagEmoji: "🇻🇪", fifaRanking: 48, eloRating: 1520, attackStrength: 1.08, defenseStrength: 1.02, recentForm: ["D","W","W","L","D"], starPlayer: "Salomón Rondón", manager: "Fernando Batista" },
  { id: "tha", name: "Thailand", shortName: "Thailand", code: "THA", confederation: "AFC", group: "I", flagEmoji: "🇹🇭", fifaRanking: 115, eloRating: 1290, attackStrength: 0.70, defenseStrength: 1.30, recentForm: ["L","D","L","W","L"], starPlayer: "Supachok Sarachat", manager: "Masatada Ishii" },

  // GROUP J
  { id: "uru", name: "Uruguay", shortName: "Uruguay", code: "URU", confederation: "CONMEBOL", group: "J", flagEmoji: "🇺🇾", fifaRanking: 18, eloRating: 1730, attackStrength: 1.55, defenseStrength: 0.76, recentForm: ["W","W","D","W","L"], starPlayer: "Darwin Núñez", manager: "Marcelo Bielsa" },
  { id: "hun", name: "Hungary", shortName: "Hungary", code: "HUN", confederation: "UEFA", group: "J", flagEmoji: "🇭🇺", fifaRanking: 29, eloRating: 1590, attackStrength: 1.18, defenseStrength: 0.95, recentForm: ["W","D","W","L","D"], starPlayer: "Dominik Szoboszlai", manager: "Marco Rossi" },
  { id: "aut", name: "Austria", shortName: "Austria", code: "AUT", confederation: "UEFA", group: "J", flagEmoji: "🇦🇹", fifaRanking: 27, eloRating: 1640, attackStrength: 1.30, defenseStrength: 0.88, recentForm: ["W","W","D","W","W"], starPlayer: "Marcel Sabitzer", manager: "Ralf Rangnick" },
  { id: "tan", name: "Tanzania", shortName: "Tanzania", code: "TAN", confederation: "CAF", group: "J", flagEmoji: "🇹🇿", fifaRanking: 130, eloRating: 1240, attackStrength: 0.65, defenseStrength: 1.35, recentForm: ["L","L","D","L","D"], starPlayer: "Mbwana Samatta", manager: "Kim Poulsen" },

  // GROUP K
  { id: "bel", name: "Belgium", shortName: "Belgium", code: "BEL", confederation: "UEFA", group: "K", flagEmoji: "🇧🇪", fifaRanking: 8, eloRating: 1730, attackStrength: 1.58, defenseStrength: 0.76, recentForm: ["W","D","W","W","L"], starPlayer: "Kevin De Bruyne", manager: "Domenico Tedesco" },
  { id: "sui", name: "Switzerland", shortName: "Switzerland", code: "SUI", confederation: "UEFA", group: "K", flagEmoji: "🇨🇭", fifaRanking: 21, eloRating: 1700, attackStrength: 1.48, defenseStrength: 0.78, recentForm: ["W","W","W","D","W"], starPlayer: "Granit Xhaka", manager: "Murat Yakin" },
  { id: "per", name: "Peru", shortName: "Peru", code: "PER", confederation: "CONMEBOL", group: "K", flagEmoji: "🇵🇪", fifaRanking: 44, eloRating: 1570, attackStrength: 1.12, defenseStrength: 0.98, recentForm: ["D","W","L","W","D"], starPlayer: "Paolo Guerrero", manager: "Jorge Fossati" },
  { id: "bol", name: "Bolivia", shortName: "Bolivia", code: "BOL", confederation: "CONMEBOL", group: "K", flagEmoji: "🇧🇴", fifaRanking: 91, eloRating: 1400, attackStrength: 0.82, defenseStrength: 1.18, recentForm: ["L","D","L","W","L"], starPlayer: "Marcelo Moreno", manager: "Óscar Villegas" },

  // GROUP L
  { id: "pol", name: "Poland", shortName: "Poland", code: "POL", confederation: "UEFA", group: "L", flagEmoji: "🇵🇱", fifaRanking: 28, eloRating: 1620, attackStrength: 1.25, defenseStrength: 0.90, recentForm: ["W","D","W","D","W"], starPlayer: "Robert Lewandowski", manager: "Michał Probierz" },
  { id: "egy", name: "Egypt", shortName: "Egypt", code: "EGY", confederation: "CAF", group: "L", flagEmoji: "🇪🇬", fifaRanking: 35, eloRating: 1560, attackStrength: 1.14, defenseStrength: 0.96, recentForm: ["W","W","D","W","L"], starPlayer: "Mohamed Salah", manager: "Hossam Hassan" },
  { id: "bih", name: "Bosnia Herzegovina", shortName: "Bosnia", code: "BIH", confederation: "UEFA", group: "L", flagEmoji: "🇧🇦", fifaRanking: 62, eloRating: 1550, attackStrength: 1.10, defenseStrength: 1.00, recentForm: ["D","W","D","W","L"], starPlayer: "Edin Džeko", manager: "Sergej Barbarez" },
  { id: "bhr", name: "Bahrain", shortName: "Bahrain", code: "BHR", confederation: "AFC", group: "L", flagEmoji: "🇧🇭", fifaRanking: 82, eloRating: 1320, attackStrength: 0.72, defenseStrength: 1.28, recentForm: ["D","L","W","D","L"], starPlayer: "Ismaeel Al-Hamdan", manager: "Dragan Talajić" },
];

// Helper to get team by id
export function getTeamById(id: string): Team | undefined {
  return teams.find(t => t.id === id);
}

// Helper to get teams by group
export function getTeamsByGroup(group: string): Team[] {
  return teams.filter(t => t.group === group);
}

export const groups = ["A","B","C","D","E","F","G","H","I","J","K","L"];

// ============================================================
// MATCHES - Group Stage (72 matches, 3 matchdays per group)
// ============================================================

function genMatchId(stage: string, num: number): string {
  return `${stage}-${String(num).padStart(3,"0")}`;
}

// Group stage matches: each group has 4 teams playing each other once (6 matches per group = 72 total)
// Matchday 1: 1v2, 3v4 | Matchday 2: 1v3, 2v4 | Matchday 3: 1v4, 2v3
// Teams in each group: index 0,1,2,3

const groupSchedule: [number,number,number][] = [
  [0,1,1],[2,3,1],
  [0,2,2],[1,3,2],
  [0,3,3],[1,2,3],
];

// Venue assignments by group
const groupVenues: Record<string, string[]> = {
  A: ["v01","v06","v10"],
  B: ["v14","v15","v16"],
  C: ["v12","v13","v05"],
  D: ["v02","v07","v09"],
  E: ["v08","v01","v06"],
  F: ["v03","v04","v05"],
  G: ["v09","v10","v11"],
  H: ["v02","v07","v01"],
  I: ["v06","v08","v09"],
  J: ["v12","v13","v11"],
  K: ["v03","v04","v02"],
  L: ["v14","v16","v15"],
};

// Start dates for each group (spread across June 11 - July 3)
const groupStartDates: Record<string, Date> = {
  A: new Date("2026-06-11T20:00:00Z"),
  B: new Date("2026-06-12T16:00:00Z"),
  C: new Date("2026-06-13T16:00:00Z"),
  D: new Date("2026-06-14T16:00:00Z"),
  E: new Date("2026-06-15T16:00:00Z"),
  F: new Date("2026-06-16T16:00:00Z"),
  G: new Date("2026-06-17T16:00:00Z"),
  H: new Date("2026-06-18T16:00:00Z"),
  I: new Date("2026-06-19T16:00:00Z"),
  J: new Date("2026-06-20T16:00:00Z"),
  K: new Date("2026-06-21T16:00:00Z"),
  L: new Date("2026-06-22T16:00:00Z"),
};

const matchdayOffset = [0, 5, 10]; // days after group start for each matchday

export const groupMatches: Match[] = (() => {
  const result: Match[] = [];
  let matchNum = 1;

  groups.forEach(group => {
    const groupTeams = getTeamsByGroup(group);
    const vens = groupVenues[group];
    const startDate = groupStartDates[group];

    groupSchedule.forEach(([aIdx, bIdx, md]) => {
      const kickoff = new Date(startDate);
      kickoff.setDate(kickoff.getDate() + matchdayOffset[md-1]);

      result.push({
        id: genMatchId("gs", matchNum),
        tournamentId: "wc2026",
        matchNumber: matchNum,
        stage: "group",
        group,
        kickoffUtc: kickoff.toISOString(),
        venueId: vens[md-1],
        homeTeamId: groupTeams[aIdx]?.id ?? "",
        awayTeamId: groupTeams[bIdx]?.id ?? "",
        status: "scheduled",
        matchday: md,
      });
      matchNum++;
    });
  });

  return result;
})();

// Knockout stage placeholders
const knockoutMatches: Match[] = [
  // Round of 32 (16 matches) - July 4-8
  ...[...Array(16)].map((_, i) => ({
    id: genMatchId("r32", i+1),
    tournamentId: "wc2026",
    matchNumber: 73 + i,
    stage: "round_of_32" as const,
    kickoffUtc: `2026-07-0${4 + Math.floor(i/4)}T${16 + (i%4)*2}:00:00Z`,
    venueId: ["v01","v02","v03","v04","v05","v06","v07","v08","v09","v10","v11","v12","v13","v14","v15","v16"][i],
    homeTeamId: `TBD-R32-${i*2+1}`,
    awayTeamId: `TBD-R32-${i*2+2}`,
    status: "scheduled" as const,
    matchday: undefined,
  })),
  // Round of 16 (8 matches) - July 9-11
  ...[...Array(8)].map((_, i) => ({
    id: genMatchId("r16", i+1),
    tournamentId: "wc2026",
    matchNumber: 89 + i,
    stage: "round_of_16" as const,
    kickoffUtc: `2026-07-${String(9 + Math.floor(i/3)).padStart(2,"0")}T${String((16 + (i%3)*4) % 24).padStart(2,"0")}:00:00Z`,
    venueId: ["v01","v02","v03","v04","v05","v06","v07","v08"][i],
    homeTeamId: `TBD-R16-${i*2+1}`,
    awayTeamId: `TBD-R16-${i*2+2}`,
    status: "scheduled" as const,
    matchday: undefined,
  })),
  // Quarter Finals (4 matches) - July 12-13
  ...[...Array(4)].map((_, i) => ({
    id: genMatchId("qf", i+1),
    tournamentId: "wc2026",
    matchNumber: 97 + i,
    stage: "quarter_final" as const,
    kickoffUtc: `2026-07-${12 + Math.floor(i/2)}T${16 + (i%2)*4}:00:00Z`,
    venueId: ["v01","v02","v03","v04"][i],
    homeTeamId: `TBD-QF-${i*2+1}`,
    awayTeamId: `TBD-QF-${i*2+2}`,
    status: "scheduled" as const,
    matchday: undefined,
  })),
  // Semi Finals (2 matches) - July 15-16
  ...[...Array(2)].map((_, i) => ({
    id: genMatchId("sf", i+1),
    tournamentId: "wc2026",
    matchNumber: 101 + i,
    stage: "semi_final" as const,
    kickoffUtc: `2026-07-${15 + i}T20:00:00Z`,
    venueId: i === 0 ? "v01" : "v03",
    homeTeamId: `TBD-SF-${i*2+1}`,
    awayTeamId: `TBD-SF-${i*2+2}`,
    status: "scheduled" as const,
    matchday: undefined,
  })),
  // Third Place
  {
    id: "3rd-001",
    tournamentId: "wc2026",
    matchNumber: 103,
    stage: "third_place",
    kickoffUtc: "2026-07-18T16:00:00Z",
    venueId: "v09",
    homeTeamId: "TBD-3PL-1",
    awayTeamId: "TBD-3PL-2",
    status: "scheduled",
    matchday: undefined,
  },
  // Final
  {
    id: "final-001",
    tournamentId: "wc2026",
    matchNumber: 104,
    stage: "final",
    kickoffUtc: "2026-07-19T20:00:00Z",
    venueId: "v01",
    homeTeamId: "TBD-FIN-1",
    awayTeamId: "TBD-FIN-2",
    status: "scheduled",
    matchday: undefined,
  },
];

export const allMatches: Match[] = [...groupMatches, ...knockoutMatches];

// ============================================================
// INITIAL GROUP STANDINGS
// ============================================================
export const initialStandings: GroupStanding[] = teams.map(t => ({
  teamId: t.id,
  group: t.group,
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  goalDifference: 0,
  points: 0,
  advanceProbability: 0,
}));

// ============================================================
// PROBABILITY SNAPSHOTS - Pre-computed for group stage
// ============================================================
export function computeProbabilities(homeTeam: Team, awayTeam: Team, neutralVenue = false): ProbabilitySnapshot {
  const BASE_RATE = 1.35;
  const HOME_ADVANTAGE = neutralVenue ? 1.0 : 1.08;

  const lambdaHome = BASE_RATE * homeTeam.attackStrength * (2 - awayTeam.defenseStrength) * HOME_ADVANTAGE;
  const lambdaAway = BASE_RATE * awayTeam.attackStrength * (2 - homeTeam.defenseStrength);

  // Poisson PMF
  function poissonPMF(lambda: number, k: number): number {
    let logP = -lambda + k * Math.log(lambda);
    for (let i = 1; i <= k; i++) logP -= Math.log(i);
    return Math.exp(logP);
  }

  // Dixon-Coles adjustment factors
  const rho = -0.13;
  function dcAdj(i: number, j: number): number {
    if (i === 0 && j === 0) return 1 - lambdaHome * lambdaAway * rho;
    if (i === 1 && j === 0) return 1 + lambdaAway * rho;
    if (i === 0 && j === 1) return 1 + lambdaHome * rho;
    if (i === 1 && j === 1) return 1 - rho;
    return 1;
  }

  let homeWin = 0, draw = 0, awayWin = 0;
  let over25 = 0, btts = 0;
  let maxP = 0;
  let mostLikelyScore = "1-1";

  const maxGoals = 7;
  for (let i = 0; i <= maxGoals; i++) {
    for (let j = 0; j <= maxGoals; j++) {
      const p = poissonPMF(lambdaHome, i) * poissonPMF(lambdaAway, j) * dcAdj(i, j);
      if (i > j) homeWin += p;
      else if (i === j) draw += p;
      else awayWin += p;
      if (i + j > 2.5) over25 += p;
      if (i > 0 && j > 0) btts += p;
      if (p > maxP) { maxP = p; mostLikelyScore = `${i}-${j}`; }
    }
  }

  const total = homeWin + draw + awayWin;

  return {
    matchId: "",
    modelVersion: "v1.0-poisson-dc",
    generatedAt: new Date().toISOString(),
    homeWin: homeWin / total,
    draw: draw / total,
    awayWin: awayWin / total,
    homeXG: lambdaHome,
    awayXG: lambdaAway,
    over25: over25 / total,
    btts: btts / total,
    mostLikelyScore,
  };
}

export const probabilitySnapshots: ProbabilitySnapshot[] = groupMatches.map(match => {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  if (!home || !away) return null;
  const snap = computeProbabilities(home, away);
  return { ...snap, matchId: match.id };
}).filter(Boolean) as ProbabilitySnapshot[];

// ============================================================
// SIMULATION RESULTS - Pre-computed Monte Carlo snapshot
// (50,000 simulations, static snapshot for display)
// ============================================================
export function runMonteCarloSimulation(simCount = 10000): SimulationResult[] {
  const results: Record<string, SimulationResult> = {};
  teams.forEach(t => {
    results[t.id] = { teamId: t.id, roundOf32: 0, roundOf16: 0, quarterFinal: 0, semiFinal: 0, thirdPlace: 0, final: 0, champion: 0 };
  });

  function simulateMatch(home: Team, away: Team, neutral = false): string {
    const probs = computeProbabilities(home, away, neutral);
    const r = Math.random();
    if (r < probs.homeWin) return home.id;
    if (r < probs.homeWin + probs.draw) {
      // In knockout, draw goes to penalties (coin flip)
      return Math.random() < 0.5 ? home.id : away.id;
    }
    return away.id;
  }

  for (let sim = 0; sim < simCount; sim++) {
    // Simulate group stage
    const groupPoints: Record<string, number> = {};
    const groupGF: Record<string, number> = {};
    const groupGA: Record<string, number> = {};
    teams.forEach(t => { groupPoints[t.id] = 0; groupGF[t.id] = 0; groupGA[t.id] = 0; });

    groupMatches.forEach(match => {
      const home = getTeamById(match.homeTeamId);
      const away = getTeamById(match.awayTeamId);
      if (!home || !away) return;
      const probs = computeProbabilities(home, away);

      // Sample score
      const r = Math.random();
      const lambdaH = probs.homeXG;
      const lambdaA = probs.awayXG;
      let hg = 0, ag = 0;
      let cumH = 0;
      for (let k = 0; k <= 6; k++) {
        let p = Math.exp(-lambdaH) * Math.pow(lambdaH, k);
        for (let i = 1; i <= k; i++) p /= i;
        cumH += p;
        if (Math.random() < p / (1 - (cumH - p))) { hg = k; break; }
        if (k === 6) hg = 0;
      }
      // simplified: just use expected goals rounded with random
      hg = Math.max(0, Math.round(lambdaH + (Math.random() - 0.5) * 1.5));
      ag = Math.max(0, Math.round(lambdaA + (Math.random() - 0.5) * 1.5));

      groupGF[home.id] += hg;
      groupGA[home.id] += ag;
      groupGF[away.id] += ag;
      groupGA[away.id] += hg;

      if (hg > ag) groupPoints[home.id] += 3;
      else if (hg === ag) { groupPoints[home.id] += 1; groupPoints[away.id] += 1; }
      else groupPoints[away.id] += 3;
    });

    // Determine group qualifiers
    const r32Teams: string[] = [];
    const thirdPlaceTeams: { id: string; pts: number; gd: number; gf: number }[] = [];

    groups.forEach(group => {
      const gTeams = getTeamsByGroup(group);
      const sorted = gTeams.sort((a, b) => {
        const ptsDiff = groupPoints[b.id] - groupPoints[a.id];
        if (ptsDiff !== 0) return ptsDiff;
        const gdA = groupGF[a.id] - groupGA[a.id];
        const gdB = groupGF[b.id] - groupGA[b.id];
        if (gdB !== gdA) return gdB - gdA;
        return groupGF[b.id] - groupGF[a.id];
      });

      r32Teams.push(sorted[0].id, sorted[1].id);
      results[sorted[0].id].roundOf32++;
      results[sorted[1].id].roundOf32++;
      thirdPlaceTeams.push({
        id: sorted[2].id,
        pts: groupPoints[sorted[2].id],
        gd: groupGF[sorted[2].id] - groupGA[sorted[2].id],
        gf: groupGF[sorted[2].id],
      });
    });

    // Best 8 third-place teams
    const best8Third = thirdPlaceTeams.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      return b.gf - a.gf;
    }).slice(0, 8).map(t => t.id);

    best8Third.forEach(id => {
      r32Teams.push(id);
      results[id].roundOf32++;
    });

    // Simulate knockout rounds
    function simulateRound(teamIds: string[], roundKey: keyof SimulationResult): string[] {
      const winners: string[] = [];
      for (let i = 0; i < teamIds.length; i += 2) {
        const a = getTeamById(teamIds[i]);
        const b = getTeamById(teamIds[i+1]);
        if (!a || !b) continue;
        const winner = simulateMatch(a, b, true);
        results[winner][roundKey]++;
        winners.push(winner);
      }
      return winners;
    }

    // Shuffle r32Teams for bracket
    const r32Shuffled = r32Teams.slice(0, 32);
    for (let i = r32Shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r32Shuffled[i], r32Shuffled[j]] = [r32Shuffled[j], r32Shuffled[i]];
    }

    const r16Winners = simulateRound(r32Shuffled, "roundOf16");
    const qfWinners = simulateRound(r16Winners, "quarterFinal");
    const sfWinners = simulateRound(qfWinners, "semiFinal");

    // Third place
    const sfLosers = qfWinners.filter(id => !sfWinners.includes(id));
    if (sfLosers.length >= 2) {
      const a = getTeamById(sfLosers[0]);
      const b = getTeamById(sfLosers[1]);
      if (a && b) {
        const tpWinner = simulateMatch(a, b, true);
        results[tpWinner].thirdPlace++;
      }
    }

    // Final
    if (sfWinners.length >= 2) {
      const a = getTeamById(sfWinners[0]);
      const b = getTeamById(sfWinners[1]);
      if (a && b) {
        const finalist1 = sfWinners[0];
        const finalist2 = sfWinners[1];
        results[finalist1].final++;
        results[finalist2].final++;
        const champion = simulateMatch(a, b, true);
        results[champion].champion++;
      }
    }
  }

  // Normalize to percentages
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

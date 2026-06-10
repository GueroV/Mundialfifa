// ============================================================
// World Cup 2026 Analytics Dashboard - Type Definitions
// ============================================================

export type Confederation = "UEFA" | "CONMEBOL" | "CONCACAF" | "AFC" | "CAF" | "OFC";
export type MatchStatus = "scheduled" | "live" | "completed" | "postponed";
export type MatchStage =
  | "group"
  | "round_of_32"
  | "round_of_16"
  | "quarter_final"
  | "semi_final"
  | "third_place"
  | "final";
export type TournamentStatus = "upcoming" | "ongoing" | "completed";

export interface Tournament {
  id: string;
  name: string;
  year: number;
  startDate: string; // ISO UTC
  endDate: string;
  hostCountries: string[];
  status: TournamentStatus;
  totalTeams: number;
  totalMatches: number;
  groups: number;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  code: string; // 3-letter FIFA code
  confederation: Confederation;
  group: string; // "A"-"L"
  flagEmoji: string;
  fifaRanking: number;
  eloRating: number;
  attackStrength: number; // 0-2 normalized
  defenseStrength: number; // 0-2 normalized (lower = better defense)
  recentForm: ("W" | "D" | "L")[];
  starPlayer: string;
  manager: string;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  country: string;
  capacity: number;
  timezone: string;
  lat: number;
  lng: number;
}

export interface Match {
  id: string;
  tournamentId: string;
  matchNumber: number;
  stage: MatchStage;
  group?: string;
  kickoffUtc: string;
  venueId: string;
  homeTeamId: string;
  awayTeamId: string;
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
  winner?: string; // teamId or "draw"
  matchday?: number;
}

export interface ProbabilitySnapshot {
  matchId: string;
  modelVersion: string;
  generatedAt: string;
  homeWin: number;
  draw: number;
  awayWin: number;
  homeXG: number;
  awayXG: number;
  over25: number; // P(goals > 2.5)
  btts: number; // P(both teams score)
  mostLikelyScore: string;
}

export interface GroupStanding {
  teamId: string;
  group: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  advanceProbability?: number;
}

export interface SimulationResult {
  teamId: string;
  roundOf32: number;
  roundOf16: number;
  quarterFinal: number;
  semiFinal: number;
  thirdPlace: number;
  final: number;
  champion: number;
}

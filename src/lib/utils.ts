import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { MatchStage } from "@/data/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string, opts?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...opts,
  }).format(new Date(dateStr));
}

export function formatTime(dateStr: string, timezone = "UTC"): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
    hour12: false,
  }).format(new Date(dateStr));
}

export function formatDateTime(dateStr: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    hour12: false,
  }).format(new Date(dateStr)) + " UTC";
}

export function stageName(stage: MatchStage): string {
  const names: Record<MatchStage, string> = {
    group: "Group Stage",
    round_of_32: "Round of 32",
    round_of_16: "Round of 16",
    quarter_final: "Quarter-Final",
    semi_final: "Semi-Final",
    third_place: "Third Place",
    final: "Final",
  };
  return names[stage] ?? stage;
}

export function stageShort(stage: MatchStage): string {
  const names: Record<MatchStage, string> = {
    group: "GS",
    round_of_32: "R32",
    round_of_16: "R16",
    quarter_final: "QF",
    semi_final: "SF",
    third_place: "3rd",
    final: "F",
  };
  return names[stage] ?? stage;
}

export function pct(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

export function formColor(result: "W" | "D" | "L"): string {
  return result === "W" ? "bg-green-600" : result === "D" ? "bg-yellow-600" : "bg-red-700";
}

export function eloToLabel(elo: number): string {
  if (elo >= 1800) return "World Class";
  if (elo >= 1700) return "Elite";
  if (elo >= 1600) return "Strong";
  if (elo >= 1500) return "Competitive";
  if (elo >= 1400) return "Average";
  return "Underdog";
}

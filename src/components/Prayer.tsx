import type { Prayer as PrayerType } from "../types";
import { PrayerText } from "./PrayerText";

interface PrayerProps {
  prayer: PrayerType
  repetitions?: number;
}

export function Prayer({ prayer }: PrayerProps) {
  return (
    <div>
      <h4>{prayer.name}</h4>
      <PrayerText textLines={prayer.text} />
    </div>
  );
}
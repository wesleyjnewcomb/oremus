import { useState } from "react";
import type { PrayerSet as PrayerSetType, Prayer as PrayerType } from "../types";
import { Prayer } from "./Prayer";
import PRAYERS_DATA from "../data/prayers.en.json";

console.log(PRAYERS_DATA)

interface PrayerSetProps {
  prayerSet: PrayerSetType;
}

export function PrayerSet({ prayerSet }: PrayerSetProps) {
  const [progress, setProgress] = useState([0, 0]);
  const [sectionIndex, prayerIndex] = progress;

  const nextPrayer = () => {
    setProgress(([secIdx, prayIdx]) => {
      const currentSection = prayerSet.sections[secIdx];
      if (prayIdx + 1 < currentSection.prayers.length) {
        return [secIdx, prayIdx + 1];
      } else if (secIdx + 1 < prayerSet.sections.length) {
        return [secIdx + 1, 0];
      } else {
        return [secIdx, prayIdx]; // End of prayers
      }
    });
  };

  const previousPrayer = () => {
    setProgress(([secIdx, prayIdx]) => {
      if (prayIdx > 0) {
        return [secIdx, prayIdx - 1];
      } else if (secIdx > 0) {
        const prevSection = prayerSet.sections[secIdx - 1];
        return [secIdx - 1, prevSection.prayers.length - 1];
      } else {
        return [secIdx, prayIdx]; // Start of prayers
      }
    });
  };

  const currentSection = prayerSet.sections[sectionIndex];
  let currentPrayerId = currentSection.prayers[prayerIndex];
  let repetitions = 1;
  if (Array.isArray(currentPrayerId)) {
    repetitions = currentPrayerId[1];
    currentPrayerId = currentPrayerId[0];
  }
  console.log("Progress:", progress);
  console.log("Current Prayer ID:", currentPrayerId, "Repetitions:", repetitions);
  const currentPrayer = PRAYERS_DATA[currentPrayerId as keyof typeof PRAYERS_DATA] as unknown as PrayerType;

  return (
    <div>
      <h1>{prayerSet.title}</h1>
      <h2>{currentSection.title}</h2>
      <Prayer prayer={currentPrayer} repetitions={repetitions} />
      <button onClick={previousPrayer}>Previous Prayer</button>
      <button onClick={nextPrayer}>Next Prayer</button>
    </div>
  );
}

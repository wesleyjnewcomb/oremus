import type { PrayerSet, Progress } from "../schemas";

export function incrementProgress(progress: Progress, prayerSet: PrayerSet): Progress {
  let [sectionIndex, prayerIndex, rep] = progress;
  const currentSection = prayerSet.sections[sectionIndex];
  const prayersCount = currentSection.prayers.length;
  const sectionsCount = prayerSet.sections.length;
  const currentPrayer = currentSection.prayers[prayerIndex];
  const repetitions = Array.isArray(currentPrayer)
    ? currentPrayer[1]
    : 1;

  rep++;
  if (rep > repetitions) {
    rep = 1;
    prayerIndex++;
  }
  if (prayerIndex >= prayersCount) {
    prayerIndex = 0;
    sectionIndex++;
  }
  if (sectionIndex >= sectionsCount) {
    sectionIndex = sectionsCount - 1; // Stay at last section
    prayerIndex = prayersCount - 1; // Stay at last prayer
  }

  return [sectionIndex, prayerIndex, rep];
}

export function decrementProgress(progress: Progress, prayerSet: PrayerSet): Progress {
  let [sectionIndex, prayerIndex, rep] = progress;

  rep--;
  if (rep < 1) {
    rep = 1;
    prayerIndex--;
  }
  if (prayerIndex < 0) {
    sectionIndex = Math.max(0, sectionIndex - 1);
    prayerIndex = prayerSet.sections[sectionIndex]?.prayers.length - 1 || 0;
  }

  return [sectionIndex, prayerIndex, rep];
}

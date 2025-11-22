import { useState } from "react";
import type { PrayerSet as PrayerSetType, Progress } from "../types";
import { Prayer } from "./Prayer";
import PRAYERS_DATA from "../data/prayers.la.json";
import { decrementProgress, incrementProgress } from "../utils/prayer";
import { PrayerSchema } from "../schemas";
import styles from "./PrayerSet.module.css";

interface PrayerSetProps {
  prayerSet: PrayerSetType;
}

export function PrayerSet({ prayerSet }: PrayerSetProps) {
  const [progress, setProgress] = useState<Progress>([0, 0, 0]);
  const [sectionIndex, prayerIndex, rep] = progress;

  const currentSection = prayerSet.sections[sectionIndex];
  let currentPrayerId = currentSection.prayers[prayerIndex];
  let repetitions = 1;
  if (Array.isArray(currentPrayerId)) {
    repetitions = currentPrayerId[1];
    currentPrayerId = currentPrayerId[0];
  }
  const currentPrayer = PrayerSchema.parse(PRAYERS_DATA[currentPrayerId as keyof typeof PRAYERS_DATA]);

  const nextPrayer = () => {
    setProgress(progress => incrementProgress(progress, prayerSet));
  };

  const previousPrayer = () => {
    setProgress(progress => decrementProgress(progress, prayerSet));
  };

  return (
    <div className={styles.prayerSet}>
      <h1 className={styles.title}>{prayerSet.title}</h1>
      <section className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
        </header>
        <main className={styles.main}>
          <Prayer prayer={currentPrayer} rep={rep} repetitions={repetitions} />
        </main>
        <nav className={styles.navigation}>
          <button onClick={previousPrayer}>Previous</button>
          <button onClick={nextPrayer}>Next</button>
        </nav>
      </section>
    </div>
  );
}

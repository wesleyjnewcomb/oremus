import type { Prayer as PrayerType } from "../types";
import { PrayerText } from "./PrayerText";
import RepetitionIndicator from "./RepetitionIndicator";
import styles from "./Prayer.module.css";

interface PrayerProps {
  prayer: PrayerType
  rep: number;
  repetitions: number;
}

export function Prayer({ prayer, rep, repetitions }: PrayerProps) {
  return (
    <div className={styles.prayer}>
      <header className={styles.header}>
        <h4 className={styles.title}>{prayer.name}</h4>
      </header>
      <main className={styles.main}>
        <PrayerText textLines={prayer.text} />
      </main>
      <footer className={styles.footer}>
        {repetitions > 1 && <RepetitionIndicator current={rep} repetitions={repetitions} />}
      </footer>
    </div>
  );
}
interface PrayerTextProps {
  textLines: string[];
}

export function PrayerText({ textLines }: PrayerTextProps) {
  return (
    <div>
      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

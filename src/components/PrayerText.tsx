import { Fragment } from "react/jsx-runtime";

interface PrayerTextProps {
  textLines: string[];
}

export function PrayerText({ textLines }: PrayerTextProps) {
  return (
    <p>
      {textLines.map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </p>
  );
}

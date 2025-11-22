
import styles from "./RepetitionIndicator.module.css";

interface RepetitionIndicatorProps {
	repetitions?: number; // total circles to show
	current?: number; // how many should be filled (0-based count)
}

export function RepetitionIndicator({
	repetitions = 1,
	current = 0,
}: RepetitionIndicatorProps) {
	const count = Math.max(0, Math.floor(repetitions));
	const filled = Math.max(0, Math.floor(current));
	const circles = Array.from({ length: count }, (_, i) => i);

	return (
		<div className={styles.container} aria-hidden={false} role="img" aria-label={`Repetition ${filled} of ${count}`}>
			{circles.map((i) => {
				const isFilled = i < filled;
				const className = [styles.circle, isFilled ? styles.filled : styles.empty].join(" ");
				return <span key={i} className={className} />;
			})}
		</div>
	);
}

export default RepetitionIndicator;

import styles from "../page.module.css";
import { Link } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function Projects() {
	return (
		<main>
			<div className={styles.grid}>
				<Link
					href="https://reactproject-2noafu1o5-annaaste.vercel.app/"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>Ingrii webapplication</h2>
					<p>A next.js web application that finds replacement ingredients for you</p>
				</Link>
				<Link
					href="https://reactmastery2-4w1154sqf-sallyresch27-gmailcom.vercel.app/"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>MovieSearch</h2>
					<p>A react web application where you can search on a movietitle and press the search symbol</p>
				</Link>
				<Link
					href="https://www.heyey.se"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>Heyey</h2>
					<p>An application built in Next.js during an internship @Elevateyourself AB 20weeks</p>
				</Link>
				<Link
					href="https://www.elevateyourself.se/sv"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>Elevateyourself</h2>
					<p>An application built in Next.js during an internship @Elevateyourself AB 20weeks</p>
				</Link>
			</div>
		</main>
	)
}

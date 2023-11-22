import styles from "../page.module.css";
import { Link } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function Skills() {
	const t = useTranslations('Home');
	return (
		<main className={styles.main}>
			<div className={styles.card2}>
				<h2>{t("qualifications")}</h2>
				<div className={`${styles.graphs} ${styles.first}`} ><h3>Java Backend</h3></div>
				<div className={`${styles.graphs} ${styles.second}`} ><h3>Next.js</h3></div>
				<div className={`${styles.graphs} ${styles.third}`} ><h3>JavaScript</h3></div>
				<div className={`${styles.graphs} ${styles.fourth}`} ><h3>TypeScript</h3></div>
				<div className={`${styles.graphs} ${styles.fifth}`} ><h3>Agile</h3></div>
				<div className={`${styles.graphs} ${styles.sixth}`} ><h3>HTML & CSS</h3></div>
			</div>
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

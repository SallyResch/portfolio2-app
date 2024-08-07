import styles from "../page.module.css";
import { Link } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function Projects() {
	const t = useTranslations('Home');
	return (
		<main className={styles.main}>
			<div className={styles.projectsMain}>
				<h2>{t("projects")}</h2>
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
			</div>
		</main>
	)
}

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

		</main>
	)
}

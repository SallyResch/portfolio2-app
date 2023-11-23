import React from 'react';
import styles from "../page.module.css";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
export default function Contact() {
	const t = useTranslations('Home');
	return (
		<main className={styles.main}>
			<div className={styles.contactLinks}>
				<h3>{t("contact")}</h3>
				<Link
					href="mailto:sallyresch27@gmail.com"
					target="_blank"
					rel="noopener noreferrer">Email</Link>
				<Link
					href="https://www.linkedin.com/in/sally-resch/"
					target="_blank"
					rel="noopener noreferrer"
				>LinkedIn</Link>
				<Link
					href="https://github.com/SallyResch"
					target="_blank"
					rel="noopener noreferrer"
				>Github</Link>
			</div>
		</main>
	)
}

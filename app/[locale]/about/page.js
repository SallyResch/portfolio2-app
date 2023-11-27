import styles from "../page.module.css";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
	const t = useTranslations('Home');
	return (
		<main className={styles.main}>
			<div className={styles.aboutMain}>
				<h1>{t("aboutMe")}</h1>
				<Image
					className={styles.profilePicture1}
					src="/profilePicture.jpg"
					width={150}
					height={150}
				/>
				<p className={styles.pTag}>{t('bodyText')}</p>
			</div>
		</main>
	)
}

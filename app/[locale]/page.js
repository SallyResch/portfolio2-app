import Image from 'next/image'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import { Link } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className={styles.main}>
      <h1>
        {t('title')}
      </h1>
      <Image
        className={styles.profilePicture1}
        src="/profilePicture.jpg"
        width={150}
        height={150}
      />
      <div className={styles.languageCenter}>
        <p className={styles.pTagSmall}>Language</p>
        <div>
          <Link href="/" locale="en" className={styles.pTagSmall}>{t("english")}</Link>
          {" "}
          |
          {" "}
          <Link href="/" locale="sv" className={styles.pTagSmall}> {t("swedish")}</Link>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.profilePicAndContact}>
          <p className={styles.pTag}>{t('bodyText')}</p>
          <div className={styles.card2}>
            <h2>{t("qualifications")}</h2>
            <div className={`${styles.graphs} ${styles.first}`} ><h3>Java Backend</h3></div>
            <div className={`${styles.graphs} ${styles.second}`} ><h3>Next.js</h3></div>
            <div className={`${styles.graphs} ${styles.third}`} ><h3>JavaScript</h3></div>
            <div className={`${styles.graphs} ${styles.fourth}`} ><h3>TypeScript</h3></div>
            <div className={`${styles.graphs} ${styles.fifth}`} ><h3>Agile</h3></div>
            <div className={`${styles.graphs} ${styles.sixth}`} ><h3>HTML & CSS</h3></div>
          </div>
        </div>
        <div className={styles.grid2}>

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

        </div>
      </div>
      {/*       <div className={styles.center}>
      </div> */}

    </main>
  )
}

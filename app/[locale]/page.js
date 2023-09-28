import Image from 'next/image'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import { Link } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className={styles.main}>
      <div>
        <Link href="/" locale="en">{t("english")}</Link>
        {" "}
        |
        {" "}
        <Link href="/" locale="sv">{t("swedish")}</Link>
      </div>

      <div className={styles.description}>
        <h1>
          {t('title')}
        </h1>

        <div className={styles.profilePicAndContact}>
          <Image
            className={styles.profilePicture1}
            src="/profilePicture.jpg"
            width={150}
            height={150}
          />
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
        <div className={styles.grid2}>
          <p>{t('bodyText')}
          </p>

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
      </div>
      <div className={styles.center}>
        <div className={styles.warningTape}>
          <h2>UNDER CONSTRUCTION</h2>
        </div>
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

import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import { Link } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className={styles.main}>
      <div className={styles.language}>
        <p className={styles.pTagSmall}>{t("language")}</p>
        <div>
          <Link href="/" locale="en" className={styles.pTagSmall}>{t("english")}</Link>
          {" "}
          |
          {" "}
          <Link href="/" locale="sv" className={styles.pTagSmall}> {t("swedish")}</Link>
        </div>
      </div>
      <h1 className={styles.titleHomePage}>
        {t('title')}
      </h1>
      <section className={styles.orangeSection}>

      </section>

      <div className={styles.description}>

        {/*  <div className={styles.card2}>
            <h2>{t("qualifications")}</h2>
            <div className={`${styles.graphs} ${styles.first}`} ><h3>Java Backend</h3></div>
            <div className={`${styles.graphs} ${styles.second}`} ><h3>Next.js</h3></div>
            <div className={`${styles.graphs} ${styles.third}`} ><h3>JavaScript</h3></div>
            <div className={`${styles.graphs} ${styles.fourth}`} ><h3>TypeScript</h3></div>
            <div className={`${styles.graphs} ${styles.fifth}`} ><h3>Agile</h3></div>
            <div className={`${styles.graphs} ${styles.sixth}`} ><h3>HTML & CSS</h3></div>
          </div> */}
        {/*   <div className={styles.grid2}>
        </div> */}
      </div>
      {/*       <div className={styles.center}>
      </div> */}

    </main>
  )
}

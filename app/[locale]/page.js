import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import { Link } from 'next-intl';
import Image from 'next/image';
export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className={styles.main}>
      <h1 className={styles.titleHomePage}>
        {t('title')}
      </h1>
      <h2 className={styles.titleSkills}>Skills</h2>
      <section className={styles.orangeSection}>
        <Image src="/java-logo.gif" width={250} height={130} />
        <Image src="/next.svg" width={200} height={130} />
        <Image src="/React-icon.svg.png" width={150} height={110} />
        <Image src="/database.png" width={150} height={110} />
      </section>
    </main>
  )
}

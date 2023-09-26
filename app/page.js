import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
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

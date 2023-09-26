import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Welcome
        </h1>
        <Image
          className={styles.profilePicture1}
          src="/profilePicture.jpg"
          width={150}
          height={150}
        />
      </div>
      <div className={styles.center}>
        Hello this is the center div
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

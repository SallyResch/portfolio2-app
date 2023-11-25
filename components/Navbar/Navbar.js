"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { GiChest, GiOpenTreasureChest } from 'react-icons/gi';
import { Link } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Home');
  const [isChestOpen, setIsChestOpen] = useState(false); // Initialize state with false

  const handleChestClick = () => {
    setIsChestOpen(!isChestOpen);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.center}><Link href="/">Sally Resch</Link></h2>
      <div className={styles.easteregg} onClick={handleChestClick}>
        {isChestOpen ? <GiOpenTreasureChest size={40} /> : <GiChest size={40} />}
      </div>
      <div className={styles.language}>
        <p className={styles.pTagSmall}>{t("language")}</p>
        <div className={styles.languageChoise}>
          <Link href="/" locale="en" className={styles.pTagSmall}>{t("english")}</Link>
          {" "}
          |
          {" "}
          <Link href="/" locale="sv" className={styles.pTagSmall}> {t("swedish")}</Link>
        </div>
      </div>

      {/* <div className={`${styles.webPageLinks} ${styles.center}`}>
        <Link href="/about" className={styles.wpl}>{t("about")}</Link>
        <Link href="/skills" className={styles.wpl}>{t("skills")}</Link>
        <Link href="/projects" className={styles.wpl}>{t("projects")}</Link>
        <Link href="/contact" className={styles.wpl}>{t("contact")}</Link>
      </div> */}
    </div>
  );
}


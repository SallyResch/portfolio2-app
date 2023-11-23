"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { GiChest, GiOpenTreasureChest } from 'react-icons/gi';
import Link from 'next/link';

export default function Navbar() {
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
      <div className={`${styles.webPageLinks} ${styles.center}`}>
        <Link href="/about" className={styles.wpl}>About</Link>
        <Link href="/skills" className={styles.wpl}>Skills</Link>
        <Link href="/projects" className={styles.wpl}>Projects</Link>
        <Link href="/contact" className={styles.wpl}>Contact</Link>
      </div>
    </div>
  );
}


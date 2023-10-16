"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { GiChest, GiOpenTreasureChest } from 'react-icons/gi';

export default function Navbar() {
  const [isChestOpen, setIsChestOpen] = useState(false); // Initialize state with false

  const handleChestClick = () => {
    setIsChestOpen(!isChestOpen);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.center}>Sally Resch | Fullstack Java developer</h2>
      <div className={styles.easteregg} onClick={handleChestClick}>
        {isChestOpen ? <GiOpenTreasureChest size={30} /> : <GiChest size={30} />}
      </div>
    </div>
  );
}


"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { GiChest, GiOpenChest, GiOpenTreasureChest } from 'react-icons/gi';

export default function Navbar() {
  const [isChestOpen, setIsChestOpen] = useState();

  const handleChestClick = () => {
    setIsChestOpen(!isChestOpen);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.center}>Sally Resch | Fullstack Java developer</h2>
      <div className={styles.easteregg} onClick={handleChestClick}>
        {isChestOpen ? <GiOpenChest size={30} /> : <GiChest size={30} />}
      </div>
    </div>
  );
}

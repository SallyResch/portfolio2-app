"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { GiChest, GiOpenTreasureChest } from 'react-icons/gi';
import { Link } from 'next-intl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { fallDown as Menu } from "react-burger-menu";

export default function Navbar() {
  const t = useTranslations('Home');
  const [isChestOpen, setIsChestOpen] = useState(false); // Initialize state with false

  const handleChestClick = () => {
    setIsChestOpen(!isChestOpen);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  function closeMenu() {
    setMenuOpen(false);
  }
  var style = {
    bmBurgerButton: {
      position: "relative",
      width: "45px",
      height: "50px",
      right: "0em",
      top: "0em",
      zIndex: 0,
    },
    bmCross: {
      background: "#f6a022",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0em",
    },
    bmMenu: {
      background: "#ffffff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      border: "3px solid #F6A022",
      borderRadius: "9px 0 0 9px",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
  };
  return (
    <div className={styles.main}>
      {isMenuOpen && <div className={styles.overlay}></div>}
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
      <Menu
        className={styles.dropDownMenu}
        isOpen={isMenuOpen}
        right
        width={"270px"}
        styles={style}
        onStateChange={(state) => setMenuOpen(state.isMenuOpen)}
        customBurgerIcon={<Image src="/hambMenu.png" width={40} height={40} />}
      >
        <Link href="/about" className={styles.wpl} onClick={toggleMenu}>
          {t("about")}
        </Link>
        <Link href="/skills" className={styles.wpl} onClick={toggleMenu}>
          {t("skills")}
        </Link>
        <Link href="/projects" className={styles.wpl} onClick={toggleMenu}>
          {t("projects")}
        </Link>
        <Link href="/chemistry" className={styles.wpl} onClick={toggleMenu}>
          {t("chemistry")}
        </Link>
        <Link href="/contact" className={styles.wpl} onClick={toggleMenu}>
          {t("contact")}
        </Link>
        <div className={styles.closeMenu} onClick={closeMenu}></div>
      </Menu>
    </div >
  );
}


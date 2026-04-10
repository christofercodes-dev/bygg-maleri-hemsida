"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Instagram, HardHat, Linkedin, Facebook } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          {/* Brand / Logo */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span>BYGG & MÅLERI <small>AB</small></span>
            </div>
            <p className={styles.tagline}>
              Kvalitetshantverk i Landskrona med omnejd. Vi bygger för framtiden.
            </p>
            <div className={styles.socials}>
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><Instagram size={20} /></Link>
              <Link href="#"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Länkar */}
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <Link href="/">Hem</Link>
              <Link href="#tjanster">Tjänster</Link>
              <Link href="#offert">Få offert</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Tjänster</h4>
              <Link href="#">Invändigt måleri</Link>
              <Link href="#">Fasadmålning</Link>
              <Link href="#">Köksrenovering</Link>
              <Link href="#">Altan & Utemiljö</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Bygg & Måleri AB. Alla rättigheter förbehållna.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Integritetspolicy</Link>
            <Link href="#">Allmänna villkor</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
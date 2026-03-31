"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* 1. Bild-containern som fixar "fill"-felet */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/reno1.jpg" // Se till att bilden ligger i /public/images/
          alt="Professionell renovering och måleri"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>
      
      {/* 2. Overlay som ger kontrast för texten */}
      <div className={styles.overlay} />

      {/* 3. Innehållet som alltid hamnar överst */}
      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.subtitle}>Din lokala expert i Kristianstad</span>

          <h1 className={styles.title}>
            Vi förverkligar <br />
            dina <span className={styles.highlight}>byggdrömmar</span>
          </h1>

          <p className={styles.description}>
            Högkvalitativt hantverk inom måleri och renovering. 
            Vi levererar precision och trygghet i varje penseldrag.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#offert" className={styles.primaryBtn}>
              Få kostnadsfri offert
            </Link>
            <Link href="#tjanster" className={styles.secondaryBtn}>
              Våra tjänster →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
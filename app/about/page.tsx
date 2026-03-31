"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";
import styles from "./About.module.css";
import Image from "next/image";

const stats = [
  { icon: <Clock size={24} />, label: "År i branschen", value: "15+" },
  { icon: <CheckCircle2 size={24} />, label: "Slutförda projekt", value: "500+" },
  { icon: <Users size={24} />, label: "Nöjda kunder", value: "100%" },
  { icon: <Award size={24} />, label: "Certifierade", value: "Ja" },
];

export default function About() {
  return (
    <section id="om-oss" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Bildsida */}
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.mainImageContainer}>
              <Image 
                src="/images/reno2.avif" 
                alt="Vårt team i arbete" 
                fill 
                className={styles.image}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.badgeNumber}>15</span>
                <span className={styles.badgeText}>Års Erfarenhet</span>
              </div>
            </div>
          </motion.div>

          {/* Text-sida */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.tag}>Vilka vi är</span>
            <h2 className={styles.title}>Din trygga partner för <span className={styles.highlight}>kvalitetsbyggen</span> i Skåne</h2>
            
            <p className={styles.description}>
              Vi startade med en enkel vision: att leverera hantverk som håller i generationer. 
              Idag är vi ett team av dedikerade snickare och målare som brinner för att förvandla 
              våra kunders hem.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.mission}>
              Oavsett om det gäller en mindre målning eller en totalentreprenad, 
              fokuserar vi på transparens, fasta priser och en personlig kontakt genom hela projektet.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
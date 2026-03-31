"use client";
import { motion } from "framer-motion";
import { Hammer, ShieldCheck, Clock, Award } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    id: 1,
    title: "Certifierat hantverk",
    desc: "Vi är auktoriserade målare och snickare med alla nödvändiga behörigheter.",
    icon: <Award size={28} />,
    color: "#0071e3" // Blå
  },
  {
    id: 2,
    title: "Trygg försäkring",
    desc: "Full ansvarsförsäkring och garantier på alla utförda arbeten för din trygghet.",
    icon: <ShieldCheck size={28} />,
    color: "#34c759" // Grön
  },
  {
    id: 3,
    title: "Håller tidsplanen",
    desc: "Vi vet att din tid är värdefull. Vi dyker upp när vi sagt och blir klara i tid.",
    icon: <Clock size={28} />,
    color: "#ff9500" // Orange
  },
  {
    id: 4,
    title: "Totalentreprenad",
    desc: "Vi koordinerar allt från el till VVS så att du slipper hålla i alla trådar själv.",
    icon: <Hammer size={28} />,
    color: "#af52de" // Lila
  }
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
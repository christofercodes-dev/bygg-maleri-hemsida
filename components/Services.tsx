"use client";
import { motion } from "framer-motion";
import styles from "./Services.module.css";
import Image from "next/image";
import Link from "next/link"; // 1. Importera Link

const services = [
  {
    id: 1,
    slug: "maleri",
    title: "Professionellt Måleri",
    desc: "Invändig och utvändig målning med perfekt finish. Vi sköter allt från spackling till sista lagret.",
    image: "/images/reno2.avif",
    size: "large",
  },
  {
    id: 2,
    slug: "totalrenovering",
    title: "Totalrenovering",
    desc: "Vi tar hand om hela projektet, från rivning till färdigt drömhem.",
    image: "/images/reno1.jpg",
    size: "small",
  },
  {
    id: 3,
    slug: "snickeri",
    title: "Snickeri & Bygg",
    desc: "Platsbyggda lösningar, altaner och mindre tillbyggnader utförda med precision.",
    image: "/images/reno1.jpg",
    size: "small",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="tjanster">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Vår expertis</span>
          <h2 className={styles.title}>Tjänster anpassade efter dina behov</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link 
              href={`/tjanster/${service.slug}`} 
              key={service.id} 
              className={`${styles.cardLink} ${styles[service.size]}`}
            >
              <motion.div 
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.id * 0.1 }}
                whileHover={{ y: -5 }} // Snygg hover-effekt
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  {/* <span className={styles.readMore}>Läs mer</span> */}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="offert">
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Vänster: Information */}
          <div className={styles.infoSide}>
            <span className={styles.label}>Kontakt</span>
            <h2 className={styles.title}>Redo att starta ditt nästa projekt?</h2>
            <p className={styles.description}>
              Beskriv dina tankar så återkommer vi med en kostnadsfri offert inom 24 timmar. 
              Inga projekt är för stora eller för små.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <span>Ring oss</span>
                  <p>044-123 45 67</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <span>E-post</span>
                  <p>info@byggforetaget.se</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <span>Adress</span>
                  <p>Västra Storgatan 1, Skåne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Höger: Formulär */}
          <motion.div 
            className={styles.formSide}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Namn</label>
                <input type="text" placeholder="Ditt fullständiga namn" />
              </div>
              <div className={styles.inputGroup}>
                <label>E-post</label>
                <input type="email" placeholder="namn@epost.se" />
              </div>
              <div className={styles.inputGroup}>
                <label>Typ av arbete</label>
                <select>
                  <option>Målning</option>
                  <option>Renovering</option>
                  <option>Snickeri</option>
                  <option>Övrigt</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Meddelande</label>
                <textarea placeholder="Berätta lite kort om projektet..." rows={4}></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Skicka förfrågan <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
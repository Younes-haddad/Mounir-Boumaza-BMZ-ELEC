"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/data"
import styles from "./Temoignages.module.css"

export default function Temoignages() {
  return (
    <section className={styles.section} id="temoignages">
      <div className={styles.header}>
        <motion.span
          className={styles.tag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Avis clients
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ILS NOUS FONT <span>CONFIANCE</span>
        </motion.h2>

        <motion.div
          className={styles.divider}
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.div
          className={styles.googleBadge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.googleStars}>★★★★★</div>
          <div>
            <p className={styles.googleScore}>5.0 / 5</p>
            <p className={styles.googleCount}>Basé sur nos avis Google</p>
          </div>
        </motion.div>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.cardTop}>
              <div className={styles.stars}>
                {"★".repeat(t.rating)}
              </div>
              <span className={styles.google}>G</span>
            </div>
            <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {t.name.charAt(0)}
              </div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.location}>📍 {t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a href="#contact" className={styles.ctaBtn}>
          Demander un devis gratuit
        </a>
      </motion.div>
    </section>
  )
}

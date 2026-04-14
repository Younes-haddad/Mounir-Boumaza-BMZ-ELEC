"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/data"
import styles from "./Hero.module.css"
import Image from "next/image"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.photoBg}>
        <Image
          src="/elec.png"
          alt="BMZ ELEC – Électricien au travail"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.overlay} />

<div className={styles.accentBar} />

      <div className={styles.content}>

        <motion.div
          className={styles.tag}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Électricien qualifié — Région AuRA
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.titleLight}>VOTRE</span>
          <span className={styles.titleBig}>ÉLECTRICIEN</span>
          <span className={styles.titleAccent}>DE CONFIANCE</span>
        </motion.h1>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          BMZ ELEC intervient pour tous vos travaux électriques en région
          Auvergne-Rhône-Alpes. Installations, dépannages 7j/7, éclairage,
          sécurité — conformes NF&nbsp;C&nbsp;15-100.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className={styles.btnPrimary}>
            Devis gratuit
          </a>
          <a href="#services" className={styles.btnSecondary}>
            Nos services
          </a>
        </motion.div>

        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <motion.div
        className={styles.certBadge}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        <span className={styles.certLine}>NF C 15-100</span>
        <span className={styles.certSub}>Certifié</span>
      </motion.div>

      <div className={styles.bottomLine} />

    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { services } from "@/lib/data"
import styles from "./Services.module.css"
import { Zap, Wrench, Lightbulb, Shield, Plug, Users } from "lucide-react"

const SERVICE_ICONS = [Zap, Wrench, Lightbulb, Shield, Plug, Users]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <motion.span
          className={styles.tag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nos prestations
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          NOS <span>SERVICES</span>
        </motion.h2>

        <motion.div
          className={styles.divider}
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Des interventions électriques réalisées dans les règles de l&apos;art,
          conformes NF C 15-100, pour particuliers et professionnels en région AuRA.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => {
          const Icon = SERVICE_ICONS[i]
          return (
            <motion.div
              key={i}
              id={`service-${i}`}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.cardNumber}>0{i + 1}</div>
              <div className={styles.cardIconWrapper}>
                <Icon size={32} strokeWidth={1.5} className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <a href="#contact" className={styles.cardBtn}>
                Demander un devis
              </a>
            </motion.div>
          )
        })}
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

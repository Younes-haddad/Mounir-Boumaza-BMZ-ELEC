"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>

        {/* PHOTO */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/elec1.png"
              alt="Mounir BOUMAZA - BMZ ELEC"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.tag}>À propos</span>

          <h2 className={styles.title}>
            UN ÉLECTRICIEN <span>DE CONFIANCE EN AuRA</span>
          </h2>

          <div className={styles.divider} />

          <p className={styles.text}>
            <strong>Mounir BOUMAZA</strong>, fondateur de BMZ ELEC, est électricien
            auto-entrepreneur intervenant dans toute la région <strong>Auvergne-Rhône-Alpes</strong>.
          </p>

          <p className={styles.text}>
            De l&apos;installation électrique complète au dépannage d&apos;urgence, en passant
            par l&apos;éclairage, la sécurité et les bornes de recharge IRVE — BMZ ELEC
            couvre tous vos besoins électriques.
          </p>

          <p className={styles.text}>
            Tous les travaux sont réalisés dans le respect de la <strong>norme NF C 15-100</strong>,
            avec un contact direct, des finitions soignées et une réactivité garantie
            même le soir et le week-end.
          </p>

          <div className={styles.team}>
            <div className={styles.teamMember}>
              <div className={styles.teamAvatar}>MB</div>
              <div>
                <p className={styles.teamName}>Mounir BOUMAZA</p>
                <p className={styles.teamRole}>Fondateur & Électricien</p>
              </div>
            </div>
          </div>

          <a href="#contact" className={styles.cta}>
            Nous contacter
          </a>
        </motion.div>

      </div>
    </section>
  )
}

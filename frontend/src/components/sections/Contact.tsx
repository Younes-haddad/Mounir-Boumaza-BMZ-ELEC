"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/data"
import styles from "./Contact.module.css"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Erreur lors de l’envoi du message.")
      }
    } catch (error) {
      console.error(error)
      alert("Une erreur est survenue.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>

        {/* LEFT */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>Contact</span>
          <h2 className={styles.title}>
            DEMANDEZ VOTRE <span>DEVIS GRATUIT</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.desc}>
            Un projet électrique ? Une urgence ? Contactez-nous pour obtenir
            un devis gratuit et sans engagement sous 24h.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><MapPin size={20} strokeWidth={1.8} /></div>
              <div>
                <p className={styles.infoLabel}>Zone d&apos;intervention</p>
                <p className={styles.infoValue}>Région Auvergne-Rhône-Alpes</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Phone size={20} strokeWidth={1.8} /></div>
              <div>
                <p className={styles.infoLabel}>Téléphone</p>
                <a href={`tel:${siteConfig.phone}`} className={styles.infoValue}>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Mail size={20} strokeWidth={1.8} /></div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <a href={`mailto:${siteConfig.email}`} className={styles.infoValue}>
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Clock size={20} strokeWidth={1.8} /></div>
              <div>
                <p className={styles.infoLabel}>Disponibilité</p>
                <p className={styles.infoValue}>{siteConfig.hours}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <h3>Message envoyé !</h3>
              <p>Nous vous répondrons dans les 24h. Merci de votre confiance.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label>Nom & Prénom</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="06 XX XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jean@exemple.fr"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label>Type d&apos;intervention</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="installation">Installations électriques</option>
                  <option value="depannage">Dépannage & Maintenance</option>
                  <option value="eclairage">Éclairage intérieur & extérieur</option>
                  <option value="securite">Sécurité & Surveillance</option>
                  <option value="irve">Mobilité électrique (IRVE)</option>
                  <option value="soustraitance">Sous-traitance</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}

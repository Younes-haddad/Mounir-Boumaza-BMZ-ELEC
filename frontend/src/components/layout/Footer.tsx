import Image from "next/image"
import { siteConfig } from "@/lib/data"
import styles from "./Footer.module.css"
import { MapPin, Mail, Clock, Phone } from "lucide-react"

export default function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* LOGO + DESC */}
        <div className={styles.col}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt="BMZ ELEC"
              width={280}
              height={104}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* LIENS */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.colLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Nos services</h4>
          <ul className={styles.colLinks}>
            <li><a href="#service-0">Installations électriques</a></li>
            <li><a href="#service-1">Dépannage &amp; Maintenance</a></li>
            <li><a href="#service-2">Éclairage intérieur &amp; extérieur</a></li>
            <li><a href="#service-3">Sécurité &amp; Surveillance</a></li>
            <li><a href="#service-4">Mobilité électrique (IRVE)</a></li>
            <li><a href="#service-5">Sous-traitance</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={16} strokeWidth={1.8} className={styles.contactIcon} />
              <span>Région Auvergne-Rhône-Alpes</span>
            </li>
            <li>
              <Phone size={16} strokeWidth={1.8} className={styles.contactIcon} />
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <Mail size={16} strokeWidth={1.8} className={styles.contactIcon} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Clock size={16} strokeWidth={1.8} className={styles.contactIcon} />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} BMZ ELEC — Tous droits réservés
        </p>
        <div className={styles.bottomLinks}>
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig, services } from "@/lib/data"
import styles from "./Navbar.module.css"
import Image from "next/image"
import {
  Phone, Mail, MapPin,
  Zap, Wrench, Lightbulb, Shield, Plug, Users,
  ChevronDown, Menu, X,
} from "lucide-react"

const SERVICE_ICONS = [Zap, Wrench, Lightbulb, Shield, Plug, Users]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={styles.header}>

      {/* ── TOP : Logo centré + Contact ─────────────── */}
      <div className={styles.topSection}>

        {/* Logo row : logo centré + burger à droite (mobile) */}
        <div className={styles.logoRow}>
          <a href="#" className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="BMZ ELEC"
              width={420}
              height={162}
              style={{ objectFit: "contain", display: "block", maxWidth: "100%", height: "auto" }}
              priority
              sizes="(max-width: 768px) 160px, 320px"
            />
          </a>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>

        {/* Infos contact — desktop */}
        <div className={styles.topInfoRow}>
          <div className={styles.infoItem}>
            <MapPin size={18} strokeWidth={1.8} className={styles.infoIcon} />
            <span>Région Auvergne-Rhône-Alpes</span>
          </div>
          <div className={styles.separator} />
          <div className={styles.infoItem}>
            <Mail size={18} strokeWidth={1.8} className={styles.infoIcon} />
            <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
          </div>
          <div className={styles.separator} />
          <div className={styles.infoItem}>
            <Phone size={18} strokeWidth={1.8} className={styles.infoIcon} />
            <a href={"tel:" + siteConfig.phone}>{siteConfig.phone}</a>
          </div>
        </div>

        {/* Infos contact — mobile uniquement */}
        <div className={styles.mobileTopInfo}>
          <div className={styles.mobileInfoItem}>
            <MapPin size={13} strokeWidth={1.8} className={styles.infoIcon} />
            <span>Région Auvergne-Rhône-Alpes</span>
          </div>
          <div className={styles.mobileInfoItem}>
            <Mail size={13} strokeWidth={1.8} className={styles.infoIcon} />
            <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
          </div>
          <div className={styles.mobileInfoItem}>
            <Phone size={13} strokeWidth={1.8} className={styles.infoIcon} />
            <a href={"tel:" + siteConfig.phone} className={styles.mobilePhoneLink}>
              {siteConfig.phone}
            </a>
          </div>
        </div>

      </div>

      {/* ── NAV BAR (sticky, masquée sur mobile) ────── */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>

          <ul className={styles.links}>
            <li>
              <a href="#about">À propos</a>
            </li>

            <li ref={dropdownRef} className={styles.dropdownWrapper}>
              <button
                className={styles.dropdownTrigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
                <ChevronDown
                  size={14}
                  strokeWidth={2.5}
                  className={styles.chevron + (dropdownOpen ? " " + styles.chevronOpen : "")}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16 }}
                  >
                    {services.map((service, i) => {
                      const Icon = SERVICE_ICONS[i]
                      return (
                        <a
                          key={i}
                          href={`#service-${i}`}
                          className={styles.dropdownItem}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <Icon size={16} strokeWidth={1.8} className={styles.dropdownIcon} />
                          {service.title}
                        </a>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a href="#contact" className={styles.navCta}>
            Devis gratuit
          </a>

        </div>
      </nav>

      {/* ── MOBILE MENU ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >

            <div className={styles.mobileDivider} />

            {/* Navigation */}
            <a href="#about" className={`${styles.mobileLink} ${styles.mobileLinkOrange}`} onClick={() => setMenuOpen(false)}>
              À propos
            </a>

            <div className={`${styles.mobileLink} ${styles.mobileLinkOrange}`}>Nos services</div>
            {services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <a
                  key={i}
                  href={`#service-${i}`}
                  className={styles.mobileServiceLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon size={16} strokeWidth={1.8} className={styles.mobileServiceIcon} />
                  {service.title}
                </a>
              )
            })}

            <a href="#contact" className={`${styles.mobileLink} ${styles.mobileLinkOrange}`} onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              className={styles.mobileMenuCta}
              onClick={() => setMenuOpen(false)}
            >
              Devis gratuit
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

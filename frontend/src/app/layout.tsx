import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: "BMZ ELEC – Électricien en Auvergne-Rhône-Alpes",
  description: "Électricien qualifié en région AuRA. Installations, dépannage urgence 7j/7, éclairage, sécurité et bornes IRVE. Devis gratuit sous 24h.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
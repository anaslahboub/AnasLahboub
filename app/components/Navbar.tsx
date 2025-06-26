"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"
import styles from "./Navbar.module.css"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navItems = [
    { id: "hero", label: "Accueil", icon: Home },
    { id: "about", label: "À propos", icon: User },
    { id: "projects", label: "Projets", icon: Briefcase },
    { id: "skills", label: "Compétences", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Anas Lahboub</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navDesktop}>
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className={styles.navLink}>
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
          <ThemeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.navMobile} ${isOpen ? styles.open : ""}`}>
          <ul>
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className={styles.navLinkMobile}>
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              )
            })}
            <li style={{ padding: "1rem 2rem" }}>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

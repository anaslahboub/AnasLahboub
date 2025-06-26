"use client"

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import styles from "./Hero.module.css"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.badge}>
              <span>Disponible pour de nouveaux projets</span>
            </div>

            <h1 className={styles.title}>
              software engineer
              <span className={styles.highlight}>Passionné & Créatif</span>
            </h1>

            <p className={styles.description}>
              Je conçois et développe des applications web modernes avec une expertise en
               <strong>React.js</strong> et <strong>Spring Boot</strong>. Mon objectif :
              transformer vos idées en solutions digitales performantes et élégantes.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Années d'expérience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Projets réalisés</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Clients satisfaits </span>
              </div>
            </div>

            <div className={styles.actions}>
              <button onClick={scrollToProjects} className={styles.primaryBtn}>
                Voir mes projets
                <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryBtn}>
                <Download size={18} />
                Télécharger CV
              </button>
            </div>

            <div className={styles.social}>
              <a href="https://github.com/anaslahboub" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anas-lahboub-884a92283/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <a href="anas.lahboub@edu.uiz.ac.ma" className={styles.socialLink}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <div className={styles.imagePlaceholder}>
                  <span>AL</span>
                </div>
                <div className={styles.statusIndicator}></div>
              </div>
              <div className={styles.profileInfo}>
                <h3>Anas Lahboub</h3>
                <p>Software Engineer</p>
                <div className={styles.location}>
                  <span>📍 Taroudant</span>
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <div className={styles.techItem}>React.js</div>
              <div className={styles.techItem}>Spring Boot</div>
              <div className={styles.techItem}>Java </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

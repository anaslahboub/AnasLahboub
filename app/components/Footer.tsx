import { Github, Linkedin, Mail, Heart, Instagram, Facebook } from "lucide-react"; // Add Instagram & Facebook
import styles from "./Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Anas Lahboub</h3>
            <p className={styles.brandDescription}>
              Développeur Full-Stack passionné par la création de solutions web innovantes
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkSection}>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#hero">Accueil</a>
                </li>
                <li>
                  <a href="#about">À propos</a>
                </li>
                <li>
                  <a href="#projects">Projets</a>
                </li>
                <li>
                  <a href="#skills">Compétences</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h4>Technologies</h4>
              <ul>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:anas.lahboub@example.com">Email</a>
                </li>
                <li>
                  <a href="tel:+33123456789">Téléphone</a>
                </li>
                <li>France</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div> */}

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} Anas Lahboub. Fait avec <Heart size={16} className={styles.heartIcon} /> en France
            </p>
          </div>

          <div className={styles.social}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:anas.lahboub@example.com" className={styles.socialLink}>
              <Mail size={20} />
            </a>
            <a href="https://www.instagram.com/anaslahboub/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/anas.lahboub.9" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

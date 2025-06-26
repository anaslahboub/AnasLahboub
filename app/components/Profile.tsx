import { GraduationCap, MapPin, Calendar } from "lucide-react"
import styles from "./Profile.module.css"

export default function Profile() {
  return (
    <section id="profile" className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileImage}>
                <img src="/anas.jpg?height=500&width=500" alt="Anas Lahboub" />
              </div>
              <div className={styles.statusBadge}>
                <span>Disponible</span>
              </div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.introduction}>
              <h1 className={styles.name}>Anas Lahboub</h1>
              <p className={styles.title}>Software engineer & Étudiant Ingénieur</p>
            </div>

            <div className={styles.education}>
              <div className={styles.educationCard}>
                <div className={styles.educationIcon}>
                  <GraduationCap size={24} />
                </div>
                <div className={styles.educationInfo}>
                  <h3>École Nationale des Sciences Appliquées</h3>
                  <p>ENSA Agadir - Génie Informatique</p>
                  <div className={styles.educationMeta}>
                    <span className={styles.metaItem}>
                      <Calendar size={16} />
                      En cours
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={16} />
                      Agadir, Maroc
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

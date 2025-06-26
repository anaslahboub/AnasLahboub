import { Award, Briefcase, GraduationCap, Target, Users, Zap } from "lucide-react"
import styles from "./About.module.css"
import Projects from "./Projects"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>À propos</h2>
          <p className={styles.subtitle}>
            étudiant  passionné avec une approche centrée sur la qualité et l'innovation
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.story}>
            <div className={styles.storyCard}>
             <h3>Mon Parcours</h3>
              <p>
                Après l’obtention de mon baccalauréat en 2021-2022, j’ai intégré l’École Nationale des Sciences Appliquées d’Agadir (ENSA Agadir), où je poursuis actuellement ma cinquième année en cycle ingénieur, spécialité Génie Informatique.
              </p>
              <p>
                Fort de plus de deux ans d'expérience dans le développement web, je me spécialise dans la création d'applications full-stack performantes et modernes. Ma passion pour les technologies émergentes me pousse à rester constamment à jour avec les dernières innovations du secteur.
              </p>
              <p>
                J'ai eu l'opportunité de travailler sur des projets variés, allant de la gestion de transport à la pharmacie, en passant par des solutions de gestion agile. Chaque projet m'a permis d'affiner mes compétences et d’adopter une approche méthodique axée sur les résultats.
              </p>

            </div>
          </div>

          <div className={styles.expertise}>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Zap size={24} />
                </div>
                <h4>Développement Frontend</h4>
                <p>Création d'interfaces utilisateur modernes et responsives avec React.js, Next.js et Vue.js</p>
                <div className={styles.skills}>
                  {/* <span>React.js</span>
                  <span>Next.js</span>
                  <span>js</span>
                  <span>TypeScript</span> */}
                </div>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Briefcase size={24} />
                </div>
                <h4>Développement Backend</h4>
                <p>Conception d'APIs robustes et sécurisées avec Spring Boot et Node.js</p>
                <div className={styles.skills}>
                  {/* <span>Spring Boot</span>
                  <span>Spring Security</span>
                  <span>JavaEE</span>
                  <span>Node.js</span>
                  <span>MySQL</span> */}
                </div>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Target size={24} />
                </div>
                <h4>Architecture & Design</h4>
                <p>Conception d'architectures scalables et maintenables suivant les meilleures pratiques</p>
                <div className={styles.skills}>
                  {/* <span>Clean Code</span>
                  <span>Design Patterns</span>
                  <span>REST API</span>
                  <span>Microservices</span>
                  <span>Swagger</span> */}
                </div>
              </div>
            </div>
          </div>

          <Projects />

          <div className={styles.achievements}>
            <h3>Réalisations & Objectifs</h3>  
            <div className={styles.achievementsList}>
              <div className={styles.achievement}>
                <div className={styles.achievementIcon}>
                  <Award size={20} />
                </div>
                <div className={styles.achievementContent}>
                  <h4>Projets Livrés avec Succès</h4>
                  <p>Plus de 15 projets web développés et déployés avec un taux de satisfaction client de 100%</p>
                </div>
              </div>

              <div className={styles.achievement}>
                <div className={styles.achievementIcon}>
                  <Users size={20} />
                </div>
                <div className={styles.achievementContent}>
                  <h4>Collaboration & Leadership</h4>
                  <p>Expérience en travail d'équipe et encadrement de projets avec méthodologies Agile/Scrum</p>
                </div>
              </div>

              <div className={styles.achievement}>
                <div className={styles.achievementIcon}>
                  <GraduationCap size={20} />
                </div>
                <div className={styles.achievementContent}>
                  <h4>Formation Continue</h4>
                  <p>Veille technologique constante et formation aux nouvelles technologies et frameworks</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.approach}>
            <div className={styles.approachCard}>
              <h3>Ma Philosophie</h3>
              <div className={styles.principles}>
                <div className={styles.principle}>
                  <strong>Qualité</strong>
                  <span>Code propre, testé et documenté</span>
                </div>
                <div className={styles.principle}>
                  <strong>Innovation</strong>
                  <span>Adoption des dernières technologies</span>
                </div>
                <div className={styles.principle}>
                  <strong>Collaboration</strong>
                  <span>Communication transparente et efficace</span>
                </div>
                <div className={styles.principle}>
                  <strong>Résultats</strong>
                  <span>Solutions orientées business et utilisateur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

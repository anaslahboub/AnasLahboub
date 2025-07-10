import { ExternalLink, Github, Star } from "lucide-react"
import styles from "./Projects.module.css"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Système de Gestion de Transport",
      description:
        "Plateforme complète pour optimiser les flottes, planifier les trajets et gérer les chauffeurs. Interface intuitive avec authentification sécurisée et API robuste.",
      technologies: ["React.js", "Spring Boot", "MySQL", "Spring Security"],
      image: "./dashboard.png?height=300&width=400",
      liveUrl: "https://github.com/anaslahboub/TMS-Back-end",
      githubUrl: "https://github.com/anaslahboub/TMS-Back-end",
      featured: false,
      situation: "Besoin d'une plateforme pour optimiser les flottes de transport",
      action: "Conception et implémentation full-stack avec authentification sécurisée",
      result: "Interface intuitive accessible desktop/mobile avec API sécurisée",
    },
    {
      id: 2,
      title: "Backend Agile App",
      description:
        "Application de gestion de sprints et tâches avec API sécurisée. Système complet de suivi de projet avec authentification et gestion des rôles.",
      technologies: ["Spring Boot", "JPA", "MySQL", "JWT", "Spring Security", "Swagger"],
      image: "./methodeAgile.jpg?height=300&width=400",
      liveUrl: "https://github.com/anaslahboub/AgilApplication",
      githubUrl: "https://github.com/anaslahboub/AgilApplication",
      featured: false,
      situation: "Gestion efficace des projets agiles et des équipes",
      action: "Développement d'une API REST complète avec Spring Boot",
      result: "Système de gestion performant avec authentification JWT",
    },
    {
      id: 3,
      title: "Gestion de Pharmacie",
      description:
        "Application web pour la gestion des stocks et ventes en pharmacie. Interface moderne avec React et backend robuste en JavaEE.",
      technologies: ["React.js", "JavaEE", "MySQL", "Bootstrap"],
      image: "./pharmacie.png?height=300&width=400",
      liveUrl: "https://github.com/anaslahboub/pharmacie_project",
      githubUrl: "https://github.com/anaslahboub/pharmacie_project",
      featured: false,
      situation: "Digitalisation de la gestion pharmaceutique",
      action: "Développement d'une solution complète de gestion",
      result: "Application web moderne pour optimiser les opérations",
    },
    {
      id: 4,
      title: "Portfolio Personnel",
      description:
        "Site portfolio moderne et responsive développé avec Next.js et CSS. Design épuré avec animations fluides et navigation intuitive.",
      technologies: ["Next.js", "CSS", "TypeScript", "Vercel"],
      image: "./portfolio.png?height=300&width=400",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      situation: "Présentation professionnelle de mes compétences",
      action: "Création d'un portfolio moderne avec Next.js",
      result: "Site responsive avec animations et design moderne",
    },
    // Ajout des nouveaux projets
    // {
    //   id: 5,
    //   title: "Application de Réservation en Ligne",
    //   description:
    //     "Plateforme de réservation en temps réel avec système de paiement intégré et gestion des disponibilités.",
    //   technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    //   image: "/placeholder.svg?height=300&width=400",
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    //   situation: "Besoin d'un système de réservation efficace pour les petites entreprises",
    //   action: "Développement d'une solution full-stack avec intégration de paiement",
    //   result: "Plateforme opérationnelle avec taux de conversion amélioré de 40%"
    // },
    {
      id: 5,
      title: "Gestion des Stages à l'ENSA Agadir",
      description:"Plateforme digitale pour la gestion des stages des étudiants de l'ENSA Agadir. Le système permet aux étudiants de trouver des offres de stage, aux entreprises de poster des annonces, et aux administrateurs de suivre le processus de stage.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "./project web.png?height=300&width=400",
      liveUrl: "https://github.com/anaslahboub/mon-premier-project-web-",
      githubUrl: "https://github.com/anaslahboub/mon-premier-project-web-",
      featured: false,
      situation: "Manque de centralisation dans la gestion des stages à l'ENSA Agadir, avec des processus manuels et peu efficaces",
      action: "Développement d'une plateforme web complète avec trois interfaces (étudiants, entreprises, administrateurs) et mise en place d'un système de matching entre offres et demandes",
      result: "Optimisation du processus de stage avec réduction du temps de traitement des demandes de 60% et meilleure visibilité pour les entreprises"
    },
    {
      id: 6, // Correction de l'ID pour être séquentiel
      title: "Gestion de Cabinet Dentaire",
      description:
        "Application desktop développée avec JavaFX pour la gestion complète d'un cabinet dentaire. Les fonctionnalités incluent la prise de rendez-vous, la gestion des dossiers patients, le suivi des traitements et la facturation.",
      technologies: ["JavaFX", "Java", "MySQL", "SceneBuilder"],
      image: "./project java.png?height=300&width=400",
      liveUrl: "https://github.com/anaslahboub/project-javaFX",
      githubUrl: "https://github.com/anaslahboub/project-javaFX",
      featured: false,
      situation: "Gestion papier des dossiers patients et des rendez-vous dans un cabinet dentaire, entraînant des erreurs et une perte de temps",
      action: "Conception et développement d'une application desktop intuitive avec JavaFX, intégrant toutes les fonctionnalités nécessaires à la gestion quotidienne d'un cabinet",
      result: "Digitalisation complète des processus avec réduction des erreurs de 75% et gain de temps estimé à 2 heures par jour pour le personnel"
    }
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Mes Projets</h2>
          <p className={styles.subtitle}>Découvrez mes réalisations techniques et les solutions que j'ai développées</p>
        </div>

        {/* Featured Projects */}
        {/*<div className={styles.featuredSection}>
          <h3 className={styles.sectionTitle}>
            <Star size={24} />
            Projets Phares
          </h3>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.featuredCard}>
                <div className={styles.cardImage}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardActions}>
                      <a href={project.liveUrl} className={styles.actionBtn} title="Voir le projet">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.githubUrl} className={styles.actionBtn} title="Code source">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{project.title}</h4>
                  <p className={styles.cardDescription}>{project.description}</p>

                  <div className={styles.starMethod}>
                    <div className={styles.starItem}>
                      <strong>Situation:</strong> {project.situation}
                    </div>
                    <div className={styles.starItem}>
                      <strong>Action:</strong> {project.action}
                    </div>
                    <div className={styles.starItem}>
                      <strong>Résultat:</strong> {project.result}
                    </div>
                  </div>

                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>*/}

        {/* Other Projects */}
        <div className={styles.otherSection}>
          <h3 className={styles.sectionTitle}></h3>
          <div className={styles.projectGrid}>
            {otherProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.cardImage}>
                  <img src={project.image || "./placeholder.svg"} alt={project.title} />
                  <div className={styles.cardOverlay}>
                    <div className={styles.cardActions}>
                      <a href={project.liveUrl} className={styles.actionBtn}>
                        <ExternalLink size={18} />
                      </a>
                      <a href={project.githubUrl} className={styles.actionBtn}>
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{project.title}</h4>
                  <p className={styles.cardDescription}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
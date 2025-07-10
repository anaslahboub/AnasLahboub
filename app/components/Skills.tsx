import { Code, Database, Globe, Wrench,Award } from "lucide-react"
import styles from "./Skills.module.css"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "#3B82F6",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 20 },
        { name: "Angular.js", level: 20 },
        { name: "CSS/SCSS", level: 90 },
        { name: "HTML5", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: Code,
      color: "#10B981",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "JavaEE", level:50 },
        { name: "Node.js", level: 40 },
        { name: "REST API", level: 80 },
        { name: "Spring Security", level: 80 },
        { name: "JWT", level: 80 },
        { name: "php", level: 30 },
        { name: "Swagger", level: 30 }
      ],
    },
    {
      title: "Base de Données",
      icon: Database,
      color: "#F59E0B",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "JPA/Hibernate", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Oracle DB", level: 70 },
      ],
    },
    {
      title: "Outils & DevOps",
      icon: Wrench,
      color: "#8B5CF6",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 85 },
      ],
    },
  ]
  const certifications = [
    {
      title: "Oracle Certified Associate",
      issuer: "Oracle University",
      date: "July 2025",
      skills: ["Java SE 8", "OOP", "JVM"],
      icon: Award,
      color: "#EF4444",
      image: "./certification1.png",
    },
    // Add more certifications as needed
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Mes Compétences</h2>
          <p className={styles.subtitle}>Technologies et outils que je maîtrise pour créer des solutions complètes</p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.title}
                className={styles.skillCategory}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon} style={{ backgroundColor: category.color }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={styles.skillItem}
                      style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                    >
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div
                          className={styles.skillProgress}
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {/* Section Certifications Modifiée */}
      <div className={styles.certificationsSection}>
        <h3 className={styles.sectionTitle}>Certifications</h3>
        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={cert.title} 
                className={styles.certificationCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Partie supérieure avec l'image */}
                <div className={styles.certImageContainer}>
                  <img 
                    src={cert.image} 
                    alt={`Certificat ${cert.title}`}
                    className={styles.certImage}
                  />
                </div>
                
                {/* Partie inférieure avec les détails */}
                <div className={styles.certDetails}>
                  <div className={styles.certHeader}>
                    <div className={styles.certIcon} style={{ backgroundColor: cert.color }}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className={styles.certTitle}>{cert.title}</h4>
                      <p className={styles.certIssuer}>{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <div className={styles.certSkills}>
                    {cert.skills.map(skill => (
                      <span key={skill} className={styles.certSkill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h4>Apprentissage Continu</h4>
            <p>
              Toujours à l'affût des dernières technologies et bonnes pratiques du développement web. Je me forme
              régulièrement aux nouvelles versions des frameworks et aux outils émergents.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h4>Méthodologies</h4>
            <p>
              Expérience avec les méthodologies Agile/Scrum, développement orienté test (TDD), et les principes de Clean
              Code pour des projets maintenables et évolutifs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './resume.module.css';
import { getAllProjects } from './domain/usecases/projectUseCases';
import { getGroupedSkills } from './domain/usecases/skillUseCases';
import { getAllCertifications } from './domain/usecases/certificationUseCases';

export default function Resume() {
  const projects = getAllProjects();
  const groupedSkills = getGroupedSkills();
  const certifications = getAllCertifications();

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Portfolio - Maulana Yusuf Bahri (Aa)</h1>
        <p>Tech Lead | Mobile Apps Specialist (Native, React Native, Flutter) | Frontend & Backend Enthusiast</p>
      </header>

      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          A Tech Lead with 10+ years of experience in mobile application development, specializing in both Native (Android & iOS) and Cross-Platform technologies (React Native, Flutter).
          I have a proven track record of building high-performance mobile applications used by millions of users. Over the last four years, I have been leading technology teams, driving product development, and ensuring project success with a focus on quality and efficiency.
          In addition to mobile development, I have experience with Frontend (Next.js) and Backend (Node.js, Golang). While my expertise lies in mobile apps, I am capable of contributing across technologies to support end-to-end product needs.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.link}>{project.linkText}</a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        {Array.from(groupedSkills.entries()).map(([category, skills]) => (
          <div key={category} className={styles.skillCategory}>
            <h3>{category}</h3>
            <ul className={styles.skillList}>
              {skills.map(skill => (
                <li key={skill.id} className={styles.skillItem}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Certifications</h2>
        <div className={styles.certifications}>
          {certifications.map(cert => (
            <div key={cert.id} className={styles.certificationCard}>
              <h3>{cert.title}</h3>
              <p className={styles.certificationIssuer}>
                {cert.issuer} • {cert.issueDate}
                {cert.expiryDate && ` - ${cert.expiryDate}`}
              </p>
              {cert.description && (
                <p className={styles.certificationDescription}>{cert.description}</p>
              )}
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:aamaulanabola10@gmail.com" className={styles.link}>aamaulanabola10@gmail.com</a></p>
        <p>Mobile Phone: <a href="https://wa.me/6281911726037" className={styles.link}>+6281911726037</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/maulana-yusuf-68ba5013a/" className={styles.link}>https://www.linkedin.com/in/maulana-yusuf-68ba5013a/</a></p>
        <p>GitHub: <a href="https://www.github.com/aamaulana10" className={styles.link}>github.com/aamaulana10</a></p>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Senior Flutter Engineer. All rights reserved.</p>
      </footer>
    </div>
  );
}
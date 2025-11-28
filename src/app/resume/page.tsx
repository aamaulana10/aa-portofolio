'use client'

import styles from './resume.module.css';
import { getAllProjects } from './domain/usecases/projectUseCases';
import { getGroupedSkills } from './domain/usecases/skillUseCases';
import { getAllCertifications } from './domain/usecases/certificationUseCases';
import { ProjectCategory } from './domain/models/Project';
import Image from 'next/image';
import { useState } from 'react';

export default function Resume() {
  const projects = getAllProjects();
  const groupedSkills = getGroupedSkills();
  const certifications = getAllCertifications();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(ProjectCategory.MOBILE);

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Portfolio - Maulana Yusuf Bahri (Aa)</h1>
        <p>Tech Lead | Software Engineer Lead</p>
      </header>

      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          Hands-on Tech Lead with 11+ years of experience, currently at TyrAds owning all frontend work across Flutter, Native Mobile, React, and Next.js. Still coding daily while driving architecture, mentoring the team, and delivering features from zero to production. Strong fullstack background with Kotlin, Swift, Flutter, React Native, Next.js, React.js, Spring Boot, Golang, and Node.js.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.tabBar}>
          {Object.values(ProjectCategory).map(category => (
            <button
              key={category}
              className={`${styles.tabButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={styles.projects}>
          {projects
            .filter(project => selectedCategory === project.category)
            .map(project => (
              <div key={project.id} className={styles.projectCard}>
                 {project.category === ProjectCategory.MOBILE && project.image && (
                  <Image width={100} height={100} src={project.image} alt={project.title} className={styles.projectImage} />
                 )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.category === ProjectCategory.FRONTEND && project.link && project.link !== '#' && (
                  <iframe 
                    src={project.link}
                    className={styles.previewIframe}
                    width="100%"
                    height="500px"
                    title={`${project.title} preview`}
                  />
                )}
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
        <p>© 2025 Aa Maulana. All rights reserved.</p>
      </footer>
    </div>
  );
}
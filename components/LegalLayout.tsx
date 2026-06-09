import React from "react";
import styles from "./LegalLayout.module.css";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  sections,
}) => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.lastUpdated}>{lastUpdated}</p>
        </div>
      </section>

      <div className={styles.layout}>
        {/* Sidebar for Navigation */}
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.navLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Document Content */}
        <main className={styles.content}>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
            >
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.sectionContent}>{section.content}</div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

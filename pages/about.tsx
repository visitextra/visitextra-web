import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Heart,
  Languages,
  Car,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/Button";
import { useLanguage } from "../helpers/useLanguage";
import styles from "./about.module.css";

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      titleKey: "about.values.security.title" as const,
      descKey: "about.values.security.description" as const,
    },
    {
      icon: Award,
      titleKey: "about.values.professionalism.title" as const,
      descKey: "about.values.professionalism.description" as const,
    },
    {
      icon: Heart,
      titleKey: "about.values.satisfaction.title" as const,
      descKey: "about.values.satisfaction.description" as const,
    },
    {
      icon: Languages,
      titleKey: "about.values.multilingual.title" as const,
      descKey: "about.values.multilingual.description" as const,
    },
    {
      icon: Car,
      titleKey: "about.values.comfort.title" as const,
      descKey: "about.values.comfort.description" as const,
    },
    {
      icon: CheckCircle,
      titleKey: "about.values.reliability.title" as const,
      descKey: "about.values.reliability.description" as const,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("about.hero.title")} | VisitExtra</title>
        <meta name="description" content={t("about.mission.description")} />
      </Helmet>
      <div className={styles.aboutPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{t("about.hero.title")}</h1>
          </div>
        </section>

        <main className={styles.mainContent}>
          <div className={styles.topGrid}>
            <section className={styles.contentCard}>
              <h2 className={styles.cardTitle}>{t("about.mission.title")}</h2>
              <p className={styles.cardText}>
                {t("about.mission.description")}
              </p>
            </section>

            <section className={styles.contentCard}>
              <h2 className={styles.cardTitle}>{t("about.vision.title")}</h2>
              <p className={styles.cardText}>{t("about.vision.description")}</p>
            </section>
          </div>

          <section className={styles.storySection}>
            <h2 className={styles.storySectionTitle}>
              {t("about.story.title")}
            </h2>
            <p className={styles.storyText}>{t("about.story.description")}</p>
          </section>

          <section className={styles.valuesSection}>
            <div className={styles.valuesSectionHeader}>
              <h2 className={styles.valuesSectionTitle}>
                {t("about.values.title")}
              </h2>
              <p className={styles.valuesSectionSubtitle}>
                {t("about.values.subtitle")}
              </p>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className={styles.valueCard}>
                    <div className={styles.valueIconWrapper}>
                      <Icon className={styles.valueIcon} />
                    </div>
                    <h3 className={styles.valueTitle}>{t(value.titleKey)}</h3>
                    <p className={styles.valueDescription}>
                      {t(value.descKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* <div className={styles.ctaSection}>
            <Button asChild size="lg" className={styles.ctaButton}>
              <Link to="/#newsletter-section">
                {t("homepage.hero.ctaButton")}
              </Link>
            </Button>
          </div> */}
        </main>
      </div>
    </>
  );
};

export default AboutPage;

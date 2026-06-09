import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../helpers/useLanguage";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import { faqLocalizedData } from "./faq.data";
import styles from "./faq.module.css";


const FaqPage = () => {
  const { t, language } = useLanguage();

  // Ensure language matches tr, en, or ar. Fallback to tr.
  const activeLang = (language === "en" || language === "tr" || language === "ar" ? language : "tr") as "tr" | "en" | "ar";
  const localizedFaqs = faqLocalizedData[activeLang];

  // Helper labels for tabs
  const tabLabels = {
    tr: { passenger: "Yolcu SSS", driver: "Sürücü / Şoför SSS" },
    en: { passenger: "Passenger FAQ", driver: "Driver FAQ" },
    ar: { passenger: "الأسئلة الشائعة للركاب", driver: "الأسئلة الشائعة للسائقين" },
  }[activeLang];

  return (
    <>
      <Helmet>
        <title>{t("faq.hero.title")} | VisitExtra</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about VisitExtra passenger experiences and driver membership policies."
        />
      </Helmet>
      <div className={styles.faqPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{t("faq.hero.title")}</h1>
          </div>
        </section>

        <main className={styles.mainContent}>
          <Tabs defaultValue="passenger" className={styles.tabsRoot}>
            <TabsList className={styles.tabsList} data-variant="pill">
              <TabsTrigger value="passenger" className={styles.tabsTrigger}>
                {tabLabels.passenger}
              </TabsTrigger>
              <TabsTrigger value="driver" className={styles.tabsTrigger}>
                {tabLabels.driver}
              </TabsTrigger>
            </TabsList>

            <div className={styles.tabContentContainer}>
              <TabsContent value="passenger" className={styles.tabsContent}>
                <Accordion.Root
                  type="single"
                  defaultValue="passenger-item-0"
                  collapsible
                  className={styles.accordionRoot}
                >
                  {localizedFaqs.passenger.map((item, index) => (
                    <Accordion.Item
                      key={`passenger-${index}`}
                      value={`passenger-item-${index}`}
                      className={styles.accordionItem}
                    >
                      <Accordion.Header className={styles.accordionHeader}>
                        <Accordion.Trigger className={styles.accordionTrigger}>
                          {item.question}
                          <ChevronDown
                            className={styles.accordionChevron}
                            aria-hidden
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className={styles.accordionContent}>
                        <p className={styles.accordionText}>{item.answer}</p>
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </TabsContent>

              <TabsContent value="driver" className={styles.tabsContent}>
                <Accordion.Root
                  type="single"
                  defaultValue="driver-item-0"
                  collapsible
                  className={styles.accordionRoot}
                >
                  {localizedFaqs.driver.map((item, index) => (
                    <Accordion.Item
                      key={`driver-${index}`}
                      value={`driver-item-${index}`}
                      className={styles.accordionItem}
                    >
                      <Accordion.Header className={styles.accordionHeader}>
                        <Accordion.Trigger className={styles.accordionTrigger}>
                          {item.question}
                          <ChevronDown
                            className={styles.accordionChevron}
                            aria-hidden
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className={styles.accordionContent}>
                        <p className={styles.accordionText}>{item.answer}</p>
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </TabsContent>
            </div>
          </Tabs>

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>{t("faq.stillHaveQuestions.title")}</h2>
            <p className={styles.ctaText}>
              {t("faq.stillHaveQuestions.description")}
            </p>
            <Button asChild size="lg" className={styles.ctaButton}>
              <Link to="/contact">{t("faq.stillHaveQuestions.ctaButton")}</Link>
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default FaqPage;
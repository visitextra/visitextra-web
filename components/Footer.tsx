import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Twitter, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import styles from "./Footer.module.css";
import { useLanguage } from "../helpers/useLanguage";
import { useSubscribeToNewsletter } from "../helpers/apiHooks";
import { Input } from "./Input";
import { Button } from "./Button";
import footerLogo from "../assets/images/visitextra_logo_beyaz_komple.png";

export const Footer = () => {
  const { t, language } = useLanguage();
  const subscribeMutation = useSubscribeToNewsletter();

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    subscribeMutation.mutate(
      { email, language },
      {
        onSuccess: () => {
          toast.success(t("footer.newsletter.success"));
          (event.target as HTMLFormElement).reset();
        },
        onError: (error) => {
          toast.error(t("footer.newsletter.error"), {
            description:
              error instanceof Error
                ? error.message
                : t("footer.newsletter.error"),
          });
        },
      }
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <section id="newsletter" className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>
            {t("footer.newsletter.title")}
          </h2>
          <p className={styles.newsletterDescription}>
            {t("footer.newsletter.description")}
          </p>
          <form
            className={styles.newsletterForm}
            onSubmit={handleNewsletterSubmit}
          >
            <Input
              type="email"
              name="email"
              placeholder={t("footer.newsletter.emailPlaceholder")}
              className={styles.newsletterInput}
              disabled={subscribeMutation.isPending}
              required
            />
            <Button
              type="submit"
              size="lg"
              className={styles.newsletterButton}
              disabled={subscribeMutation.isPending}
            >
              {subscribeMutation.isPending
                ? t("footer.newsletter.subscribeButton")
                : t("footer.newsletter.subscribeButton")}
            </Button>
          </form>
        </section>

        {/* Three-column grid */}
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.sitemap")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/">{t("header.nav.home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("header.nav.about")}</Link>
              </li>
              <li>
                <Link to="/partnerships">{t("header.nav.partnerships")}</Link>
              </li>
              <li>
                <Link to="/driver-register">{t("homepage.drivers.title")}</Link>
              </li>
              <li>
                <Link to="/faq">{t("header.nav.faq")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("header.nav.contact")}</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.legal.title")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/terms-of-use">{t("footer.legal.termsOfUse")}</Link>
              </li>
              <li>
                <Link to="/privacy-policy">{t("footer.legal.privacyPolicy")}</Link>
              </li>
              <li>
                <Link to="/cookie-policy">{t("footer.legal.cookiePolicy")}</Link>
              </li>
              <li>
                <Link to="/kvkk-clarification">{t("footer.legal.kvkkClarification")}</Link>
              </li>
              <li>
                <Link to="/passenger-agreement">{t("footer.legal.passengerAgreement")}</Link>
              </li>
              <li>
                <Link to="/driver-agreement">{t("footer.legal.driverAgreement")}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              {t("contact.contactInfo.title")}
            </h3>
            <ul className={styles.linkList}>
              <li className={styles.contactItem}>
                <Mail size={16} />
                <a href="mailto:bilgi@visitextra.com">bilgi@visitextra.com</a>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} />
                <a href="tel:+905327894347">+90 532 789 4347</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.socials")}</h3>

            <Link to="/" className={styles.logoLink}>
              <img
                src={footerLogo}
                alt="VisitExtra Logo"
                className={styles.logo}
                style={{ maxWidth: "130px", height: "auto" }}
              />
            </Link>

            <div className={styles.socialIcons}>
              <a
                href="https://x.com/visitextra1"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/visitextraofficial"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>{t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
};

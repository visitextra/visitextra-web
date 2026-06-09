import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage, Language } from "../helpers/useLanguage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import styles from "./Header.module.css";
import logo from "../assets/images/visitextra_logo_beyaz_icon.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = (
    <>
      <Link to="/" className={styles.navLink}>
        {t("header.nav.home")}
      </Link>
      <Link to="/about" className={styles.navLink}>
        {t("header.nav.about")}
      </Link>
      <Link to="/partnerships" className={styles.navLink}>
        {t("header.nav.partnerships")}
      </Link>
      <Link to="/faq" className={styles.navLink}>
        {t("header.nav.faq")}
      </Link>
      <Link to="/contact" className={styles.navLink}>
        {t("header.nav.contact")}
      </Link>
    </>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="VisitExtra Logo" className={styles.logo} />
        </Link>

        <nav className={styles.desktopNav}>{navLinks}</nav>

        <div className={styles.rightSection}>
          <div className={styles.langSelectorWrapper}>
            <Select
              value={language.toUpperCase()}
              onValueChange={(value) =>
                setLanguage(value.toLowerCase() as Language)
              }
            >
              <SelectTrigger className={styles.langSelectorTrigger}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EN">EN</SelectItem>
                <SelectItem value="TR">TR</SelectItem>
                <SelectItem value="AR">AR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <nav className={styles.mobileNav}>{navLinks}</nav>}
    </header>
  );
};

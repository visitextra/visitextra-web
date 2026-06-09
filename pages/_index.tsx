import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLanguage } from "../helpers/useLanguage";
import {
  ShieldCheck,
  MessageSquare,
  Car,
  Languages,
  Apple,
  Play,
  ShoppingBag,
  Smartphone,
  CheckCircle,
  Users,
  TrendingUp,
  DollarSign,
  Building,
  Clock,
} from "lucide-react";
import { Button } from "../components/Button";
import styles from "./_index.module.css";
import hotel from "../assets/images/otel.png";

// New images imported from assets/images
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img5 from "../assets/images/5.jpeg";
import img6 from "../assets/images/6.jpeg";

// Intersection Observer Reveal Component for Scroll animations
const RevealSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${styles.revealSection} ${isIntersecting ? styles.revealSectionActive : ""}`}
    >
      {children}
    </div>
  );
};

interface DeviceMockupProps {
  image: string;
  alt: string;
  type?: "gold" | "blue" | "silver" | "rose-gold";
  rotation?: "left" | "right" | "center";
}

const DeviceMockup = ({ image, alt, type = "gold", rotation = "center" }: DeviceMockupProps) => {
  const typeClass = {
    gold: styles.phoneGold,
    blue: styles.phoneBlue,
    silver: styles.phoneSilver,
    "rose-gold": styles.phoneRoseGold,
  }[type];

  const rotationClass = {
    left: styles.rotateLeft,
    right: styles.rotateRight,
    center: styles.rotateCenter,
  }[rotation];

  return (
    <div className={`${styles.phoneContainer} ${typeClass} ${rotationClass}`}>
      <div className={`${styles.phoneButton} ${styles.buttonLeft} ${styles.buttonVolumeUp}`}></div>
      <div className={`${styles.phoneButton} ${styles.buttonLeft} ${styles.buttonVolumeDown}`}></div>
      <div className={`${styles.phoneButton} ${styles.buttonRight} ${styles.buttonPower}`}></div>
      
      <div className={styles.phoneScreen}>
        <div className={styles.phoneDynamicIsland}></div>
        <div className={styles.phoneScreenGlare}></div>
        <img
          src={image}
          alt={alt}
          className={styles.phoneImage}
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  const { t, language } = useLanguage();

  // Simple translation map for "Available Soon" badge
  const availableSoonText = {
    en: "Available Soon",
    tr: "Çok Yakında",
    ar: "متاح قريبًا",
  }[language];

  // Alternating Features Content
  const appFeatures = {
    en: [
      {
        title: "Easy & Fast Booking",
        description: "Specify your destination, view our luxury vehicle options, and book your ride in seconds.",
        badge: "Booking",
        image: img4
      },
      {
        title: "Find the Perfect Driver",
        description: "Filter drivers by reviews, ratings, and vehicle models to select the most suitable professional driver for your trip.",
        badge: "Filtering",
        image: img5
      },
      {
        title: "Message with Drivers",
        description: "Communicate directly with your driver before or during your trip using secure in-app messaging, and easily share all details.",
        badge: "Messaging",
        image: img3
      }
    ],
    tr: [
      {
        title: "Kolay ve Hızlı Rezervasyon",
        description: "Gideceğiniz rotayı belirleyin, saniyeler içinde lüks ve konforlu araç seçeneklerimizi listeleyin ve anında rezervasyon yapın.",
        badge: "Rezervasyon",
        image: img4
      },
      {
        title: "Size En Uygun Şoförleri Bulun",
        description: "Yorumları, puanları ve araç modellerini filtreleyerek seyahat tarzınıza ve ihtiyaçlarınıza en uygun profesyonel şoförü kendiniz belirleyin.",
        badge: "Filtreleme",
        image: img5
      },
      {
        title: "Şoförlerle Dilediğiniz Gibi Mesajlaşın",
        description: "Yolculuk öncesinde veya sırasında şoförünüzle uygulama içi güvenli mesajlaşma üzerinden doğrudan iletişim kurun, detayları kolayca paylaşın.",
        badge: "Mesajlaş",
        image: img3
      }
    ],
    ar: [
      {
        title: "حجز سهل وسريع",
        description: "حدد وجهتك، واعرض خيارات سياراتنا الفاخرة، واحجز رحلتك في ثوانٍ.",
        badge: "الحجز",
        image: img4
      },
      {
        title: "اعثر على السائق الأنسب لك",
        description: "قم بتصفية السائقين حسب التقييمات والمراجعات وأنواع السيارات لتختار السائق المحترف الذي يلبي احتياجات سفرك.",
        badge: "التصفية",
        image: img5
      },
      {
        title: "راسل السائقين كما تشاء",
        description: "تواصل مباشرة مع سائقك قبل الرحلة أو خلالها عبر المراسلة الآمنة داخل التطبيق، وشارك التفاصيل بكل سهولة.",
        badge: "المراسلة",
        image: img3
      }
    ]
  }[language];

  // How It Works section translations
  const howItWorksContent = {
    en: {
      title: "How Does It Work?",
      subtitle: "Start your journey in just three simple steps.",
      steps: [
        {
          title: "Download the App",
          description:
            "Download the VisitExtra app for free from the App Store or Google Play and register in seconds.",
        },
        {
          title: "Choose Driver and Vehicle",
          description:
            "Specify your destination, review driver profiles, and choose the vehicle that suits you best.",
        },
        {
          title: "Enjoy Your Journey",
          description:
            "Sit back and enjoy your safe, comfortable journey. Make payments easily through the app.",
        },
      ],
    },
    tr: {
      title: "Nasıl Çalışır?",
      subtitle: "Sadece üç basit adımda yolculuğunuza başlayın.",
      steps: [
        {
          title: "Uygulamayı İndirin",
          description:
            "VisitExtra uygulamasını App Store veya Google Play'den ücretsiz indirin ve saniyeler içinde kaydolun.",
        },
        {
          title: "Sürücü ve Araç Seçin",
          description:
            "Gideceğiniz yeri belirtin, sürücü profillerini inceleyin ve size en uygun aracı seçin.",
        },
        {
          title: "Yolculuğun Tadını Çıkarın",
          description:
            "Arkanıza yaslanın ve güvenli, konforlu yolculuğunuzun keyfini çıkarın. Ödemeyi uygulama üzerinden kolayca yapın.",
        },
      ],
    },
    ar: {
      title: "كيف يعمل؟",
      subtitle: "ابدأ رحلتك في ثلاث خطوات بسيطة.",
      steps: [
        {
          title: "حمّل التطبيق",
          description:
            "حمّل تطبيق VisitExtra مجانًا من App Store أو Google Play وسجل في ثوانٍ.",
        },
        {
          title: "اختر السائق والمركبة",
          description:
            "حدد وجهتك، واستعرض ملفات تعريف السائقين، واختر المركبة التي تناسبك.",
        },
        {
          title: "استمتع برحلتك",
          description:
            "استرخِ واستمتع برحلتك الآمنة والمريحة. ادفع بسهولة عبر التطبيق.",
        },
      ],
    },
  }[language];

  // Partnership benefits translations
  const partnershipBenefits = {
    en: [
      {
        icon: "users",
        title: "Increase Customer Satisfaction",
        description:
          "Enhance guest experience by offering professional transportation",
      },
      {
        icon: "dollar",
        title: "Additional Revenue Stream",
        description: "Earn additional income through commission system",
      },
      {
        icon: "building",
        title: "Brand Value",
        description:
          "Increase your brand prestige with premium transportation solutions",
      },
      {
        icon: "clock",
        title: "Easy Integration",
        description: "Quick and seamless integration process",
      },
    ],
    tr: [
      {
        icon: "users",
        title: "Müşteri Memnuniyetini Artırın",
        description:
          "Misafirlerinize profesyonel ulaşım hizmeti sunarak deneyimlerini geliştirin",
      },
      {
        icon: "dollar",
        title: "Ek Gelir Kaynağı",
        description: "Komisyon sistemi ile ek gelir elde edin",
      },
      {
        icon: "building",
        title: "Marka Değeri",
        description:
          "Premium ulaşım çözümleri ile markanızın prestijini artırın",
      },
      {
        icon: "clock",
        title: "Kolay Entegrasyon",
        description: "Hızlı ve sorunsuz entegrasyon süreci",
      },
    ],
    ar: [
      {
        icon: "users",
        title: "زيادة رضا العملاء",
        description: "عزز تجربة الضيوف من خلال تقديم خدمة نقل احترافية",
      },
      {
        icon: "dollar",
        title: "مصدر دخل إضافي",
        description: "احصل على دخل إضافي من خلال نظام العمولة",
      },
      {
        icon: "building",
        title: "قيمة العلامة التجارية",
        description: "زِد من هيبة علامتك التجارية مع حلول النقل المتميزة",
      },
      {
        icon: "clock",
        title: "تكامل سهل",
        description: "عملية تكامل سريعة وسلسة",
      },
    ],
  }[language];

  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users size={32} className={styles.benefitIcon} />;
      case "dollar":
        return <DollarSign size={32} className={styles.benefitIcon} />;
      case "building":
        return <Building size={32} className={styles.benefitIcon} />;
      case "clock":
        return <Clock size={32} className={styles.benefitIcon} />;
      default:
        return <TrendingUp size={32} className={styles.benefitIcon} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`VisitExtra | ${t("homepage.hero.title")}`}</title>
        <meta name="description" content={t("homepage.hero.subtitle")} />
      </Helmet>
      <main className={styles.main}>
        
        {/* Centered Hero Section (Without Mobile Mockup at Top) */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContentCentered}>
            <h1 className={styles.mainHeadlineCentered}>{t("homepage.hero.title")}</h1>
            <p className={styles.subHeadlineCentered}>{t("homepage.hero.subtitle")}</p>
            
            <div className={styles.heroDownloadButtonsCentered}>
              <a href="#download" className={styles.storeLogoButton}>
                <Apple size={28} />
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Download on the</span>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', display: 'block', lineHeight: 1.1 }}>App Store</span>
                </div>
                <span className={styles.storeBadge}>{availableSoonText}</span>
              </a>
              
              <a href="#download" className={styles.storeLogoButton}>
                <Play size={26} />
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Get it on</span>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', display: 'block', lineHeight: 1.1 }}>Google Play</span>
                </div>
                <span className={styles.storeBadge}>{availableSoonText}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section (Why Choose Us) */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>
            {t("homepage.features.title")}
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <ShieldCheck size={40} className={styles.featureIcon} />
              <h3>{t("homepage.features.card1.title")}</h3>
              <p>{t("homepage.features.card1.description")}</p>
            </div>
            <div className={styles.featureCard}>
              <MessageSquare size={40} className={styles.featureIcon} />
              <h3>{t("homepage.features.card2.title")}</h3>
              <p>{t("homepage.features.card2.description")}</p>
            </div>
            <div className={styles.featureCard}>
              <Car size={40} className={styles.featureIcon} />
              <h3>{t("homepage.features.card3.title")}</h3>
              <p>{t("homepage.features.card3.description")}</p>
            </div>
            <div className={styles.featureCard}>
              <Languages size={40} className={styles.featureIcon} />
              <h3>{t("homepage.features.card4.title")}</h3>
              <p>{t("homepage.features.card4.description")}</p>
            </div>
          </div>
        </section>

        {/* Alternating Feature Showcase Section (Dynamic Mockups with Info on Scroll) */}
        <section className={styles.alternatingFeaturesSection}>
          <div className={styles.sectionTitleWrapper}>
            <h2 className={styles.sectionTitle}>
              {language === "tr" ? "Uygulama Özellikleri" : language === "ar" ? "ميزات التطبيق" : "Application Features"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {language === "tr" ? "VisitExtra ile yolculuklarınızı kolaylaştıran modern çözümler." : language === "ar" ? "حلول حديثة تبسط رحلاتك مع VisitExtra." : "Modern solutions that simplify your journeys with VisitExtra."}
            </p>
          </div>
          
          <div className={styles.alternatingList}>
            {appFeatures.map((feat, idx) => (
              <RevealSection key={idx} className={styles.featureRow}>
                <div className={`${styles.featureRowContent} ${idx % 2 === 1 ? styles.rowReverse : ""}`}>
                  {/* Text details */}
                  <div className={styles.featureRowText}>
                    <span className={styles.featureRowBadge}>{feat.badge}</span>
                    <h3 className={styles.featureRowTitle}>{feat.title}</h3>
                    <p className={styles.featureRowDescription}>{feat.description}</p>
                  </div>
                  
                  {/* Mockup Image */}
                  <div className={styles.featureRowVisual}>
                    <DeviceMockup
                      image={feat.image}
                      alt={feat.title}
                      type={idx === 0 ? "gold" : idx === 1 ? "blue" : "silver"}
                      rotation={idx % 2 === 0 ? "right" : "left"}
                    />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* 3'lü Mockup Yapısı (Showcase Section) */}
        <section id="download" className={styles.showcaseSection}>
          <h2 className={styles.sectionTitle}>
            {t("homepage.appIntro.title")}
          </h2>
          
          <div className={styles.phoneMockups}>
            <div className={styles.phoneWrapperSide}>
              <DeviceMockup
                image={img1}
                alt="Mobile App Screenshot 1"
                type="silver"
                rotation="left"
              />
            </div>
            
            <div className={styles.phoneWrapperCenter}>
              <DeviceMockup
                image={img2}
                alt="Mobile App Screenshot 2"
                type="gold"
                rotation="center"
              />
            </div>
            
            <div className={styles.phoneWrapperSide}>
              <DeviceMockup
                image={img6}
                alt="Mobile App Screenshot 6"
                type="rose-gold"
                rotation="right"
              />
            </div>
          </div>

          <p className={styles.storeText}>
            {t("homepage.appIntro.availability")}
          </p>
          
          <div className={styles.storeLogos}>
            <a href="#download" className={styles.storeLogoButton}>
              <Apple size={28} />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Download on the</span>
                <span style={{ fontSize: '1rem', fontWeight: 'bold', display: 'block', lineHeight: 1.1 }}>App Store</span>
              </div>
              <span className={styles.storeBadge}>{availableSoonText}</span>
            </a>
            
            <a href="#download" className={styles.storeLogoButton}>
              <Play size={26} />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Get it on</span>
                <span style={{ fontSize: '1rem', fontWeight: 'bold', display: 'block', lineHeight: 1.1 }}>Google Play</span>
              </div>
              <span className={styles.storeBadge}>{availableSoonText}</span>
            </a>
            
            <a href="#download" className={styles.storeLogoButton}>
              <ShoppingBag size={26} />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Explore it on</span>
                <span style={{ fontSize: '1rem', fontWeight: 'bold', display: 'block', lineHeight: 1.1 }}>AppGallery</span>
              </div>
              <span className={styles.storeBadge}>{availableSoonText}</span>
            </a>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorksSection}>
          <h2 className={styles.sectionTitle}>{howItWorksContent.title}</h2>
          <p className={styles.howItWorksSubtitle}>
            {howItWorksContent.subtitle}
          </p>
          <div className={styles.stepsContainer}>
            {howItWorksContent.steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepIconWrapper}>
                  {index === 0 && (
                    <Smartphone size={40} className={styles.stepIcon} />
                  )}
                  {index === 1 && <Car size={40} className={styles.stepIcon} />}
                  {index === 2 && (
                    <CheckCircle size={40} className={styles.stepIcon} />
                  )}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Section */}
        <section className={styles.partnershipSection}>
          <div className={styles.partnershipContainer}>
            <div className={styles.partnershipImageWrapper}>
              <img
                src={hotel}
                alt="Hotels and Travel Agencies"
                className={styles.partnershipImage}
              />
            </div>
            <div className={styles.partnershipContent}>
              <h2 className={styles.sectionTitle}>
                {t("homepage.partnerships.title")}
              </h2>
              <p className={styles.partnershipDescription}>
                {t("partnershipsPage.hero.subtitle")}
              </p>
              <div className={styles.benefitsGrid}>
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitCard}>
                    <div className={styles.benefitIconWrapper}>
                      {renderBenefitIcon(benefit.icon)}
                    </div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className={styles.ctaButton}>
                <Link to="/partnerships">
                  {t("homepage.partnerships.ctaButton")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Driver Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>{t("homepage.drivers.title")}</h2>
          <p className={styles.ctaDescription}>{t("faq.q3.answer")}</p>
          <Button asChild size="lg" className={styles.ctaButton}>
            <Link to="/driver-register">{t("homepage.drivers.ctaButton")}</Link>
          </Button>
        </section>
      </main>
    </>
  );
};

export default HomePage;

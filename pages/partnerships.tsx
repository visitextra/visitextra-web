import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Building,
  Handshake,
  Lightbulb,
  Share2,
  CheckCircle,
  ShieldCheck,
  Clock,
  DollarSign,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { useSubmitPartnershipInquiry } from "../helpers/apiHooks";
import { schema as partnershipSchema } from "../endpoints/partnership/inquire_POST.schema";
import { useLanguage } from "../helpers/useLanguage";
import styles from "./partnerships.module.css";

type PartnershipFormValues = z.infer<typeof partnershipSchema>;

const PartnershipPage = () => {
  const { t, language } = useLanguage();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnershipFormValues>({
    resolver: zodResolver(partnershipSchema),
  });

  const mutation = useSubmitPartnershipInquiry();

  const onSubmit = (data: PartnershipFormValues) => {
    mutation.mutate(
      { ...data, language: language.toUpperCase() },
      {
        onSuccess: () => {
          toast.success(t("partnershipsPage.form.success"));
          reset();
        },
        onError: (error) => {
          console.error("Partnership inquiry submission error:", error);
          toast.error(t("partnershipsPage.form.error"));
        },
      },
    );
  };

  const partnershipModels = [
    {
      icon: <Handshake size={32} />,
      title: t("partnershipsPage.models.card1.title"),
      description: t("partnershipsPage.models.card1.description"),
    },
    {
      icon: <Building size={32} />,
      title: t("partnershipsPage.models.card2.title"),
      description: t("partnershipsPage.models.card2.description"),
    },
    {
      icon: <Lightbulb size={32} />,
      title: t("partnershipsPage.models.card3.title"),
      description: t("partnershipsPage.models.card3.description"),
    },
  ];

  const partnershipBenefits = [
    { icon: <CheckCircle size={24} />, text: t("partnershipsPage.benefits.item1") },
    { icon: <DollarSign size={24} />, text: t("partnershipsPage.benefits.item2") },
    { icon: <ShieldCheck size={24} />, text: t("partnershipsPage.benefits.item3") },
    { icon: <Clock size={24} />, text: t("partnershipsPage.benefits.item4") },
  ];

  return (
    <>
      <Helmet>
        <title>{t("partnershipsPage.hero.title")} | VisitExtra</title>
        <meta
          name="description"
          content={t("partnershipsPage.hero.subtitle")}
        />
      </Helmet>
      <div className={styles.partnershipPage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{t("partnershipsPage.hero.title")}</h1>
            <p className={styles.heroSubtitle}>
              {t("partnershipsPage.hero.subtitle")}
            </p>
          </div>
        </section>

        <main className={styles.mainContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t("partnershipsPage.models.title")}</h2>
            <div className={styles.modelsGrid}>
              {partnershipModels.map((model, index) => (
                <div key={index} className={styles.modelCard}>
                  <div className={styles.modelIcon}>{model.icon}</div>
                  <h3 className={styles.modelTitle}>{model.title}</h3>
                  <p className={styles.modelDescription}>{model.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {t("partnershipsPage.benefits.title")}
            </h2>
            <div className={styles.benefitsGrid}>
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.formContainer}>
              <div className={styles.formInfo}>
                <h2 className={styles.sectionTitle}>
                  {t("partnershipsPage.form.title")}
                </h2>
                <p className={styles.formDescription}>
                  {t("partnershipsPage.hero.subtitle")}
                </p>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactInfoTitle}>{t("partnershipsPage.contactInfo.title")}</h3>
                  <a
                    href="mailto:bilgi@visitextra.com"
                    className={styles.contactLink}
                  >
                    <Mail size={18} />
                    bilgi@visitextra.com
                  </a>
                  <a
                    href="tel:+905327894347"
                    className={styles.contactLink}
                  >
                    <Phone size={18} />
                    +90 532 789 4347
                  </a>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
              >
                <div className={styles.formField}>
                  <label htmlFor="name">{t("partnershipsPage.form.name")}</label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder={t("partnershipsPage.form.name")}
                  />
                  {errors.name && (
                    <p className={styles.errorText}>{errors.name.message}</p>
                  )}
                </div>
                <div className={styles.formField}>
                  <label htmlFor="email">{t("partnershipsPage.form.email")}</label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder={t("partnershipsPage.form.email")}
                  />
                  {errors.email && (
                    <p className={styles.errorText}>{errors.email.message}</p>
                  )}
                </div>

                <div className={styles.formField}>
                  <label htmlFor="message">{t("partnershipsPage.form.message")}</label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder={t("partnershipsPage.form.message")}
                    rows={5}
                  />
                  {errors.message && (
                    <p className={styles.errorText}>{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className={styles.submitButton}
                >
                  {mutation.isPending ? `${t("partnershipsPage.form.submitButton")}...` : t("partnershipsPage.form.submitButton")}
                </Button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PartnershipPage;
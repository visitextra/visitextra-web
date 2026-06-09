import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import { Mail, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { useSubmitContact } from "../helpers/apiHooks";
import { useLanguage } from "../helpers/useLanguage";
import styles from "./contact.module.css";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const { t, language } = useLanguage();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const contactMutation = useSubmitContact();

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(
      { ...data, language: language.toUpperCase() },
      {
        onSuccess: () => {
          toast.success(t("contact.form.success"));
          reset();
        },
        onError: (error) => {
          toast.error(t("contact.form.error"), {
            description:
              error instanceof Error
                ? error.message
                : t("contact.form.error"),
          });
        },
      },
    );
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.hero.title")} | VisitExtra</title>
        <meta
          name="description"
          content={t("contact.hero.subtitle")}
        />
      </Helmet>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{t("contact.hero.title")}</h1>
            <p className={styles.subtitle}>
              {t("contact.hero.subtitle")}
            </p>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t("contact.form.name")}</label>
                  <Input
                    id="name"
                    placeholder={t("contact.form.name")}
                    {...register("name")}
                    disabled={contactMutation.isPending}
                  />
                  {errors.name && (
                    <p className={styles.errorText}>{errors.name.message}</p>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">{t("contact.form.email")}</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("contact.form.email")}
                    {...register("email")}
                    disabled={contactMutation.isPending}
                  />
                  {errors.email && (
                    <p className={styles.errorText}>{errors.email.message}</p>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">{t("contact.form.message")}</label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.form.message")}
                    rows={6}
                    {...register("message")}
                    disabled={contactMutation.isPending}
                  />
                  {errors.message && (
                    <p className={styles.errorText}>{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className={styles.submitButton}
                  disabled={contactMutation.isPending}
                >
                  {t("contact.form.submitButton")}
                </Button>
              </form>
            </div>

            <div className={styles.infoContainer}>
              <h2 className={styles.infoTitle}>{t("contact.contactInfo.title")}</h2>
              <p className={styles.infoText}>
                {t("contact.hero.subtitle")}
              </p>
              <div className={styles.infoItem}>
                <Mail size={20} className={styles.infoIcon} />
                <div>
                  <div className={styles.infoLabel}>{t("contact.contactInfo.email")}</div>
                  <a href="mailto:bilgi@visitextra.com">bilgi@visitextra.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone size={20} className={styles.infoIcon} />
                <div>
                  <div className={styles.infoLabel}>{t("contact.contactInfo.phone")}</div>
                  <a href="tel:+905327894347">+90 532 789 4347</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
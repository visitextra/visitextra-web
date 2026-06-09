import React from "react";
import { Helmet } from "react-helmet";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useLanguage, Language } from "../helpers/useLanguage";
import { useDriverRegister } from "../helpers/apiHooks";
import { schema as driverRegisterSchema } from "../endpoints/driver/register_POST.schema";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Textarea } from "../components/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select";
import styles from "./driver-register.module.css";

type FormValues = z.infer<typeof driverRegisterSchema>;

const getValidationSchema = (t: (key: any) => string) => {
  return driverRegisterSchema.extend({
    fullName: z.string().min(1, { message: t("driverRegister.form.validation.fullNameRequired") }),
    email: z.string().email({ message: t("driverRegister.form.validation.emailInvalid") }),
    phone: z.string().min(1, { message: t("driverRegister.form.validation.phoneRequired") }),
    city: z.string().min(1, { message: t("driverRegister.form.validation.cityRequired") }),
    experience: z.string().min(1, { message: t("driverRegister.form.validation.experienceRequired") }),
    vehicleType: z.string().min(1, { message: t("driverRegister.form.validation.vehicleTypeRequired") }),
  });
};

const DriverRegisterPage = () => {
  const { t, language } = useLanguage();
  const driverRegisterMutation = useDriverRegister();

  const validationSchema = getValidationSchema(t);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      language: language,
    },
  });

  const onSubmit = (data: FormValues) => {
    driverRegisterMutation.mutate(
      { ...data, language },
      {
        onSuccess: () => {
          toast.success(t("driverRegister.form.success"));
          reset();
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : t("driverRegister.form.error")
          );
        },
      }
    );
  };

  const experienceOptions = [
    { value: "0-2 years", label: t("driverRegister.form.experienceOptions.opt1") },
    { value: "3-5 years", label: t("driverRegister.form.experienceOptions.opt2") },
    { value: "5-10 years", label: t("driverRegister.form.experienceOptions.opt3") },
    { value: "10+ years", label: t("driverRegister.form.experienceOptions.opt4") },
  ];

  const vehicleTypeOptions = [
    { value: "Sedan", label: t("driverRegister.form.vehicleTypeOptions.sedan") },
    { value: "SUV", label: t("driverRegister.form.vehicleTypeOptions.suv") },
    { value: "Van", label: t("driverRegister.form.vehicleTypeOptions.van") },
    { value: "Luxury", label: t("driverRegister.form.vehicleTypeOptions.luxury") },
  ];

  return (
    <>
      <Helmet>
        <title>{t("driverRegister.meta.title")} | VisitExtra</title>
        <meta name="description" content={t("driverRegister.meta.description")} />
      </Helmet>
      <div className={styles.pageWrapper}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>{t("driverRegister.hero.title")}</h1>
            <p>{t("driverRegister.hero.subtitle")}</p>
          </div>
        </section>

        <main className={styles.mainContent}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.formGrid}>
                <div className={styles.formField}>
                  <label htmlFor="fullName">{t("driverRegister.form.fullName")}</label>
                  <Input id="fullName" {...register("fullName")} placeholder={t("driverRegister.form.fullNamePlaceholder")} />
                  {errors.fullName && <p className={styles.errorMessage}>{errors.fullName.message}</p>}
                </div>

                <div className={styles.formField}>
                  <label htmlFor="email">{t("driverRegister.form.email")}</label>
                  <Input id="email" type="email" {...register("email")} placeholder={t("driverRegister.form.emailPlaceholder")} />
                  {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                </div>

                <div className={styles.formField}>
                  <label htmlFor="phone">{t("driverRegister.form.phone")}</label>
                  <Input id="phone" type="tel" {...register("phone")} placeholder={t("driverRegister.form.phonePlaceholder")} />
                  {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
                </div>

                <div className={styles.formField}>
                  <label htmlFor="city">{t("driverRegister.form.city")}</label>
                  <Input id="city" {...register("city")} placeholder={t("driverRegister.form.cityPlaceholder")} />
                  {errors.city && <p className={styles.errorMessage}>{errors.city.message}</p>}
                </div>

                <div className={styles.formField}>
                  <label>{t("driverRegister.form.experience")}</label>
                  <Controller
                    name="experience"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("driverRegister.form.experiencePlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.experience && <p className={styles.errorMessage}>{errors.experience.message}</p>}
                </div>

                <div className={styles.formField}>
                  <label>{t("driverRegister.form.vehicleType")}</label>
                  <Controller
                    name="vehicleType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("driverRegister.form.vehicleTypePlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicleTypeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.vehicleType && <p className={styles.errorMessage}>{errors.vehicleType.message}</p>}
                </div>

                <div className={`${styles.formField} ${styles.fullWidth}`}>
                  <label htmlFor="message">{t("driverRegister.form.message")}</label>
                  <Textarea id="message" {...register("message")} placeholder={t("driverRegister.form.messagePlaceholder")} rows={4} />
                  {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
                </div>
              </div>

              <Button
                type="submit"
                className={styles.submitButton}
                disabled={driverRegisterMutation.isPending}
              >
                {driverRegisterMutation.isPending
                  ? t("driverRegister.form.submitting")
                  : t("driverRegister.form.submitButton")}
              </Button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default DriverRegisterPage;
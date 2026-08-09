import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contactSchema, submitContactRequest, type ContactInput } from "@/lib/contact.functions";
import { languages, company } from "@/data/company";
import { cn } from "@/lib/utils";

const anliegen = [
  "Pflegeberatung",
  "Behandlungspflege",
  "Grundpflege",
  "Haushaltshilfe",
  "Betreuung",
  "Verhinderungspflege",
  "Sterbebegleitung",
  "Allgemeine Frage",
];

const fieldClass =
  "min-h-12 w-full rounded-xl border border-input bg-card px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-accent";
const labelClass = "block text-sm font-semibold text-primary";
const errorClass = "mt-1.5 text-sm text-destructive";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { anliegen: "Pflegeberatung", sprache: "Deutsch", website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    await submitContactRequest({ data: values });
    setSent(true);
  });

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-accent bg-accent-soft p-8 text-center shadow-soft"
      >
        <CheckCircle2 className="mx-auto size-10 text-accent" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold">
          Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
        </h3>
        <p className="mt-3 text-muted-foreground">
          Wenn Ihr Anliegen dringend ist, erreichen Sie uns während unserer Bürozeiten (
          {company.officeHoursShort}) telefonisch unter{" "}
          <a href={company.phoneHref} className="font-semibold text-primary hover:underline">
            {company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="vorname">
            Vorname <span aria-hidden="true">*</span>
          </label>
          <input
            id="vorname"
            autoComplete="given-name"
            className={cn(fieldClass, "mt-2", errors.vorname && "border-destructive")}
            aria-invalid={Boolean(errors.vorname)}
            aria-describedby={errors.vorname ? "vorname-error" : undefined}
            {...register("vorname")}
          />
          {errors.vorname && (
            <p id="vorname-error" className={errorClass}>
              {errors.vorname.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="nachname">
            Nachname <span aria-hidden="true">*</span>
          </label>
          <input
            id="nachname"
            autoComplete="family-name"
            className={cn(fieldClass, "mt-2", errors.nachname && "border-destructive")}
            aria-invalid={Boolean(errors.nachname)}
            aria-describedby={errors.nachname ? "nachname-error" : undefined}
            {...register("nachname")}
          />
          {errors.nachname && (
            <p id="nachname-error" className={errorClass}>
              {errors.nachname.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            E-Mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={cn(fieldClass, "mt-2", errors.email && "border-destructive")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="telefon">
            Telefon <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={cn(fieldClass, "mt-2", errors.telefon && "border-destructive")}
            aria-invalid={Boolean(errors.telefon)}
            {...register("telefon")}
          />
          {errors.telefon && <p className={errorClass}>{errors.telefon.message}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="anliegen">
            Worum geht es? <span aria-hidden="true">*</span>
          </label>
          <select
            id="anliegen"
            className={cn(fieldClass, "mt-2 appearance-none")}
            {...register("anliegen")}
          >
            {anliegen.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="sprache">
            Bevorzugte Sprache{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <select
            id="sprache"
            className={cn(fieldClass, "mt-2 appearance-none")}
            {...register("sprache")}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.label}>
                {l.label === l.native ? l.label : `${l.label} – ${l.native}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="nachricht">
          Nachricht <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="nachricht"
          rows={6}
          className={cn(
            fieldClass,
            "mt-2 resize-y py-3 leading-relaxed",
            errors.nachricht && "border-destructive",
          )}
          aria-invalid={Boolean(errors.nachricht)}
          aria-describedby="nachricht-hinweis"
          placeholder="Beschreiben Sie kurz, worum es geht und wie wir Sie am besten erreichen."
          {...register("nachricht")}
        />
        <p id="nachricht-hinweis" className="mt-2 text-sm text-muted-foreground">
          Bitte senden Sie uns über dieses Formular keine Gesundheits- oder Diagnosedaten.
          Persönliche Einzelheiten besprechen wir gerne telefonisch oder im persönlichen Gespräch.
        </p>
        {errors.nachricht && <p className={errorClass}>{errors.nachricht.message}</p>}
      </div>

      {/* Honeypot – für Menschen unsichtbar, hält einfache Spam-Bots ab */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex items-start gap-3 rounded-xl bg-surface p-4">
        <input
          id="datenschutz"
          type="checkbox"
          className="mt-1 size-5 shrink-0 rounded border-input accent-[oklch(0.56_0.075_190)]"
          aria-describedby={errors.datenschutz ? "datenschutz-error" : undefined}
          {...register("datenschutz")}
        />
        <div>
          <label htmlFor="datenschutz" className="text-sm leading-relaxed">
            Ich habe die{" "}
            <Link to="/datenschutz" className="font-semibold text-primary underline">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
            verwendet werden. <span aria-hidden="true">*</span>
          </label>
          {errors.datenschutz && (
            <p id="datenschutz-error" className={errorClass}>
              {errors.datenschutz.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:pointer-events-none disabled:opacity-70"
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {isSubmitting ? "Wird gesendet …" : "Anfrage senden"}
        </button>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
          Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Mit <span aria-hidden="true">*</span> gekennzeichnete Felder sind Pflichtfelder.
      </p>
    </form>
  );
}

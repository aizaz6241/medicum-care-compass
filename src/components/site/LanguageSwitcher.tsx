import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, type LanguageCode } from "@/data/company";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const current = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-primary",
          className,
        )}
        aria-label={`Sprache wählen – aktuell ${current.label}`}
      >
        <Globe className="size-4 text-accent" aria-hidden="true" />
        <span>{current.native}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel>Sprache wählen</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => setLanguage(l.code as LanguageCode)}
            className="flex items-center justify-between gap-3 py-2.5"
          >
            <span dir={l.dir} className="text-base">
              {l.native}
            </span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              {l.label}
              {l.code === language && <Check className="size-4 text-accent" aria-hidden="true" />}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

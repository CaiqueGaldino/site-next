"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

type Language = "pt-BR" | "en";

type ContactItem = {
  labelKey: "email" | "phone" | "wechat";
  value: string;
  href?: string;
  icon: "mail" | "phone" | "wechat";
};

type ProfileTranslation = {
  role: string;
  summary: string;
};

type ProfileContactPageProps = {
  name: string;
  translations: Record<Language, ProfileTranslation>;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  mobileImageFit?: "cover" | "contain";
  mobileImagePosition?: string;
  mobileLayout?: "regular" | "narrow";
  contacts: ContactItem[];
};

const icons = {
  mail: Mail,
  phone: Phone,
  wechat: MessageCircle,
};

const languageOptions: Array<{
  code: Language;
  flag: string;
  ariaLabel: string;
}> = [
  {
    code: "pt-BR",
    flag: "🇧🇷",
    ariaLabel: "Ver em portugues do Brasil",
  },
  {
    code: "en",
    flag: "🇺🇸",
    ariaLabel: "View in English",
  },
];

const sharedText = {
  "pt-BR": {
    back: "Voltar ao site",
    kicker: "Fitness Exclusive",
    copied: "copiado",
    copyError: "Nao foi possivel copiar",
    contacts: {
      email: "Email",
      phone: "Telefone",
      wechat: "WeChat",
    },
  },
  en: {
    back: "Back to website",
    kicker: "Fitness Exclusive",
    copied: "copied",
    copyError: "Could not copy",
    contacts: {
      email: "Email",
      phone: "Phone",
      wechat: "WeChat",
    },
  },
} satisfies Record<
  Language,
  {
    back: string;
    kicker: string;
    copied: string;
    copyError: string;
    contacts: Record<ContactItem["labelKey"], string>;
  }
>;

export function ProfileContactPage({
  name,
  translations,
  imageSrc,
  imageAlt,
  imagePosition = "center",
  mobileImageFit = "cover",
  mobileImagePosition,
  mobileLayout = "regular",
  contacts,
}: ProfileContactPageProps) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [copyMessage, setCopyMessage] = useState("");
  const [copiedContact, setCopiedContact] = useState<ContactItem["labelKey"] | null>(
    null
  );
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const profileText = translations[language];
  const pageText = sharedText[language];
  const imageClassName =
    mobileImageFit === "contain" ? "object-contain sm:object-cover" : "object-cover";
  const imageFrameClassName =
    mobileImageFit === "contain"
      ? "relative h-[min(62vw,300px)] min-h-[220px] bg-zinc-800 sm:h-[470px] lg:h-auto lg:min-h-[620px]"
      : "relative h-[min(74vw,360px)] min-h-[280px] bg-zinc-900 sm:h-[470px] lg:h-auto lg:min-h-[620px]";
  const imageStyle = {
    "--profile-image-position": imagePosition,
    "--profile-mobile-image-position": mobileImagePosition ?? imagePosition,
  } as CSSProperties;
  const pageFrameClassName =
    mobileLayout === "narrow"
      ? "mx-auto box-border w-[calc(100%-2rem)] max-w-[300px] min-w-0 py-2 sm:w-full sm:max-w-none sm:py-0"
      : "mx-auto box-border w-[calc(100%-2rem)] max-w-[360px] min-w-0 py-2 sm:w-full sm:max-w-none sm:py-0";

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const copyWithFallback = (value: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!copied) {
      throw new Error("Copy command failed");
    }
  };

  const handleCopyContact = async (contact: ContactItem) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contact.value);
      } else {
        copyWithFallback(contact.value);
      }

      setCopiedContact(contact.labelKey);
      setCopyMessage(`${pageText.contacts[contact.labelKey]} ${pageText.copied}`);
    } catch {
      setCopiedContact(null);
      setCopyMessage(pageText.copyError);
    }

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    copyTimeoutRef.current = setTimeout(() => {
      setCopyMessage("");
      setCopiedContact(null);
    }, 2200);
  };

  return (
    <main className="box-border min-h-svh overflow-x-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(135deg,rgba(250,201,52,0.12),transparent_30%),linear-gradient(315deg,rgba(235,167,48,0.10),transparent_32%)]" />

      <section className="relative mx-auto box-border flex min-h-svh w-full max-w-6xl items-center px-0 py-4 sm:px-8 sm:py-8 lg:px-10">
        <div className={pageFrameClassName}>
          <div className="mb-4 flex flex-col items-start gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-zinc-300 transition-colors hover:text-[#FAC934]"
            >
              <ArrowLeft className="h-4 w-4" />
              {pageText.back}
            </Link>

            <div className="flex rounded-full border border-white/10 bg-black/55 p-1 shadow-lg shadow-black/30 backdrop-blur">
              {languageOptions.map((option) => {
                const active = option.code === language;

                return (
                  <button
                    key={option.code}
                    type="button"
                    aria-label={option.ariaLabel}
                    aria-pressed={active}
                    onClick={() => setLanguage(option.code)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xl transition ${
                      active
                        ? "bg-[#FAC934] shadow-sm shadow-[#FAC934]/30"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <span aria-hidden="true">{option.flag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="box-border w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/50 backdrop-blur sm:rounded-[1.75rem]">
            <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.86fr_1.14fr]">
              <div className={imageFrameClassName}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className={`${imageClassName} [object-position:var(--profile-mobile-image-position)] sm:[object-position:var(--profile-image-position)]`}
                  style={imageStyle}
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              </div>

              <div className="box-border flex min-w-0 flex-col justify-center p-5 sm:p-9 lg:p-12">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FAC934] sm:mb-3 sm:text-sm">
                  {pageText.kicker}
                </p>

                <h1 className="break-words text-[1.75rem] font-black leading-tight text-white sm:text-5xl">
                  {name}
                </h1>

                <p className="mt-2 text-base font-semibold text-zinc-300 sm:mt-3 sm:text-lg">
                  {profileText.role}
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
                  {profileText.summary}
                </p>

                <div className="mt-7 grid min-w-0 gap-3 sm:mt-9">
                  {contacts.map((contact) => {
                    const Icon = icons[contact.icon];
                    const content = (
                      <>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAC934] text-black sm:h-11 sm:w-11">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500 sm:text-xs">
                            {pageText.contacts[contact.labelKey]}
                          </span>
                          <span className="mt-1 block break-all text-sm font-semibold text-white sm:break-words sm:text-base">
                            {contact.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <button
                        key={contact.labelKey}
                        type="button"
                        onClick={() => handleCopyContact(contact)}
                        className="relative flex min-h-[76px] min-w-0 cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left transition hover:border-[#FAC934]/70 hover:bg-[#FAC934]/10 sm:gap-4 sm:rounded-2xl sm:p-4"
                      >
                        {content}
                        {copiedContact === contact.labelKey && (
                          <span className="absolute right-3 top-3 rounded-full bg-[#FAC934] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-black">
                            {pageText.copied}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            aria-live="polite"
            className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-[#FAC934]/40 bg-zinc-950/95 px-4 py-2 text-sm font-bold text-white shadow-2xl shadow-black/40 transition ${
              copyMessage
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
            }`}
          >
            {copyMessage}
          </div>
        </div>
      </section>
    </main>
  );
}

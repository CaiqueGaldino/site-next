import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: "mail" | "phone" | "wechat";
};

type ProfileContactPageProps = {
  name: string;
  role: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  contacts: ContactItem[];
};

const icons = {
  mail: Mail,
  phone: Phone,
  wechat: MessageCircle,
};

export function ProfileContactPage({
  name,
  role,
  summary,
  imageSrc,
  imageAlt,
  imagePosition = "center",
  contacts,
}: ProfileContactPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,201,52,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(235,167,48,0.12),transparent_32%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-8 sm:px-8 lg:px-10">
        <div className="w-full">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-[#FAC934]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/82 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[340px] bg-zinc-900 sm:min-h-[460px] lg:min-h-[620px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                  style={{ objectPosition: imagePosition }}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent lg:hidden" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#FAC934]">
                  Fitness Exclusive
                </p>

                <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                  {name}
                </h1>

                <p className="mt-3 text-lg font-semibold text-zinc-300">
                  {role}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                  {summary}
                </p>

                <div className="mt-9 grid gap-3">
                  {contacts.map((contact) => {
                    const Icon = icons[contact.icon];
                    const content = (
                      <>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAC934] text-black">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                            {contact.label}
                          </span>
                          <span className="mt-1 block break-words text-base font-semibold text-white">
                            {contact.value}
                          </span>
                        </span>
                      </>
                    );

                    if (contact.href) {
                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#FAC934]/70 hover:bg-[#FAC934]/10"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={contact.label}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

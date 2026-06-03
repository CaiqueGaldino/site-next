"use client";

import React, { useEffect } from "react";
import { ArrowRight, Instagram } from "lucide-react";

const posts = [
  "https://www.instagram.com/p/DUqcsH2kVhP/",
  "https://www.instagram.com/p/DWrohohkXb2/",
  "https://www.instagram.com/p/DVOWX89jqdM/",
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/academiafitnessexclusive/";

type InstagramWindow = Window & {
  instgrm?: {
    Embeds: {
      process: () => void;
    };
  };
};

export default function InstagramSectionMobile() {
  useEffect(() => {
    // TODO: Instagram embed can trigger permission requests
    // const loadInstagramEmbed = () => {
    //   const instagramWindow = window as InstagramWindow;
    //   if (instagramWindow.instgrm) {
    //     instagramWindow.instgrm.Embeds.process();
    //     return;
    //   }
    //   const script = document.createElement("script");
    //   script.src = "//www.instagram.com/embed.js";
    //   script.async = true;
    //   script.defer = true;
    //   document.body.appendChild(script);
    // };
    // loadInstagramEmbed();
  }, []);

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-10">
      <div className="relative z-10">
        <div className="mb-7">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#EBA730]/25 bg-[#EBA730]/10 text-[#FAC934]">
              <Instagram className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
              Instagram
            </p>
          </div>

          <h2 className="mb-3 font-display text-2xl font-extrabold leading-tight text-white">
            Siga-nos no{" "}
            <span className="gold-gradient-text">
              Instagram
            </span>
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Acompanhe dicas, rotina e novidades da Fitness Exclusive.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pt-2 scrollbar-hide">
          {posts.map((url, index) => (
            <div
              key={index}
              className="relative h-[430px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-lg border border-white/10 bg-black"
            >
              <div className="origin-top-left scale-[0.79]">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#000",
                    border: 0,
                    borderRadius: 0,
                    boxShadow: "none",
                    margin: 0,
                    maxWidth: "326px",
                    minWidth: "326px",
                    padding: 0,
                    width: "326px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full px-7 py-3 text-sm"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

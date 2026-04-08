"use client";

import React, { useEffect } from "react";
import { ArrowRight, Instagram } from "lucide-react";

const posts = [
  "https://www.instagram.com/p/DUqcsH2kVhP/",
  "https://www.instagram.com/p/DWrohohkXb2/",
  "https://www.instagram.com/p/DVOWX89jqdM/",
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/academiafitnessexclusive/";

export default function InstagramSectionMobile() {
  useEffect(() => {
    const loadInstagramEmbed = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
        return;
      }
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadInstagramEmbed();
  }, []);

  return (
    <section className="py-10 bg-zinc-950 relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl blur-md opacity-70" />
              <div className="relative bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-xl">
                <Instagram className="w-7 h-7 text-white" strokeWidth={1.8} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-black mb-3 leading-tight text-white">
            Siga-nos no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Instagram
            </span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xs mx-auto">
            Acompanhe dicas, rotina e novidades da Fitness Exclusive.
          </p>
        </div>

        {/* Embeds em scroll horizontal no mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {posts.map((url, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[300px] rounded-2xl overflow-hidden border border-zinc-800 bg-black"
            >
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
                  maxWidth: "100%",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-7 py-3 rounded-full text-sm shadow-lg"
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

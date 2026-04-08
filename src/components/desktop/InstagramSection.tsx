"use client";

import React, { useEffect } from "react";
import { ArrowRight, Instagram } from "lucide-react";

const posts = [
  "https://www.instagram.com/p/DUqcsH2kVhP/",
  "https://www.instagram.com/p/DWrohohkXb2/",
  "https://www.instagram.com/p/DVOWX89jqdM/",
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/academiafitnessexclusive/";

export default function InstagramSection() {
  useEffect(() => {
    // Carrega o script oficial do Instagram e processa os embeds
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
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl blur-md opacity-70" />
              <div className="relative bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-4 rounded-2xl">
                <Instagram className="w-9 h-9 text-white" strokeWidth={1.8} />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight text-white">
            Siga-nos no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Instagram
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Acompanhe nossa rotina, dicas de treino e fique por dentro de todas
            as novidades da Fitness Exclusive.
          </p>
        </div>

        {/* Instagram Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 items-start">
          {posts.map((url, index) => (
            <div
              key={index}
              className="flex justify-center rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-xl hover:border-zinc-600 transition-all duration-300 hover:shadow-purple-900/20 hover:shadow-2xl"
            >
              <blockquote
                className="instagram-media w-full"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#000",
                  border: 0,
                  borderRadius: "0px",
                  boxShadow: "none",
                  margin: "0",
                  maxWidth: "100%",
                  minWidth: "326px",
                  padding: "0",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-pink-900/40 hover:shadow-2xl"
          >
            <Instagram className="w-6 h-6" />
            Seguir no Instagram
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import { ArrowRight, Instagram } from "lucide-react";

const posts = [
  "https://www.instagram.com/p/DX62uTfjuVR/",
  "https://www.instagram.com/p/DXmV5kfkSPl/",
  "https://www.instagram.com/p/DXE8RWNjqVT/",
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/academiafitnessexclusive/";

type InstagramWindow = Window & {
  instgrm?: {
    Embeds: {
      process: () => void;
    };
  };
};

export default function InstagramSection() {
  useEffect(() => {
    const loadInstagramEmbed = () => {
      const instagramWindow = window as InstagramWindow;

      if (instagramWindow.instgrm) {
        instagramWindow.instgrm.Embeds.process();
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
    <section className="relative overflow-hidden bg-black py-24">
      <div className="section-shell relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="section-title">
            Acompanhe a rotina da{" "}
            <span className="gold-gradient-text">Fitness Exclusive</span>
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Dicas de treino, bastidores das unidades e novidades para quem vive
            a comunidade Fitness Exclusive.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:grid-cols-3">
          {posts.map((url, index) => (
            <div
              key={index}
              className="brand-card flex justify-center overflow-hidden transition duration-300 hover:border-[#EBA730]/45"
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

        <div className="text-center">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Instagram className="h-5 w-5" />
            Seguir no Instagram
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

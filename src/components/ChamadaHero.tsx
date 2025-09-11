import React from "react";

export default function ChamadaHero() {
  return (
    <section className="w-full max-w-4xl mx-auto text-center py-14 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 rounded-3xl shadow-2xl mb-6">
      <h1 className="text-5xl sm:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 dark:from-blue-300 dark:via-blue-500 dark:to-blue-700 drop-shadow-xl">
        Academia <span className="text-zinc-900 dark:text-white">Fitness Exclusive</span>
      </h1>
      <p className="text-xl sm:text-2xl text-zinc-700 dark:text-zinc-200 mb-8 font-medium max-w-2xl mx-auto">
        Venha transformar seu corpo e sua saúde com a melhor estrutura, profissionais qualificados e planos que cabem no seu bolso!
      </p>
      <a href="#planos" className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-extrabold px-10 py-4 rounded-full shadow-xl transition-all text-xl animate-bounce hover:animate-none">
        Conheça nossos planos
      </a>
    </section>
  );
}

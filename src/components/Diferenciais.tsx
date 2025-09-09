import React from "react";

export default function Diferenciais() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 rounded-3xl shadow-2xl border-4 border-blue-600/20 dark:border-blue-400/20 transition-transform hover:scale-105">
        <span className="text-6xl mb-3 drop-shadow-lg">💪</span>
        <h4 className="font-extrabold text-xl mb-2 text-blue-700 dark:text-blue-300">Equipamentos Modernos</h4>
        <p className="text-zinc-700 dark:text-zinc-200 text-base">Aparelhos de última geração para todos os tipos de treino.</p>
      </div>
      <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 rounded-3xl shadow-2xl border-4 border-blue-600/20 dark:border-blue-400/20 transition-transform hover:scale-105">
        <span className="text-6xl mb-3 drop-shadow-lg">👩‍🏫</span>
        <h4 className="font-extrabold text-xl mb-2 text-blue-700 dark:text-blue-300">Profissionais Qualificados</h4>
        <p className="text-zinc-700 dark:text-zinc-200 text-base">Equipe de instrutores experientes para te acompanhar.</p>
      </div>
      <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 rounded-3xl shadow-2xl border-4 border-blue-600/20 dark:border-blue-400/20 transition-transform hover:scale-105">
        <span className="text-6xl mb-3 drop-shadow-lg">🏆</span>
        <h4 className="font-extrabold text-xl mb-2 text-blue-700 dark:text-blue-300">Resultados Garantidos</h4>
        <p className="text-zinc-700 dark:text-zinc-200 text-base">Planos e acompanhamento para você atingir seus objetivos.</p>
      </div>
    </section>
  );
}

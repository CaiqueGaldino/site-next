"use client";
import React, { useState } from "react";
import { X, Dumbbell, Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
import { unidades } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";

interface FormularioAgendamentoProps {
  isOpen: boolean;
  onClose: () => void;
  tipo?: "aula-experimental" | "quero-fazer-parte";
}

export default function FormularioAgendamento({
  isOpen,
  onClose,
  tipo = "aula-experimental"
}: FormularioAgendamentoProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    unidade: "",
    data: "",
    horario: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const horariosDisponiveis = [
    "05:00 - 06:00",
    "06:00 - 07:00",
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Formatar telefone
    if (name === "telefone") {
      const numeros = value.replace(/\D/g, "");
      let telefoneFormatado = numeros;
      
      if (numeros.length <= 11) {
        telefoneFormatado = numeros
          .replace(/^(\d{2})(\d)/g, "($1) $2")
          .replace(/(\d)(\d{4})$/, "$1-$2");
      }
      
      setFormData({ ...formData, [name]: telefoneFormatado });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Limpar erro do campo ao digitar
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validarFormulario = () => {
    const novosErros: { [key: string]: string } = {};

    if (!formData.nome.trim()) {
      novosErros.nome = "Nome completo é obrigatório";
    }

    if (!formData.telefone.trim()) {
      novosErros.telefone = "Telefone é obrigatório";
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      novosErros.telefone = "Telefone inválido";
    }

    if (!formData.email.trim()) {
      novosErros.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      novosErros.email = "Email inválido";
    }

    if (!formData.unidade) {
      novosErros.unidade = "Selecione uma unidade";
    }

    if (!formData.data) {
      novosErros.data = "Data é obrigatória";
    }

    if (!formData.horario) {
      novosErros.horario = "Horário é obrigatório";
    }

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarFormulario()) {
      hapticFeedback("medium");
      return;
    }

    hapticFeedback("heavy");

    const unidadeSelecionada = unidades.find(u => u.nome === formData.unidade);
    const dataFormatada = new Date(formData.data + "T00:00:00").toLocaleDateString("pt-BR");
    
    const mensagem = tipo === "aula-experimental"
      ? `*Agendamento - Aula Experimental*\n\n` +
        `*Nome:* ${formData.nome}\n` +
        `*Telefone:* ${formData.telefone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Unidade:* ${formData.unidade}\n` +
        `*Data:* ${dataFormatada}\n` +
        `*Horário:* ${formData.horario}\n\n` +
        `Gostaria de agendar uma aula experimental!`
      : `*Quero Fazer Parte da Stack Fight*\n\n` +
        `*Nome:* ${formData.nome}\n` +
        `*Telefone:* ${formData.telefone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Unidade:* ${formData.unidade}\n` +
        `*Data para visita:* ${dataFormatada}\n` +
        `*Horário:* ${formData.horario}\n\n` +
        `Gostaria de conhecer a academia e fazer parte do time!`;

    const telefoneUnidade = unidadeSelecionada?.telefone?.replace(/\D/g, "") || "5587993595368";
    const whatsappUrl = `https://wa.me/${telefoneUnidade}?text=${encodeURIComponent(mensagem)}`;

    window.open(whatsappUrl, "_blank");
    
    // Resetar formulário e fechar modal
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      unidade: "",
      data: "",
      horario: ""
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  // Data mínima: hoje
  const hoje = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-[#EBA730]/30 rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-black/90 backdrop-blur-sm border-b border-[#EBA730]/30 p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent">
            {tipo === "aula-experimental" ? "Agendar Aula Experimental" : "Quero Fazer Parte"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full touch-manipulation"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nome Completo */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.nome ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EBA730] transition-colors`}
              placeholder="Digite seu nome completo"
            />
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              maxLength={15}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.telefone ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EBA730] transition-colors`}
              placeholder="(00) 00000-0000"
            />
            {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Melhor Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EBA730] transition-colors`}
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Unidade */}
          <div>
            <label htmlFor="unidade" className="block text-sm font-medium text-gray-300 mb-2">
              Unidade *
            </label>
            <select
              id="unidade"
              name="unidade"
              value={formData.unidade}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.unidade ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white focus:outline-none focus:border-[#EBA730] transition-colors`}
            >
              <option value="">Selecione a unidade</option>
              {unidades.map((unidade) => (
                <option key={unidade.nome} value={unidade.nome}>
                  {unidade.nome} - {unidade.cidade}
                </option>
              ))}
            </select>
            {errors.unidade && <p className="text-red-500 text-xs mt-1">{errors.unidade}</p>}
          </div>

          {/* Data */}
          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-300 mb-2">
              Data da Visita *
            </label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              min={hoje}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.data ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white focus:outline-none focus:border-[#EBA730] transition-colors`}
            />
            {errors.data && <p className="text-red-500 text-xs mt-1">{errors.data}</p>}
          </div>

          {/* Horário */}
          <div>
            <label htmlFor="horario" className="block text-sm font-medium text-gray-300 mb-2">
              Horário *
            </label>
            <select
              id="horario"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.horario ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white focus:outline-none focus:border-[#EBA730] transition-colors`}
            >
              <option value="">Selecione o horário</option>
              {horariosDisponiveis.map((horario) => (
                <option key={horario} value={horario}>
                  {horario}
                </option>
              ))}
            </select>
            {errors.horario && <p className="text-red-500 text-xs mt-1">{errors.horario}</p>}
          </div>

          {/* Botão Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold py-4 rounded-full transition-all transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg mt-6 mb-20"
          >
            {tipo === "aula-experimental" ? (
              <>
                <Dumbbell className="w-5 h-5 mr-2 inline" /> Agendar Aula
              </>
            ) : (
              <>
                <Dumbbell className="w-5 h-5 mr-2 inline" /> Enviar Solicitação
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

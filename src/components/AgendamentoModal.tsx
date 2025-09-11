"use client";
import React, { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  unidade: string;
  modalidade: string;
  horario: string;
  mensagem: string;
}

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgendamentoModal({ isOpen, onClose }: AgendamentoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    unidade: "",
    modalidade: "",
    horario: "",
    mensagem: "",
  });

  const unidades = [
    "Centro - Matriz",
    "Vila Madalena", 
    "Moema",
    "Pinheiros",
    "Ipanema",
    "Barra da Tijuca",
    "Savassi",
    "Aldeota",
    "Boa Viagem",
    "Moinhos de Vento"
  ];

  const modalidades = [
    "Musculação",
    "Cross Training",
    "Funcional",
    "Aeróbicos",
    "Personal Trainer"
  ];

  const horarios = [
    "Manhã (06h - 12h)",
    "Tarde (12h - 18h)",
    "Noite (18h - 22h)"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com seu backend ou serviço de email
    console.log("Dados do agendamento:", formData);
    
    // Simular envio
    alert("Agendamento solicitado com sucesso! Entraremos em contato em breve.");
    onClose();
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      unidade: "",
      modalidade: "",
      horario: "",
      mensagem: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#EBA730]/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Agendar Aula Experimental
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Unidade Preferida *
              </label>
              <select
                name="unidade"
                value={formData.unidade}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none"
              >
                <option value="">Selecione uma unidade</option>
                {unidades.map((unidade) => (
                  <option key={unidade} value={unidade}>
                    {unidade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Modalidade de Interesse *
              </label>
              <select
                name="modalidade"
                value={formData.modalidade}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none"
              >
                <option value="">Selecione uma modalidade</option>
                {modalidades.map((modalidade) => (
                  <option key={modalidade} value={modalidade}>
                    {modalidade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Horário Preferido *
              </label>
              <select
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none"
              >
                <option value="">Selecione um horário</option>
                {horarios.map((horario) => (
                  <option key={horario} value={horario}>
                    {horario}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensagem (opcional)
            </label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows={3}
              className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#EBA730] focus:outline-none resize-none"
              placeholder="Conte-nos mais sobre seus objetivos..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-3 px-6 rounded-full transition-colors"
            >
              Agendar Aula
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Hook para usar o modal
export function useAgendamentoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
}

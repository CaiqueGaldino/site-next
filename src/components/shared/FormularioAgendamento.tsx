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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // URL do Google Apps Script
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzP_-q5HjNcv_DvLA9zZmkTAO1mjgIjWSUqcdDUSIn4HEinebVJ4Vi4O1MQyn89rAbMxQ/exec";

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

    if (!formData.unidade) {
      setErrors({ unidade: "Por favor, selecione uma unidade" });
      hapticFeedback("medium");
      return;
    }

    const unidadeSelecionada = unidades.find(u => u.nome === formData.unidade);
    if (unidadeSelecionada) {
      const telefoneLimpo = unidadeSelecionada.telefone.replace(/\D/g, "");
      const mensagem = `Olá! Gostaria de agendar uma ${tipo === "aula-experimental" ? "aula experimental" : "visita"} na Fitness Exclusive ${unidadeSelecionada.nome}.`;
      window.open(`https://wa.me/55${telefoneLimpo}?text=${encodeURIComponent(mensagem)}`, "_blank");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-[#EBA730]/30 rounded-2xl w-full max-w-md shadow-2xl animate-scale-in">
        <div className="sticky top-0 bg-black/90 backdrop-blur-sm border-b border-[#EBA730]/30 p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent">
            {tipo === "aula-experimental" ? "Agendar Experimental" : "Quero Fazer Parte"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full touch-manipulation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <p className="text-gray-400 text-center">
            Escolha a unidade mais próxima de você para falar direto no WhatsApp:
          </p>

          <div>
            <label htmlFor="unidade" className="block text-sm font-medium text-gray-300 mb-3">
              Selecione a Unidade *
            </label>
            <select
              id="unidade"
              name="unidade"
              value={formData.unidade}
              onChange={handleChange}
              className={`w-full px-4 py-4 bg-black border ${
                errors.unidade ? "border-red-500" : "border-gray-700"
              } rounded-xl text-white focus:outline-none focus:border-[#EBA730] transition-colors text-base`}
            >
              <option value="">Clique aqui para escolher...</option>
              {unidades.map((unidade) => (
                <option key={unidade.nome} value={unidade.nome}>
                  {unidade.nome} - {unidade.cidade}
                </option>
              ))}
            </select>
            {errors.unidade && <p className="text-red-500 text-xs mt-2">{errors.unidade}</p>}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-3 text-lg"
          >
            <Dumbbell className="w-6 h-6" />
            Continuar no WhatsApp
          </button>

          <p className="text-zinc-500 text-xs text-center border-t border-white/5 pt-6">
            Você será redirecionado para o WhatsApp da unidade selecionada.
          </p>
        </div>
      </div>
    </div>
  );
}

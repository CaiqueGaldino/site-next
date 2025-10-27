"use client";
import React from "react";
import { Dock, DockIcon, DockItem, DockLabel } from "../ui/shadcn-io/dock";
import { hapticFeedback } from "../../lib/mobileUtils";
import { 
  Home, 
  CreditCard, 
  Dumbbell, 
  MapPin, 
  MessageCircle,
  Phone
} from "lucide-react";

interface DockNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function DockNavigation({ activeSection, onNavigate }: DockNavigationProps) {
  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "estrutura", label: "Estrutura", icon: Dumbbell },
    { id: "unidades", label: "Unidades", icon: MapPin },
    { id: "planos", label: "Planos", icon: CreditCard },
    { id: "faq", label: "FAQ", icon: Phone },
  ];

  const handleNavigate = (sectionId: string) => {
    hapticFeedback('medium');
    onNavigate(sectionId);
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2">
      <Dock
        magnification={60}
        distance={100}
        className="bg-black/90 backdrop-blur-lg border-2 border-[#EBA730]/30"
      >
        {navigationItems.map((item) => (
          <DockItem key={item.id}>
            <DockLabel>{item.label}</DockLabel>
            <DockIcon>
              <button
                onClick={() => handleNavigate(item.id)}
                className={`w-full h-full flex items-center justify-center rounded-lg transition-colors touch-manipulation ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </button>
            </DockIcon>
          </DockItem>
        ))}
        
      </Dock>
    </div>
  );
}

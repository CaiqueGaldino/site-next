"use client";
import React from "react";
import { Dock, DockIcon, DockItem } from "../ui/shadcn-io/dock";
import { hapticFeedback } from "../../lib/mobileUtils";
import { 
  Building2, 
  CreditCard, 
  Dumbbell, 
  Phone
} from "lucide-react";

interface DockNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function DockNavigation({ activeSection, onNavigate }: DockNavigationProps) {
  const navigationItems = [
    { id: "planos", label: "Planos", icon: CreditCard },
    { id: "unidades", label: "Unidades", icon: Building2 },
    { id: "modalidades", label: "Modalidades", icon: Dumbbell },
    { id: "faq", label: "FAQ", icon: Phone },
  ];

  const handleNavigate = (sectionId: string) => {
    hapticFeedback('medium');
    onNavigate(sectionId);
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3">
      <Dock
        magnification={52}
        distance={90}
        className="border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        {navigationItems.map((item) => (
          <DockItem key={item.id}>
            <DockIcon>
              <button
                onClick={() => handleNavigate(item.id)}
                className={`flex h-full w-full items-center justify-center rounded-lg transition-colors touch-manipulation ${
                  activeSection === item.id
                    ? 'text-[#FAC934]'
                    : 'text-zinc-400 hover:text-white'
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

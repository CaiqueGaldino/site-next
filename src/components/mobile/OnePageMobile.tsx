"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hapticFeedback } from "../../lib/mobileUtils";
import DockNavigation from "./DockNavigation";
import BannerOverlay from "./BannerOverlay";
import PlanosMobile from "./PlanosMobile";
import BeneficiosMobile from "./BeneficiosMobile";
import FAQMobile from "./FAQMobile";
import ModalidadesMobile from "./ModalidadesMobile";
import ContadorAlunosMobile from "./ContadorAlunosMobile";
import EstruturaModerna from "../desktop/EstruturaModerna";
import Unidades from "../desktop/Unidades";
import AulaExperimental from "../desktop/AulaExperimental";

type Section = "unidades" | "modalidades" | "planos" | "faq";

const sections: Section[] = ["unidades", "modalidades", "planos", "faq"];

export default function OnePageMobile() {
  const [activeSection, setActiveSection] = useState<Section>("unidades");
  const [direction, setDirection] = useState(0);

  const handleNavigate = (sectionId: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const newIndex = sections.indexOf(sectionId as Section);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSection(sectionId as Section);
    hapticFeedback('medium');
  };

  const handleSwipe = (offset: number) => {
    const currentIndex = sections.indexOf(activeSection);
    
    if (offset > 50 && currentIndex > 0) {
      // Swipe right - go to previous
      setDirection(-1);
      setActiveSection(sections[currentIndex - 1]);
      hapticFeedback('light');
    } else if (offset < -50 && currentIndex < sections.length - 1) {
      // Swipe left - go to next
      setDirection(1);
      setActiveSection(sections[currentIndex + 1]);
      hapticFeedback('light');
    }
  };

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

  const renderSection = () => {
    switch (activeSection) {
      case "unidades":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <Unidades />
            <div className="h-24"></div>
          </div>
        );

      case "modalidades":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <ModalidadesMobile />
            <div className="h-24"></div>
          </div>
        );

      case "planos":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <PlanosMobile />
            <BeneficiosMobile />
            <div className="h-24"></div>
          </div>
        );

      case "faq":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <FAQMobile />
            <AulaExperimental />
            <div className="h-24"></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black flex flex-col fixed inset-0 mobile-one-page">
      {/* Banner Overlay - Aparece ao carregar */}
      <BannerOverlay />

      {/* Content Area - Fixed height */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSection}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => handleSwipe(offset.x)}
            className="absolute inset-0"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dock Navigation - Fixed at bottom */}
      <DockNavigation 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

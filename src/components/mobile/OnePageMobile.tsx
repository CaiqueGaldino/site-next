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
import UnidadesMobile from "./UnidadesMobile";
import AulaExperimental from "../desktop/AulaExperimental";
import HeroSectionMobile from "./HeroSectionMobile";
import AvaliacoesMobile from "./AvaliacoesMobile";
import RecentBlogSectionMobile from "./RecentBlogSectionMobile";
import InstagramSectionMobile from "./InstagramSectionMobile";
import SejaInvestidorMobile from "./SejaInvestidorMobile";
import SejaFranqueadoMobile from "./SejaFranqueadoMobile";

type Section = "planos" | "modalidades" | "unidades" | "faq";

const sections: Section[] = ["planos", "unidades", "modalidades", "faq"];

export default function OnePageMobile() {
  const [activeSection, setActiveSection] = useState<Section>("planos");
  const [direction, setDirection] = useState(0);

  const handleNavigate = (sectionId: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const newIndex = sections.indexOf(sectionId as Section);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSection(sectionId as Section);
    hapticFeedback('medium');
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
            <UnidadesMobile />
            <div className="h-24"></div>
          </div>
        );

      case "modalidades":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <ModalidadesMobile />
            <RecentBlogSectionMobile />
            <AvaliacoesMobile />
            <InstagramSectionMobile />
            <div className="h-30"></div>
          </div>
        );

      case "planos":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <HeroSectionMobile />
            <PlanosMobile />
            <BeneficiosMobile />
            <div className="h-24"></div>
          </div>
        );

      case "faq":
        return (
          <div className="h-full overflow-y-auto scrollbar-hide">
            <SejaInvestidorMobile />
            <SejaFranqueadoMobile />
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
    <div className="fixed inset-0 flex h-screen w-screen flex-col overflow-hidden bg-black mobile-one-page">
      {/* Banner Overlay - Aparece ao carregar */}
      <BannerOverlay />

      {/* Content Area - Fixed height */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSection}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 32 },
              opacity: { duration: 0.2 }
            }}
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

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HomeDesktop = dynamic(() => import("../app/page-desktop"), {
  ssr: false,
});

const HomeMobile = dynamic(() => import("../app/page-mobile"), {
  ssr: false,
});

export default function DeviceDetector() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      // Verifica pelo tamanho da tela
      const screenWidth = window.innerWidth;
      const isMobileScreen = screenWidth < 768;

      // Verifica pelo user agent
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Verifica se é touch device
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Considera mobile se atender qualquer critério
      setIsMobile(isMobileScreen || (isMobileDevice && isTouchDevice));
    };

    checkDevice();

    // Re-verifica quando a janela é redimensionada
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Evita flash de conteúdo incorreto
  if (isMobile === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}

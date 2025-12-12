import HeaderDesktop from "../components/desktop/HeaderDesktop";
import HeroCarrossel from "../components/shared/Carrossel";
import Planos from "../components/desktop/Planos";
import ContadorAlunos from "../components/desktop/ContadorAlunos";
import DiferenciaisStack from "../components/desktop/DiferenciaisStack";
import Beneficios from "../components/desktop/Beneficios";
import Avaliacoes from "../components/desktop/Avaliacoes";
import Unidades from "../components/desktop/Unidades";
import FAQ from "../components/desktop/FAQ";
import AulaExperimental from "../components/desktop/AulaExperimental";
import Footer from "../components/desktop/Footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";
import ScrollToTop from "../components/shared/ScrollToTop";

export default function HomeDesktop() {
  return (
    <div className="font-sans min-h-screen bg-black">
      <HeaderDesktop />
      <main className="pt-20">
        <HeroCarrossel />
        <Planos />
        <ContadorAlunos />
        <DiferenciaisStack />
        <Beneficios />
        <Avaliacoes />
        <Unidades />
        <FAQ />
        <AulaExperimental />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

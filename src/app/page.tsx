
import Header from "../components/Header";
import HeroCarrossel from "../components/Carrossel";
import Planos from "../components/Planos";
import Estrutura from "../components/Estrutura";
import ContadorAlunos from "../components/ContadorAlunos";
import Avaliacoes from "../components/Avaliacoes";
import Unidades from "../components/Unidades";
import FAQ from "../components/FAQ";
import AulaExperimental from "../components/AulaExperimental";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <HeroCarrossel />
        <Planos />
        <Estrutura />
        <ContadorAlunos />
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

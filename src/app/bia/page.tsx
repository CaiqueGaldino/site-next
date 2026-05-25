import { BioimpedanciaScreen } from '@/components/bioimpedance';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Avaliacao corporal | Academia',
  description:
    'Experiencia animada de avaliacao corporal para acompanhar evolucao, definir metas e orientar o treino.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function BioimpedancePage() {
  return <BioimpedanciaScreen />;
}

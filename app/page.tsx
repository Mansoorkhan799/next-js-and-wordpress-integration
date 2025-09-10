import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolGrid from '@/components/ToolGrid';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Tools Platform - Discover Powerful AI Tools',
  description: 'Explore a comprehensive collection of AI tools for productivity, creativity, and automation. Download and use the best AI tools available.',
  openGraph: {
    title: 'AI Tools Platform - Discover Powerful AI Tools',
    description: 'Explore a comprehensive collection of AI tools for productivity, creativity, and automation.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <main>
        <Hero />
        <ToolGrid />
      </main>
      <Footer />
    </div>
  );
}

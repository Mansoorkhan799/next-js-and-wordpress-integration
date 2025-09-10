import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryGrid from '@/components/CategoryGrid';

export const metadata: Metadata = {
  title: 'AI Tool Categories - Browse by Category | AI Tools Platform',
  description: 'Browse AI tools by category. Find productivity tools, creative AI, writing assistants, design tools, and development resources.',
  openGraph: {
    title: 'AI Tool Categories - Browse by Category',
    description: 'Browse AI tools by category. Find the perfect tool for your specific needs.',
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <main>
        <div className="bg-gradient-to-b from-github-dark-secondary to-github-dark py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-github-text mb-4">
              AI Tool Categories
            </h1>
            <p className="text-xl text-github-text-secondary max-w-3xl mx-auto">
              Explore AI tools organized by category. Find the perfect tool for your specific needs 
              and discover new solutions you might not have known existed.
            </p>
          </div>
        </div>
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  );
}

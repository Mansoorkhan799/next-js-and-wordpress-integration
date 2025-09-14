import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AllToolsGrid from '@/components/AllToolsGrid';

export const metadata: Metadata = {
  title: 'All AI Tools - Complete Collection | AI Tools Platform',
  description: 'Browse our complete collection of AI tools. Find the perfect AI tool for productivity, creativity, writing, design, and development.',
  openGraph: {
    title: 'All AI Tools - Complete Collection',
    description: 'Browse our complete collection of AI tools for every need.',
    images: ['/og-tools.jpg'],
  },
};

export default function AllToolsPage({ searchParams }: { searchParams: { search?: string } }) {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <main>
        <div className="bg-gradient-to-b from-github-dark-secondary to-github-dark py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-github-text mb-4">
              All AI Tools
            </h1>
            <p className="text-xl text-github-text-secondary max-w-3xl mx-auto">
              Discover our complete collection of AI tools. Filter by category, search by name, 
              and find the perfect tool for your needs.
            </p>
          </div>
        </div>
        <AllToolsGrid initialSearch={searchParams.search} />
      </main>
      <Footer />
    </div>
  );
}

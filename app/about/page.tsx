import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us - AI Tools Platform',
  description: 'Learn about our mission to democratize AI tools and help users discover the best AI solutions for their needs.',
  openGraph: {
    title: 'About Us - AI Tools Platform',
    description: 'Learn about our mission to democratize AI tools and help users discover the best AI solutions.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-github-text mb-4">
            About AI Tools Platform
          </h1>
          <p className="text-xl text-github-text-secondary max-w-3xl mx-auto">
            We&apos;re on a mission to democratize AI tools and help users discover the best AI solutions for their needs.
          </p>
        </div>

        <div className="space-y-12">
          <section className="card">
            <h2 className="text-2xl font-bold text-github-text mb-4">Our Mission</h2>
            <p className="text-github-text-secondary leading-relaxed">
              At AI Tools Platform, we believe that artificial intelligence should be accessible to everyone. 
              Our platform serves as a comprehensive directory of AI tools, helping users discover, evaluate, 
              and access the best AI solutions for productivity, creativity, and automation.
            </p>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold text-github-text mb-4">What We Do</h2>
            <ul className="space-y-3 text-github-text-secondary">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-github-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Curate and review the best AI tools available in the market</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-github-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Provide detailed information about each tool&apos;s features and use cases</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-github-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Offer direct download links and official website access</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-github-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Help users find the right tool for their specific needs</span>
              </li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-2xl font-bold text-github-text mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Quality First</h3>
                <p className="text-github-text-secondary">
                  We carefully vet each tool to ensure it meets our high standards for functionality and user experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">User-Centric</h3>
                <p className="text-github-text-secondary">
                  Our platform is designed with users in mind, making it easy to discover and access AI tools.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Transparency</h3>
                <p className="text-github-text-secondary">
                  We provide honest reviews and clear information about each tool&apos;s features and pricing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Innovation</h3>
                <p className="text-github-text-secondary">
                  We stay at the forefront of AI technology to bring you the latest and most innovative tools.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

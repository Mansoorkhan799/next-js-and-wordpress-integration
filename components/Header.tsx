'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tools?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-transparent border-b border-github-border/30 sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-github-dark/80 via-github-dark-secondary/60 to-github-dark/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 animate-fade-in-up">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-github-accent rounded-lg flex items-center justify-center group-hover:animate-pulse transition-all duration-300">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-github-text font-semibold text-xl group-hover:text-github-accent transition-colors duration-300">AI Tools</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-github-text hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/tools" className="text-github-text hover:text-white transition-colors">
              All Tools
            </Link>
            <Link href="/categories" className="text-github-text hover:text-white transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-github-text hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-github-text-secondary w-4 h-4" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-github-dark-tertiary/50 backdrop-blur-sm border border-github-border/50 rounded-lg pl-10 pr-4 py-2 w-64 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent focus:bg-github-dark-tertiary/70 transition-all duration-300"
              />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-github-text hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-github-border/30 py-4 backdrop-blur-md bg-gradient-to-b from-github-dark-secondary/80 to-github-dark/60">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-github-text hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/tools" className="text-github-text hover:text-white transition-colors">
                All Tools
              </Link>
              <Link href="/categories" className="text-github-text hover:text-white transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-github-text hover:text-white transition-colors">
                About
              </Link>
              <div className="pt-4">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-github-text-secondary w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search AI tools..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-github-dark-tertiary/50 backdrop-blur-sm border border-github-border/50 rounded-lg pl-10 pr-4 py-2 w-full text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent focus:bg-github-dark-tertiary/70 transition-all duration-300"
                  />
                </form>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

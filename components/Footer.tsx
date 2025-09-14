import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-github-dark-secondary border-t border-github-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-github-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-github-text font-semibold text-xl">AI Tools</span>
            </div>
            <p className="text-github-text-secondary mb-6 max-w-md">
              Discover and download the most powerful AI tools for productivity, creativity, and automation. 
              Join millions of users who trust our platform for their AI tool needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-github-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-github-text-secondary hover:text-github-accent transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-github-text-secondary hover:text-github-accent transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-github-text font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-github-text-secondary hover:text-github-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-github-text-secondary hover:text-github-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-github-text-secondary hover:text-github-accent transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-github-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-github-text-secondary text-sm">
            © 2024 AI Tools Platform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-github-text-secondary hover:text-github-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-github-text-secondary hover:text-github-accent transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-github-text-secondary hover:text-github-accent transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

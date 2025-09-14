import { Metadata } from 'next';
import { HelpCircle, MessageCircle, BookOpen, Users, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Help Center - AI Tools Platform',
  description: 'Get help and support for using our AI tools platform. Find answers to common questions and contact our support team.',
};

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I download an AI tool?",
      answer: "Click on any tool card to view its details, then click the 'Get' button to download or visit the official website."
    },
    {
      question: "Are the AI tools free to use?",
      answer: "Many tools offer free tiers or trials. Check each tool's details for pricing information and visit their official website."
    },
    {
      question: "How do I suggest a new AI tool?",
      answer: "Contact us through our Contact Us page to suggest new AI tools. We review all suggestions and add quality tools to our platform."
    },
    {
      question: "Can I use these tools for commercial purposes?",
      answer: "Each tool has its own terms of service. Please check the individual tool's website for commercial usage policies."
    },
    {
      question: "How often is the platform updated?",
      answer: "We regularly update our platform with new tools and features. Follow us for the latest updates."
    },
    {
      question: "Is my data safe when using these tools?",
      answer: "We don't store your data. Each tool has its own privacy policy. Please review the tool's terms before use."
    }
  ];

  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-github-accent mr-4" />
            <h1 className="text-4xl font-bold text-github-text">Help Center</h1>
          </div>
          <p className="text-xl text-github-text-secondary max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to make the most of our AI tools platform.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6 hover:border-github-accent transition-colors">
            <BookOpen className="w-8 h-8 text-github-accent mb-4" />
            <h3 className="text-lg font-semibold text-github-text mb-2">Documentation</h3>
            <p className="text-github-text-secondary">Comprehensive guides and tutorials for using our platform.</p>
          </div>
          
          <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6 hover:border-github-accent transition-colors">
            <MessageCircle className="w-8 h-8 text-github-accent mb-4" />
            <h3 className="text-lg font-semibold text-github-text mb-2">Community</h3>
            <p className="text-github-text-secondary">Connect with other users and share experiences.</p>
          </div>
          
          <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6 hover:border-github-accent transition-colors">
            <Users className="w-8 h-8 text-github-accent mb-4" />
            <h3 className="text-lg font-semibold text-github-text mb-2">Support Team</h3>
            <p className="text-github-text-secondary">Get direct help from our support specialists.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-github-text mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-github-text mb-3">{faq.question}</h3>
                <p className="text-github-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-github-dark-secondary border border-github-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-github-text mb-4">Still Need Help?</h2>
          <p className="text-github-text-secondary mb-6">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="bg-github-accent hover:bg-github-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </a>
            <a 
              href="mailto:support@aitoolsplatform.com" 
              className="border border-github-border hover:border-github-accent text-github-text px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

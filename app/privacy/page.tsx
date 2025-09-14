import { Metadata } from 'next';
import { Shield, Eye, Lock, Database } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Tools Platform',
  description: 'Learn how we collect, use, and protect your personal information on our AI Tools Platform.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-github-accent mr-4" />
            <h1 className="text-4xl font-bold text-github-text">Privacy Policy</h1>
          </div>
          <p className="text-xl text-github-text-secondary max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-github-text-secondary mt-4">
            <strong>Last updated:</strong> January 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Personal Information</h3>
                <p>We may collect personal information when you:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Contact us through our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Submit feedback or suggestions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Usage Information</h3>
                <p>We automatically collect certain information about your use of our website:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you updates about our platform (with your consent)</li>
                <li>Analyze website usage to enhance user experience</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">Data Protection</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure hosting and infrastructure</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>Our website may integrate with third-party services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Analytics:</strong> We use analytics tools to understand website usage</li>
                <li><strong>Hosting:</strong> Our website is hosted on secure cloud platforms</li>
                <li><strong>CDN:</strong> Content delivery networks for faster loading times</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Your Rights</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Cookies</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve user experience</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. For more information, see our <a href="/cookies" className="text-github-accent hover:underline">Cookie Policy</a>.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Contact Us</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-github-dark-tertiary rounded p-4">
                <p><strong>Email:</strong> privacy@aitoolsplatform.com</p>
                <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the &quot;Last updated&quot; date</li>
                <li>Sending you an email notification (if applicable)</li>
              </ul>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

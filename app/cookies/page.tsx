import { Metadata } from 'next';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy - AI Tools Platform',
  description: 'Learn about how we use cookies and similar technologies on our AI Tools Platform.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="w-12 h-12 text-github-accent mr-4" />
            <h1 className="text-4xl font-bold text-github-text">Cookie Policy</h1>
          </div>
          <p className="text-xl text-github-text-secondary max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
          <p className="text-github-text-secondary mt-4">
            <strong>Last updated:</strong> January 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* What Are Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">What Are Cookies?</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p>
                Cookies allow a website to recognize a user&apos;s device and store some information about the user&apos;s preferences or past actions.
              </p>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">How We Use Cookies</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Essential Cookies</h3>
                <p className="text-github-text-secondary mb-2">
                  These cookies are necessary for the website to function and cannot be switched off in our systems.
                </p>
                <div className="bg-github-dark-tertiary rounded p-3">
                  <p className="text-sm"><strong>Purpose:</strong> Authentication, security, basic functionality</p>
                  <p className="text-sm"><strong>Duration:</strong> Session or persistent</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> No (required for site functionality)</p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Analytics Cookies</h3>
                <div className="flex items-center mb-2">
                  <BarChart className="w-4 h-4 text-github-accent mr-2" />
                  <p className="text-github-text-secondary">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="bg-github-dark-tertiary rounded p-3">
                  <p className="text-sm"><strong>Purpose:</strong> Website analytics, performance monitoring</p>
                  <p className="text-sm"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> Yes (through browser settings)</p>
                </div>
              </div>

              {/* Preference Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Preference Cookies</h3>
                <p className="text-github-text-secondary mb-2">
                  These cookies remember your choices and preferences to provide a personalized experience.
                </p>
                <div className="bg-github-dark-tertiary rounded p-3">
                  <p className="text-sm"><strong>Purpose:</strong> User preferences, settings, language selection</p>
                  <p className="text-sm"><strong>Duration:</strong> Up to 1 year</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> Yes (through browser settings)</p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-github-text mb-2">Marketing Cookies</h3>
                <p className="text-github-text-secondary mb-2">
                  These cookies are used to deliver advertisements that are relevant to you and your interests.
                </p>
                <div className="bg-github-dark-tertiary rounded p-3">
                  <p className="text-sm"><strong>Purpose:</strong> Targeted advertising, campaign tracking</p>
                  <p className="text-sm"><strong>Duration:</strong> Up to 1 year</p>
                  <p className="text-sm"><strong>Can be disabled:</strong> Yes (through browser settings)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Third-Party Cookies</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>We may use third-party services that set their own cookies:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
                <li><strong>Content Delivery Networks:</strong> Faster loading and improved performance</li>
                <li><strong>Advertising Networks:</strong> Relevant advertisements and campaign tracking</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
              </p>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">Managing Cookies</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>You can control and manage cookies in several ways:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-github-text mb-2">Browser Settings</h3>
                  <p>Most web browsers allow you to control cookies through their settings preferences. You can:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-github-text mb-2">Browser-Specific Instructions</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-github-text mb-2">Opt-Out Tools</h3>
                  <p>You can also opt out of certain cookies using industry opt-out tools:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><a href="https://www.google.com/ads/preferences/" className="text-github-accent hover:underline">Google Ad Preferences</a></li>
                    <li><a href="https://optout.networkadvertising.org/" className="text-github-accent hover:underline">Network Advertising Initiative</a></li>
                    <li><a href="https://www.youronlinechoices.com/" className="text-github-accent hover:underline">Your Online Choices</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Impact of Disabling Cookies</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>If you choose to disable cookies, some features of our website may not function properly:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You may need to re-enter information repeatedly</li>
                <li>Some personalized features may not work</li>
                <li>We may not be able to remember your preferences</li>
                <li>Analytics data may be incomplete</li>
                <li>Some third-party integrations may not function</li>
              </ul>
            </div>
          </section>

          {/* Updates to Cookie Policy */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Updates to This Cookie Policy</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p>
                We encourage you to review this Cookie Policy periodically for any changes.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Contact Us</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <div className="bg-github-dark-tertiary rounded p-4">
                <p><strong>Email:</strong> privacy@aitoolsplatform.com</p>
                <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

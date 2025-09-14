import { Metadata } from 'next';
import { FileText, Scale, AlertTriangle, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - AI Tools Platform',
  description: 'Read our terms of service and understand the rules and guidelines for using our AI Tools Platform.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-github-accent mr-4" />
            <h1 className="text-4xl font-bold text-github-text">Terms of Service</h1>
          </div>
          <p className="text-xl text-github-text-secondary max-w-2xl mx-auto">
            Please read these terms carefully before using our AI Tools Platform.
          </p>
          <p className="text-github-text-secondary mt-4">
            <strong>Last updated:</strong> January 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                By accessing and using the AI Tools Platform (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Description of Service</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                AI Tools Platform is a directory and information service that provides:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Curated listings of AI tools and software</li>
                <li>Tool descriptions, features, and use cases</li>
                <li>Links to official websites and download sources</li>
                <li>User reviews and ratings</li>
                <li>Educational content about AI tools</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">User Responsibilities</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>As a user of our service, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the service only for lawful purposes</li>
                <li>Respect the intellectual property rights of tool developers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use the service to distribute malware or harmful content</li>
                <li>Provide accurate information when contacting us</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-github-accent mr-3" />
              <h2 className="text-2xl font-bold text-github-text">Prohibited Uses</h2>
            </div>
            <div className="space-y-4 text-github-text-secondary">
              <p>You may not use our service:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of AI Tools Platform and its licensors.
              </p>
              <p>
                The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
              <p>
                <strong>Third-Party Tools:</strong> We do not claim ownership of the AI tools listed on our platform. All rights to these tools belong to their respective developers and companies.
              </p>
            </div>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Disclaimer of Warranties</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                The information on this service is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, AI Tools Platform:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Excludes all representations and warranties relating to this service and its contents</li>
                <li>Does not warrant that the service will be constantly available or available at all</li>
                <li>Does not warrant that the information on this service is complete, true, accurate, or non-misleading</li>
                <li>Does not endorse or guarantee the quality, safety, or legality of third-party tools</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                In no event shall AI Tools Platform, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
              <p>
                This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Indemnification</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                You agree to defend, indemnify, and hold harmless AI Tools Platform and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees).
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Termination</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the service will cease immediately.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Governing Law</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Changes to Terms</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-github-text mb-4">Contact Information</h2>
            <div className="space-y-4 text-github-text-secondary">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-github-dark-tertiary rounded p-4">
                <p><strong>Email:</strong> legal@aitoolsplatform.com</p>
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

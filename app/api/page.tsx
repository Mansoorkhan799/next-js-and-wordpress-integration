import { Code, Database, Zap, Shield, BookOpen, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function APIDocumentation() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/wordpress/posts',
      description: 'Fetch all AI tools from WordPress',
      response: 'Array of AI tool objects'
    },
    {
      method: 'GET',
      path: '/api/wordpress/posts/[slug]',
      description: 'Fetch specific AI tool by slug',
      response: 'Single AI tool object'
    }
  ];

  const toolExample = {
    id: "chatgpt-desktop",
    name: "ChatGPT Desktop",
    description: "AI-powered text generation tool",
    category: "Text Generation",
    features: ["Text generation", "Code assistance", "Creative writing"],
    useCases: ["Content creation", "Programming help", "Creative writing"],
    rating: 4.8,
    downloads: 1500000,
    lastUpdated: "2024-01-15",
    websiteUrl: "https://chatgpt.com",
    featuredImage: "https://example.com/image.jpg"
  };

  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-github-accent mr-4" />
            <h1 className="text-4xl font-bold text-github-text">API Documentation</h1>
          </div>
          <p className="text-xl text-github-text-secondary max-w-2xl mx-auto">
            Integrate with our AI tools platform using our RESTful API. Access tool data, categories, and more.
          </p>
        </div>

        {/* API Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <Database className="w-8 h-8 text-github-accent mb-4" />
            <h3 className="text-lg font-semibold text-github-text mb-2">RESTful API</h3>
            <p className="text-github-text-secondary">Standard HTTP methods and JSON responses for easy integration.</p>
          </div>
          
          <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <Zap className="w-8 h-8 text-github-accent mb-4" />
            <h3 className="text-lg font-semibold text-github-text mb-2">Real-time Data</h3>
            <p className="text-github-text-secondary">Access the latest AI tools and updates as they&apos;re published.</p>
          </div>
          
          <div className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
            <Shield className="w-8 h-8 text-github-accent mb-4" />
            <h3 className="text-lg font-semibold text-github-text mb-2">Secure Access</h3>
            <p className="text-github-text-secondary">Rate-limited endpoints with proper authentication support.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* API Endpoints */}
          <div>
            <h2 className="text-2xl font-bold text-github-text mb-8">API Endpoints</h2>
            
            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-github-dark-secondary border border-github-border rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-3 py-1 rounded text-sm font-semibold mr-3 ${
                      endpoint.method === 'GET' 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-blue-900 text-blue-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-github-accent font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-github-text-secondary mb-2">{endpoint.description}</p>
                  <p className="text-sm text-github-text-secondary">
                    <strong>Response:</strong> {endpoint.response}
                  </p>
                </div>
              ))}
            </div>

            {/* Authentication */}
            <div className="mt-8 bg-github-dark-secondary border border-github-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-github-text mb-4">Authentication</h3>
              <p className="text-github-text-secondary mb-4">
                Currently, our API is open and doesn&apos;t require authentication. However, we implement rate limiting to ensure fair usage.
              </p>
              <div className="bg-github-dark-tertiary rounded p-4">
                <code className="text-github-accent text-sm">
                  Rate Limit: 100 requests per hour per IP
                </code>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div>
            <h2 className="text-2xl font-bold text-github-text mb-8">Code Examples</h2>
            
            {/* JavaScript Example */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-github-text mb-4">JavaScript/Node.js</h3>
              <div className="bg-github-dark-tertiary border border-github-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-github-text-secondary text-sm">
{`// Fetch all AI tools
const response = await fetch('https://aitoolsplatform.com/api/wordpress/posts');
const tools = await response.json();

// Fetch specific tool
const tool = await fetch('https://aitoolsplatform.com/api/wordpress/posts/chatgpt-desktop');
const toolData = await tool.json();`}
                </pre>
              </div>
            </div>

            {/* Python Example */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-github-text mb-4">Python</h3>
              <div className="bg-github-dark-tertiary border border-github-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-github-text-secondary text-sm">
{`import requests

# Fetch all AI tools
response = requests.get('https://aitoolsplatform.com/api/wordpress/posts')
tools = response.json()

# Fetch specific tool
tool = requests.get('https://aitoolsplatform.com/api/wordpress/posts/chatgpt-desktop')
tool_data = tool.json()`}
                </pre>
              </div>
            </div>

            {/* Response Example */}
            <div>
              <h3 className="text-lg font-semibold text-github-text mb-4">Response Example</h3>
              <div className="bg-github-dark-tertiary border border-github-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-github-text-secondary text-sm">
{JSON.stringify(toolExample, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-github-dark-secondary border border-github-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-github-text mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-github-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-github-text mb-2">API Reference</h3>
              <p className="text-github-text-secondary mb-4">
                Complete documentation of all available endpoints and parameters.
              </p>
              <a 
                href="#" 
                className="text-github-accent hover:text-github-accent/80 transition-colors inline-flex items-center"
              >
                View Full Reference
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="text-center">
              <Code className="w-8 h-8 text-github-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-github-text mb-2">SDK & Libraries</h3>
              <p className="text-github-text-secondary mb-4">
                Official SDKs and libraries for popular programming languages.
              </p>
              <a 
                href="#" 
                className="text-github-accent hover:text-github-accent/80 transition-colors inline-flex items-center"
              >
                Download SDKs
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-github-text-secondary mb-4">
            Need help with API integration? Our support team is here to help.
          </p>
          <a 
            href="/contact-us" 
            className="bg-github-accent hover:bg-github-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Contact Support
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

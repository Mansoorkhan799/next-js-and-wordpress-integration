'use client';

import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="w-12 h-12 text-github-accent mr-4" />
            <h1 className="text-4xl font-bold text-github-text">Contact Us</h1>
          </div>
          <p className="text-xl text-github-text-secondary max-w-2xl mx-auto">
            Have a question, suggestion, or need support? We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-github-text mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-github-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-github-text">Email</h3>
                  <p className="text-github-text-secondary">support@aitoolsplatform.com</p>
                  <p className="text-github-text-secondary">info@aitoolsplatform.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-github-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-github-text">Phone</h3>
                  <p className="text-github-text-secondary">+1 (555) 123-4567</p>
                  <p className="text-github-text-secondary">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-github-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-github-text">Office</h3>
                  <p className="text-github-text-secondary">123 Tech Street</p>
                  <p className="text-github-text-secondary">San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-github-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-github-text">Business Hours</h3>
                  <p className="text-github-text-secondary">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-github-text-secondary">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-github-text-secondary">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 bg-github-dark-secondary border border-github-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-github-text mb-2">Response Time</h3>
              <p className="text-github-text-secondary">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call our support line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-github-text mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-github-text mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-github-dark-secondary border border-github-border rounded-lg px-4 py-3 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-github-text mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-github-dark-secondary border border-github-border rounded-lg px-4 py-3 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-github-text mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-github-dark-secondary border border-github-border rounded-lg px-4 py-3 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-github-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-github-dark-secondary border border-github-border rounded-lg px-4 py-3 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-github-accent hover:bg-github-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

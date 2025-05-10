'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Real-time Communication',
    description: 'Instant messaging and video conferencing with crystal-clear quality and minimal latency.',
    icon: '💬',
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced AI algorithms analyze conversations to provide insights and improve communication.',
    icon: '🤖',
  },
  {
    title: 'Secure & Private',
    description: 'End-to-end encryption and advanced security measures to protect your conversations.',
    icon: '🔒',
  },
  {
    title: 'Smart Integration',
    description: 'Seamlessly integrate with your existing tools and workflows for maximum efficiency.',
    icon: '🔄',
  },
];

const testimonials = [
  {
    quote: 'Conversa8 has transformed how our team communicates. The AI insights are invaluable.',
    author: 'Sarah Johnson',
    role: 'Team Lead, Tech Corp',
  },
  {
    quote: 'The integration capabilities are outstanding. It works perfectly with our existing tools.',
    author: 'Michael Chen',
    role: 'CTO, Innovate Inc',
  },
  {
    quote: 'Security was our top priority, and Conversa8 delivers on all fronts.',
    author: 'Emily Davis',
    role: 'Security Director, Global Solutions',
  },
];

export default function Conversa8() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Conversa8
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We&apos;re revolutionizing the way teams communicate and collaborate.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="#demo" className="btn btn-secondary">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Conversa8?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Productivity</h3>
                    <p className="text-gray-600">Streamline communication and reduce meeting times by up to 40%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost Effective</h3>
                    <p className="text-gray-600">Reduce operational costs with integrated communication tools</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Solution</h3>
                    <p className="text-gray-600">Grow with your team, from startups to enterprise organizations</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#2D2D2D] rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>API-first architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Cross-platform support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Customizable workflows</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2D2D2D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who have revolutionized their communication with Conversa8.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="#demo" className="btn btn-secondary">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Powerful data analysis tools with machine learning capabilities for deep insights.',
    icon: '📊',
  },
  {
    title: 'Pattern Recognition',
    description: 'AI-driven pattern detection to identify trends and anomalies in your data.',
    icon: '🔍',
  },
  {
    title: 'Automated Reporting',
    description: 'Generate comprehensive reports automatically with customizable templates.',
    icon: '📝',
  },
  {
    title: 'Data Visualization',
    description: 'Interactive dashboards and visual representations of complex data sets.',
    icon: '📈',
  },
];

const testimonials = [
  {
    quote: 'Investiga8 has transformed our data analysis capabilities. The insights are invaluable.',
    author: 'James Anderson',
    role: 'Data Scientist, Analytics Corp',
  },
  {
    quote: 'The pattern recognition features have helped us identify critical trends we would have missed.',
    author: 'Maria Rodriguez',
    role: 'Research Director, Tech Labs',
  },
  {
    quote: 'The automated reporting saves us countless hours while maintaining accuracy.',
    author: 'Thomas Lee',
    role: 'Operations Manager, Data Solutions',
  },
];

export default function Investiga8() {
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
              Investiga8
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive investigation and analysis tools for data-driven decision making.
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
                Why Choose Investiga8?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data-Driven Insights</h3>
                    <p className="text-gray-600">Make informed decisions based on comprehensive data analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Time Efficiency</h3>
                    <p className="text-gray-600">Automate routine analysis tasks and focus on strategic decisions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Solution</h3>
                    <p className="text-gray-600">Handle growing data volumes without compromising performance</p>
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
                  <span>Advanced machine learning algorithms</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Real-time data processing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Customizable analytics models</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Secure data storage</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>API integration capabilities</span>
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
              Ready to Transform Your Data Analysis?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations that have revolutionized their decision-making process with Investiga8.
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
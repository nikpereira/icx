'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
  {
    name: 'Conversa8',
    description: 'An intelligent conversation platform that revolutionizes the way teams communicate and collaborate.',
    features: [
      'Real-time messaging and collaboration',
      'AI-powered conversation analysis',
      'Advanced security and encryption',
      'Seamless integration with existing tools',
    ],
    path: '/products/conversa8',
  },
  {
    name: 'Naviga8',
    description: 'A cutting-edge navigation system that optimizes routes and enhances travel efficiency.',
    features: [
      'Smart route optimization',
      'Real-time traffic updates',
      'Multi-modal transportation options',
      'Customizable navigation preferences',
    ],
    path: '/products/naviga8',
  },
  {
    name: 'Investiga8',
    description: 'Comprehensive investigation and analysis tools for data-driven decision making.',
    features: [
      'Advanced data analytics',
      'Pattern recognition',
      'Automated reporting',
      'Customizable dashboards',
    ],
    path: '/products/investiga8',
  },
  {
    name: 'Educa8',
    description: 'An innovative educational platform that transforms the learning experience.',
    features: [
      'Interactive learning modules',
      'Progress tracking',
      'Personalized learning paths',
      'Collaborative learning tools',
    ],
    path: '/products/educa8',
  },
];

export default function Products() {
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
              Our <span className="text-[#FF4B4B]">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our suite of innovative solutions designed to transform your workflow and enhance productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {product.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-[#FF4B4B] mr-2">•</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={product.path}
                        className="btn btn-primary inline-block"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                          <span className="text-[#FF4B4B] mr-2">✓</span>
                          Enhanced Productivity
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="text-[#FF4B4B] mr-2">✓</span>
                          Cost Efficiency
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="text-[#FF4B4B] mr-2">✓</span>
                          Scalable Solution
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="text-[#FF4B4B] mr-2">✓</span>
                          24/7 Support
                        </li>
                      </ul>
                    </div>
                  </div>
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
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn more about how our products can help you achieve your goals.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
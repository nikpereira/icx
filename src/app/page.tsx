'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
  {
    name: 'Conversa8',
    description: 'Intelligent conversation platform for seamless communication',
    path: '/products/conversa8',
  },
  {
    name: 'Naviga8',
    description: 'Advanced navigation system for optimal routing',
    path: '/products/naviga8',
  },
  {
    name: 'Investiga8',
    description: 'Comprehensive investigation and analysis tools',
    path: '/products/investiga8',
  },
  {
    name: 'Educa8',
    description: 'Innovative educational platform for modern learning',
    path: '/products/educa8',
  },
];

export default function Home() {
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
              Welcome to Our
              <span className="text-[#FF4B4B]"> Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our innovative solutions designed to transform the way you work, learn, and communicate.
            </p>
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={product.path}
                  className="text-[#FF4B4B] font-medium hover:text-[#FF3333] transition-colors"
                >
                  Learn More →
                </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their workflow with our solutions.
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

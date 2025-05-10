'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Engaging learning modules with interactive content and real-time feedback.',
    icon: '🎓',
  },
  {
    title: 'Progress Tracking',
    description: 'Comprehensive progress monitoring and personalized learning paths.',
    icon: '📊',
  },
  {
    title: 'Collaborative Tools',
    description: 'Built-in tools for group projects and peer-to-peer learning.',
    icon: '👥',
  },
  {
    title: 'Resource Library',
    description: 'Extensive library of educational resources and learning materials.',
    icon: '📚',
  },
];

const testimonials = [
  {
    quote: 'Educa8 has revolutionized our teaching methods. The engagement levels are incredible.',
    author: 'Dr. Sarah Thompson',
    role: 'Education Director, Learning Academy',
  },
  {
    quote: 'The progress tracking features help us identify and support struggling students early.',
    author: 'Mark Wilson',
    role: 'Principal, Tech High School',
  },
  {
    quote: 'The collaborative tools have transformed how our students work together.',
    author: 'Lisa Chen',
    role: 'Curriculum Developer, EdTech Inc',
  },
];

export default function Educa8() {
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
              Educa8
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform the learning experience with our innovative educational platform.
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
                className="bg-custom-white rounded-lg shadow-lg p-6"
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
                Why Choose Educa8?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Learning</h3>
                    <p className="text-gray-600">Improve student engagement and retention rates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Experience</h3>
                    <p className="text-gray-600">Adapt to individual learning styles and pace</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Analytics</h3>
                    <p className="text-gray-600">Track progress and identify areas for improvement</p>
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
                  <span>Cloud-based platform</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>LMS integration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Content management system</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Assessment tools</span>
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
                className="bg-custom-white rounded-lg shadow-lg p-6"
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
              Ready to Transform Education?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join educational institutions that have revolutionized their teaching and learning with Educa8.
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
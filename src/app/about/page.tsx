'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years of experience in technology innovation.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    description: 'Technical expert specializing in AI and machine learning solutions.',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Product',
    description: 'Product strategist focused on creating user-centric solutions.',
  },
  {
    name: 'Sarah Williams',
    role: 'Lead Designer',
    description: 'Award-winning designer with a passion for intuitive user experiences.',
  },
];

export default function About() {
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
              About <span className="text-[#FF4B4B]">Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a team of innovators dedicated to creating cutting-edge solutions that transform industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We strive to empower businesses and individuals with innovative technology solutions that drive growth and efficiency. Our commitment to excellence and customer satisfaction sets us apart in the industry.
              </p>
              <p className="text-gray-600">
                Through continuous innovation and a customer-first approach, we aim to be at the forefront of technological advancement, creating solutions that make a real difference in people's lives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#2D2D2D] rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Innovation and Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Customer-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Continuous Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF4B4B] mr-2">•</span>
                  <span>Collaboration and Teamwork</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FF4B4B] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
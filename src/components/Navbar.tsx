'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const productItems = [
  { name: 'Conversa8', path: '/products/conversa8' },
  { name: 'Naviga8', path: '/products/naviga8' },
  { name: 'Investiga8', path: '/products/investiga8' },
  { name: 'Educa8', path: '/products/educa8' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#FF4B4B]">
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="nav-link"
                onMouseEnter={() => item.name === 'Products' && setShowProducts(true)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#FF4B4B]"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Products Dropdown */}
      {showProducts && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          onMouseLeave={() => setShowProducts(false)}
        >
          {productItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF4B4B] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {productItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF4B4B] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
} 
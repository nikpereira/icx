import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FF4B4B]">Portfolio</h3>
            <p className="text-gray-300">
              Creating innovative solutions for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/conversa8" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Conversa8
                </Link>
              </li>
              <li>
                <Link href="/products/naviga8" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Naviga8
                </Link>
              </li>
              <li>
                <Link href="/products/investiga8" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Investiga8
                </Link>
              </li>
              <li>
                <Link href="/products/educa8" className="text-gray-300 hover:text-[#FF4B4B] transition-colors">
                  Educa8
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: contact@portfolio.com</li>
              <li className="text-gray-300">Phone: +1 (555) 123-4567</li>
              <li className="text-gray-300">Address: 123 Innovation Street</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
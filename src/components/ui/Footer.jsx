import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">MUFAP</h2>
          <p className="text-gray-500 text-sm mt-1">
            Shaping trust, professionalism, and innovation.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition">About</a></li>
          <li><a href="/services" className="text-gray-600 hover:text-gray-900 transition">Services</a></li>
          <li><a href="/partners" className="text-gray-600 hover:text-gray-900 transition">Partners</a></li>
          <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a></li>
        </ul>

        {/* Socials */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaFacebookF className="w-4 h-4 text-gray-600" />
          </a>
          <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaTwitter className="w-4 h-4 text-gray-600" />
          </a>
          <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaLinkedinIn className="w-4 h-4 text-gray-600" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MUFAP. All rights reserved.
      </div>
    </footer>
  );
}

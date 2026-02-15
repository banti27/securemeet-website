const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg 
                className="w-8 h-8 text-blue-500" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-2xl font-bold text-white">SecureMeet</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Secure, reliable, and easy-to-use meeting platform for teams of all sizes. 
              Built with privacy and security in mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#docs" className="hover:text-blue-400 transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-blue-400 transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-blue-400 transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} SecureMeet. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-sm hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

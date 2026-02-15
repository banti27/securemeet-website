const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-2xl font-bold">SecureMeet</span>
          </div>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#home" className="hover:text-blue-200 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-200 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-200 transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          <button className="md:hidden">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

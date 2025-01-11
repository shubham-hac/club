import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold hover:scale-105 transition-transform">Your Club</Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="nav-link hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="nav-link hover:text-blue-200 transition-colors">About</Link>
            <Link to= "/team" className='nav-link hover:text-blue-20 transition-colors'>Team</Link>
            <Link to="/events" className="nav-link hover:text-blue-200 transition-colors">Events</Link>
            <Link to="/projects" className="nav-link hover:text-blue-200 transition-colors">Projects</Link>
            <Link to="/contact" className="nav-link hover:text-blue-200 transition-colors">Contact</Link>
            <Link to="/join" className="hover:text-blue-200 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full transition-all hover:scale-105">Join Us</Link>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="nav-link hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="nav-link hover:text-blue-200 transition-colors">About</Link>
            <Link to="/events" className="nav-link hover:text-blue-200 transition-colors">Events</Link>
            <Link to="/projects" className="nav-link hover:text-blue-200 transition-colors">Projects</Link>
            <Link to="/contact" className="nav-link hover:text-blue-200 transition-colors">Contact</Link>
            <Link to="/join" className="hover:text-blue-200 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full inline-block text-center transition-all hover:scale-105">Join Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md fixed w-full z-50 px-6 border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="md:hidden"></div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-gray-700">Home</a>
          <a href="#about" className="hover:text-gray-700">About</a>
          <a href="#skills" className="hover:text-gray-700">Skills</a>
          <a href="#portfolio" className="hover:text-gray-700">Projects</a>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
        </div>
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <CancelIcon /> : <MenuIcon />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-0 w-48 bg-white font-medium text-gray-900 py-4 px-6">
              <ul className="space-y-4">
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





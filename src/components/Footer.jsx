import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Nazarin Noushad</h2>
          <p className="text-sm text-gray-400 mt-2">
            MERN Stack Developer focused on building clean, responsive, user-friendly web applications.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wider">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wider">Let’s Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://github.com/nazarinnoushad" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="GitHub">
              <GitHub fontSize="inherit" />
            </a>
            <a href="https://www.linkedin.com/in/nazarin-noushad-41691b338/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="LinkedIn">
              <LinkedIn fontSize="inherit" />
            </a>
            <a href="#contact" className="hover:text-cyan-400" aria-label="Email">
              <Email fontSize="inherit" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nazarin Noushad
      </div>
    </footer>
  );
};

export default Footer;
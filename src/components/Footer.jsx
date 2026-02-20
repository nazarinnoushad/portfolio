const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg mb-4">© 2025 Nazarin Noushad. All Rights Reserved.</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/nazarinnoushad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500 transition-all duration-300"
            aria-label="GitHub"
          >
            <GitHub fontSize="inherit" />
          </a>
          <a
            href="https://www.linkedin.com/in/nazarin-noushad-41691b338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="inherit" />
          </a>
          <a
            href="mailto:nazarin@example.com"
            className="text-white hover:text-cyan-500 transition-all duration-300"
            aria-label="Email"
          >
            <Email fontSize="inherit" />
          </a>
        </div>
        <div className="mt-6">
          <a
            href="#home"
            className="text-white hover:text-cyan-500 transition-all duration-300"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  
import { useState, useEffect } from "react";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import Profile from '../assets/Images/Profile.jpeg'

const Home = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowName((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-white to-slate-200 px-4"
    >
      <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl w-full px-6 py-12 gap-10">
        
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={Profile}
            alt="Nazarin Noushad, MERN Stack Developer"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Welcome to My Portfolio
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-gray-800 transition-all duration-500">
            {showName ? "I am Nazarin Noushad" : "I am a Web Developer"}
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 text-3xl text-gray-700 hover:text-black transition-colors">
            <a
              href="https://github.com/nazarinnoushad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub fontSize="inherit" />
            </a>
            <a
              href="https://www.linkedin.com/in/nazarin-noushad-41691b338/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn fontSize="inherit" />
            </a>
            <a href="#contact" aria-label="Email">
              <Email fontSize="inherit" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              className="px-6 py-3 text-base rounded-full bg-black text-white border border-black hover:bg-transparent hover:text-black transition"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1K7r70yFxM9ucFVypN4tcBWln60YbvoJu/view?usp=drivesdk"
              download
              className="px-6 py-3 text-base rounded-full bg-black text-white border border-black hover:bg-transparent hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;








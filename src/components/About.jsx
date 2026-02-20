const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-white to-blue-100 px-4 font-serif"
    >
      <div className="max-w-3xl w-full p-8 bg-white/80 rounded-3xl shadow-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        </header>

        <div className="space-y-5 text-lg text-gray-800 leading-relaxed text-center">
          <p>
            Hello! I’m <span className="font-bold">Nazarin Noushad</span>, a{" "}
            <span className="font-semibold">MERN Stack Developer</span> with a
            strong interest in building modern web applications using current
            technologies.
          </p>

          <p>
            I completed my <span className="font-medium">Bachelor’s degree in Computer Applications</span>{" "}
            from <span className="font-medium">MG University</span> and also
            finished a <span className="font-medium">Diploma in MERN Stack Development</span>{" "}
            at <span className="font-medium">Unique Occasio Tech</span>.
          </p>

          <p>
            At present, I am doing a <span className="font-medium">Full Stack Development Internship</span>{" "}
            at <span className="font-medium">Relaxplzz Technology, Technopark</span>, where
            I am gaining hands-on experience by working on real projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
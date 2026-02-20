import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },

  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },

  { name: "React", icon: SiReact, color: "text-cyan-400" },

  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },

  { name: "GitHub", icon: SiGithub, color: "text-white" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-blue-400 via-white to-blue-100 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-14 text-center text-black font-serif">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-300 to-blue-100 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <skill.icon className={`text-5xl ${skill.color} mb-4`} />
              <p className="text-lg font-semibold text-black">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




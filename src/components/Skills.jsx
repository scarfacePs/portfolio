import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiNetlify, SiVercel, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "HTML", level: 96 },
  { name: "CSS", level: 83 },
  { name: "JavaScript", level: 90 },
  { name: "python", level: 70 },
  { name: "C++", level: 70 },
  { name: "React", level: 73 },
  { name: "Tailwind", level: 70 },
  { name: "node.js", level: 60 },
];

const tools = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Node.js", icon: <SiNodedotjs /> }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary-light dark:bg-secondary-dark text-center">
      <h2 className="text-4xl font-bold mb-12">Compétences & Outils</h2>

      {/* SKILLS BARS */}
      <div className="max-w-3xl mx-auto space-y-6 mb-16">
        {skills.map((skill, i) => (
          <div key={i} className="text-left">
            <div className="flex justify-between mb-1">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary-500 to-primary-700 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* TOOLS */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-8">Outils & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow hover:scale-105 transition"
            >
              <div className="text-4xl text-primary-500">{tool.icon}</div>
              <span className="font-medium text-gray-900 dark:text-gray-100">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

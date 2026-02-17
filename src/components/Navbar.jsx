import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-secondary-dark transition-all">
      <nav className="max-w-6xl mx-auto flex justify-between p-4 items-center">
        <div className="font-bold text-xl text-gray-900 dark:text-gray-100">Mon Portfolio</div>
        <div className="flex items-center space-x-4">
          <a href="#about" className="text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">À Propos</a>
          <a href="#skills" className="text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Compétences</a>
          <a href="#projects" className="text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Projects</a>
          <a href="#contact" className="text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Contact</a>
          <button onClick={toggleDark} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition">
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

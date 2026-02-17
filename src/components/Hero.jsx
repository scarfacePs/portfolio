import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="h-screen flex items-center bg-secondary-light dark:bg-secondary-dark px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        {/* LEFT SIDE: TEXT */}
        <div className={`flex-1 text-center md:text-left transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl font-bold mb-4">
            PIERRE STECHY
          </h1>
          <p className="text-lg mb-6 max-w-lg">
            Développeur frontend passionné par les interfaces modernes, responsives et élégantes. React, Tailwind et JavaScript sont mes outils préférés.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-accent transition transform hover:scale-105"
          >
            Me Contacter
          </a>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <img
            src="/images/hero.png" // <--- Remplace avec ton image nettoyée
            alt="Scarface"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-primary-500"
          />
        </div>

      </div>
    </section>
  );
}

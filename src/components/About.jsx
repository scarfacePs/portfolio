export default function About() {
  return (
    <section className="py-20 bg-secondary-light dark:bg-secondary-dark text-gray-900 dark:text-gray-100 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* TITRE */}
        <h2 className="text-4xl font-bold text-center mb-6">À Propos de Moi</h2>

        {/* QUI SUIS-JE */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Qui Je Suis</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Je suis un <span className="font-semibold">Développeur Frontend</span> passionné par la création d'<span className="font-semibold">interfaces modernes, responsives et conviviales</span>. 
            Je maîtrise <span className="font-semibold">HTML, CSS, JavaScript, React et Tailwind CSS</span> pour développer des projets professionnels et élégants.
          </p>
        </div>

        {/* PASSION & PHILOSOPHIE */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Passion & Philosophie</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            J`aime concevoir des interfaces claires et agréables à utiliser, avec des animations subtiles pour offrir une expérience utilisateur optimale. 
            Chaque projet est pour moi une opportunité d`apprendre, d`explorer de nouvelles technologies et d`améliorer l`expérience utilisateur.
          </p>
        </div>

        {/* EXPÉRIENCE */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Expérience</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            En tant que développeur freelance, j`ai contribué à plusieurs projets personnels et clients. 
            Je suis à l`aise avec Git, GitHub, le déploiement sur Netlify et Vercel, et l`optimisation des applications web pour des performances maximales.
          </p>
        </div>

        {/* OBJECTIF & CTA */}
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-semibold">Objectif & Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Mon objectif est de continuer à apprendre de nouvelles technologies, à améliorer l’expérience utilisateur et à créer des applications web qui font la différence. 
            Si vous avez un projet intéressant, n`hésitez pas à me contacter !
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-accent transition transform hover:scale-105"
          >
            Me Contacter
          </a>
        </div>

      </div>
    </section>
  );
}

const projects = [
  { title: "Site Vitrine", image: "/images/vitrine.png", link: "https://morlan-store.netlify.app/" },
  { title: "E-commerce Site", image: "/images/commerce.webp", link: "#" },
  { title: "Portfolio", image: "/images/hero.png", link: "portfolio-phi-seven-86.vercel.app" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Mes projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="shadow-lg rounded overflow-hidden hover:scale-105 transition transform">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover"/>
            <h3 className="text-2xl font-semibold my-2">{proj.title}</h3>
            <a href={proj.link} className="text-purple-600 font-bold mb-2 inline-block">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

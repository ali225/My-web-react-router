import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  const projects = [
    {
      image: 'https://via.placeholder.com/300x250',
      title: 'E-commerce Website',
      description: 'A full-featured online store with payment integration',
    },
    {
      image: 'https://via.placeholder.com/300x250',
      title: 'Mobile App Design',
      description: 'UI/UX design for a fitness tracking application',
    },
    {
      image: 'https://via.placeholder.com/300x250',
      title: 'Corporate Website',
      description: 'Modern website for a tech startup company',
    },
    {
      image: 'https://via.placeholder.com/300x250',
      title: 'Blog Platform',
      description: 'Custom blog system with content management',
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-100">
      <Header />

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-slate-900">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-12 text-center animate-fade-in">
            My Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="portfolio-item animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="portfolio-image"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-center">{project.description}</p>
                  <a
                    href="#"
                    className="text-blue-500 border border-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Custom website development using modern technologies and best practices. From simple landing pages to complex web applications.',
    },
    {
      icon: 'mobile-alt',
      title: 'Responsive Design',
      description: 'Creating websites that look great on all devices and screen sizes. Ensuring optimal user experience across platforms.',
    },
    {
      icon: 'search',
      title: 'SEO Optimization',
      description: 'Improving your website\'s visibility in search engine results. Implementing best practices for better rankings.',
    },
    {
      icon: 'paint-brush',
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces and experiences. Focusing on usability and aesthetics.',
    },
    {
      icon: 'server',
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications. Implementing secure and efficient solutions.',
    },
    {
      icon: 'cogs',
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance and technical support services. Ensuring your website runs smoothly.',
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-100">
      <Header />

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-slate-900">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-12 text-center animate-fade-in">
            My Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="service-icon">
                  <i className={`fas fa-${service.icon}`} aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href="#" className="service-link">
                    Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i>
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
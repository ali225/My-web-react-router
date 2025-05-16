import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Header />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-slate-900">
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-slate-300 mb-4">
              I am a dedicated web developer with a passion for creating beautiful and functional websites. 
              With expertise in modern web technologies, I strive to deliver exceptional digital experiences 
              that make a difference.
            </p>
            <p className="text-slate-400 mb-4">
              My Ali Gamal in web development started 5 years ago, and since then, I've worked on various 
              projects ranging from small business websites to complex web applications. I specialize in 
              front-end development and have a strong foundation in HTML, CSS, JavaScript, and modern frameworks.
            </p>
            <p className="text-slate-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical writing.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/ali2.jpg"
              alt="Professional headshot of the web developer"
              loading="lazy"
              className="w-64 h-64 rounded-xl object-cover shadow-lg border-4 border-blue-600"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
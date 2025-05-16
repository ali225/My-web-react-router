import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from '../components/Header';
import Footer from '../components/Footer';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Header />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-slate-900 relative">
        <div className="w-full max-w-3xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-8">
              <img src="/ali2.jpg" alt="Profile photo of the site owner" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg text-slate-400 mb-6">
              I'm a passionate web developer creating amazing digital experiences
            </p>
            <div className="flex gap-5 justify-center mt-2">
              <a href="#" className="text-slate-400 hover:text-blue-500 text-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 text-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

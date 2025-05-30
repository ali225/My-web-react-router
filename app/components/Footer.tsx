import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/ali225' },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aligamal-25/' },
    { icon: 'twitter', label: 'Twitter', href: 'https://x.com/aligamal_25' },
    { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/eng.ali.gamal' },
    { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@engaligamalengaligamal' },
    { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/eng.ali.gamal/' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 pt-12 pb-4 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="flex items-center gap-2 text-slate-400 mb-2">
              <i className="fas fa-envelope" aria-hidden="true"></i> aligamal225@gmail.com
            </p>
            <p className="flex items-center gap-2 text-slate-400 mb-2">
              <i className="fas fa-phone" aria-hidden="true"></i> +20 111 402 5352
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Egypt
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-500 text-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={link.label}
                >
                  <i className={`fab fa-${link.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-4 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 
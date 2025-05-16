import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-12 text-center">
          Contact Me
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-purple-400">Get in Touch</h3>
            <p className="text-slate-400">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:aligamal225@gmail.com" 
                className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <FaEnvelope className="text-2xl text-purple-500" />
                <span>aligamal225@gmail.com</span>
              </a>
              
              <a 
                href="tel:+201114025352" 
                className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <FaPhone className="text-2xl text-purple-500" />
                <span>+20 111 402 5352</span>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300">
                <FaMapMarkerAlt className="text-2xl text-purple-500" />
                <span>Egypt</span>
              </div>
            </div>
          </div>
          
          <form className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Hello, I would like to discuss..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 
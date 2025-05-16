import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-900 text-slate-100">
      <Header />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-slate-900">
        <div className="w-full max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-12 text-center animate-fade-in">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Get in Touch</h3>
              <p className="text-slate-400 mb-6">
                Feel free to reach out to me for any questions or opportunities.
              </p>
              <div className="space-y-4">
                <a href="mailto:email@example.com" className="contact-info-item">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <span>email@example.com</span>
                </a>
                <a href="tel:+1234567890" className="contact-info-item">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <span>+1 234 567 890</span>
                </a>
                <div className="contact-info-item">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>New York, USA</span>
                </div>
              </div>
            </div>

            <form
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 animate-fade-in"
              id="contactForm"
              style={{ animationDelay: '0.4s' }}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <div className="relative">
                  <i className="fas fa-user form-icon" aria-hidden="true"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input form-input-with-icon"
                    placeholder="John Doe"
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid name (letters and spaces only)"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <div className="relative">
                  <i className="fas fa-envelope form-icon" aria-hidden="true"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input form-input-with-icon"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <div className="relative">
                  <i className="fas fa-tag form-icon" aria-hidden="true"></i>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input form-input-with-icon"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <div className="relative">
                  <i className="fas fa-comment form-icon" aria-hidden="true"></i>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-input form-input-with-icon h-32 resize-vertical"
                    placeholder="Hello, I would like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <i className="fas fa-paper-plane ml-2" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
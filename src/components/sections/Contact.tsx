import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialButtons from '../ui/SocialButtons';
import type { ContactFormData, FormStatus } from '../../types/contact';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [emailError, setEmailError] = useState<string>('');

  const isValidEmailDomain = (email: string): boolean => {
    const allowedDomains = ['@gmail.com', '@yahoo.com'];
    return allowedDomains.some(domain => email.toLowerCase().endsWith(domain));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email' && emailError) {
      if (isValidEmailDomain(value)) {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmailDomain(formData.email)) {
      setEmailError('Please use a Gmail or Yahoo email address.');
      return;
    }

    setStatus('sending');
    setEmailError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');

      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const isDisabled = status === 'sending';

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center px-6 sm:px-8 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
    
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">
              Contact
            </p>

            <div className="w-16 h-0.5 bg-linear-to-r from-violet-600 to-transparent" />

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Let's Build Something Meaningful
            </h2>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Have a project in mind or just want to connect? I'm always open to
              discussing new opportunities, creative ideas, or partnerships.
            </p>

            <div className="pt-6">
              <SocialButtons />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="border border-white/10 rounded-xl p-8 sm:p-10 shadow-2xl bg-black">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isDisabled}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isDisabled}
                    className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-white/30 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      emailError 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30' 
                        : 'border-white/10 focus:border-violet-600 focus:ring-2 focus:ring-violet-600/30'
                    }`}
                    placeholder="your.email@gmail.com"
                  />
                  
                  {emailError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400"
                    >
                      {emailError}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isDisabled}
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-600/30 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isDisabled}
                  className="w-full px-6 py-4 bg-black border border-white/10 rounded-lg text-sm uppercase tracking-[0.2em] font-medium text-white hover:bg-violet-600 hover:border-violet-600 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 text-center"
                  >
                    ✗ Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
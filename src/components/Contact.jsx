import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
} from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    setFormStatus('submitting');

    try {
      const result = await emailjs.sendForm(
        'service_7rlsgxe',
        'template_o5eau0g',
        form.current,
        {
          publicKey: 'UcoFx-00u6Pnkfe7Q',
        }
      );

      console.log('EmailJS Success:', result);

      setFormStatus('success');

      // Clear form
      form.current.reset();

      // Reset button after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      console.error('Error Status:', error?.status);
      console.error('Error Text:', error?.text);

      setFormStatus('idle');

      alert(
        `Failed to send message: ${
          error?.text || 'Something went wrong. Please try again.'
        }`
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open for opportunities and exciting projects. Let's build
            something amazing together.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">

            {/* EMAIL */}
            <motion.a
              href="mailto:rohitk93339@gmail.com"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-glass p-5 rounded-2xl flex items-center gap-5 group border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-secondary text-blue-500 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-0.5">
                  Email
                </h4>

                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  rohitk93339@gmail.com
                </p>
              </div>
            </motion.a>

            {/* PHONE */}
            <motion.a
              href="tel:+917256824323"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-glass p-5 rounded-2xl flex items-center gap-5 group border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-secondary text-purple-500 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-0.5">
                  Phone
                </h4>

                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  +91 7256824323
                </p>
              </div>
            </motion.a>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-glass p-5 rounded-2xl flex items-center gap-5 group border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-secondary text-cyan-500 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-0.5">
                  Location
                </h4>

                <p className="text-sm font-semibold text-foreground">
                  New Delhi, India
                </p>
              </div>
            </motion.div>

            {/* GITHUB */}
            <motion.a
              href="https://github.com/rohitcodeZ"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-glass p-5 rounded-2xl flex items-center gap-5 group border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-secondary text-white group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-0.5">
                  GitHub
                </h4>

                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  github.com/rohitcodeZ
                </p>
              </div>
            </motion.a>

            {/* LINKEDIN */}
            <motion.a
              href="https://linkedin.com/in/rohitkumar"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-glass p-5 rounded-2xl flex items-center gap-5 group border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-secondary text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-0.5">
                  LinkedIn
                </h4>

                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  linkedin.com/in/rohitkumar
                </p>
              </div>
            </motion.a>

          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-glass p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col gap-6"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/80 ml-1"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Rohit Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/80 ml-1"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground/80 ml-1"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/80 ml-1"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello Rohit, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none placeholder:text-muted-foreground"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                disabled={formStatus !== 'idle'}
                whileHover={
                  formStatus === 'idle'
                    ? { scale: 1.02 }
                    : undefined
                }
                whileTap={
                  formStatus === 'idle'
                    ? { scale: 0.98 }
                    : undefined
                }
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >

                {/* IDLE */}
                {formStatus === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}

                {/* SUBMITTING */}
                {formStatus === 'submitting' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />

                    Sending...
                  </>
                )}

                {/* SUCCESS */}
                {formStatus === 'success' && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                )}

              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
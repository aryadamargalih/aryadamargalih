import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

function Contact({
  sectionRef,
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
}) {
  return (
    <section id="contact" ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[var(--accent)] mb-2">
            05 — contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-xs text-[var(--ink-dim)] mb-2">
                name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--ink-dim)]"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[var(--ink-dim)] mb-2">
                email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--ink-dim)]"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[var(--ink-dim)] mb-2">
                message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-[var(--ink-dim)]"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--accent)] text-[#14161a] font-medium rounded-sm hover:brightness-110 transition-all disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 border border-[var(--line)] rounded-md">
              <Mail className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="font-mono text-xs text-[var(--ink-dim)]">email</p>
                <p className="text-sm">damararya344@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 border border-[var(--line)] rounded-md">
              <Phone className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="font-mono text-xs text-[var(--ink-dim)]">phone</p>
                <p className="text-sm">+62</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 border border-[var(--line)] rounded-md">
              <MapPin className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <p className="font-mono text-xs text-[var(--ink-dim)]">
                  location
                </p>
                <p className="text-sm">Medan, Indonesia</p>
              </div>
            </div>
            <div className="flex gap-3 p-5 border border-[var(--line)] rounded-md">
              <a
                href="https://github.com/aryadamargalih/"
                className="w-10 h-10 flex items-center justify-center border border-[var(--line)] rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arya-damar-191229300/"
                className="w-10 h-10 flex items-center justify-center border border-[var(--line)] rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=damararya344@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[var(--line)] rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

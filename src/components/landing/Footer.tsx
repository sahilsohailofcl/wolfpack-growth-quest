import { motion } from "framer-motion";
import { Flame, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-dark py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-cream-light">Foclupus</span>
          </div>

          <p className="text-cream/60 text-sm mb-6">The Focused Wolf</p>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            {[Twitter, Instagram, Github].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream/50 mb-8">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-cream/40 text-xs">
            © 2025 Foclupus. Turn screen time into growth time. 🐺
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

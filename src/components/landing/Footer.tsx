import { motion } from "framer-motion";
import { Sparkles, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-border/50 bg-secondary/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">Foclupus</span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Simple progress. Real results.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <a href="#" className="hover:text-foreground transition-colors">
              Feedback
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {[Twitter, Instagram, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-6 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Foclupus. Made with ❤️ for focused minds.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

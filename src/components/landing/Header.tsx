import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream-light/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
            <Flame className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground">Foclupus</span>
            <span className="text-[10px] text-muted-foreground -mt-1">The Focused Wolf</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

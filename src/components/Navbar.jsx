import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Portfolio", "About", "Process", "Contact"];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[var(--orange)] flex items-center justify-center relative overflow-hidden">
              <span className="font-bold text-white text-lg relative z-10">N</span>
              <div className="absolute inset-0 bg-[var(--orange-dark)] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
            </div>
            <span
              className="text-[var(--black)] font-semibold tracking-tight text-[17px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nexora<span className="text-[var(--orange)]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[var(--text-body)] hover:text-[var(--orange)] font-medium text-[15px] link-underline transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[var(--orange)] hover:bg-[var(--orange-dark)] text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 group h-10 w-33 justify-center"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[var(--black)] hover:text-[var(--orange)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-[var(--border)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-5">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[var(--black)] hover:text-[var(--orange)] font-medium text-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[var(--orange)] text-white w-full py-3 rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Start Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
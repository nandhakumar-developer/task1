import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const cols = {
    Services: ["UI/UX Design", "Web Development", "Brand Identity", "Digital Marketing", "Consulting"],
    Company: ["About Us", "Portfolio", "Process", "Careers", "Blog"],
    Connect: ["Twitter / X", "LinkedIn", "Dribbble", "Instagram", "Behance"],
  };

  return (
    <footer className="bg-[var(--black)] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/50 font-mono text-sm uppercase tracking-widest mb-2">
              Start a project
            </p>
            <h3
              className="text-4xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's build something{" "}
              <em className="text-[var(--orange)] not-italic">extraordinary.</em>
            </h3>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-dark)] text-white px-8 py-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/40 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--orange)] flex items-center justify-center">
                <span className="font-bold text-white text-lg">N</span>
              </div>
              <span className="text-white font-semibold text-[17px] tracking-tight">
                Nexora<span className="text-[var(--orange)]">.</span>
              </span>
            </a>
            <p className="text-white/40 text-[14px] leading-relaxed font-light max-w-[200px]">
              A modern creative agency building exceptional digital experiences.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 relative">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              </span>
              <span className="text-white/40 text-[12px] font-mono">Available for projects</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-white/60 text-[11px] font-mono uppercase tracking-widest mb-5">
                {cat}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white text-[14px] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[13px] font-mono">
            © 2026 Nexora Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-white/30 hover:text-white/70 text-[13px] font-mono transition-colors">
                {l}
              </a>
            ))}
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--orange)] flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
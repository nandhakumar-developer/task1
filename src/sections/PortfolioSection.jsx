import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

const categories = ["All", "Design", "Development", "Branding"];

const projects = [
  {
    title: "Luminary SaaS Dashboard",
    category: "Development",
    tags: ["React", "UI Design"],
    description: "Analytics platform with real-time data visualization",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    year: "2024",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Bloom Ecommerce",
    category: "Design",
    tags: ["UI/UX", "Shopify"],
    description: "Premium fashion retail experience",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format",
    year: "2024",
    span: "col-span-1",
  },
  {
    title: "Ember Restaurant",
    category: "Design",
    tags: ["Branding", "Web"],
    description: "Upscale dining digital presence",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format",
    year: "2023",
    span: "col-span-1",
  },
  {
    title: "Vault Finance App",
    category: "Development",
    tags: ["React Native", "Fintech"],
    description: "Mobile wealth management platform",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format",
    year: "2023",
    span: "col-span-1",
  },
  {
    title: "Wander Travel Platform",
    category: "Branding",
    tags: ["Brand Identity", "Web"],
    description: "Adventure travel brand & digital ecosystem",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format",
    year: "2024",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Prism Agency Portfolio",
    category: "Branding",
    tags: ["Identity", "Motion"],
    description: "Creative agency brand system",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format",
    year: "2023",
    span: "col-span-1",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-10 bg-[var(--mist)] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--orange-pale)] blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-[var(--orange)] font-mono text-sm tracking-widest uppercase mb-4"
            variants={fadeUp}
          >
            — Our Work
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--black)]"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
            >
              Featured
              <br />
              <em className="text-[var(--orange)] not-italic">projects.</em>
            </motion.h2>
            <motion.div className="flex gap-2 flex-wrap" variants={fadeUp}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-xl text-[14px] font-semibold transition-all duration-300 ${
                    active === cat
                      ? "bg-[var(--orange)] text-white shadow-lg shadow-orange-200"
                      : "bg-white border border-[var(--border)] text-[var(--text-body)] hover:border-[var(--orange)] hover:text-[var(--orange)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                className={`${project.span} group relative rounded-3xl overflow-hidden cursor-pointer`}
                style={{ minHeight: "320px" }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-[var(--black)]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[12px] font-medium border border-white/20">
                      {project.category}
                    </span>
                    <span className="text-white/60 font-mono text-[12px]">{project.year}</span>
                  </div>

                  {/* Bottom */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[var(--orange)]/90 text-white text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-white text-xl mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-[13px] mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-[var(--orange-light)] text-[13px] font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Case Study
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* All projects CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-2 border-[var(--border)] hover:border-[var(--orange)] text-[var(--black)] hover:text-[var(--orange)] px-8 py-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
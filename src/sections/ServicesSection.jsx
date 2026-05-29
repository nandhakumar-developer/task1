import { motion } from "framer-motion";
import { Palette, Code2, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

const services = [
  {
    icon: Palette,
    num: "01",
    title: "UI/UX Design",
    description:
      "Human-centered interfaces that delight users. We design for clarity, emotion, and conversion — every pixel intentional.",
    tags: ["Figma", "Prototyping", "Research", "Motion"],
    color: "from-orange-50 to-amber-50",
    accent: "var(--orange)",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format",
  },
  {
    icon: Code2,
    num: "02",
    title: "Web Development",
    description:
      "Modern, performant applications built with cutting-edge technology. Fast, accessible, and built to scale.",
    tags: ["React", "Next.js", "TypeScript", "Node"],
    color: "from-stone-50 to-zinc-50",
    accent: "var(--charcoal)",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Brand Identity",
    description:
      "Strategic brand systems that resonate. From mark to motion, we build identities with personality and purpose.",
    tags: ["Logo", "Guidelines", "Typography", "Voice"],
    color: "from-orange-50 to-red-50",
    accent: "var(--orange)",
    img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80&auto=format",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Digital Marketing",
    description:
      "Data-driven growth strategies that connect brands to their audiences and turn visitors into advocates.",
    tags: ["SEO", "Social", "Content", "Analytics"],
    color: "from-stone-50 to-orange-50",
    accent: "var(--charcoal)",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <motion.span
              className="inline-block text-[var(--orange)] font-mono text-sm tracking-widest uppercase mb-4"
              variants={fadeUp}
            >
              — What We Do
            </motion.span>
            <motion.h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--black)]"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
            >
              Services built
              <br />
              <em className="text-[var(--orange)] not-italic">for growth.</em>
            </motion.h2>
          </div>
          <motion.p
            className="text-[var(--text-body)] text-lg max-w-sm leading-relaxed font-light"
            variants={fadeUp}
          >
            End-to-end digital solutions crafted to elevate your brand and accelerate results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${svc.color} border border-[var(--border)] hover:border-[var(--orange)]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-1 cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Card image overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden rounded-bl-[80px]">
                <img src={svc.img} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 lg:p-10 relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${svc.accent}15`, border: `1.5px solid ${svc.accent}25` }}
                  >
                    <svc.icon className="w-6 h-6" style={{ color: svc.accent }} />
                  </div>
                  <span
                    className="text-[80px] font-bold leading-none select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: `${svc.accent}10`,
                    }}
                  >
                    {svc.num}
                  </span>
                </div>

                <h3
                  className="text-[1.75rem] text-[var(--black)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-[var(--text-body)] leading-relaxed mb-8 font-light">
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[12px] font-medium bg-white/70 border border-[var(--border)] text-[var(--text-body)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-[14px] group/link"
                  style={{ color: svc.accent }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
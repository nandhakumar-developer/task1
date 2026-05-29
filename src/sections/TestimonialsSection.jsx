import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luminary Tech",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop",
    feedback:
      "Nexora redefined what we thought was possible in six weeks. The design intelligence they brought to our dashboard reduced onboarding time by 40%. Absolutely phenomenal work.",
    stars: 5,
    project: "SaaS Platform",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Vault Finance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop",
    feedback:
      "They understood our brand before we did. The identity system they created has become the backbone of all our marketing. Professional, communicative, and deeply talented.",
    stars: 5,
    project: "Brand Identity",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product, Bloom",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop",
    feedback:
      "Our conversion rate jumped 65% after launch. The Nexora team doesn't just build beautiful interfaces — they engineer outcomes. I'd recommend them without hesitation.",
    stars: 5,
    project: "E-commerce Redesign",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      {/* Accent blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--orange-pale)] blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
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
              — Client Love
            </motion.span>
            <motion.h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--black)]"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
            >
              Results speak
              <br />
              <em className="text-[var(--orange)] not-italic">for themselves.</em>
            </motion.h2>
          </div>
          <motion.div
            className="flex items-center gap-3 bg-[var(--mist)] rounded-2xl px-6 py-4 border border-[var(--border)] flex-shrink-0"
            variants={fadeUp}
          >
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-white"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[var(--orange)] text-[var(--orange)]" />
                ))}
              </div>
              <p className="text-[var(--text-muted)] text-xs mt-0.5 font-mono">20+ happy clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative bg-[var(--mist)] hover:bg-white border border-[var(--border)] hover:border-[var(--orange)]/30 rounded-3xl p-8 hover:shadow-xl hover:shadow-orange-50 transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-[var(--orange)]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[var(--text-body)] leading-relaxed font-light text-[15px] mb-8">
                "{t.feedback}"
              </p>

              {/* Bottom */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                />
                <div>
                  <div className="font-semibold text-[var(--black)] text-[15px]">{t.name}</div>
                  <div className="text-[var(--text-muted)] text-[12px] font-mono">{t.role}</div>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-[11px] font-mono">
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
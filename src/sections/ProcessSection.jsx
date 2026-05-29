import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Rocket } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover",
    desc: "We start with deep research — your business goals, users, competitors, and market. Understanding comes before designing.",
    detail: "2–3 days",
  },
  {
    icon: Lightbulb,
    num: "02",
    title: "Strategy",
    desc: "We map out the solution architecture, content strategy, and design direction before a single pixel is placed.",
    detail: "3–5 days",
  },
  {
    icon: Hammer,
    num: "03",
    title: "Create",
    desc: "Iterative design and development sprints with continuous client feedback. You always see where we are.",
    detail: "2–8 weeks",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch & Grow",
    desc: "Meticulous launch preparation, QA, and handoff. Then we measure, learn, and help you keep growing.",
    detail: "Ongoing",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 px-6 lg:px-10 bg-[var(--charcoal)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--orange)]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--orange)]/8 blur-[80px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,44,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-[var(--orange)] font-mono text-sm tracking-widest uppercase mb-4"
            variants={fadeUp}
          >
            — Our Process
          </motion.span>
          <motion.h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] text-white"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
          >
            How we{" "}
            <em className="text-[var(--orange)] not-italic">work.</em>
          </motion.h2>
          <motion.p
            className="text-white/50 text-lg max-w-xl mx-auto mt-4 font-light"
            variants={fadeUp}
          >
            A transparent, collaborative process designed to deliver exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--orange)]/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[var(--orange)]/40 rounded-3xl p-8 transition-all duration-500 h-full">
                  {/* Number */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--orange)]/15 border border-[var(--orange)]/30 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-[var(--orange)]" />
                    </div>
                    <span
                      className="absolute -top-3 -right-2 text-[60px] font-bold text-white/5 leading-none select-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <h3
                    className="text-white text-xl mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed font-light">
                    {step.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--orange)]/10 border border-[var(--orange)]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
                    <span className="text-[var(--orange)] text-[11px] font-mono">
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
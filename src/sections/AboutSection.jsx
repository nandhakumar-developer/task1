import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp, stagger, slideLeft, slideRight } from "../utils/animations";

const strengths = [
  "Strategy-first approach to every project",
  "Cross-discipline in-house team",
  "Agile process with transparent communication",
  "Post-launch support & growth partnerships",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top label */}
        <motion.span
          className="inline-block text-[var(--orange)] font-mono text-sm tracking-widest uppercase mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          — Who We Are
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image collage */}
          <motion.div
            className="relative h-[520px] hidden lg:block"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[72%] h-[75%] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/10 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format"
                alt="Design process"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-8 right-6 bg-white rounded-2xl shadow-lg px-5 py-4 border border-[var(--border)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="text-3xl font-bold text-[var(--orange)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                5+
              </div>
              <div className="text-[var(--text-muted)] text-xs font-medium mt-0.5">
                Years of Excellence
              </div>
            </motion.div>

            {/* Orange accent blob */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[var(--orange-pale)] -z-10" />
          </motion.div>

          {/* Right: content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              className="text-[clamp(2.2rem,4.5vw,4rem)] text-[var(--black)] leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
            >
              A studio that{" "}
              <em className="text-[var(--orange)] not-italic">thinks differently</em>{" "}
              about digital.
            </motion.h2>

            <motion.p
              className="text-[var(--text-body)] text-lg leading-relaxed font-light"
              variants={fadeUp}
            >
              Nexora Studio was founded in 2019 with a mission to close the gap between design and business impact. We're a small team with big ambitions — merging strategic thinking with world-class craft.
            </motion.p>

            <motion.p
              className="text-[var(--text-body)] text-lg leading-relaxed font-light"
              variants={fadeUp}
            >
              We believe every touchpoint is an opportunity to communicate value. From the first pixel to the last line of code, we obsess over the details that matter.
            </motion.p>

            <motion.ul className="space-y-3" variants={stagger}>
              {strengths.map((s, i) => (
                <motion.li key={i} className="flex items-start gap-3" variants={fadeUp}>
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--orange)" }}
                  />
                  <span className="text-[var(--text-body)] font-medium">{s}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[var(--black)] text-white px-7 py-4 rounded-2xl font-semibold text-[15px] hover:bg-[var(--charcoal)] transition-all duration-300 group"
              variants={fadeUp}
            >
              Work with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { n: "50+", l: "Projects", sub: "Successfully delivered" },
            { n: "20+", l: "Clients", sub: "Around the globe" },
            { n: "98%", l: "Retention", sub: "Client return rate" },
            { n: "12", l: "Awards", sub: "Industry recognition" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white px-8 py-8 hover:bg-[var(--orange-pale)] transition-colors duration-300 group"
            >
              <div
                className="text-4xl font-bold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.n}
              </div>
              <div className="text-[var(--text-body)] font-semibold mt-1">{s.l}</div>
              <div className="text-[var(--text-muted)] text-[12px] mt-0.5 font-mono">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
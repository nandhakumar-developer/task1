import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

export default function HeroSection() {
  const tags = ["UI/UX Design", "Web Development", "Branding", "Strategy"];

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-24 pb-16 grid-bg">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full bg-[var(--orange-pale)] blur-[80px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-[var(--orange-pale)] blur-[100px] opacity-40 pointer-events-none" />
      
      {/* Decorative orb */}
      <div className="absolute top-32 right-12 w-72 h-72 rounded-full border border-[var(--border)] opacity-50 float-anim pointer-events-none" />
      <div className="absolute top-40 right-20 w-52 h-52 rounded-full border border-[var(--orange)]/20 pointer-events-none float-anim" style={{ animationDelay: '1s' }} />

      {/* Spinning badge */}
      <div className="absolute top-32 right-[10%] hidden xl:flex items-center justify-center w-28 h-28 spin-slow">
        <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
          <defs>
            <path id="circle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
          <text fontSize="11.5" fontFamily="var(--font-mono)" fill="var(--orange)">
            <textPath href="#circle" letterSpacing="2">CREATIVE AGENCY • NEXORA STUDIO •&nbsp;</textPath>
          </text>
        </svg>
        <div className="w-10 h-10 rounded-full bg-[var(--orange)] flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Tag row */}
          <motion.div className="flex flex-wrap gap-2 mb-10" variants={fadeUp}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[var(--border)] text-[var(--text-body)] text-[13px] font-medium shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[clamp(3rem,8vw,7.5rem)] text-[var(--black)] leading-[1.0] mb-8"
            variants={fadeUp}
            style={{ fontFamily: "var(--font-display)" }}
          >
            We craft
            <span className="block">
              digital{" "}
              <em className="text-[var(--orange)] not-italic">experiences</em>
            </span>
            <span className="block text-[var(--text-muted)]">that matter.</span>
          </motion.h1>

          {/* Sub + CTA row */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-end gap-8 mt-12"
            variants={fadeUp}
          >
            <p className="text-xl text-[var(--text-body)] leading-relaxed max-w-md font-light">
              Premium design & development studio helping brands build unforgettable digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 bg-[var(--orange)] text-white px-7 py-4 rounded-2xl font-semibold text-[15px] hover:bg-[var(--orange-dark)] transition-all duration-300 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-3 bg-white border-2 border-[var(--border)] text-[var(--black)] px-7 py-4 rounded-2xl font-semibold text-[15px] hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                Our Story
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { n: "50+", l: "Projects Delivered", note: "Since 2019" },
            { n: "20+", l: "Happy Clients", note: "Global brands" },
            { n: "5yr", l: "In Business", note: "& counting" },
            { n: "100%", l: "Satisfaction", note: "Guaranteed" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="group"
              variants={fadeUp}
            >
              <div
                className="text-[3rem] font-bold text-[var(--black)] leading-none mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.n}
              </div>
              <div className="text-[var(--text-body)] font-medium text-[15px]">{s.l}</div>
              <div className="text-[var(--text-muted)] text-[12px] mt-0.5 font-mono">{s.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--mist)] overflow-hidden py-3">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-12 text-[var(--text-muted)] text-[13px] font-mono">
              UI/UX Design <span className="text-[var(--orange)]">✦</span> Web Development <span className="text-[var(--orange)]">✦</span> Branding <span className="text-[var(--orange)]">✦</span> Digital Marketing <span className="text-[var(--orange)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
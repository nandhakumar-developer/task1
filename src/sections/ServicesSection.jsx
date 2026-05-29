
import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

const services = [
  {
    icon: Palette,
    num: "01",
    title: "UI/UX Design",
    description:
      "Human-centered interfaces that delight users. We design for clarity, emotion, and conversion — every pixel intentional.",
    tags: ["Figma", "Prototyping", "Research", "Motion"],
    accent: "#FF6B2C",
    bg: "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format",
  },
  {
    icon: Code2,
    num: "02",
    title: "Web Development",
    description:
      "Modern, performant applications built with cutting-edge technology. Fast, accessible, and built to scale.",
    tags: ["React", "Next.js", "TypeScript", "Node"],
    accent: "#0A0A0A",
    bg: "linear-gradient(135deg, #F8F7F5 0%, #F1EFEC 100%)",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Brand Identity",
    description:
      "Strategic brand systems that resonate. From mark to motion, we build identities with personality and purpose.",
    tags: ["Logo", "Guidelines", "Typography", "Voice"],
    accent: "#FF6B2C",
    bg: "linear-gradient(135deg, #FFF7F2 0%, #FFEDEA 100%)",
    img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80&auto=format",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Digital Marketing",
    description:
      "Data-driven growth strategies that connect brands to their audiences and turn visitors into advocates.",
    tags: ["SEO", "Social", "Content", "Analytics"],
    accent: "#0A0A0A",
    bg: "linear-gradient(135deg, #F8F7F5 0%, #FFF3EB 100%)",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 24px",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "80px",
          }}
        >
          <div>
            <motion.span
              variants={fadeUp}
              style={{
                display: "inline-block",
                color: "#FF6B2C",
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              — What We Do
            </motion.span>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Services built
              <br />
              <span style={{ color: "#FF6B2C" }}>for growth.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            style={{
              maxWidth: "380px",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#4A4540",
              fontWeight: 300,
              margin: 0,
            }}
          >
            End-to-end digital solutions crafted to elevate your brand and
            accelerate results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "32px",
                background: svc.bg,
                border: "1px solid #EAE6E1",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "180px",
                  height: "180px",
                  opacity: 0.08,
                  overflow: "hidden",
                  borderBottomLeftRadius: "80px",
                }}
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "40px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Top Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "40px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "18px",
                      background: `${svc.accent}15`,
                      border: `1px solid ${svc.accent}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svc.icon
                      size={24}
                      color={svc.accent}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "72px",
                      lineHeight: 1,
                      color: `${svc.accent}15`,
                      userSelect: "none",
                    }}
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "32px",
                    color: "#0A0A0A",
                    marginBottom: "16px",
                    marginTop: 0,
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    color: "#4A4540",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: "32px",
                    fontSize: "16px",
                  }}
                >
                  {svc.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "32px",
                  }}
                >
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "999px",
                        background: "#FFFFFF",
                        border: "1px solid #EAE6E1",
                        color: "#4A4540",
                        fontSize: "12px",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: svc.accent,
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


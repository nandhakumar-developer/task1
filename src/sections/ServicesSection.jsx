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
    borderGlow: "rgba(255,107,44,0.3)",
  },
  {
    icon: Code2,
    num: "02",
    title: "Web Development",
    description:
      "Modern, performant applications built with cutting-edge technology. Fast, accessible, and built to scale.",
    tags: ["React", "Next.js", "TypeScript", "Node"],
    accent: "#FF6B2C",
    bg: "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format",
    borderGlow: "rgba(255,107,44,0.3)",
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
    borderGlow: "rgba(255,107,44,0.3)",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Digital Marketing",
    description:
      "Data-driven growth strategies that connect brands to their audiences and turn visitors into advocates.",
    tags: ["SEO", "Social", "Content", "Analytics"],
    accent: "#FF6B2C",
    bg: "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format",
    borderGlow: "rgba(255,107,44,0.3)",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "clamp(300px, 40vw, 600px)",
          height: "clamp(300px, 40vw, 600px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-3%",
          width: "clamp(250px, 35vw, 500px)",
          height: "clamp(250px, 35vw, 500px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
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
            gap: "clamp(24px, 4vw, 32px)",
            marginBottom: "clamp(48px, 8vw, 80px)",
          }}
        >
          <div>
            <motion.span
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                color: "#FF6B2C",
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(11px, 1.5vw, 13px)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "clamp(12px, 2vw, 16px)",
                background: "linear-gradient(135deg, rgba(255,107,44,0.1) 0%, rgba(255,107,44,0.05) 100%)",
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,107,44,0.2)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FF6B2C",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              What We Do
            </motion.span>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Services built
              <br />
              <span style={{ color: "#0A0A0A", position: "relative" }}>
                for growth.
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg, #FF6B2C, transparent)",
                    borderRadius: "2px",
                  }}
                />
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            style={{
              maxWidth: "380px",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              color: "#4A4540",
              fontWeight: 300,
              margin: 0,
              paddingLeft: "clamp(0px, 2vw, 16px)",
              borderLeft: "2px solid rgba(255,107,44,0.2)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="service-card"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "clamp(24px, 3vw, 32px)",
                background: svc.bg,
                border: `2px solid rgba(255,107,44,0.15)`,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(255,107,44,0.06)",
              }}
            >
              {/* Decorative border gradient on hover */}
              <div
                className="card-border-gradient"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  padding: "2px",
                  background: "linear-gradient(135deg, rgba(255,107,44,0.3), rgba(255,107,44,0.1), rgba(255,107,44,0.05))",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
              />

              {/* Background Image with improved visibility */}
              <div
                style={{
                  position: "absolute",
                  top: "-10%",
                  right: "-10%",
                  width: "clamp(160px, 25vw, 220px)",
                  height: "clamp(160px, 25vw, 220px)",
                  opacity: 0.06,
                  overflow: "hidden",
                  borderRadius: "50%",
                  transform: "rotate(-15deg)",
                  transition: "all 0.5s ease",
                  background: `url(${svc.img}) center/cover no-repeat`,
                }}
                className="card-bg-image"
              />

              {/* Accent corner decoration */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: `linear-gradient(135deg, transparent 50%, rgba(255,107,44,0.1) 50%)`,
                  borderRadius: "0 0 0 80px",
                  transition: "all 0.4s ease",
                }}
                className="corner-accent"
              />

              <div
                style={{
                  padding: "clamp(28px, 4vw, 40px)",
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
                    marginBottom: "clamp(32px, 5vw, 40px)",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(48px, 7vw, 64px)",
                      height: "clamp(48px, 7vw, 64px)",
                      borderRadius: "clamp(14px, 2vw, 20px)",
                      background: `linear-gradient(135deg, rgba(255,107,44,0.15) 0%, rgba(255,107,44,0.08) 100%)`,
                      border: `2px solid rgba(255,107,44,0.2)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(255,107,44,0.1)",
                      transition: "all 0.3s ease",
                    }}
                    className="icon-container"
                  >
                    <svc.icon
                      size={24}
                      color={svc.accent}
                      style={{ 
                        transition: "transform 0.3s ease",
                        width: "clamp(20px, 3vw, 28px)",
                        height: "clamp(20px, 3vw, 28px)",
                      }}
                      className="service-icon"
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "clamp(56px, 8vw, 80px)",
                      lineHeight: 1,
                      background: `linear-gradient(135deg, rgba(255,107,44,0.1) 0%, rgba(255,107,44,0.05) 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      userSelect: "none",
                      fontWeight: 700,
                    }}
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(24px, 3.5vw, 32px)",
                    color: "#0A0A0A",
                    marginBottom: "clamp(12px, 2vw, 16px)",
                    marginTop: 0,
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    color: "#4A4540",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: "clamp(24px, 3vw, 32px)",
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                  }}
                >
                  {svc.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "clamp(8px, 1.5vw, 10px)",
                    marginBottom: "clamp(24px, 3vw, 32px)",
                  }}
                >
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 14px)",
                        borderRadius: "999px",
                        background: "#FFFFFF",
                        border: "1px solid rgba(255,107,44,0.15)",
                        color: "#4A4540",
                        fontSize: "clamp(11px, 1.3vw, 13px)",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        transition: "all 0.3s ease",
                      }}
                      className="tag-item"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#FF6B2C",
                    color: "#FFFFFF",
                    padding: "clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 28px)",
                    borderRadius: "14px",
                    fontWeight: 600,
                    fontSize: "clamp(13px, 1.5vw, 15px)",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 4px 16px rgba(255,107,44,0.2)",
                    border: "2px solid transparent",
                  }}
                  className="cta-button"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0A0A0A";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#0A0A0A";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FF6B2C";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,107,44,0.2)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  Learn More
                  <ArrowRight size={16} style={{ transition: "transform 0.3s ease" }} className="arrow-icon" />
                </a>
              </div>

              {/* Hover overlay effect */}
              <div
                className="hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(255,107,44,0.05) 0%, transparent 100%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                  borderRadius: "inherit",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .service-card:hover {
          border-color: rgba(255,107,44,0.4) !important;
          box-shadow: 0 12px 40px rgba(255,107,44,0.15), 0 0 0 1px rgba(255,107,44,0.1) !important;
        }
        
        .service-card:hover .card-border-gradient {
          opacity: 1 !important;
        }
        
        .service-card:hover .card-bg-image {
          opacity: 0.1 !important;
          transform: rotate(-10deg) scale(1.1) !important;
        }
        
        .service-card:hover .icon-container {
          background: linear-gradient(135deg, rgba(255,107,44,0.25) 0%, rgba(255,107,44,0.15) 100%) !important;
          border-color: rgba(255,107,44,0.4) !important;
          transform: scale(1.05) !important;
          box-shadow: 0 12px 28px rgba(255,107,44,0.2) !important;
        }
        
        .service-card:hover .service-icon {
          transform: rotate(-10deg) !important;
        }
        
        .service-card:hover .corner-accent {
          background: linear-gradient(135deg, transparent 50%, rgba(255,107,44,0.2) 50%) !important;
        }
        
        .service-card:hover .hover-overlay {
          opacity: 1 !important;
        }
        
        .service-card:hover .tag-item {
          border-color: rgba(255,107,44,0.3) !important;
          background: rgba(255,107,44,0.05) !important;
        }
        
        .cta-button:hover .arrow-icon {
          transform: translateX(4px) !important;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.5);
          }
        }
        
        @media (max-width: 640px) {
          .service-icon {
            width: 20px !important;
            height: 20px !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .service-icon {
            width: 24px !important;
            height: 24px !important;
          }
        }
        
        @media (min-width: 1025px) {
          .service-icon {
            width: 28px !important;
            height: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
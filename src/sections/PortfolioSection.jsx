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
    large: true,
  },
  {
    title: "Bloom Ecommerce",
    category: "Design",
    tags: ["UI/UX", "Shopify"],
    description: "Premium fashion retail experience",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format",
    year: "2024",
  },
  {
    title: "Ember Restaurant",
    category: "Design",
    tags: ["Branding", "Web"],
    description: "Upscale dining digital presence",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format",
    year: "2023",
  },
  {
    title: "Vault Finance App",
    category: "Development",
    tags: ["React Native", "Fintech"],
    description: "Mobile wealth management platform",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format",
    year: "2023",
  },
  {
    title: "Wander Travel Platform",
    category: "Branding",
    tags: ["Brand Identity", "Web"],
    description: "Adventure travel brand & digital ecosystem",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format",
    year: "2024",
    large: true,
  },
  {
    title: "Prism Agency Portfolio",
    category: "Branding",
    tags: ["Identity", "Motion"],
    description: "Creative agency brand system",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format",
    year: "2023",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useState(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)",
        background: "#F7F5F3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blur */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(250px, 40vw, 420px)",
          height: "clamp(250px, 40vw, 420px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            marginBottom: "clamp(40px, 6vw, 56px)",
          }}
        >
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
            Our Work
          </motion.span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "flex-end",
              flexWrap: "wrap",
              gap: "clamp(16px, 3vw, 24px)",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                lineHeight: 1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Featured
              <br />
              <span style={{ color: "#FF6B2C" }}>projects.</span>
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "clamp(6px, 1vw, 10px)",
                flexWrap: "wrap",
                width: isMobile ? "100%" : "auto",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "clamp(10px, 1.5vw, 12px) clamp(16px, 2vw, 20px)",
                    borderRadius: "clamp(10px, 1.5vw, 14px)",
                    border:
                      active === cat
                        ? "2px solid #FF6B2C"
                        : "2px solid #EAE6E1",
                    background:
                      active === cat ? "#FF6B2C" : "#FFFFFF",
                    color:
                      active === cat ? "#FFFFFF" : "#4A4540",
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow:
                      active === cat
                        ? "0 8px 20px rgba(255,107,44,0.2)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    flex: isMobile ? 1 : "none",
                    whiteSpace: "nowrap",
                    fontFamily: "'DM Sans', sans-serif",
                    transform: active === cat ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.borderColor = "#FF6B2C";
                      e.currentTarget.style.color = "#FF6B2C";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.borderColor = "#EAE6E1";
                      e.currentTarget.style.color = "#4A4540";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${isMobile ? "100%" : "320px"}, 100%), 1fr))`,
            gap: "clamp(16px, 2vw, 20px)",
          }}
        >
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -8 }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "clamp(24px, 3vw, 30px)",
                  minHeight: project.large && !isMobile ? "420px" : "340px",
                  cursor: "pointer",
                  gridColumn: project.large && !isMobile ? "span 2" : "span 1",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  className="project-image"
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)",
                    transition: "opacity 0.3s ease",
                  }}
                  className="project-overlay"
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "clamp(20px, 3vw, 28px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: 2,
                  }}
                >
                  {/* Top */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        padding: "clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 14px)",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#FFFFFF",
                        fontSize: "clamp(10px, 1.2vw, 12px)",
                        fontWeight: 500,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {project.category}
                    </span>

                    <span
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "clamp(11px, 1.2vw, 12px)",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div>
                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "clamp(6px, 1vw, 8px)",
                        marginBottom: "clamp(10px, 1.5vw, 14px)",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "clamp(4px, 0.8vw, 6px) clamp(8px, 1.2vw, 12px)",
                            borderRadius: "999px",
                            background: "rgba(255,107,44,0.9)",
                            color: "#FFFFFF",
                            fontSize: "clamp(10px, 1vw, 11px)",
                            fontWeight: 600,
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        color: "#FFFFFF",
                        fontSize: "clamp(22px, 3vw, 30px)",
                        margin: "0 0 8px",
                        fontFamily:
                          "'DM Serif Display', Georgia, serif",
                        lineHeight: 1.1,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "clamp(12px, 1.3vw, 14px)",
                        lineHeight: 1.7,
                        marginBottom: "clamp(14px, 2vw, 18px)",
                        maxWidth: "420px",
                        fontWeight: 300,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#FFB089",
                        fontSize: "clamp(12px, 1.3vw, 14px)",
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                        transition: "all 0.3s ease",
                      }}
                      className="case-study-link"
                    >
                      <ExternalLink size={14} />
                      View Case Study
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 6vw, 64px)",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "clamp(14px, 2vw, 16px) clamp(24px, 3vw, 30px)",
              borderRadius: "clamp(14px, 2vw, 18px)",
              border: "2px solid #EAE6E1",
              color: "#0A0A0A",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "clamp(14px, 1.5vw, 15px)",
              transition: "all 0.3s ease",
              background: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF6B2C";
              e.currentTarget.style.color = "#FF6B2C";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,44,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#EAE6E1";
              e.currentTarget.style.color = "#0A0A0A";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start Your Project
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <style>{`
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
        
        .project-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-overlay {
          transition: background 0.4s ease;
        }
        
        .case-study-link:hover {
          color: #FF6B2C !important;
          gap: 12px !important;
        }
        
        @media (hover: hover) {
          .project-image:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
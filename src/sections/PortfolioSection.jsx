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

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      style={{
        padding: "120px 24px",
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
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#FFF0E8",
          filter: "blur(120px)",
          opacity: 0.7,
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
          viewport={{ once: true }}
          style={{
            marginBottom: "56px",
          }}
        >
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
            — Our Work
          </motion.span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
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
              Featured
              <br />
              <span style={{ color: "#FF6B2C" }}>projects.</span>
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "14px",
                    border:
                      active === cat
                        ? "1px solid #FF6B2C"
                        : "1px solid #EAE6E1",
                    background:
                      active === cat ? "#FF6B2C" : "#FFFFFF",
                    color:
                      active === cat ? "#FFFFFF" : "#4A4540",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow:
                      active === cat
                        ? "0 10px 25px rgba(255,107,44,0.25)"
                        : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                whileHover={{ y: -6 }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "30px",
                  minHeight: project.large ? "420px" : "340px",
                  cursor: "pointer",
                  gridColumn: project.large ? "span 2" : "span 1",
                }}
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15), transparent)",
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "28px",
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
                        padding: "8px 14px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {project.category}
                    </span>

                    <span
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "12px",
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
                        gap: "8px",
                        marginBottom: "14px",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "999px",
                            background: "rgba(255,107,44,0.9)",
                            color: "#FFFFFF",
                            fontSize: "11px",
                            fontWeight: 600,
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
                        fontSize: "30px",
                        margin: "0 0 10px",
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
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        marginBottom: "18px",
                        maxWidth: "420px",
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
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      <ExternalLink size={15} />
                      View Case Study
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            marginTop: "64px",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 30px",
              borderRadius: "18px",
              border: "2px solid #EAE6E1",
              color: "#0A0A0A",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              transition: "all 0.3s ease",
              background: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF6B2C";
              e.currentTarget.style.color = "#FF6B2C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#EAE6E1";
              e.currentTarget.style.color = "#0A0A0A";
            }}
          >
            Start Your Project
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
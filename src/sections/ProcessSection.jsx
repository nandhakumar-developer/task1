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
    <section
      id="process"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)",
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "clamp(300px, 50vw, 500px)",
          height: "clamp(300px, 50vw, 500px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "-3%",
          width: "clamp(250px, 35vw, 300px)",
          height: "clamp(250px, 35vw, 300px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(255,107,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 8vw, 80px)",
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
              background: "rgba(255,107,44,0.1)",
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
            Our Process
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}
          >
            How we{" "}
            <em style={{ color: "#FF6B2C", fontStyle: "normal" }}>
              work.
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "clamp(15px, 2vw, 18px)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            A transparent, collaborative process designed to deliver
            exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: "clamp(16px, 2vw, 24px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{ position: "relative" }}
            >
              <div
                className="process-card"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "clamp(24px, 3vw, 32px)",
                  padding: "clamp(28px, 4vw, 36px) clamp(24px, 3vw, 32px)",
                  height: "100%",
                  boxSizing: "border-box",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,107,44,0.08) 0%, rgba(255,107,44,0.05) 100%)";
                  e.currentTarget.style.borderColor = "rgba(255,107,44,0.3)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,107,44,0.1), 0 0 0 1px rgba(255,107,44,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.05) 100%)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="card-gradient-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,107,44,0.05) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                    borderRadius: "inherit",
                  }}
                />

                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, transparent 50%, rgba(255,107,44,0.08) 50%)",
                    borderRadius: "0 0 0 60px",
                    transition: "all 0.4s ease",
                  }}
                  className="corner-accent"
                />

                {/* Icon + Big Number */}
                <div
                  style={{
                    position: "relative",
                    marginBottom: "clamp(24px, 3vw, 32px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(44px, 6vw, 56px)",
                      height: "clamp(44px, 6vw, 56px)",
                      borderRadius: "clamp(14px, 2vw, 18px)",
                      background: "linear-gradient(135deg, rgba(255,107,44,0.2) 0%, rgba(255,107,44,0.1) 100%)",
                      border: "1.5px solid rgba(255,107,44,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 24px rgba(255,107,44,0.15)",
                      transition: "all 0.3s ease",
                    }}
                    className="icon-container"
                  >
                    <step.icon
                      size={22}
                      color="#FF6B2C"
                      style={{ transition: "transform 0.3s ease" }}
                      className="process-icon"
                    />
                  </div>

                  {/* Visible Number */}
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "clamp(48px, 7vw, 72px)",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, rgba(255,107,44,0.15) 0%, rgba(255,107,44,0.08) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    color: "#FFFFFF",
                    margin: "0 0 12px",
                    lineHeight: 1.2,
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "clamp(13px, 1.5vw, 15px)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    margin: "0 0 28px",
                  }}
                >
                  {step.desc}
                </p>

                {/* Timeline badge with blinking dot */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, rgba(255,107,44,0.12) 0%, rgba(255,107,44,0.08) 100%)",
                    border: "1px solid rgba(255,107,44,0.2)",
                    transition: "all 0.3s ease",
                  }}
                  className="timeline-badge"
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF6B2C",
                      flexShrink: 0,
                      animation: "glowPulse 2s ease-in-out infinite",
                      boxShadow: "0 0 8px rgba(255,107,44,0.6), 0 0 16px rgba(255,107,44,0.3)",
                    }}
                  />
                  <span
                    style={{
                      color: "#FF6B2C",
                      fontSize: "clamp(10px, 1.2vw, 12px)",
                      fontFamily: "'Space Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {step.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
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
        
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.7;
            box-shadow: 0 0 8px rgba(255,107,44,0.4), 0 0 16px rgba(255,107,44,0.2);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 16px rgba(255,107,44,0.8), 0 0 32px rgba(255,107,44,0.4);
          }
        }
        
        .process-card:hover .card-gradient-overlay {
          opacity: 1 !important;
        }
        
        .process-card:hover .icon-container {
          background: linear-gradient(135deg, rgba(255,107,44,0.3) 0%, rgba(255,107,44,0.15) 100%) !important;
          border-color: rgba(255,107,44,0.5) !important;
          transform: scale(1.1) !important;
          box-shadow: 0 12px 32px rgba(255,107,44,0.25) !important;
        }
        
        .process-card:hover .process-icon {
          transform: rotate(-10deg) !important;
        }
        
        .process-card:hover .corner-accent {
          background: linear-gradient(135deg, transparent 50%, rgba(255,107,44,0.15) 50%) !important;
        }
        
        .process-card:hover .timeline-badge {
          background: linear-gradient(135deg, rgba(255,107,44,0.2) 0%, rgba(255,107,44,0.12) 100%) !important;
          border-color: rgba(255,107,44,0.4) !important;
        }
        
        @media (max-width: 640px) {
          .process-card {
            text-align: center;
          }
          
          .process-card > div:first-child {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
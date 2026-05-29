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
        padding: "120px 24px",
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration blobs */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,107,44,0.05)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,107,44,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(255,107,44,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,0.4) 1px, transparent 1px)",
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
            marginBottom: "80px",
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
            — Our Process
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1,
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
              fontSize: "18px",
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
            position: "relative",
          }}
        >
          {/* Connecting line (decorative, desktop) */}
          <div
            style={{
              position: "absolute",
              top: "48px",
              left: "12%",
              right: "12%",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(255,107,44,0.4), transparent)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
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
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "28px",
                    padding: "36px 32px",
                    height: "100%",
                    boxSizing: "border-box",
                    transition: "all 0.4s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.borderColor = "rgba(255,107,44,0.4)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon + Big Number */}
                  <div
                    style={{
                      position: "relative",
                      marginBottom: "28px",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "18px",
                        background: "rgba(255,107,44,0.15)",
                        border: "1px solid rgba(255,107,44,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <step.icon
                        size={22}
                        color="#FF6B2C"
                      />
                    </div>

                    {/* Big ghost number */}
                    <span
                      style={{
                        position: "absolute",
                        top: "-12px",
                        right: "-8px",
                        fontSize: "64px",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.05)",
                        lineHeight: 1,
                        userSelect: "none",
                        fontFamily: "'DM Serif Display', Georgia, serif",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "22px",
                      color: "#FFFFFF",
                      margin: "0 0 12px",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      margin: "0 0 24px",
                    }}
                  >
                    {step.desc}
                  </p>

                  {/* Timeline badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 14px",
                      borderRadius: "999px",
                      background: "rgba(255,107,44,0.1)",
                      border: "1px solid rgba(255,107,44,0.2)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#FF6B2C",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "#FF6B2C",
                        fontSize: "11px",
                        fontFamily: "'Space Mono', monospace",
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
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  fadeUp,
  stagger,
  slideLeft,
} from "../utils/animations";

const strengths = [
  "Strategy-first approach to every project",
  "Cross-discipline in-house team",
  "Agile process with transparent communication",
  "Post-launch support & growth partnerships",
];

const stats = [
  {
    n: "50+",
    l: "Projects",
    sub: "Successfully delivered",
  },
  {
    n: "20+",
    l: "Clients",
    sub: "Around the globe",
  },
  {
    n: "98%",
    l: "Retention",
    sub: "Client return rate",
  },
  {
    n: "12",
    l: "Awards",
    sub: "Industry recognition",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        background: "#FFFFFF",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "inline-block",
            color: "#FF6B2C",
            fontFamily: "'Space Mono', monospace",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "64px",
          }}
        >
          — Who We Are
        </motion.span>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Images */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: "relative",
              height: "540px",
              display: window.innerWidth < 1024 ? "none" : "block",
            }}
          >
            {/* Main Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "72%",
                height: "76%",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
                alt="Team collaboration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom right, rgba(255,107,44,0.12), transparent)",
                }}
              />
            </div>

            {/* Secondary Image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "56%",
                height: "56%",
                borderRadius: "32px",
                overflow: "hidden",
                border: "4px solid white",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format"
                alt="Design process"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "32px",
                right: "24px",
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "20px 24px",
                border: "1px solid #EAE6E1",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "#FF6B2C",
                  lineHeight: 1,
                  fontFamily:
                    "'DM Serif Display', Georgia, serif",
                }}
              >
                5+
              </div>

              <div
                style={{
                  color: "#8A8480",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginTop: "6px",
                }}
              >
                Years of Excellence
              </div>
            </motion.div>

            {/* Background Blob */}
            <div
              style={{
                position: "absolute",
                bottom: "-40px",
                left: "-40px",
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                background: "#FFF0E8",
                zIndex: -1,
              }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily:
                  "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.3rem, 5vw, 4.3rem)",
                lineHeight: 1.1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              A studio that{" "}
              <span style={{ color: "#FF6B2C" }}>
                thinks differently
              </span>{" "}
              about digital.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                color: "#4A4540",
                fontSize: "18px",
                lineHeight: 1.8,
                fontWeight: 300,
                margin: 0,
              }}
            >
              Nexora Studio was founded in 2019 with a
              mission to close the gap between design and
              business impact. We're a small team with big
              ambitions — merging strategic thinking with
              world-class craft.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                color: "#4A4540",
                fontSize: "18px",
                lineHeight: 1.8,
                fontWeight: 300,
                margin: 0,
              }}
            >
              We believe every touchpoint is an opportunity
              to communicate value. From the first pixel to
              the last line of code, we obsess over the
              details that matter.
            </motion.p>

            {/* Strengths */}
            <motion.div
              variants={stagger}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {strengths.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color="#FF6B2C"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />

                  <span
                    style={{
                      color: "#4A4540",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {s}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#0A0A0A",
                color: "#FFFFFF",
                padding: "16px 28px",
                borderRadius: "18px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "15px",
                width: "fit-content",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1A1A1A";
                e.currentTarget.style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0A0A0A";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              Work with us
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: "96px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "#EAE6E1",
            borderRadius: "32px",
            overflow: "hidden",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                padding: "36px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontFamily:
                    "'DM Serif Display', Georgia, serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {s.n}
              </div>

              <div
                style={{
                  color: "#4A4540",
                  fontWeight: 600,
                  marginBottom: "4px",
                  fontSize: "15px",
                }}
              >
                {s.l}
              </div>

              <div
                style={{
                  color: "#8A8480",
                  fontSize: "12px",
                  fontFamily:
                    "'Space Mono', monospace",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
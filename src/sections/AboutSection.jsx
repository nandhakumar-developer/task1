import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import {
  fadeUp,
  stagger,
  slideLeft,
} from "../utils/animations";

// Animated Counter Component
function AnimatedCounter({ value, isInView }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span>
      {count}
      {value.includes("%") && (
        <span style={{ color: "#FF6B2C" }}>%</span>
      )}
      {value.includes("+") && (
        <span style={{ color: "#FF6B2C" }}>+</span>
      )}
    </span>
  );
}

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
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)",
        background: "#FFFFFF",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-2%",
          width: "clamp(300px, 40vw, 500px)",
          height: "clamp(300px, 40vw, 500px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.03) 0%, transparent 70%)",
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
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            color: "#FF6B2C",
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(11px, 1.5vw, 13px)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "clamp(40px, 6vw, 64px)",
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
          Who We Are
        </motion.span>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(40px, 8vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Left Images */}
          {!isMobile && (
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                position: "relative",
                height: "clamp(400px, 50vw, 540px)",
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
                  borderRadius: "clamp(24px, 3vw, 32px)",
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
                  borderRadius: "clamp(24px, 3vw, 32px)",
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

              {/* Floating Card with Orange Border */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "clamp(20px, 4vw, 32px)",
                  right: "clamp(12px, 3vw, 24px)",
                  background: "#FFFFFF",
                  borderRadius: "clamp(18px, 2.5vw, 24px)",
                  padding: "clamp(16px, 2vw, 20px) clamp(20px, 2.5vw, 24px)",
                  border: "2px solid #FF6B2C",
                  boxShadow: "0 15px 35px rgba(255,107,44,0.15), 0 0 0 4px rgba(255,107,44,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(32px, 4vw, 40px)",
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
                    fontSize: "clamp(11px, 1.3vw, 12px)",
                    fontWeight: 600,
                    marginTop: "6px",
                    fontFamily: "'Space Mono', monospace",
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
                  width: "clamp(100px, 15vw, 140px)",
                  height: "clamp(100px, 15vw, 140px)",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(255,107,44,0.1), rgba(255,107,44,0.05))",
                  zIndex: -1,
                  border: "1px solid rgba(255,107,44,0.1)",
                }}
              />
            </motion.div>
          )}

          {/* Right Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(24px, 3vw, 32px)",
            }}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily:
                  "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 4.3rem)",
                lineHeight: 1.1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              A studio that{" "}
              <span style={{ color: "#FF6B2C", position: "relative" }}>
                thinks differently
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
              </span>{" "}
              about digital.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                color: "#4A4540",
                fontSize: "clamp(15px, 2vw, 18px)",
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
                fontSize: "clamp(15px, 2vw, 18px)",
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
                gap: "clamp(14px, 2vw, 18px)",
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
                    padding: "clamp(12px, 1.5vw, 16px)",
                    borderRadius: "12px",
                    background: "rgba(255,107,44,0.02)",
                    border: "1px solid rgba(255,107,44,0.05)",
                    transition: "all 0.3s ease",
                  }}
                  className="strength-item"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,107,44,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,107,44,0.15)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,107,44,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,107,44,0.05)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "rgba(255,107,44,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      color="#FF6B2C"
                    />
                  </div>

                  <span
                    style={{
                      color: "#4A4540",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: "clamp(13px, 1.5vw, 15px)",
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
                padding: "clamp(14px, 2vw, 16px) clamp(24px, 3vw, 28px)",
                borderRadius: "clamp(14px, 2vw, 18px)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "clamp(14px, 1.5vw, 15px)",
                width: "fit-content",
                transition: "all 0.3s ease",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
              className="about-cta"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1A1A1A";
                e.currentTarget.style.transform =
                  "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0A0A0A";
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
              }}
            >
              Work with us
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Stats with Counter Animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: "clamp(48px, 8vw, 96px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
            gap: "1px",
            background: "#FF6B2C",
            borderRadius: "clamp(24px, 3vw, 32px)",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(255,107,44,0.1)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                padding: "clamp(28px, 4vw, 36px)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              className="stat-item"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF7F2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  lineHeight: 1,
                  marginBottom: "clamp(6px, 1vw, 8px)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "2px",
                }}
              >
                {isStatsInView ? (
                  <AnimatedCounter
                    value={s.n}
                    isInView={isStatsInView}
                  />
                ) : (
                  <span>{s.n}</span>
                )}
              </div>

              <div
                style={{
                  color: "#FF6B2C",
                  fontWeight: 600,
                  marginBottom: "4px",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s.l}
              </div>

              <div
                style={{
                  color: "#8A8480",
                  fontSize: "clamp(11px, 1.2vw, 12px)",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </motion.div>
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
        
        .strength-item {
          cursor: pointer;
        }
        
        .stat-item:hover {
          background: #FFF7F2 !important;
        }
        
        .about-cta:hover {
          background: #1A1A1A;
        }
        
        @media (max-width: 640px) {
          .stat-item {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
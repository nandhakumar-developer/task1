import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { fadeUp, stagger } from "../utils/animations";

// Counter animation component
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
      {value.includes("yr") && (
        <span style={{ color: "#FF6B2C" }}>yr</span>
      )}
    </span>
  );
}

export default function HeroSection() {
  const tags = ["UI/UX Design", "Web Development", "Branding", "Strategy"];
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const stats = [
    { n: "50+", l: "Projects Delivered", note: "Since 2019" },
    { n: "20+", l: "Happy Clients", note: "Global brands" },
    { n: "5yr", l: "In Business", note: "& counting" },
    { n: "100%", l: "Satisfaction", note: "Guaranteed" },
  ];

  // Marquee items - doubled for seamless loop
  const marqueeItems = [
    "Web Development",
    "Branding",
    "Digital Marketing",
    "UI/UX Design",
    "Web Development",
    "Branding",
    "Digital Marketing",
    "UI/UX Design",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "clamp(80px, 10vw, 120px)",
        paddingBottom: "clamp(60px, 8vw, 80px)",
        backgroundImage:
          "linear-gradient(rgba(234,230,225,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,230,225,0.5) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "clamp(40px, 8vw, 80px)",
          right: 0,
          width: "clamp(280px, 50vw, 520px)",
          height: "clamp(280px, 50vw, 520px)",
          borderRadius: "50%",
          background: "#FFF0E8",
          filter: "blur(80px)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "clamp(200px, 40vw, 380px)",
          height: "clamp(200px, 40vw, 380px)",
          borderRadius: "50%",
          background: "#FFF0E8",
          filter: "blur(100px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Decorative orbs — visible on larger screens */}
      <div
        className="float-anim hidden lg:block"
        style={{
          position: "absolute",
          top: "128px",
          right: "48px",
          width: "288px",
          height: "288px",
          borderRadius: "50%",
          border: "1px solid #EAE6E1",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Spinning badge — visible on xl screens */}
      <div
        className="spin-slow hidden xl:flex"
        style={{
          position: "absolute",
          top: "128px",
          right: "6%",
          width: "112px",
          height: "112px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 120 120"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <defs>
            <path
              id="badge-circle"
              d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            fontSize="11.5"
            fontFamily="'Space Mono', monospace"
            fill="#FF6B2C"
          >
            <textPath href="#badge-circle" letterSpacing="2">
              CREATIVE AGENCY • NEXORA STUDIO •&nbsp;
            </textPath>
          </text>
        </svg>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#FF6B2C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRight size={16} color="white" />
        </div>
      </div>

      {/* Main content container */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 24px)",
          width: "100%",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Tag pills */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "clamp(24px, 4vw, 40px)",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  background: "#FFFFFF",
                  border: "1px solid #EAE6E1",
                  color: "#4A4540",
                  fontSize: "clamp(11px, 1.5vw, 13px)",
                  fontWeight: 500,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  whiteSpace: "nowrap",
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
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 7vw, 7.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}
          >
            We craft
            <span style={{ display: "block" }}>
              digital{" "}
              <em style={{ color: "#FF6B2C", fontStyle: "normal" }}>
                experiences
              </em>
            </span>
            <span style={{ display: "block", color: "#8A8480" }}>
              that matter.
            </span>
          </motion.h1>

          {/* Sub-copy + CTA row */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "clamp(16px, 3vw, 32px)",
              marginTop: "clamp(24px, 4vw, 40px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                color: "#4A4540",
                lineHeight: 1.7,
                maxWidth: "420px",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Premium design & development studio helping brands build
              unforgettable digital products.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                flexShrink: 0,
              }}
            >
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FF6B2C",
                  color: "#FFFFFF",
                  padding: "clamp(12px, 2vw, 14px) clamp(20px, 3vw, 28px)",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E5520E";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(255,107,44,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FF6B2C";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                View Our Work
                <ArrowRight size={16} />
              </a>

              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FFFFFF",
                  color: "#0A0A0A",
                  border: "2px solid #FF6B2C",
                  padding: "clamp(12px, 2vw, 14px) clamp(20px, 3vw, 28px)",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFF0E8";
                  e.currentTarget.style.borderColor = "#E5520E";
                  e.currentTarget.style.color = "#E5520E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#FF6B2C";
                  e.currentTarget.style.color = "#0A0A0A";
                }}
              >
                <Play size={14} style={{ fill: "currentColor" }} />
                Our Story
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats bar with counter animation */}
        <motion.div
          ref={statsRef}
          variants={stagger}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          style={{
            marginTop: "clamp(48px, 8vw, 72px)",
            paddingTop: "clamp(24px, 4vw, 40px)",
            borderTop: "1px solid #EAE6E1",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(16px, 3vw, 32px)",
          }}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                <AnimatedCounter
                  value={s.n}
                  isInView={isStatsInView}
                />
              </div>
              <div
                style={{
                  color: "#4A4540",
                  fontWeight: 500,
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                {s.l}
              </div>
              <div
                style={{
                  color: "#8A8480",
                  fontSize: "clamp(11px, 1.2vw, 12px)",
                  marginTop: "4px",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {s.note}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom marquee - Fixed infinite loop */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(36px, 5vw, 44px)",
          background: "#FF6B2C",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-container {
            display: flex;
            animation: marquee 20s linear infinite;
            width: fit-content;
          }
          
          .marquee-item {
            display: inline-flex;
            align-items: center;
            gap: clamp(16px, 2vw, 24px);
            padding-right: clamp(32px, 4vw, 48px);
            color: #FFFFFF;
            font-size: clamp(11px, 1.3vw, 13px);
            font-family: 'Space Mono', monospace;
            white-space: nowrap;
            flex-shrink: 0;
          }
          
          .marquee-separator {
            color: #FFFFFF;
            font-size: clamp(11px, 1.3vw, 13px);
          }
        `}</style>
        
        <div className="marquee-container">
          {marqueeItems.map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
              <span className="marquee-separator">✦</span>
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-container" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <span key={`dup-${index}`} className="marquee-item">
              {item}
              <span className="marquee-separator">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Additional global styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .float-anim {
          animation: float 6s ease-in-out infinite;
        }
        
        .spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @media (max-width: 1023px) {
          .hidden {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:block {
            display: block !important;
          }
        }
        
        @media (min-width: 1280px) {
          .xl\\:flex {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
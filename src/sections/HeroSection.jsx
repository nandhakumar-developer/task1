import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

export default function HeroSection() {
  const tags = ["UI/UX Design", "Web Development", "Branding", "Strategy"];

  const stats = [
    { n: "50+",  l: "Projects Delivered", note: "Since 2019"    },
    { n: "20+",  l: "Happy Clients",       note: "Global brands" },
    { n: "5yr",  l: "In Business",         note: "& counting"   },
    { n: "100%", l: "Satisfaction",        note: "Guaranteed"   },
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
        paddingTop: "120px",
        paddingBottom: "80px",
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
          top: "80px",
          right: 0,
          width: "min(520px, 70vw)",
          height: "min(520px, 70vw)",
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
          width: "min(380px, 60vw)",
          height: "min(380px, 60vw)",
          borderRadius: "50%",
          background: "#FFF0E8",
          filter: "blur(100px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Decorative orbs — lg+ only */}
      <div
        className="float-anim"
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
          display: "var(--orb-display, none)",
        }}
      />

      {/* Spinning badge */}
      <div
        className="spin-slow"
        style={{
          position: "absolute",
          top: "128px",
          right: "6%",
          width: "112px",
          height: "112px",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
        }}
        // shown via media query in index.css — xl:flex
      >
        <svg viewBox="0 0 120 120" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <defs>
            <path id="badge-circle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
          <text fontSize="11.5" fontFamily="'Space Mono', monospace" fill="#FF6B2C">
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

      {/* ── Main content container ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Tag pills */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}
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
                  fontSize: "13px",
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
              fontSize: "clamp(2.8rem, 8vw, 7.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
              marginBottom: "32px",
              // NO ml-80 / margin-left here
            }}
          >
            We craft
            <span style={{ display: "block" }}>
              digital{" "}
              <em style={{ color: "#FF6B2C", fontStyle: "normal" }}>experiences</em>
            </span>
            <span style={{ display: "block", color: "#8A8480" }}>that matter.</span>
          </motion.h1>

          {/* Sub-copy + CTA row */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "32px",
              marginTop: "40px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", flexShrink: 0 }}>
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#FF6B2C",
                  color: "#FFFFFF",
                  padding: "14px 28px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E5520E";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,107,44,0.3)";
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
                  border: "2px solid #EAE6E1",
                  padding: "14px 28px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
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
                <Play size={14} style={{ fill: "currentColor" }} />
                Our Story
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: "1px solid #EAE6E1",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "32px",
          }}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  color: "#4A4540",
                  fontWeight: 500,
                  fontSize: "15px",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                {s.l}
              </div>
              <div
                style={{
                  color: "#8A8480",
                  fontSize: "12px",
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

      {/* Bottom marquee — fixed 44px tall, never overlaps content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "44px",
          borderTop: "1px solid #EAE6E1",
          background: "#F7F5F3",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "24px",
                paddingRight: "48px",
                color: "#8A8480",
                fontSize: "13px",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              UI/UX Design{" "}
              <span style={{ color: "#FF6B2C" }}>✦</span> Web Development{" "}
              <span style={{ color: "#FF6B2C" }}>✦</span> Branding{" "}
              <span style={{ color: "#FF6B2C" }}>✦</span> Digital Marketing{" "}
              <span style={{ color: "#FF6B2C" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
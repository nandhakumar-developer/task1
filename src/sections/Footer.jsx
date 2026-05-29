import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const cols = {
    Services: [
      "UI/UX Design",
      "Web Development",
      "Brand Identity",
      "Digital Marketing",
      "Consulting",
    ],
    Company: ["About Us", "Portfolio", "Process", "Careers", "Blog"],
    Connect: ["Twitter / X", "LinkedIn", "Dribbble", "Instagram", "Behance"],
  };

  return (
    <footer
      style={{
        background: "var(--black)",
        color: "#FFFFFF",
      }}
    >
      {/* CTA Banner */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(40px, 6vw, 64px) clamp(16px, 4vw, 24px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(24px, 4vw, 32px)",
          }}
        >
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "8px",
              }}
            >
              Start a project
            </p>

            <h3
              style={{
                fontSize: "clamp(1.8rem, 5vw, 4rem)",
                lineHeight: 1.1,
                color: "#FFFFFF",
                margin: 0,
                fontFamily: "var(--font-display)",
              }}
            >
              Let's build something{" "}
              <em
                style={{
                  color: "var(--orange)",
                  fontStyle: "normal",
                }}
              >
                extraordinary.
              </em>
            </h3>
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "var(--orange)",
              color: "#FFFFFF",
              padding: "clamp(14px, 2vw, 16px) clamp(24px, 3vw, 32px)",
              borderRadius: "18px",
              fontWeight: 600,
              fontSize: "clamp(14px, 1.5vw, 15px)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--orange-dark)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(255,107,44,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--orange)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(40px, 6vw, 64px) clamp(16px, 4vw, 24px)",
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
            gap: "clamp(32px, 5vw, 48px)",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "14px",
                  background: "var(--orange)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(255,107,44,0.3)",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  NK
                </span>
              </div>

              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "18px",
                  letterSpacing: "-0.02em",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                NK dev
                <span style={{ color: "var(--orange)" }}>.</span>
              </span>
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "clamp(13px, 1.5vw, 14px)",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "240px",
                margin: 0,
              }}
            >
              A modern creative agency building exceptional digital
              experiences.
            </p>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ADE80",
                  position: "relative",
                  display: "inline-block",
                  boxShadow: "0 0 12px rgba(74,222,128,0.5)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "50%",
                    background: "#4ADE80",
                    animation: "ping 1.5s infinite",
                    opacity: 0.3,
                  }}
                />
              </span>

              <span
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "clamp(11px, 1.2vw, 12px)",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Available for projects
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <h4
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "clamp(10px, 1.2vw, 11px)",
                  fontFamily: "'Space Mono', monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: "clamp(16px, 2vw, 20px)",
                }}
              >
                {cat}
              </h4>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(10px, 1.5vw, 14px)",
                }}
              >
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "clamp(13px, 1.5vw, 14px)",
                        transition: "color 0.25s ease",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "rgba(255,255,255,0.5)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "clamp(24px, 3vw, 32px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(16px, 2vw, 20px)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "clamp(12px, 1.3vw, 13px)",
              fontFamily: "'Space Mono', monospace",
              margin: 0,
            }}
          >
            © 2026 NK dev. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 2.5vw, 24px)",
              flexWrap: "wrap",
            }}
          >
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  fontSize: "clamp(12px, 1.3vw, 13px)",
                  fontFamily: "'Space Mono', monospace",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.3)";
                }}
              >
                {l}
              </a>
            ))}
          </div>

          <motion.button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              border: "none",
              background: "rgba(255,255,255,0.08)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--orange)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,0.08)";
            }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.8);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
    </footer>
  );
}
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
            padding: "64px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Space Mono', monospace",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "8px",
              }}
            >
              Start a project
            </p>

            <h3
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
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
              padding: "16px 32px",
              borderRadius: "18px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
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
          padding: "64px 24px",
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
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
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontSize: "18px",
                  }}
                >
                  N
                </span>
              </div>

              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "18px",
                  letterSpacing: "-0.02em",
                }}
              >
                Nexora
                <span style={{ color: "var(--orange)" }}>.</span>
              </span>
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
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
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "#4ADE80",
                    animation: "ping 1.5s infinite",
                    opacity: 0.7,
                  }}
                />
              </span>

              <span
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "12px",
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
                  fontSize: "11px",
                  fontFamily: "'Space Mono', monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: "20px",
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
                  gap: "14px",
                }}
              >
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.25s ease",
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
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              fontFamily: "'Space Mono', monospace",
              margin: 0,
            }}
          >
            © 2026 Nexora Studio. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
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
                  fontSize: "13px",
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
    </footer>
  );
}
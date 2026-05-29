import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luminary Tech",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop",
    feedback:
      "Nexora redefined what we thought was possible in six weeks. The design intelligence they brought to our dashboard reduced onboarding time by 40%. Absolutely phenomenal work.",
    stars: 5,
    project: "SaaS Platform",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Vault Finance",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop",
    feedback:
      "They understood our brand before we did. The identity system they created has become the backbone of all our marketing. Professional, communicative, and deeply talented.",
    stars: 5,
    project: "Brand Identity",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product, Bloom",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop",
    feedback:
      "Our conversion rate jumped 65% after launch. The Nexora team doesn't just build beautiful interfaces — they engineer outcomes. I'd recommend them without hesitation.",
    stars: 5,
    project: "E-commerce Redesign",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{
        padding: "120px 24px",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blur */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "#FFF0E8",
          filter: "blur(100px)",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "72px",
          }}
        >
          {/* Left */}
          <div>
            <motion.span
              variants={fadeUp}
              style={{
                display: "inline-block",
                color: "#FF6B2C",
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              — Client Love
            </motion.span>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily:
                  "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4.8rem)",
                lineHeight: 1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Results speak
              <br />
              <span style={{ color: "#FF6B2C" }}>
                for themselves.
              </span>
            </motion.h2>
          </div>

          {/* Right Rating Card */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "#F7F5F3",
              padding: "18px 24px",
              borderRadius: "24px",
              border: "1px solid #EAE6E1",
            }}
          >
            {/* Avatars */}
            <div
              style={{
                display: "flex",
                marginLeft: "8px",
              }}
            >
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid white",
                    marginLeft: i === 0 ? 0 : "-12px",
                  }}
                />
              ))}
            </div>

            {/* Rating */}
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "4px",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#FF6B2C"
                    color="#FF6B2C"
                  />
                ))}
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#8A8480",
                  fontSize: "12px",
                  fontFamily:
                    "'Space Mono', monospace",
                }}
              >
                20+ happy clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                y: -6,
              }}
              style={{
                background: "#F7F5F3",
                border: "1px solid #EAE6E1",
                borderRadius: "32px",
                padding: "36px",
                position: "relative",
                transition: "all 0.4s ease",
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: "rgba(255,107,44,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Quote
                  size={22}
                  color="#FF6B2C"
                />
              </div>

              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  marginBottom: "20px",
                }}
              >
                {[...Array(t.stars)].map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    fill="#FF6B2C"
                    color="#FF6B2C"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p
                style={{
                  color: "#4A4540",
                  lineHeight: 1.9,
                  fontWeight: 300,
                  fontSize: "15px",
                  marginBottom: "36px",
                }}
              >
                "{t.feedback}"
              </p>

              {/* Bottom */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "18px",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#0A0A0A",
                      fontSize: "15px",
                      marginBottom: "4px",
                    }}
                  >
                    {t.name}
                  </div>

                  <div
                    style={{
                      color: "#8A8480",
                      fontSize: "12px",
                      fontFamily:
                        "'Space Mono', monospace",
                    }}
                  >
                    {t.role}
                  </div>
                </div>

                {/* Project Badge */}
                <span
                  style={{
                    marginLeft: "auto",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background:
                      "rgba(255,107,44,0.1)",
                    color: "#FF6B2C",
                    fontSize: "11px",
                    fontFamily:
                      "'Space Mono', monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
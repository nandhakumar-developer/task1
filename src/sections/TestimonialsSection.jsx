import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";
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
  {
    name: "David Park",
    role: "CTO, InnovateLab",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop",
    feedback:
      "The technical expertise combined with creative vision is rare to find. Nexora delivered a platform that exceeded our expectations in both performance and design.",
    stars: 5,
    project: "Web Application",
  },
  {
    name: "Amanda Foster",
    role: "Marketing Director, StyleCo",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&auto=format&fit=crop",
    feedback:
      "Working with Nexora was a game-changer. Their strategic approach to our rebrand helped us connect with a younger demographic while maintaining our core identity.",
    stars: 5,
    project: "Rebranding",
  },
];

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left side gradient overlay - stronger outer, lighter inner */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "clamp(150px, 20vw, 300px)",
          background: "linear-gradient(to right, rgba(255,107,44,0.15) 0%, rgba(255,107,44,0.08) 40%, rgba(255,107,44,0.02) 70%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Right side gradient overlay - stronger outer, lighter inner */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "clamp(150px, 20vw, 300px)",
          background: "linear-gradient(to left, rgba(255,107,44,0.15) 0%, rgba(255,107,44,0.08) 40%, rgba(255,107,44,0.02) 70%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Background decorative elements - softer, more subtle */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "clamp(250px, 35vw, 400px)",
          height: "clamp(250px, 35vw, 400px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.06) 0%, rgba(255,107,44,0.03) 40%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      
      {/* Top left decorative blob - very subtle */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "clamp(200px, 30vw, 350px)",
          height: "clamp(200px, 30vw, 350px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.04) 0%, rgba(255,107,44,0.01) 40%, transparent 70%)",
          filter: "blur(80px)",
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
            gap: "clamp(20px, 3vw, 24px)",
            marginBottom: "clamp(48px, 8vw, 72px)",
          }}
        >
          {/* Left */}
          <div>
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
                marginBottom: "clamp(14px, 2vw, 18px)",
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
              Client Love
            </motion.span>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily:
                  "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 4.8rem)",
                lineHeight: 1,
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Results speak
              <br />
              <span style={{ color: "#FF6B2C", position: "relative" }}>
                for themselves.
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
              </span>
            </motion.h2>
          </div>

          {/* Right Rating Card */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 2vw, 16px)",
              background: "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
              padding: "clamp(16px, 2vw, 18px) clamp(20px, 2.5vw, 24px)",
              borderRadius: "clamp(20px, 2.5vw, 24px)",
              border: "2px solid rgba(255,107,44,0.2)",
              boxShadow: "0 8px 24px rgba(255,107,44,0.08)",
            }}
          >
            {/* Avatars */}
            <div
              style={{
                display: "flex",
                marginLeft: "8px",
              }}
            >
              {testimonials.slice(0, 3).map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "clamp(36px, 4vw, 42px)",
                    height: "clamp(36px, 4vw, 42px)",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid white",
                    marginLeft: i === 0 ? 0 : "-12px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(255,107,44,0.3))",
                    }}
                  />
                ))}
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#8A8480",
                  fontSize: "clamp(11px, 1.2vw, 12px)",
                  fontFamily:
                    "'Space Mono', monospace",
                }}
              >
                20+ happy clients
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Carousel - Continuous scrolling without pause on hover */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "clamp(16px, 2vw, 24px)",
            animation: `scroll ${duplicatedTestimonials.length * 4}s linear infinite`,
            width: "fit-content",
            padding: "20px 0",
          }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              style={{
                minWidth: isMobile ? "85vw" : "clamp(380px, 40vw, 450px)",
                maxWidth: isMobile ? "85vw" : "clamp(380px, 40vw, 450px)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FFF8F5 100%)",
                  border: "2px solid #FF6B2C",
                  borderRadius: "clamp(24px, 3vw, 32px)",
                  padding: "clamp(28px, 4vw, 36px)",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(255,107,44,0.08), 0 0 0 4px rgba(255,107,44,0.02)",
                }}
                className="testimonial-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,107,44,0.15), 0 0 0 8px rgba(255,107,44,0.04)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #FFFFFF 0%, #FFF3EE 100%)";
                  e.currentTarget.style.borderColor = "#FF6B2C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,107,44,0.08), 0 0 0 4px rgba(255,107,44,0.02)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #FFFFFF 0%, #FFF8F5 100%)";
                  e.currentTarget.style.borderColor = "#FF6B2C";
                }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, transparent 50%, rgba(255,107,44,0.06) 50%)",
                    borderRadius: "0 0 0 80px",
                    transition: "all 0.3s ease",
                  }}
                  className="testimonial-corner"
                />

                {/* Quote Icon */}
                <div
                  style={{
                    width: "clamp(40px, 5vw, 48px)",
                    height: "clamp(40px, 5vw, 48px)",
                    borderRadius: "clamp(12px, 1.5vw, 16px)",
                    background: "linear-gradient(135deg, rgba(255,107,44,0.12) 0%, rgba(255,107,44,0.06) 100%)",
                    border: "1.5px solid rgba(255,107,44,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "clamp(20px, 3vw, 24px)",
                    boxShadow: "0 4px 12px rgba(255,107,44,0.08)",
                  }}
                >
                  <Quote
                    size={20}
                    color="#FF6B2C"
                  />
                </div>

                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "clamp(16px, 2vw, 20px)",
                  }}
                >
                  {[...Array(t.stars)].map((_, si) => (
                    <Star
                      key={si}
                      size={16}
                      fill="#FF6B2C"
                      color="#FF6B2C"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(255,107,44,0.3))",
                      }}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p
                  style={{
                    color: "#4A4540",
                    lineHeight: 1.9,
                    fontWeight: 300,
                    fontSize: "clamp(14px, 1.5vw, 15px)",
                    marginBottom: "clamp(28px, 4vw, 36px)",
                    fontStyle: "italic",
                  }}
                >
                  "{t.feedback}"
                </p>

                {/* Bottom */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(12px, 1.5vw, 14px)",
                  }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: "clamp(48px, 6vw, 54px)",
                      height: "clamp(48px, 6vw, 54px)",
                      borderRadius: "clamp(14px, 2vw, 18px)",
                      objectFit: "cover",
                      border: "3px solid #FF6B2C",
                      boxShadow: "0 4px 12px rgba(255,107,44,0.15)",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        color: "#0A0A0A",
                        fontSize: "clamp(14px, 1.5vw, 15px)",
                        marginBottom: "4px",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {t.name}
                    </div>

                    <div
                      style={{
                        color: "#8A8480",
                        fontSize: "clamp(11px, 1.2vw, 12px)",
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
                      padding: "clamp(6px, 1vw, 8px) clamp(12px, 1.5vw, 14px)",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, rgba(255,107,44,0.1) 0%, rgba(255,107,44,0.05) 100%)",
                      border: "1.5px solid rgba(255,107,44,0.2)",
                      color: "#FF6B2C",
                      fontSize: "clamp(10px, 1.2vw, 11px)",
                      fontFamily:
                        "'Space Mono', monospace",
                      whiteSpace: "nowrap",
                      fontWeight: 500,
                      boxShadow: "0 2px 8px rgba(255,107,44,0.08)",
                    }}
                  >
                    {t.project}
                  </span>
                </div>
              </div>
            </div>
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
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .testimonial-card:hover .testimonial-corner {
          background: linear-gradient(135deg, transparent 50%, rgba(255,107,44,0.15) 50%) !important;
        }
        
        @media (max-width: 768px) {
          .testimonial-card {
            border-width: 1.5px !important;
          }
        }
      `}</style>
    </section>
  );
}
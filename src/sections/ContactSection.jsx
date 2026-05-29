import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { fadeUp, stagger } from "../utils/animations";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const budgets = [
    "< $5k",
    "$5k–$15k",
    "$15k–$30k",
    "$30k+",
    "Let's talk",
  ];

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Required";
    }

    if (
      !form.email.trim() ||
      !/\S+@\S+\.\S+/.test(form.email)
    ) {
      e.email = "Valid email required";
    }

    if (!form.message.trim()) {
      e.message = "Required";
    }

    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const e_ = validate();

    if (Object.keys(e_).length) {
      setErrors(e_);
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);

      setForm({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)",
        background: "#F7F5F3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blur */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "clamp(300px, 45vw, 420px)",
          height: "clamp(300px, 45vw, 420px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
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
            textAlign: "center",
            marginBottom: "clamp(48px, 8vw, 72px)",
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
            Get In Touch
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
            Ready to build
            <br />
            <span style={{ color: "#FF6B2C", position: "relative" }}>
              something great?
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

          <motion.p
            variants={fadeUp}
            style={{
              color: "#4A4540",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "620px",
              margin: "clamp(16px, 2vw, 24px) auto 0",
            }}
          >
            Tell us about your project and let's create
            something remarkable together.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            alignItems: "start",
          }}
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {[
              {
                icon: Mail,
                title: "Email",
                val: "nandhakumar200523@gmail.com",
                color: "#FF6B2C",
              },
              {
                icon: Phone,
                title: "Phone",
                val: "+91 8072764231",
                color: "#FF6B2C",
              },
              {
                icon: MapPin,
                title: "Location",
                val: "Chennai, Tambaram",
                color: "#FF6B2C",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(14px, 2vw, 18px)",
                  background: "#FFFFFF",
                  border: "2px solid #FF6B2C",
                  borderRadius: "clamp(20px, 2.5vw, 24px)",
                  padding: "clamp(20px, 2.5vw, 24px)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 16px rgba(255,107,44,0.08), 0 0 0 2px rgba(255,107,44,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,44,0.15), 0 0 0 4px rgba(255,107,44,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,107,44,0.08), 0 0 0 2px rgba(255,107,44,0.03)";
                }}
              >
                <div
                  style={{
                    width: "clamp(44px, 6vw, 52px)",
                    height: "clamp(44px, 6vw, 52px)",
                    borderRadius: "clamp(12px, 1.8vw, 16px)",
                    background: "linear-gradient(135deg, rgba(255,107,44,0.12) 0%, rgba(255,107,44,0.06) 100%)",
                    border: "1.5px solid rgba(255,107,44,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(255,107,44,0.1)",
                  }}
                >
                  <item.icon
                    size={20}
                    color={item.color}
                  />
                </div>

                <div>
                  <p
                    style={{
                      color: "#8A8480",
                      fontSize: "clamp(11px, 1.2vw, 12px)",
                      fontFamily:
                        "'Space Mono', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    style={{
                      color: "#0A0A0A",
                      fontWeight: 600,
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.val}
                  </p>
                </div>
              </div>
            ))}

            {/* Availability Card */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255,107,44,0.05) 0%, rgba(255,107,44,0.02) 100%)",
                borderRadius: "clamp(20px, 2.5vw, 28px)",
                padding: "clamp(24px, 3vw, 28px)",
                color: "#FFFFFF",
                border: "2px solid #FF6B2C",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 24px rgba(255,107,44,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(255,107,44,0.15) 0%, rgba(255,107,44,0.05) 100%)",
                  pointerEvents: "none",
                }}
              />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "clamp(14px, 2vw, 18px)",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#4ADE80",
                      position: "relative",
                      boxShadow: "0 0 12px rgba(74,222,128,0.5)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: "-4px",
                        borderRadius: "50%",
                        background: "#4ADE80",
                        opacity: 0.3,
                        animation:
                          "pulse 1.5s infinite",
                      }}
                    />
                  </span>

                  <span
                    style={{
                      fontSize: "clamp(11px, 1.2vw, 12px)",
                      color: "#0A0A0A",
                      fontFamily:
                        "'Space Mono', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: 600,
                    }}
                  >
                    Currently Available
                  </span>
                </div>

                <p
                  style={{
                    color: "#4A4540",
                    lineHeight: 1.8,
                    fontSize: "clamp(14px, 1.5vw, 15px)",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  We take on 2–3 new clients per month.
                  Our earliest availability is{" "}
                  <span
                    style={{
                      color: "#FF6B2C",
                      fontWeight: 600,
                    }}
                  >
                    June 2026.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            style={{
              background: "#FFFFFF",
              border: "2px solid #FF6B2C",
              borderRadius: "clamp(28px, 3vw, 36px)",
              padding: "clamp(28px, 4vw, 42px)",
              boxShadow:
                "0 4px 20px rgba(255,107,44,0.08), 0 0 0 4px rgba(255,107,44,0.03)",
              transition: "all 0.3s ease",
            }}
          >
            {sent ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                style={{
                  minHeight: "420px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "clamp(60px, 8vw, 72px)",
                    height: "clamp(60px, 8vw, 72px)",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #ECFDF3 0%, #DCFCE7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "clamp(20px, 3vw, 24px)",
                    border: "2px solid #22C55E",
                  }}
                >
                  <CheckCircle2
                    size={30}
                    color="#22C55E"
                  />
                </div>

                <h3
                  style={{
                    fontFamily:
                      "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(28px, 4vw, 36px)",
                    marginBottom: "12px",
                    color: "#0A0A0A",
                  }}
                >
                  Message received!
                </h3>

                <p
                  style={{
                    color: "#8A8480",
                    fontWeight: 300,
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>

                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: "clamp(24px, 3vw, 28px)",
                    background: "linear-gradient(135deg, rgba(255,107,44,0.1) 0%, rgba(255,107,44,0.05) 100%)",
                    border: "2px solid #FF6B2C",
                    color: "#FF6B2C",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "clamp(13px, 1.5vw, 14px)",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FF6B2C";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,107,44,0.1) 0%, rgba(255,107,44,0.05) 100%)";
                    e.currentTarget.style.color = "#FF6B2C";
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(20px, 3vw, 28px)",
                }}
              >
                {/* Name + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                    gap: "clamp(16px, 2vw, 20px)",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "clamp(8px, 1vw, 10px)",
                        fontWeight: 600,
                        fontSize: "clamp(13px, 1.5vw, 14px)",
                        color: "#0A0A0A",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          name: e.target.value,
                        });

                        setErrors({
                          ...errors,
                          name: "",
                        });
                      }}
                      placeholder="Alex Johnson"
                      style={{
                        width: "100%",
                        padding: "clamp(14px, 2vw, 16px)",
                        borderRadius: "clamp(12px, 1.8vw, 16px)",
                        border: errors.name
                          ? "2px solid #EF4444"
                          : "2px solid #FF6B2C",
                        background: errors.name
                          ? "#FEF2F2"
                          : "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
                        fontSize: "clamp(14px, 1.5vw, 15px)",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "all 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#FF6B2C";
                        e.target.style.boxShadow = "0 0 0 3px rgba(255,107,44,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = "none";
                      }}
                    />

                    {errors.name && (
                      <p
                        style={{
                          color: "#EF4444",
                          fontSize: "12px",
                          marginTop: "8px",
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "clamp(8px, 1vw, 10px)",
                        fontWeight: 600,
                        fontSize: "clamp(13px, 1.5vw, 14px)",
                        color: "#0A0A0A",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          email: e.target.value,
                        });

                        setErrors({
                          ...errors,
                          email: "",
                        });
                      }}
                      placeholder="alex@company.com"
                      style={{
                        width: "100%",
                        padding: "clamp(14px, 2vw, 16px)",
                        borderRadius: "clamp(12px, 1.8vw, 16px)",
                        border: errors.email
                          ? "2px solid #EF4444"
                          : "2px solid #FF6B2C",
                        background: errors.email
                          ? "#FEF2F2"
                          : "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
                        fontSize: "clamp(14px, 1.5vw, 15px)",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "all 0.3s ease",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#FF6B2C";
                        e.target.style.boxShadow = "0 0 0 3px rgba(255,107,44,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = "none";
                      }}
                    />

                    {errors.email && (
                      <p
                        style={{
                          color: "#EF4444",
                          fontSize: "12px",
                          marginTop: "8px",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "clamp(10px, 1.5vw, 12px)",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 1.5vw, 14px)",
                      color: "#0A0A0A",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Project Budget
                  </label>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "clamp(8px, 1vw, 10px)",
                    }}
                  >
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() =>
                          setForm({
                            ...form,
                            budget: b,
                          })
                        }
                        style={{
                          padding: "clamp(10px, 1.5vw, 12px) clamp(14px, 2vw, 18px)",
                          borderRadius: "clamp(10px, 1.5vw, 14px)",
                          border:
                            form.budget === b
                              ? "2px solid #FF6B2C"
                              : "2px solid #FF6B2C",
                          background:
                            form.budget === b
                              ? "#FF6B2C"
                              : "transparent",
                          color:
                            form.budget === b
                              ? "#FFFFFF"
                              : "#FF6B2C",
                          fontWeight: 500,
                          fontSize: "clamp(12px, 1.3vw, 13px)",
                          cursor: "pointer",
                          transition:
                            "all 0.3s ease",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          if (form.budget !== b) {
                            e.currentTarget.style.background = "rgba(255,107,44,0.1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (form.budget !== b) {
                            e.currentTarget.style.background = "transparent";
                          }
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "clamp(8px, 1vw, 10px)",
                      fontWeight: 600,
                      fontSize: "clamp(13px, 1.5vw, 14px)",
                      color: "#0A0A0A",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        message: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        message: "",
                      });
                    }}
                    placeholder="Tell us about your project, timeline, and goals..."
                    style={{
                      width: "100%",
                      padding: "clamp(16px, 2vw, 18px)",
                      borderRadius: "clamp(14px, 2vw, 18px)",
                      border: errors.message
                        ? "2px solid #EF4444"
                        : "2px solid #FF6B2C",
                      background: errors.message
                        ? "#FEF2F2"
                        : "linear-gradient(135deg, #FFF7F2 0%, #FFF0E8 100%)",
                      fontSize: "clamp(14px, 1.5vw, 15px)",
                      resize: "none",
                      outline: "none",
                      lineHeight: 1.7,
                      boxSizing: "border-box",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#FF6B2C";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255,107,44,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "none";
                    }}
                  />

                  {errors.message && (
                    <p
                      style={{
                        color: "#EF4444",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: "100%",
                    background: "#FF6B2C",
                    color: "#FFFFFF",
                    border: "2px solid #FF6B2C",
                    borderRadius: "clamp(14px, 2vw, 18px)",
                    padding: "clamp(16px, 2vw, 18px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "clamp(14px, 1.5vw, 15px)",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    opacity: sending ? 0.7 : 1,
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 4px 16px rgba(255,107,44,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = "#E5520E";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,44,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = "#FF6B2C";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,107,44,0.2)";
                    }
                  }}
                >
                  {sending ? (
                    <>
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          border:
                            "2px solid rgba(255,255,255,0.4)",
                          borderTop:
                            "2px solid #FFFFFF",
                          borderRadius: "50%",
                          animation:
                            "spin 0.8s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
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
            opacity: 0.3;
            transform: scale(1.8);
          }
        }
        
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
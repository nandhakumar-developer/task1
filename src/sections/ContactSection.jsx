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
        padding: "120px 24px",
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
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#FFF0E8",
          filter: "blur(120px)",
          opacity: 0.8,
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
            marginBottom: "72px",
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
              marginBottom: "18px",
            }}
          >
            — Get In Touch
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily:
                "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
              lineHeight: 1,
              color: "#0A0A0A",
              margin: 0,
            }}
          >
            Ready to build
            <br />
            <span style={{ color: "#FF6B2C" }}>
              something great?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              color: "#4A4540",
              fontSize: "18px",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "620px",
              margin: "24px auto 0",
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
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
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
              gap: "24px",
            }}
          >
            {[
              {
                icon: Mail,
                title: "Email",
                val: "hello@nexora.studio",
                color: "#FF6B2C",
              },
              {
                icon: Phone,
                title: "Phone",
                val: "+1 (555) 123-4567",
                color: "#1A1A1A",
              },
              {
                icon: MapPin,
                title: "Location",
                val: "San Francisco, CA",
                color: "#FF6B2C",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                  background: "#FFFFFF",
                  border: "1px solid #EAE6E1",
                  borderRadius: "24px",
                  padding: "24px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon
                    size={22}
                    color={item.color}
                  />
                </div>

                <div>
                  <p
                    style={{
                      color: "#8A8480",
                      fontSize: "12px",
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
                      fontSize: "16px",
                      margin: 0,
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
                background: "#111111",
                borderRadius: "28px",
                padding: "28px",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4ADE80",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "#4ADE80",
                      opacity: 0.5,
                      animation:
                        "pulse 1.5s infinite",
                    }}
                  />
                </span>

                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.6)",
                    fontFamily:
                      "'Space Mono', monospace",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Currently Available
                </span>
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                  fontSize: "15px",
                  fontWeight: 300,
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
              border: "1px solid #EAE6E1",
              borderRadius: "36px",
              padding: "42px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.04)",
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
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "#ECFDF3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <CheckCircle2
                    size={34}
                    color="#22C55E"
                  />
                </div>

                <h3
                  style={{
                    fontFamily:
                      "'DM Serif Display', Georgia, serif",
                    fontSize: "36px",
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
                    fontSize: "16px",
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>

                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: "28px",
                    background: "none",
                    border: "none",
                    color: "#FF6B2C",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "14px",
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
                  gap: "28px",
                }}
              >
                {/* Name + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#0A0A0A",
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
                        padding: "16px",
                        borderRadius: "16px",
                        border: errors.name
                          ? "2px solid #EF4444"
                          : "2px solid transparent",
                        background: errors.name
                          ? "#FEF2F2"
                          : "#F7F5F3",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
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
                        marginBottom: "10px",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#0A0A0A",
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
                        padding: "16px",
                        borderRadius: "16px",
                        border: errors.email
                          ? "2px solid #EF4444"
                          : "2px solid transparent",
                        background: errors.email
                          ? "#FEF2F2"
                          : "#F7F5F3",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
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
                      marginBottom: "12px",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#0A0A0A",
                    }}
                  >
                    Project Budget
                  </label>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
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
                          padding: "12px 18px",
                          borderRadius: "14px",
                          border:
                            form.budget === b
                              ? "2px solid #FF6B2C"
                              : "2px solid #EAE6E1",
                          background:
                            form.budget === b
                              ? "#FF6B2C"
                              : "#F7F5F3",
                          color:
                            form.budget === b
                              ? "#FFFFFF"
                              : "#4A4540",
                          fontWeight: 500,
                          fontSize: "13px",
                          cursor: "pointer",
                          transition:
                            "all 0.3s ease",
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
                      marginBottom: "10px",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#0A0A0A",
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
                      padding: "18px",
                      borderRadius: "18px",
                      border: errors.message
                        ? "2px solid #EF4444"
                        : "2px solid transparent",
                      background: errors.message
                        ? "#FEF2F2"
                        : "#F7F5F3",
                      fontSize: "15px",
                      resize: "none",
                      outline: "none",
                      lineHeight: 1.7,
                      boxSizing: "border-box",
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
                    border: "none",
                    borderRadius: "18px",
                    padding: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    opacity: sending ? 0.7 : 1,
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
    </section>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const budgets = ["< $5k", "$5k–$15k", "$15k–$30k", "$30k+", "Let's talk"];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e_ = validate();
    if (Object.keys(e_).length) { setErrors(e_); return; }
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setForm({ name: "", email: "", budget: "", message: "" }); }, 1500);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-10 bg-[var(--mist)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--orange-pale)] blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-[var(--orange)] font-mono text-sm tracking-widest uppercase mb-4"
            variants={fadeUp}
          >
            — Get In Touch
          </motion.span>
          <motion.h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--black)]"
            style={{ fontFamily: "var(--font-display)" }}
            variants={fadeUp}
          >
            Ready to build
            <br />
            <em className="text-[var(--orange)] not-italic">something great?</em>
          </motion.h2>
          <motion.p
            className="text-[var(--text-body)] text-lg max-w-lg mx-auto mt-4 font-light"
            variants={fadeUp}
          >
            Tell us about your project and let's create something remarkable together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left panel */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Info cards */}
            {[
              { icon: Mail, title: "Email", val: "hello@nexora.studio", color: "var(--orange)" },
              { icon: Phone, title: "Phone", val: "+1 (555) 123-4567", color: "var(--charcoal)" },
              { icon: MapPin, title: "Location", val: "San Francisco, CA", color: "var(--orange)" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[var(--border)] hover:border-[var(--orange)]/30 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-[12px] font-mono uppercase tracking-wider mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-[var(--black)] font-medium">{item.val}</p>
                </div>
              </div>
            ))}

            {/* Availability chip */}
            <div className="bg-[var(--charcoal)] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 relative">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                </span>
                <span className="text-[12px] font-mono uppercase tracking-wider text-white/60">
                  Currently Available
                </span>
              </div>
              <p className="text-[14px] text-white/70 leading-relaxed font-light">
                We take on 2–3 new clients per month. Our earliest availability is{" "}
                <span className="text-[var(--orange)] font-semibold">June 2026.</span>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 border border-[var(--border)] shadow-sm"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-72 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3
                  className="text-2xl text-[var(--black)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message received!
                </h3>
                <p className="text-[var(--text-muted)] font-light">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-[var(--orange)] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[var(--black)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      placeholder="Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-[15px] bg-[var(--mist)] focus:bg-white focus:outline-none transition-all ${errors.name ? "border-red-400 bg-red-50" : "border-transparent focus:border-[var(--orange)]"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[var(--black)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-[15px] bg-[var(--mist)] focus:bg-white focus:outline-none transition-all ${errors.email ? "border-red-400 bg-red-50" : "border-transparent focus:border-[var(--orange)]"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="block text-[13px] font-semibold text-[var(--black)] mb-2">
                    Project Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-4 py-2 rounded-xl text-[13px] font-medium border-2 transition-all ${
                          form.budget === b
                            ? "border-[var(--orange)] bg-[var(--orange)] text-white"
                            : "border-[var(--border)] bg-[var(--mist)] text-[var(--text-body)] hover:border-[var(--orange)] hover:text-[var(--orange)]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[var(--black)] mb-2">
                    Project Details
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className={`w-full px-4 py-3 rounded-xl border-2 text-[15px] resize-none bg-[var(--mist)] focus:bg-white focus:outline-none transition-all ${errors.message ? "border-red-400 bg-red-50" : "border-transparent focus:border-[var(--orange)]"}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 bg-[var(--orange)] hover:bg-[var(--orange-dark)] text-white py-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 disabled:opacity-70 group"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { staggerContainer, fadeUpVariants } from "../utils/animations";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-primary font-semibold uppercase tracking-wider mb-4"
            variants={fadeUpVariants}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
            variants={fadeUpVariants}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-xl text-gray-text max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, title: "Email", value: "hello@nexora.studio" },
              { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Location", value: "San Francisco, CA" },
            ].map((item, i) => (
              <motion.div key={i} className="flex gap-4" variants={fadeUpVariants}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-1">{item.title}</h3>
                  <p className="text-gray-text">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                    errors.name
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 bg-white hover:border-primary focus:border-primary"
                  } focus:outline-none`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 bg-white hover:border-primary focus:border-primary"
                  } focus:outline-none`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 bg-white hover:border-primary focus:border-primary"
                  } focus:outline-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { Palette, Code, Sparkles, TrendingUp } from "lucide-react";
import { staggerContainer, fadeUpVariants } from "../utils/animations";

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with your users in mind. We create delightful digital experiences.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, scalable web applications built with latest technologies. Fast, secure, and fully responsive.",
    },
    {
      icon: Sparkles,
      title: "Branding",
      description: "Complete brand identity solutions. From logos to guidelines, we create memorable brand experiences.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your business online. SEO, social media, and content marketing.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
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
            Our Services
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
            variants={fadeUpVariants}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="text-xl text-gray-text max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            Comprehensive digital solutions tailored to elevate your brand and achieve your business goals.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUpVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

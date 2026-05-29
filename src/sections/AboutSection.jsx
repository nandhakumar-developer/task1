import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariants } from "../utils/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              className="text-primary font-semibold uppercase tracking-wider"
              variants={fadeUpVariants}
            >
              About Us
            </motion.p>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-dark-text"
              variants={fadeUpVariants}
            >
              Creative Agency for Modern Brands
            </motion.h2>

            <motion.p
              className="text-xl text-gray-text leading-relaxed"
              variants={fadeUpVariants}
            >
              We're a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences. With over 5 years of experience, we've helped 20+ clients transform their visions into reality.
            </motion.p>

            <motion.p
              className="text-lg text-gray-text leading-relaxed"
              variants={fadeUpVariants}
            >
              Our approach combines creativity, strategy, and technology to deliver results that matter. We believe in building long-term partnerships with our clients.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "20+", label: "Happy Clients" },
              { number: "5", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary hover:shadow-lg transition-all"
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-text font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

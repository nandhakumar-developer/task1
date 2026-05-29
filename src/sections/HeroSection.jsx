import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeUpVariants, staggerContainer, slideInRightVariants } from "../utils/animations";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-violet-300 to-violet-200 rounded-full blur-3xl opacity-20 animate-float"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-dark-text leading-tight"
              variants={fadeUpVariants}
            >
              We Build Modern <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Digital Experiences</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-text leading-relaxed max-w-lg"
              variants={fadeUpVariants}
            >
              Creative agency focused on beautiful websites, branding, and scalable digital products for innovative businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUpVariants}
            >
              <Button size="lg">View Work</Button>
              <Button variant="secondary" size="lg">Get Started</Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "20+", label: "Clients" },
                { number: "5", label: "Years" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUpVariants}>
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-text">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="relative h-96 hidden md:block"
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-violet-400 to-pink-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl shadow-2xl opacity-10"></div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute top-10 right-10 w-24 h-24 bg-white rounded-2xl shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-32 h-32 border-4 border-primary rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-16 h-16 bg-violet-300 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";
import { staggerContainer, fadeUpVariants } from "../utils/animations";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      feedback: "Nexora Studio transformed our vision into reality. Their attention to detail and innovative approach was exceptional. Highly recommended!",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce",
      feedback: "Working with Nexora was a game-changer. They delivered our project on time and exceeded all expectations. Fantastic team!",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      feedback: "The design quality is outstanding. They understood our brand perfectly and created something truly spectacular. Worth every penny!",
      avatar: "ER",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            Client Stories
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
            variants={fadeUpVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-text max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            Real feedback from real clients. See how we've helped businesses grow.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeUpVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { staggerContainer, fadeUpVariants } from "../utils/animations";

export default function PortfolioSection() {
  const projects = [
    { title: "SaaS Dashboard", category: "Development", image: "/projects/saas.jpg" },
    { title: "Ecommerce Website", category: "Design", image: "/projects/ecommerce.jpg" },
    { title: "Restaurant Landing", category: "Design & Dev", image: "/projects/restaurant.jpg" },
    { title: "Finance App", category: "Development", image: "/projects/finance.jpg" },
    { title: "Travel Website", category: "Design", image: "/projects/travel.jpg" },
    { title: "Creative Portfolio", category: "UI/UX", image: "/projects/portfolio.jpg" },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Our Work
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
            variants={fadeUpVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-text max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            Showcase of our latest and greatest projects. Each one carefully crafted to perfection.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUpVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ title, category, image }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-500"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full h-full bg-slate-300 opacity-50"></div>
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-dark-text/80 via-dark-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            {category}
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        </motion.div>
        <motion.div
          className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-0 transition-all"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-medium">View Project</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

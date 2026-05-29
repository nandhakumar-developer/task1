import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-light-gray border border-slate-100 hover:border-primary hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
        whileHover={{ rotate: 10 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-xl font-bold text-dark-text mb-3">{title}</h3>
      <p className="text-gray-text leading-relaxed">{description}</p>
    </motion.div>
  );
}

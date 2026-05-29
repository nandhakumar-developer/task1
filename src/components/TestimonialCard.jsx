import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, role, feedback, avatar }) {
  return (
    <motion.div
      className="p-8 rounded-2xl bg-light-gray border border-slate-100 hover:border-primary hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Feedback */}
      <p className="text-gray-text mb-6 leading-relaxed italic">"{feedback}"</p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-dark-text">{name}</h4>
          <p className="text-sm text-gray-text">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

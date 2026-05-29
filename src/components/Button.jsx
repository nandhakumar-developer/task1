import { motion } from "framer-motion";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "",
  ...props 
}) {
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-lg hover:shadow-blue-500/50",
    secondary: "bg-light-gray text-dark-text border-2 border-slate-200 hover:border-primary hover:bg-blue-50",
    outline: "border-2 border-primary text-primary hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        rounded-lg font-semibold transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}

"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
  },
};

export default function HeroAnimation({ children }) {
  // This targets the inner wrapper items directly
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {/* Target the children within the first div level */}
      {children.props.children.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
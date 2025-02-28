import { JSX, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  className?: string;
}

export const Reveal = ({ children, width = "fit-content", className }: Props) => {
  const ref = useRef(null);

  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform properties based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [20, 0, 0, -20]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden"
      }}
      className={`rounded-md ${className}`}
    >
      <motion.div
        style={{
          opacity,
          scale,
          y,
          transition: `all ${0.3}s ease-in-out`
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
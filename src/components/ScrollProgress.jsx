import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-cyan-500 origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

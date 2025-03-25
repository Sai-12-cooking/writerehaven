import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-purple-900">
      <motion.div
        style={{ y, opacity, scale }}
        className="text-center px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWN4ZWdxbWt0ZnJyM2Zwd3k2ZXd6ZnJxaWx6ZXJyMmxqbXJyeWx6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0HlQXlQ3nHyLMvte/source.gif"
            alt="Design Process"
            className="w-48 h-48 mx-auto rounded-lg shadow-2xl"
          />
        </motion.div>
        <motion.h2 
          className="text-7xl md:text-8xl font-bold text-white mb-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          DESIGN
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where imagination meets innovation
        </motion.p>
      </motion.div>
      
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2])
        }}
      />
    </div>
  );
}
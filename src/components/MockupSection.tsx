import { motion } from 'framer-motion';

export default function MockupSection({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="relative text-center px-4 max-w-7xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={image}
          alt="Mockup"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
import { motion } from 'framer-motion';

export default function GeometricElements() {
  return (
    <>
      {/* Circle */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full"
        animate={{
          y: [0, 20, 0], // Moves up and down
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Rotating Square */}
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-pink-500 rounded-lg"
        animate={{
          rotate: [0, 360], // Rotates 360 degrees
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Scaling Triangle */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} // Triangle shape
        animate={{
          scale: [1, 1.2, 1], // Scales up and down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
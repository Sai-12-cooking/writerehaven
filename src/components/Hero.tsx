import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, ShoppingBag } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-heading',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-subheading',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop')",
          y: backgroundY,
        }}
      />

      {/* Geometric Elements */}
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

      {/* Foreground Content */}
      <div ref={ref} className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <BookOpen size={80} className="mx-auto text-purple-500 mb-6" />
        </motion.div>

        {/* Artistic Large Text with Opacity Animation */}
        <motion.h1
          className="hero-heading text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Writers Haven
        </motion.h1>

        {/* Subheading with Opacity Animation */}
        <motion.p
          className="hero-subheading text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A community where writers thrive, stories come alive, and books find their readers.
        </motion.p>

        {/* Animated Call-to-Action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#community"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            Join the Community
          </a>
        </motion.div>

        {/* Animated Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Card 1: Join Community */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Users className="mx-auto text-purple-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-gray-400">Connect with fellow writers and readers</p>
          </motion.div>

          {/* Card 2: Share Stories */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BookOpen className="mx-auto text-pink-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Share Stories</h3>
            <p className="text-gray-400">Showcase your work and get feedback</p>
          </motion.div>

          {/* Card 3: Sell Books */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ShoppingBag className="mx-auto text-red-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Sell Books</h3>
            <p className="text-gray-400">Reach readers directly through our marketplace</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Text Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[15rem] md:text-[20rem] font-extrabold text-white opacity-5">
          WRITE
        </h1>
      </motion.div>
    </div>
  );
}
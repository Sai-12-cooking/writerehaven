import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Heart } from 'lucide-react';
import GeometricElements from './GeometricElements';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <BookOpen size={40} />,
      title: "Storytelling",
      description: "We believe in the power of stories to connect, inspire, and transform"
    },
    {
      icon: <Users size={40} />,
      title: "Community",
      description: "Supporting writers through every step of their creative journey"
    },
    {
      icon: <Heart size={40} />,
      title: "Passion",
      description: "Dedicated to helping writers share their stories with the world"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-black py-20 px-4">
      <GeometricElements />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Writers Haven Community
            </h3>
            <p className="text-xl text-gray-300">
              Writers Haven is more than just a platform—it's a thriving community where writers come together to create, share, and grow. We provide the tools and support needed to bring your stories to life.
            </p>
            <p className="text-xl text-gray-300">
              Founded by writers for writers, we understand the journey of crafting stories and the importance of having a supportive community along the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-purple-500 mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
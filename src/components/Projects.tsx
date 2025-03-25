import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const projects = [
  {
    title: "Digital Art",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=3000&auto=format&fit=crop",
    description: "Exploring the boundaries of digital creativity",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWM0MWJyZXBxbmJyNXd6ZnJxaWx6ZXJyMmxqbXJyeWx6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0HlQXlQ3nHyLMvte/source.gif"
  },
  {
    title: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3272&auto=format&fit=crop",
    description: "Creating immersive web experiences",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG96Y2JrY3BxYnhvNXdxNHZ5bGx6Ym9wbW1wZ2E2OWQ2aHd6YjB6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o7ZeQBYbVW8qaTk0E/source.gif"
  },
  {
    title: "Typography",
    image: "https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?q=80&w=3273&auto=format&fit=crop",
    description: "Crafting stories through letters",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWN4ZWdxbWt0ZnJyM2Zwd3k2ZXd6ZnJxaWx6ZXJyMmxqbXJyeWx6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0HlQXlQ3nHyLMvte/source.gif"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-black text-white py-20 px-4">
      <motion.h2 
        className="text-5xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        PROJECTS
      </motion.h2>
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

function ProjectCard({ title, image, description, gif, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="aspect-w-16 aspect-h-9 overflow-hidden"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={isHovered ? gif : image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6"
        animate={{ 
          backgroundColor: isHovered ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.6)",
          y: isHovered ? 0 : 10
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-2xl font-bold mb-2"
          animate={{ y: isHovered ? 0 : 10 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-300"
          animate={{ 
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0.8
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
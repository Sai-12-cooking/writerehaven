import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageCircle, BookOpen, Trophy } from 'lucide-react';
import { useState } from 'react';

const discussions = [
  {
    title: "Writing Effective Dialogue",
    author: "Emma Thompson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    replies: 45,
    views: 1203
  },
  {
    title: "World Building Tips",
    author: "James Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    replies: 32,
    views: 876
  },
  {
    title: "Character Development",
    author: "Maria Garcia",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    replies: 67,
    views: 1567
  }
];

export default function WritersCommunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Users size={40} />, value: "10K+", label: "Active Writers" },
    { icon: <MessageCircle size={40} />, value: "50K+", label: "Discussions" },
    { icon: <BookOpen size={40} />, value: "100K+", label: "Published Works" },
    { icon: <Trophy size={40} />, value: "1K+", label: "Writing Awards" }
  ];

  return (
    <section className="bg-gradient-to-b from-purple-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WRITERS COMMUNITY
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-purple-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div ref={ref} className="space-y-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Active Discussions</h3>
          {discussions.map((discussion, index) => (
            <DiscussionCard key={index} discussion={discussion} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscussionCard({ discussion, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-colors"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4">
        <img
          src={discussion.avatar}
          alt={discussion.author}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="text-xl font-semibold">{discussion.title}</h4>
          <p className="text-gray-400">by {discussion.author}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <MessageCircle size={20} className="text-purple-500" />
          <span className="text-gray-400">{discussion.replies} replies</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users size={20} className="text-purple-500" />
          <span className="text-gray-400">{discussion.views} views</span>
        </div>
      </div>
    </motion.div>
  );
}
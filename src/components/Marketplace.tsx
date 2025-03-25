import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Star, DollarSign, BookOpen } from 'lucide-react';
import { useState } from 'react';

const books = [
  {
    title: "The Art of Storytelling",
    author: "David Williams",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2000&auto=format&fit=crop",
    price: 24.99,
    rating: 4.8,
    sales: 1250
  },
  {
    title: "Poetry in Motion",
    author: "Lisa Chen",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000&auto=format&fit=crop",
    price: 19.99,
    rating: 4.6,
    sales: 890
  },
  {
    title: "Digital Age Writing",
    author: "Mark Johnson",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000&auto=format&fit=crop",
    price: 29.99,
    rating: 4.9,
    sales: 2100
  },
  {
    title: "Modern Literature",
    author: "Sarah Smith",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2000&auto=format&fit=crop",
    price: 22.99,
    rating: 4.7,
    sales: 1560
  }
];

export default function Marketplace() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gradient-to-b from-black to-purple-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MARKETPLACE
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <BookCard key={index} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({ book, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative aspect-[3/4]"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
          <p className="text-gray-300">{book.author}</p>
        </div>
      </motion.div>
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-500" size={20} />
            <span className="text-white">{book.rating}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="text-purple-500" size={20} />
            <span className="text-white">{book.sales}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">${book.price}</div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>Buy</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
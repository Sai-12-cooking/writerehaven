import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { useState } from 'react';

const featuredBooks = [
  {
    title: "The Midnight Library",
    author: "Sarah Johnson",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000&auto=format&fit=crop",
    description: "A thrilling journey through time and possibilities",
    rating: 4.8,
    likes: 2453,
  },
  {
    title: "Echoes of Dawn",
    author: "Michael Chen",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000&auto=format&fit=crop",
    description: "A poetic exploration of human consciousness",
    rating: 4.6,
    likes: 1897,
  },
  {
    title: "The Last Horizon",
    author: "Emily Roberts",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2000&auto=format&fit=crop",
    description: "Science fiction meets philosophical inquiry",
    rating: 4.9,
    likes: 3102,
  },
];

export default function FeaturedBooks() {
  return (
    <section className="bg-gradient-to-b from-black to-purple-900 py-5 px-3">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="display-4 text-white">Featured Books</h2>
        <p className="text-muted">
          Explore our curated collection of the best books from our community.
        </p>
      </div>

      {/* Book Cards */}
      <div className="container">
        <div className="row g-4">
          {featuredBooks.map((book, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <BookCard book={book} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({ book, index }) {
  return (
    <div className="card bg-dark text-white h-100 shadow-lg">
      <img
        src={book.cover}
        className="card-img-top"
        alt={`Cover of ${book.title}`}
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <span className="text-warning">
          <i className="bi bi-star-fill"></i> {book.rating}
        </span>
        <span className="text-danger">
          <i className="bi bi-heart-fill"></i> {book.likes}
        </span>
      </div>
    </div>
  );
}
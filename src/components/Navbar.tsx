import React, { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = {
    Fiction: [
      'Fantasy',
      'Science Fiction',
      'Mystery & Thriller',
      'Romance',
      'Historical Fiction',
      'Horror',
      'Adventure',
    ],
    'Non-Fiction': [
      'Biography & Memoir',
      'Self-Help & Personal Development',
      'Business & Finance',
      'Psychology',
      'Science & Technology',
      'History',
      'Travel',
    ],
    'Academic & Educational': [
      'Mathematics',
      'Philosophy',
      'Political Science',
      'Medical & Health',
      'Engineering',
      'Law',
    ],
    'Children & Young Adult': [
      'Picture Books',
      'Middle Grade',
      'Young Adult Fiction',
      'Fairy Tales & Fables',
    ],
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Add your search logic here
  };

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Writers Haven</h1>
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSearch}
              className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Search
            </button>
          </div>

          {/* Category Button */}
          <div className="relative">
            <button
              className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Categories
            </button>
            <div
              className={`transition-all duration-300 ${
                isDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden bg-white text-black rounded-lg shadow-lg w-64 mt-2`}
            >
              <ul className="py-2">
                {Object.entries(categories).map(([categoryGroup, subcategories], index) => (
                  <li key={index} className="px-4 py-2">
                    <span className="font-bold text-gray-700">{categoryGroup}</span>
                    <ul className="pl-4 mt-2">
                      {subcategories.map((subcategory, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 text-gray-600 hover:text-black hover:bg-gray-200 cursor-pointer rounded"
                        >
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Login Button */}
          <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
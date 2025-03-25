import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import WritersCommunity from './components/WritersCommunity';
import Marketplace from './components/Marketplace';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-gradient-to-b from-slate-900 to-black">
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <WritersCommunity />
      <Marketplace />
      <About />
      <Contact />
    </main>
  );
}

export default App;
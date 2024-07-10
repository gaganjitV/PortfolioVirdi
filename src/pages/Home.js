// src/pages/Home.js
import React from 'react';
import Projects from '../components/Projects';
import About from '../components/About';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section id="home">
        <h2>Welcome to My Portfolio</h2>
      </section>
      <About />
      <Projects />
    </div>
  );
};

export default Home;

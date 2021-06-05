import React from 'react';
import './style.css';
import capy from '../assets/capy.jpg';

const Clanek = () => {
  return (
    <>
      <div className="blog__clanek">
        <img height={200} src={capy} alt="Capy" />
        <h3>Název článku</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          iste nam. Odit, quas enim velit laboriosam nemo sit amet non ut minus
          iste maiores quasi facere explicabo? Perspiciatis, reprehenderit in.
        </p>
      </div>
    </>
  );
};

export const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <main className="main__blog">
        {/* Tohle je jeden článek */}
        <Clanek />
        <Clanek />
        <Clanek />
      </main>
    </>
  );
};

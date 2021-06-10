import React from 'react';
import './style.css';

export const Article = () => {
  return (
    <>
      <div className="blog__clanek">
        <img height={200} src="../assets/capy.jpg" alt="Capy" />
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

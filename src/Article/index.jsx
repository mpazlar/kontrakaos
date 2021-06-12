import React from 'react';
import './style.css';

export const Article = ({ id, title, perex, content, photo }) => {
  return (
    <>
      <div className="blog__clanek">
        <img height={200} src="../assets/capy.jpg" alt="Capy" />
        <h3>{title}</h3>
        <div className="article__perex">{perex}</div>
        <div className="text">
          {content}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            iste nam. Odit, quas enim velit laboriosam nemo sit amet non ut
            minus iste maiores quasi facere explicabo? Perspiciatis,
            reprehenderit in.
          </p>
        </div>
      </div>
    </>
  );
};

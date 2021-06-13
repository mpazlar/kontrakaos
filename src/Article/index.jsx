import React from 'react';
import './style.css';

export const Article = ({ id, title, perex, photo, alt }) => {
  return (
    <>
      <div className={`blog__clanek articleId${id}`}>
        <img src={photo} alt={alt} />
        <h3>{title}</h3>
        <div className="article__perex">{perex}</div>
      </div>
    </>
  );
};

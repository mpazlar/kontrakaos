import React from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';

export const Article = ({ id, title, perex, photo, alt }) => {
  return (
    <>
      <div className={`blog__clanek articleId${id}`}>
        <img src={photo} alt={alt} />
        <Link to={`/blog/${id}`}>
          <h3 className = 'article__title'>{title}</h3>
        </Link>
        <div className="article__perex">{perex}</div>
      </div>
    </>
  );
};

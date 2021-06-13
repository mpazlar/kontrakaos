import React, { useState, useEffect } from 'react';
import './style.css';

export const ArticleDetail = ({ id, title, perex, content, photo, alt }) => {
  return (
    <>
      <div className={`detail__clanek${id}`}>
        <img height={200} src={photo} alt={alt} />
        <h3>{title}</h3>
        <div className="detail__perex">{perex}</div>
        <div className="detail__content">{content}</div>
      </div>
    </>
  );
};

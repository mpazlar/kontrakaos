import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

export const ArticleDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className={`detail__clanek`}>
        <img height={200} src={photo} alt={alt} />
        <h3>{title}</h3>
        <div className="detail__perex">{perex}</div>
        <div className="detail__content">{content}</div>
      </div>
    </>
  );
};

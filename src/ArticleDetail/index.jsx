import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './style.css';

export const ArticleDetail = () => {
  const { id } = useParams();

  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.develop-sr3snxi-mvvau5npwquee.de-2.platformsh.site/blogs/${id}`,
    )
      .then((response) => response.json())
      .then((json) => setArticle(json));
  }, []);

  console.log(id);
  return (
    <>
      <div className={`detail__article`}>
        <img
          height={200}
          src={article.image?.formats?.medium?.url}
          alt={article.alt}
        />
        <h2 className="detail__title">{article.title}</h2>
        <div className="detail__perex">{article.perex}</div>
        <div className="detail__content">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import './style.css';
import { Article } from '../Article';

export const ListOfArticles = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      'https://www.develop-sr3snxi-mvvau5npwquee.de-2.platformsh.site/blogs',
    )
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  return (
    <>
      <main className="main__blog">
        {list.map((object) => (
          <Article
            key={object.id}
            id={object.id}
            title={object.title}
            perex={object.perex}
            photo={object.image?.formats?.medium?.url}
            alt={object.alternativeText}
          />
        ))}
      </main>
    </>
  );
};

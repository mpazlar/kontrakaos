import React, { useState, useEffect } from 'react';
import './style.css';
import { Article } from '../Article';

export const ListOfArticles = () => {
  const [list, setList] = useState('');

  useEffect(() => {
    fetch(
      'https://www.develop-sr3snxi-mvvau5npwquee.de-2.platformsh.site/blogs',
    )
      .then((response) => response.json())
      .then((json) => console.log(json.id));
  }, []);

  {
    /*
  let result = '';
  for (let i = 0; i < list.length; i++) {
    result += Article(list[i]);
  }*/
  }

  return (
    <>
      <main className="main__blog"></main>
    </>
  );
};

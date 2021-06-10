import React from 'react';
import './style.css';
import { Article } from '../Article';

export const ListOfArticles = () => {
  return (
    <>
      <main className="main__blog">
        {/* Tohle je jeden článek */}
        <Article />
        <Article />
        <Article />
      </main>
    </>
  );
};

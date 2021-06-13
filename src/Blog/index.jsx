import React from 'react';
import './style.css';
import { ListOfArticles } from '../ListOfArticles';
import { Article } from '../Article';

export const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <ListOfArticles />
    </>
  );
};

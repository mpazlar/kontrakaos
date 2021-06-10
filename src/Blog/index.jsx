import React from 'react';
import './style.css';
import capy from '../assets/capy.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ListOfArticles } from '../ListOfArticles';
import { Article } from '../Article';

export const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <Router>
        <Link to="/">
          {' '}
          {/*je tohle dobře??*/}
          <ListOfArticles />
        </Link>
        <Link to="/article">
          <Article /> {/*zakomponovat Article, na který se klikne*/}
        </Link>

        <Switch>
          <Route path="/article"></Route>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </>
  );
};

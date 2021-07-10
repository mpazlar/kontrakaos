import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Aplikace } from './Aplikace';
import { Home } from './Home';
import { About } from './About';
import { Blog } from './Blog';
import { ArticleDetail } from './ArticleDetail';

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <div className="logo">
            <Link to="/" className="nav__home">
              {' '}
              <img className="logo__img" src="./assets/umyval.png" alt="" />
            </Link>
          </div>
          <div className="nav__links">
            <Link to="/kontrakaos" className="nav__app">
              Aplikace
            </Link>

            <Link to="/blog" className="nav__blog">
              Blog
            </Link>

            <Link to="/about" className="nav__about">
              O nás
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/kontrakaos">
              <Aplikace />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/blog/:id">
              <ArticleDetail />
            </Route>
          </Switch>
        </main>
        <footer>
          <div>Vytvořeno v rámci Czechitas DA©</div>
          <div>
            <a target="_blank" href="mailto:m.pazlarova@gmail.com">
              Napište nám
            </a>
          </div>
          <div className="icons__social">
            <a target="_blank" href="https://www.facebook.com/KontraKaos">
              <img height={20} src="./assets/fb.svg" alt="Facebook" />
            </a>
            <a target="_blank" href="https://www.instagram.com/m.pazlar/">
              <img height={20} src="./assets/ig.svg" alt="Instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCtK3lKupYOpFya4_QskBQFg"
            >
              <img height={20} src="./assets/yt.svg" alt="Youtube" />
            </a>
            <a target="_blank" href="https://github.com/mpazlar/kontrakaos.git">
              <img height={20} src="./assets/gh.svg" alt="GitHub" />
            </a>
          </div>
        </footer>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));

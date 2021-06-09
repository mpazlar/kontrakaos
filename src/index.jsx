import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Aplikace } from './Aplikace';
import { Home } from './Home';
import { About } from './About';
import { Blog } from './Blog';

const App = () => {
  const [textContent, setTextContent] = useState('');

  return (
    <>
      <Router>
        <nav>
          <div className="logo">
            <Link
              to="/"
              className="nav__home"
              onClick={() => setTextContent('')}
            >
              {' '}
              <img
                className="logo__img"
                src="./assets/logo_prototyp_no_background.svg"
                alt=""
                onClick={() => setTextContent('')}
              />
              <h1 className="h1__hidden">{textContent}</h1>
            </Link>
          </div>
          <div className="nav__bar">
            <div className="nav__links">
              <Link
                to="/kontrakaos"
                className="nav__app"
                onClick={() => setTextContent('KontraKaos')}
              >
                Aplikace
              </Link>

              <Link
                to="/blog"
                className="nav__blog"
                onClick={() => setTextContent('KontraKaos')}
              >
                Blog
              </Link>

              <Link
                to="/about"
                className="nav__about"
                onClick={() => setTextContent('KontraKaos')}
              >
                O nás
              </Link>
            </div>
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
            <Route path="/blog">
              <Blog />
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

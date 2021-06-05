import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Aplikace } from './Aplikace';
import { Home } from './Home';
import { About } from './About';
import { Blog } from './Blog';

const App = () => {
  return (
    <>
      <Router>
        <div className="page">
          <nav>
            <div className="nav__logo">
              <a href="index.html">
                <img
                  className="logo__img"
                  src="./assets/logo_prototyp.png"
                  alt=""
                />
              </a>
              <h2>KontraKaos</h2>
            </div>

            <div className="nav__links">
              <Link to="/" className="nav__home">
                Home
              </Link>

              <Link to="/about" className="nav__about">
                O nás
              </Link>

              <Link to="/kontrakaos" className="nav__app">
                Aplikace
              </Link>

              <Link to="/blog" className="nav__blog">
                Blog
              </Link>
            </div>
          </nav>
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

          <footer>
            <div>Vytvořeno v rámci Czechitas DA©</div>
            <div>
              <a target="_blank" href="mailto:m.pazlarova@gmail.com">
                Napište nám
              </a>
            </div>
            <div className="icons__social">
              <a
                target="_blank"
                href="https://www.facebook.com/magda.pazlarova/"
              >
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
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));

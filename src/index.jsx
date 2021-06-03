import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Aplikace } from './Aplikace';
import { Home } from './Home';
import { About } from './About';
import { Blog } from './Blog';
import { Footer } from './Footer';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">O nás</Link>
          </li>
          <li>
            <Link to="/kontrakaos">Aplikace</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
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
    </div>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));

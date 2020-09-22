import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Gallery } from './Gallery';
import { SingleImage } from "./SingleImage";

// import './styles.css';

export const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Gallery} />
            <Route exact path="/image/:id" component={SingleImage} />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

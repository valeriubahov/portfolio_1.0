import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Work from './Work';
import Education from './Education';
import Home from './Home';
import Me from './Me';

const Pages = ({ user }) => {
    return (
      <HashRouter>
        <Route exact path="/">
        <Me user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
        <Route path="/me">
          <Me user={user} />
        </Route>
      </HashRouter>
    );
}

export default Pages;
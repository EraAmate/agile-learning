import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotesApp from './notes app/pages/NotesApp';
import CountdownTimer from './countdown timer/pages/CountdownTimer';
import Menu from './menu/pages/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/timer">
          <CountdownTimer />
        </Route>
        <Route path="/notes">
          <NotesApp />
        </Route>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

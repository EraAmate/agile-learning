import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotesApp from './notes app/pages/NotesApp';
import CountdownTimer from './countdown timer/pages/CountdownTimer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/timer">
          <CountdownTimer />
        </Route>
        <Route path="/notes">
          <NotesApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotesApp from './notes app/pages/NotesApp';
import CountdownTimer from './countdown timer/pages/CountdownTimer';
import Menu from './menu/pages/Menu';
import { ThemeProvider } from 'emotion-theming';
import dark from './themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
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
    </ThemeProvider>
  );
}
export default App;

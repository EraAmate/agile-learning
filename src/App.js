import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import NotesApp from './notes app/pages/NotesApp';
import CountdownTimer from './countdown timer/pages/CountdownTimer';
import Menu from './menu/pages/Menu';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/timer">
            <CountdownTimer />
          </Route>
          <Route path="/notes">
            <NotesApp switchTheme={toggleTheme} />
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

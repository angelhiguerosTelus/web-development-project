import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// You can think of these components as "pages"
// in your app.
import PomodoroApp from "./Apps/01 Pomodoro";
import MaskedInputApp from "./Apps/02 MaskedInput";
import JSONtoCSV from "./Apps/03 JSONtoCSV";
import URLShortener from "./Apps/04 URLShortener";
import { RedirectUrl } from "./Apps/04 URLShortener/redirectUrl";
import OneTimeSecret from "./Apps/05 One time Secret";

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <Router>
      <div className="container">
        <div className="level mt-5">
          <div className="level-item">
            <Link to="/" className="button is-info">
              Home
            </Link>
          </div>
          <div className="level-item">
            <Link to="/pomodoro" className="button is-info">
              Pomodoro
            </Link>
          </div>
          <div className="level-item">
            <Link to="/masked-input" className="button is-info">
              Masked Input
            </Link>
          </div>
          <div className="level-item">
            <Link to="/json-to-csv" className="button is-info">
              JSON to CSV
            </Link>
          </div>
          <div className="level-item">
            <Link to="/url-shortener" className="button is-info">
              URLShortener
            </Link>
          </div>
          <div className="level-item">
            <Link to="/one-time-secret" className="button is-info">
              One Time Secret
            </Link>
          </div>
        </div>

      
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pomodoro">
            <PomodoroApp />
          </Route>
          <Route exact path="/masked-input">
            <MaskedInputApp />
          </Route>
          <Route exact path="/json-to-csv">
            <JSONtoCSV />
          </Route>
          <Route exact path="/url-shortener">
            <URLShortener />
          </Route>
          <Route exact path="/redirect/:hash">
            <RedirectUrl />
          </Route>
          <Route exact path="/one-time-secret">
            <OneTimeSecret />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of this components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <span className="title is-3">Final project - Angel Higueros </span>
    </div>
  );
}
export default App;

import './App.css';
import Home from './Components/Home/Home';
import Doctors from './Components/Doctors/Doctors';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // main header link area start
    <div>
      {/* set all the path using react router */}
      <Router>
              <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/doctors">
                    <Doctors></Doctors>
                  </Route>
                  <Route path="/about">
                    <About></About>
                  </Route>
                  <Route path="/contact">
                    <Contact></Contact>
                  </Route>
                  <Route path="*">
                    <Error></Error>
                  </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;

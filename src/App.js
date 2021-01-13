import React from 'react';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router,Route,Switch } from'react-router-dom';

import Home from './components/Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route patch="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

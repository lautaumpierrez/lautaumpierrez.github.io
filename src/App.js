import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './pages/Home';
import BiographyPage from './pages/Biography';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import './App.scss';
import 'bulma/css/bulma.min.css';
import 'animate.css/animate.min.css';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' component={HomePage} exact></Route>
          <Route path='/biography' component={BiographyPage} exact></Route>
            <Route path='/portfolio' component={PortfolioPage} exact></Route>
          <Route path='/contact' component={ContactPage} exact></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

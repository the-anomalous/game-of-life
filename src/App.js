import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home-page/home-page.component'
import RulesPage from './pages/rules-page/rules-page.component'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        < Route exact path = 'game-of-life/'
        component = {
          HomePage
        }
        />
        < Route exact path = 'game-of-life/rules'
        component = {
          RulesPage
        }
        />
      </Switch>
    </div>
  );
}

export default App;
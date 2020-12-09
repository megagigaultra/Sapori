import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';

//IMPORT COMPONENTS
import Navigation from './components/mobile/Navigation'

//IMPORT PAGES
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
 
function App() {
  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [])

  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu/:carte" component={MenuPage} />
        </Switch>
    </div>
  );
}

export default App;

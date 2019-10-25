import React, { Component } from 'react';
import Navigation from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import CellTechnology from './components/CellTechnology'
import LPFVsNMC from './components/Cell'
import AboutChargeXO from './components/AboutChargeXO'
import Manufacturing from './components/Manufacturing'
import Applications from './components/Applications'
import TechCollab from './components/TechCollab'
import About from './components/AboutUS'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/Products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/CellTechnology' component={CellTechnology} />
          <Route path='/Cell' component={LPFVsNMC} />
          <Route path='/AboutChargeXO' component={AboutChargeXO} />
          <Route path='/Manufacturing' component={Manufacturing} />
          <Route path='/Applications' component={Applications} />
          <Route path='/TechCollab' component={TechCollab} />
          <Route path='/AboutUS' component={About} />

          

        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
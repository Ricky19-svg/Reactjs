import React from 'react';
//import BoostrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import BoostrapComp from './Comonent/Class/BootstrapComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
import DetailComp from './Component/Fungsional/DetailComp';
//import DetailComp from './Comonent/Fungsional/DetailComp';
import LisComp from './Comonent/Class/ListComp';
//import Home from './Comonent/Fungsional/Home';
//import Beranda from './Comonent/Class/Beranda';
//import './App.css';
 
const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/detail/:id" component={DetailComp} />
      <Route exact path="/mahasiswa" component={LisComp} />
       {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
    </Switch>

  </BrowserRouter>
  );
}

export default App;
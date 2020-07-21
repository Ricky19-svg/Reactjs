import React from 'react';
//import BoostrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import BoostrapComp from './Component/Class/BootstrapComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
import DetailComp from './Component/Fungsional/DetailComp';
//import DetailComp from './Component/Fungsional/DetailComp';
import LisComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/Tambah';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';

// import BootstrapComp from './Component/Class/BootstrapComp';
//import Parent from './Component/Class/Parent';
// import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
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
      <Route exact path="/mahasiswa/tambah" component={TambahComp} />
      <Route exact path="/mahasiswa/edit" component={EditComp} />
      <Route exact path="/kelas" component={KelasComp} />
        <Route exact path="/hooks" component={HooksComp} />
        <Route exact path="/useeffects" component={HooksUseEffects} />
    
       {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
    </Switch>

  </BrowserRouter>
  );
}

export default App;
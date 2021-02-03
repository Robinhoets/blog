import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import './App.css';
import './App.scss';

import Header from './navigationcomponents/Header.js'

import Field from './images/LivField.jpeg'

function App() {
  return (
    <>
    <Header />
    <Image className="Image" src={Field} alt="Liverpool Formation" fluid/>
    </>
  );
}

export default App;

// <Router>
//
//   <div className="row">
//     <div className="App-header">
//       <Link to="/">Home</Link>
//       <Link to="/">Articles</Link>
//       <Link to="/">About</Link>
//     </div>
//   </div>
// </Router>

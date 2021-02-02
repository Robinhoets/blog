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
import './App.css';
import './App.scss';

import Field from './images/LivField.jpeg'

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CSLoop</Navbar.Brand>
      <Nav className="mr-auto">
        <Router>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Articles</Nav.Link>
          <Nav.Link href="#pricing">Statistics</Nav.Link>
        </Router>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    <img className="Image" src={Field} alt="Italian Trulli" />
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

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css';
import '../App.scss';

class Footer extends Component{

  render(){
    return(
      <div>
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Navbar.Brand href="#home">CSLoop</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
};

export default function FooterPage(){
  return <Footer />
};

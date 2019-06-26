import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';
const HomePage = ({history: {push}}) => (
  <div className="HomePage">
    <Navbar setHeight={()=>console.log('hola')} push={push}></Navbar>
    <Container type='is-transparent'>
      <div className='container has-text-centered'>
        <h1 className="myName title has-text-white is-1 animated fadeInDown">Lautaro Umpiérrez</h1>
        <h2 className="myProfession title is-2 has-text-white is-italic animated fadeInUp"> Web Designer</h2>
      </div>
    </Container>
  </div>
);

export default HomePage;

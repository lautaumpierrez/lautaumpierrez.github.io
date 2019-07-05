import React from 'react';
import Header from '../components/header';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Testimony from '../components/testimony';
import Contactame from '../components/contactame';
import '../assets/styles/HomePage.scss';
export default class HomePage extends React.Component {
  render(){
    return(
      <div className="HomePage">
        <Header></Header>
        <div className="container">
          <Skills></Skills>
          <div style={{margin: '4em 0em 4em 0em'}}>
            <Testimony name="Sandra Uiloa" content="Mi experiencia trabajando con Lautaro fue increible. Su manejo efectivo de ReactJS y NodeJS permitio que nuestro proyecto sea lanzado tal y como esperabamos." image="https://www.w3schools.com/w3images/avatar2.png"></Testimony>
          </div>
          <Portfolio></Portfolio>
          <div style={{margin: '4em 0em 4em 0em'}}>
            <Testimony name="Sandra Uiloa" content="Mi experiencia trabajando con Lautaro fue increíble. Su manejo efectivo de ReactJS y NodeJS permitio que nuestro proyecto sea lanzado tal y como esperábamos." image="https://www.w3schools.com/w3images/avatar2.png"></Testimony>
          </div>
          <Contactame></Contactame>
        </div>
        <div className="shape-bottom" style={{backgroundImage: `url('${require('../assets/svg/triangle.png')}')`}}/>
      </div>
    );
  }
}

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
            <Testimony name="Samuel García" content={`
               Lautaro, además de siempre estar activo,
                constamente presentaba ideas buenísimas y
                 estaba dispuesto a colaborar en lo que sea necesario.
            `} image={require('../assets/png/testimonio1.jpeg')}></Testimony>
          </div>
          <Portfolio></Portfolio>
          <div style={{margin: '4em 0em 4em 0em'}}>
            <Testimony classCss="testimony-2" name="Aarón González" content={
                `El dominio que Lautaro tiene sobre su stack de
                 tecnologías le permite aportar con ideas y procedimientos aún más efectivos de los que se habían planificado.
                 Sus aportes y labor va más allá de un Dev y eso se valora mucho.`
              } image={require('../assets/png/testimonio2.png')}></Testimony>
          </div>
          <Contactame></Contactame>
        </div>
        <div className="shape-bottom" style={{backgroundImage: `url('${require('../assets/svg/triangle.png')}')`}}/>
      </div>
    );
  }
}

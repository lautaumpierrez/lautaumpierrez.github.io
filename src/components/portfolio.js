import React from 'react';
import '../assets/styles/portfolio.scss';
import Project from './project';
const Contactar = ()=>(
  <div className="ContactarComponent">
    <div className="contenedor has-text-centered">
      <img src={require('../assets/svg/star.svg')} alt=""/>
      <p style={{fontWeight: 500}}>
        ¡Cada proyecto merece estar lleno de energía y dedicación  para llegar al siguiente nivel!
      </p>
      <button className="btn">😎 &nbsp; Cuentame más Lauta</button>
    </div>
  </div>
);
export default ()=>(
  <div className="PortfolioComponent">
    <p className="title is-4 has-text-weight-bold" style={{marginLeft: 10}}>Portafolio</p>
    <div className="columns">
      <div className="column is-4">
        <Project withBorder={true} name="EcologicIdea" link="http://ecologicidea.club" image={require('../assets/png/ecologicidea.png')} btnColor="#2ecc71"></Project>
      </div>
      <div className="column is-4">
        <Project name="Lautiflix" link="https://lautaumpierrez.github.io/lautiflix/" image={require('../assets/png/lautiflix.png')} btnColor="#e74c3c"></Project>
      </div>
      <div className="column is-4">
        <Contactar></Contactar>
      </div>
    </div>
  </div>
);

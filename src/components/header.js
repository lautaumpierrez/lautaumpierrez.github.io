import React from 'react';
import '../assets/styles/header.scss';
import MyImage from './my-image';
export default ()=>(
  <header className="HeaderComponent">
    <div className="shapes">
        <div></div>
        <div></div>
    </div>
    <div className="top-layer">
      <div className="information">
        <div className="columns">
          <div className="column is-6">
            <center>
              <MyImage></MyImage>
            </center>
          </div>
          <div className="column is-6">
            <div className="container has-text-centered-touch">
              <p className="title is-1">Hola, soy Lautaro</p>
              <p className="subtitle is-marginless">
                <b>Fullstack</b> Developer, listo para llevar</p>
              <span className="subtitle">
                tus proyectos  al siguiente nivel 🚀
              </span>
              <br/>
              <br/>
              <p className="subtitle">Dejame un mensaje. Charlemos 💬</p>
              <div className="level is-mobile">
                <a href="https://api.whatsapp.com/send?phone=598098115938&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202" className="btn level-item" style={{marginRight: 20,backgroundColor: '#2ecc71'}}>
                  <div className="level is-mobile">
                    <div className="level-item">
                      <img src={require('../assets/svg/whatsapp.svg')} style={{filter:'invert(100%)',width: 20}} alt=""/>
                    </div>
                    <div className="level-item">
                       &nbsp; Whatsapp
                    </div>
                  </div>
                </a>
                <a href="mailto: lauta.guillermo@gmail.com" className="btn level-item" style={{backgroundColor: '#e74c3c'}}>
                  <div className="level is-mobile">
                    <div className="level-item">
                      <img src={require('../assets/svg/gmail.svg')} style={{filter:'invert(100%)',width: 20}} alt=""/>
                    </div>
                    <div className="level-item">
                       &nbsp; Mail
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

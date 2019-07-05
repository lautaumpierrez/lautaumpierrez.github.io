import React from 'react';
import '../assets/styles/skills.scss'
export default ()=>(
  <div className="SkillsComponent">
    <div className="container">
      <p className="title is-4 has-text-weight-bold" style={{marginLeft: 10}}>Mis Skills</p>
      <div className="columns">
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/react.svg')} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/vuejs.svg')} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/sass.svg')} alt=""/>

          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/stylus.svg')} alt=""/>

          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/nodejs.svg')} style={{transform: 'scale(1.6)', marginTop: -10}} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/express.svg')} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/png/socketio.png')} style={{transform: 'scale(1.6)', marginTop: 10}} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/mysql.svg')} alt=""/>
          </div>
        </div>
        <div className="column">
          <div className="contenedor">
            <img src={require('../assets/svg/mongodb.svg')} alt=""/>

          </div>
        </div>
      </div>
    </div>
  </div>
);

import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

const Container = ({children, type,particles})=>(
  <React.Fragment>
    <section className={`hero is-fullheight ${type}`}>
      <div className="hero-body">
        {children}
      </div>
    </section>
    {particles ? (<Particles
        params={{
          "particles": {
         "number": {
             "value": 200,
             "density": {
                 "enable": false
             }
         },
         "size": {
             "value": 3,
             "random": true,
             "anim": {
                 "speed": 4,
                 "size_min": 0.3
             }
         },
         "line_linked": {
             "enable": false
         },
         "move": {
             "random": true,
             "speed": 1,
             "direction": "top",
             "out_mode": "out"
         }
     },
     "interactivity": {
         "events": {
             "onhover": {
                 "enable": true,
                 "mode": "bubble"
             },
             "onclick": {
                 "enable": true,
                 "mode": "repulse"
             }
         },
         "modes": {
             "bubble": {
                 "distance": 250,
                 "duration": 2,
                 "size": 0,
                 "opacity": 0
             },
             "repulse": {
                 "distance": 400,
                 "duration": 4
             }
         }
     }}}>
   </Particles>):(null)}
  </React.Fragment>
);
Container.propTypes ={
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  particles: PropTypes.bool
};
Container.defaultProps = {
  particles: true
};

export default Container;

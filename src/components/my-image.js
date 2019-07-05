import React from 'react';
import '../assets/styles/my-image.scss';

export default ()=>(
  <div className="MyImageComponent" style={{backgroundImage: `url(${require('../assets/png/lauta.png')}),linear-gradient(to top right, #165479, #00a2ff)`}}>
    <button className="btn about-me" >
      About Me
    </button>
  </div>
);

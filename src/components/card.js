// Project card
import React from 'react';

import '../assets/components/styles/card.scss';
export default function ({title,description, link, linkText, github}){
  return(
    <div className="projectCard border-animation">
      <header>
        {title}
        <a href={link} target="_blank" className="enlace">
          {github ? (<img width={20} src={require('../assets/components/images/github.svg')}/>):
            (<img width={20} src={require('../assets/components/images/enlace.svg')}/>)}
        </a>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
    </div>
  );
}

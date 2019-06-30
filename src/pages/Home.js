import React from 'react';
import Header from '../components/header';
import Skills from '../components/skills';
export default class HomePage extends React.Component {
  render(){
    return(
      <div>
        <Header></Header>
        <Skills></Skills>
      </div>
    );
  }
}

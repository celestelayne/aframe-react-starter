import React, { Component } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

import './App.css';

class App extends Component {
  render(){
    return (
      <Scene>
        <Entity
          geometry={{primitive: 'box'}}
          material={{color: 'blue'}}
          position={{x: 1 , y: 1, z: -5}}/>
        <Entity
          particle-system={{preset: 'snow'}}
          position='0 2.25 -15' />
        <Entity light={{type: 'ambient', intensity: 2, color: 'white'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity
          primitive='a-sphere'
          color="green"
          position="1 0 -3"/>
        <Entity
          primitive='a-plane'
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"/>
        <Entity
          primitive='a-sky'
          color="#ECECEC"/>
      </Scene>
    )
  }
}

export default App;

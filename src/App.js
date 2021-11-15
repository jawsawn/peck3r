import React from 'react';
import './App.css';
import Peck from './peck';

function App() {


  return (
    <div className="App">
      <div className="mheader">
        <h1>Pecker</h1>
      </div>
      <div className="maincontent">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui impedit necessitatibus, ratione eaque, porro molestias corporis aperiam quo tempora recusandae optio tenetur error? Nesciunt incidunt voluptate minus dolor a quaerat?</p>
      </div>
        
      <Peck />
      <Peck />
      
    </div>
  );
}

export default App;


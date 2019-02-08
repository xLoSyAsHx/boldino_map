import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import boldinoMap from "../src/map2.svg"
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


class App extends Component {

  render() {
    return (
      <div className="wrapper" >
        <CssBaseline />
            
            <Draggable 
              //defaultPosition={{x: -2290, y: -3218}}
              grid={[5, 5]}
              //bounds={{top: -6000, left: -4000, right: 6000, bottom: 4000}}
              scale={1}>
              <div >
                <svg viewBox="0 0 4000 6000">
                <a href="#">
                  <path className="boldino" d="m 202.18925,205.98623 13.28944,499.30303 473.6734,-46.51302 -30.37585,-470.82567 z">
                  </path>
                </a>
                  
                </svg>
                <img src={boldinoMap} alt="image"/>
              </div>
            </Draggable>
            
            
            

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import boldinoMap from "../src/map.svg"
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div className="wrapper" >
        <CssBaseline />
          <Grid container alignItems='stretch'>
            <img src={boldinoMap} alt="image"/>
            <svg viewBox="0 0 1145.28 1609.92">
            <a href="#">
              <path className="boldino" d="m 202.18925,205.98623 13.28944,499.30303 473.6734,-46.51302 -30.37585,-470.82567 z">
              </path>
            </a>
              
            </svg>

            
          </Grid>
      </div>
    );
  }
}

export default App;

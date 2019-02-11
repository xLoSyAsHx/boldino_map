import React, { Component } from 'react';

import TestElem from "../src/TestElem";

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import boldinoMap from "../src/map.svg"
import boldinoImg from "../src/map.jpg"
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


/*
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          width:  1080,
          height: props.height,
      }

      this.state = {height: props.height};
  }

  

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
    console.log(window.innerHeight);
  }



  render() {
    console.log(window.innerWidth);
    return (
      <div className="wrapper" >
        <CssBaseline />
            
            <Draggable 
              //defaultPosition={{x: -2290, y: -3218}}
              //grid={[5, 5]}
              bounds={{top: -window.innerHeight / 2, left: -0, right: 1000, bottom: window.innerHeight / 2}}
              // viewBox="0 0 1145 1609"
              scale={1}>
              <div >
                
                <svg width={1000} height={window.innerHeight} >
                <a href="#">
                  <path className="boldino" d="m 0,0 0,1000 500,0 0,-1000 z">
                  </path>
                </a>
                  
                </svg>
                <img width={1000} height={window.innerHeight} src={boldinoImg} alt="image"/>
              </div>
            </Draggable>
            
            
            

      </div>
    );
  }
}
*/
export default class CreateContact extends Component {

  constructor() {
      super();

      this.SVGClickablesData = [
          {
              d: "m 0,0 0,1000 500,0 0,-1000 z"
          },
          {
              d: "m 700,0 0,1000 700,0 0,-1000 z"
          }
      ];
  }

  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  menuClick(id) {
      console.log("Click id == " + id);
  }

  GetSVGClickable() {
      let clickables = [];

      for (let i = 0; i < this.SVGClickablesData.length; ++i) {
          clickables.push(
            <TestElem key={i} data={
              {
                  id: i,
                  d: this.SVGClickablesData[i].d,
              }
            }></TestElem>
          );
      }

      return clickables;
  }

  render() {
    return (
      <div className="wrapper" >
        <CssBaseline />
            
            <Draggable 
              //defaultPosition={{x: -2290, y: -3218}}
              //grid={[5, 5]}
              bounds={{top: -6436 + this.state.windowHeight, left: -4580 + this.state.windowWidth, right:  0, bottom: 0}}
               //viewBox="0 0 4580 6436"
              scale={1}>
              <div>
                <svg className="boldinoSVG" width={4580} height={6436} >
                  {this.GetSVGClickable()}
                </svg>
                <img width={4580} height={6436} src={boldinoImg} alt="image"/>
              </div>
            </Draggable>
            
            
            

      </div>
    );
  }
}

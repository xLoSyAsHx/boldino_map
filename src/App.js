import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import ParseSVG from 'svg-path-parser';

import CircleClickable from "../src/CircleClickable";
import boldinoImg from "../src/map.jpg"
import boldinoSvg from "../src/map3.svg"
import './App.css';



function readTextFile(file)
{
    let result = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                result = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return result;
}

export default class CreateContact extends Component {

  constructor() {
      super();

      this.GetSVGClickable();
  }

  GetSVGClickable() {
    let boldinoSvgXml = readTextFile(boldinoSvg);
    var parser = new DOMParser();
    var doc = parser.parseFromString(boldinoSvgXml, "image/svg+xml");

    let array = doc.getElementsByTagName("ellipse");
    console.log(array)
    console.log(array[0].cx.animVal.value)

    this.SVGClickablesData = [];
    for (let i = 0; i < array.length; ++i) {
        this.SVGClickablesData.push(
            {
              cx: array[i].cx.animVal.value * 4,
              cy: array[i].cy.animVal.value * 4,
              rx: 8.34 * 4,
              ry: 8.4 * 4,
            }
        );
    }
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

  GetSVGClickableForRender() {
      let clickables = [];

      for (let i = 0; i < this.SVGClickablesData.length; ++i) {
          clickables.push(
            <CircleClickable key={i} data={
              {
                  id: i + 1,
                  cx: this.SVGClickablesData[i].cx,
                  cy: this.SVGClickablesData[i].cy,
                  rx: this.SVGClickablesData[i].rx,
                  ry: this.SVGClickablesData[i].ry,
              }
            }></CircleClickable>
          );
      }

      return clickables;
  }

  render() {
    return (
      <div className="wrapper" >
        <CssBaseline />
            <Draggable 
              bounds={{top: -6436 + this.state.windowHeight, left: -4580 + this.state.windowWidth, right:  0, bottom: 0}}
              scale={1}>
              <div>
                <svg className="boldinoSVG" width={4580} height={6436} >
                  {this.GetSVGClickableForRender()}
                </svg>
                <img width={4580} height={6436} src={boldinoImg} alt="image"/>
              </div>
            </Draggable>
      </div>
    );
  }
}

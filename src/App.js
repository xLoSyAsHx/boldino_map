import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import ParseSVG from 'svg-path-parser';

import CircleClickable from "../src/CircleClickable";
import boldinoImg from "../src/map.jpg"
import boldinoSvg from "../src/map3.svg"
import infoImg from "../src/InfoImg.jpg"
import sightImg1 from "../src/sight1.jpg"
import sightImg2 from "../src/sight2.jpg"
import sightImg3 from "../src/sight3.jpg"
import './App.css';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';



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

      this.titleArray = [
        "State Museum of A.S. Pushkin",
        "Monument to A. Pushkin",
        "The Oak",
      ];

      this.descriptionArray = [
        "Description of State Museum of A.S. Pushkin",
        "Description of Monument to A. Pushkin",
        "Description of The Oak",
      ];

      console.log("Image path" + infoImg);

      this.imageArray = [
          sightImg1,
          sightImg2,
          sightImg3,
      ];

      this.currentTitle = "Click on the sight to know more";

      this.currentDescription = "";

      this.currentImg = infoImg;

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
                  callback: this,
              }
            }></CircleClickable>
          );
      }

      return clickables;
  }

  SetTitle(id) {
      console.log("SetTitle" + id);
      this.currentTitle = this.titleArray[id - 1];
      this.forceUpdate()
  }

  SetDescription(id) {
      console.log("SetDescription" + id);
      this.currentDescription = this.descriptionArray[id - 1];
      this.forceUpdate()
  }

  SetInfoImage(id) {
      console.log("SetInfoImage" + id);
      this.currentImg = this.imageArray[id - 1];
      this.forceUpdate()
  }
  GetTitle() {
      return this.titleArray;
  }

  GetDescription() {
      return this.descriptionArray;
  }

  GetDescription() {
      return this.imageArray;
  }

  GetDescriptionForRender() {
      return (
        <div className="DetailedInfoWindow"> {this.currentDescription}</div>
      );
  }

  render() {
    return (
      <div className="wrapper" >
        <CssBaseline />
          <Grid container>
              <Grid item>
                  <Paper className="DetailedInfoWindow">
                      <Grid container spacing={16}>
                          <Grid item className="imgWrap">
                              <img className="sightImg" alt="Image" src={this.currentImg} />
                          </Grid>

                          <Grid item>
                              <Typography gutterBottom variant="title">
                                  {this.currentTitle}
                              </Typography>

                              <Typography gutterBottom>
                                  {this.currentDescription}
                              </Typography>
                          </Grid>
                      </Grid>
                  </Paper>
              </Grid>
              <Grid item>
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
              </Grid>
          </Grid>
            
      </div>
    );
  }
}

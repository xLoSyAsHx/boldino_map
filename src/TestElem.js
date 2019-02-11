import React, { Component } from 'react';


import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import boldinoMap from "../src/map.svg"
import boldinoImg from "../src/map.jpg"
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time



export default class TestElem extends Component {

    constructor(props) {
        super(props);

        console.log(props)
        this.elEd = props.data.id;
        this.d = props.data.d;
    }


  menuClick(id) {
      console.log("Click id == " + id);
  }

  render() {
    return (
        <a href="#" onClick={() => this.menuClick(this.elEd)}>
            <path className="boldinoElement" d={this.d} fill="#bf2552">
            </path>
        </a>
    );
  }
}

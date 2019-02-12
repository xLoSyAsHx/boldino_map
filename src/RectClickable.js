import React, { Component } from 'react';

export default class ReckClickable extends Component {

    constructor(props) {
        super(props);

        this.elEd = props.data.id;
        this.x = props.data.x;
        this.y = props.data.y;
        this.width = props.data.width;
        this.height = props.data.height;
    }


  onClick(id) {
      console.log("ReckClickable id == " + id);
  }

  render() {
    return (
        <a href="#" onClick={() => this.onClick(this.elEd)}>
            <rect className="boldinoElement" id={this.id} x={this.x} y={this.y} width={this.width} height={this.height} fill="#bf2552" />
        </a>
    );
  }
}

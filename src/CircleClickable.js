import React, { Component } from 'react';

export default class CircleClickable extends Component {

    constructor(props) {
        super(props);

        this.elId = props.data.id;
        this.cx = props.data.cx;
        this.cy = props.data.cy;
        this.rx = props.data.rx;
        this.ry = props.data.ry;
        this.callback = props.data.callback;

        console.log(props.data);
    }


  onClick(id) {
      console.log("ReckClickable id == " + id);
      this.callback.SetInfoImage(this.elId)
      this.callback.SetTitle(this.elId)
      this.callback.SetDescription(this.elId)
  }

  render() {
    return (
        <a href="#" onClick={() => this.onClick(this.elId)}>
            <ellipse className="boldinoElement" id={this.id} cx={this.cx} cy={this.cy} rx={this.rx} ry={this.ry} fill="#bf2552" />
        </a>
    );
  }
}

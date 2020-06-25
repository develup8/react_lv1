import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      position: "relative",
      overflow: "auto",
      width: "300px",
      height: "300px",
      border: "1px solid black",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;

import React, { Component } from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default App;

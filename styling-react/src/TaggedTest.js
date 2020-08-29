import React, { Component } from "react";

class TaggedTest extends Component {
  TaggedTest = () => {
    function tagged(...args) {
      console.log(args);
    }
    tagged`hello ${{ foo: "bar" }} ${() => "word"}`;
  };
}

export default TaggedTest;

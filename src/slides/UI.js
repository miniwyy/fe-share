import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import CodePane from "../components/CodePane";

export default class extends Component {
  render() {
    return (
      <Slide>
          <Title fit={false}>
              UI栈
          </Title>
      </Slide>
    );
  }
}

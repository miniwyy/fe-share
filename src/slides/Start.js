import React, { Component } from "react";
import { Slide, Heading } from "spectacle";
import Text from "../components/Text";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Heading fit>React开发者大会</Heading>
        <Text>如何把业务逻辑这个故事讲好</Text>
        <Heading textSize="6rem">xstate</Heading>
      </Slide>
    );
  }
}

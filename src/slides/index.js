import createTheme from "spectacle/lib/themes/default/index";
import React, { Component } from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

const getSlide = name => {
  const Item = require(`./${name}`).default;
  return <Item />;
};

const theme = createTheme(
  {
    primary: "#2d2d2d",
    secondary: "#f8c555",
    tertiary: "#f08d49",
    quarternary: "#ccc"
  },
  {}
);

export default class extends Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        controls
        theme={theme}
        progress="pacman"
      >
        {getSlide("Start")}
        {getSlide("Important")}
        {getSlide("Background")}
        {getSlide("WhatStateTake")}
        {getSlide("UI")}
        {getSlide("Pain")}
        {getSlide("End")}
      </Deck>
    );
  }
}

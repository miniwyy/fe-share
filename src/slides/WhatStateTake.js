import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="UI = f(state)">状态的作用效果</Title>
        <List
          items={[
            "JSON数据",
            "公共变量",
            "标志符",
          ]}
        />
      </Slide>
    );
  }
}

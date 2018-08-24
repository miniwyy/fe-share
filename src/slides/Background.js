import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title fit={false}>
            状态机是什么
        </Title>
        <List
          items={[
            "现实，状态是某一时刻看到或者感受到的状态",
            "设计，状态是UI在交互过程中某一时刻的画面",
            "开发，状态是存储上下文中所用到的数据"
          ]}
        />
      </Slide>
    );
  }
}

import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="要解决什么问题">前端最重要的部分</Title>
        <List
          items={[
            "表现层（视觉交互）",
            "数据 X 状态",
            "业务逻辑"
          ]}
        />
      </Slide>
    );
  }
}

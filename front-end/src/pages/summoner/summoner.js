import React, { Component } from "react";
import { runQuery } from "../../config/api";
import Topbar from "../../components/topBar/topBar";

class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSummoner: props.state.currentSummoner,
    };
  }

  render() {
    return (
      <div>
          {this.state.currentSummoner}
      </div>
    );
  }
}

export default Summoner;

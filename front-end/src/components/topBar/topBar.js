import React, { Component } from "react";
import { runQuery } from "../../util/api";

import "./topBar.css";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: null,
    };
  }

  fetchData = (e) => {
    e.preventDefault();
    var summonerName = e.target.summonerName.value;
    this.setState({
      summonerName: summonerName,
    });


    runQuery(`/summoner/${summonerName}`).then(data => {
      this.props.storeData(data)
    })
  };

  render() {
    return (
      <div className="topbar">
        <h3 className="title">League Stat Track</h3>
        <form className="searchCont" onSubmit={this.fetchData}>
          <input
            type="text"
            className="search"
            placeholder="Search for a Summoner"
            name="summonerName"
          />
          <button type="submit" className="search">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Topbar;

import React, { Component } from 'react';
import { runQuery } from '../../util/api'
import Topbar from '../../components/topBar/topBar'
import Summoner from '../summoner/summoner'
import Help from '../help/help'

import './homepage.css'


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Homepage",
      summonerName: null,
      summonerId: null,
      currentSummoner: null,
    };
  }

  storeData = (data) => {
    this.setState({
      currentSummoner: data,
    });
  };

  fetchData = (e) => {
    e.preventDefault();
    var summonerName = e.target.summonerName.value;
    this.setState({
      summonerName: summonerName,
    });

    runQuery(`/summoner/${summonerName}`).then((data) => {
      this.storeData(data);
    });
  };
    render() {
        if (this.state.currentSummoner == null) {
            return (
                <div>
                    <Topbar storeData={this.storeData}/>
                    <a href="../help/help.js"></a>
                </div>
            )
        } else {
            return (
              <div>
                <Topbar storeData={this.storeData} />
                <Summoner currentSummoner={this.state.currentSummoner}/>
                <a href="../help/help.js"></a>
              </div>
            );
        }
        }

  render() {
    if (this.state.currentSummoner == null) {
      return (
        <div className="parent">
          <img
            src={require("../../resources/images/logo.png")}
            alt="logo"
            className="child"
          />
          <form className="child" onSubmit={this.fetchData}>
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
          <a href="../help/help.js"></a>
        </div>
      );
    } else {
      return (
        <div>
          <Topbar storeData={this.storeData} />
          <Summoner currentSummoner={this.state.currentSummoner} />
          <a href="../help/help.js"></a>
        </div>
      );
    }
  }
}

export default Homepage;
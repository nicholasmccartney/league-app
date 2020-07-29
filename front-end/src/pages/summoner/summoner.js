import React, { Component } from "react";
import MatchHistory from "../../components/matchHistory/matchHistory";
import SummonerSummary from '../../components/summonerSummary/summonerSummary';
import { runQuery } from "../../util/api";
import { champIdToName } from '../../util/championID'

import "./summoner.css";
import champions from "../../resources/champions/champion.json";

class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRecentMatch: null,
      championData: champions.data,
      recentChampion: null,
      ...props.currentSummoner,
    };
  }

  componentWillMount() {
    var recentMatch = this.state.matches[0];

    this.setState({
      recentChampion: champIdToName(recentMatch.champion)
    })
  }

  storeData = (data) => {
    this.setState({
      ...data,
    });
  };

  render() {
    return (
      <div className="summoner">
        <div className="summonerSummary">
          <div className="summonerName">
            <img
              className="profileIcon"
              src={require(`../../resources/images/profileicon/${this.state.profileIconId}.png`)}
              alt="summonerProfileIcon"
            />
            <h3>{this.state.name}</h3>
          </div>
          {this.state.recentChampion != null && (
            <img
              className="recentChamp"
              alt={`${this.state.recentChampion} splash`}
              src={require(`../../resources/images/champion/splash/${this.state.recentChampion}_0.jpg`)}
            />
          )}
          <SummonerSummary data={this.state} />
        </div>
        <MatchHistory storeData={this.storeData} data={this.state} />
      </div>
    );
  }
}

export default Summoner;

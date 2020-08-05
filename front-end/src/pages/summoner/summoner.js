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
      displayRank: "",
      ...props.currentSummoner,
    };
  }

  componentWillMount() {
    
    var champPlayCount = {}
    
    this.state.matches.map((match) => {
      var championName = champIdToName(match.champion)
      if (championName != undefined) {
        if (!champPlayCount[championName]) {
          champPlayCount[championName] = 1;
        } else {
          champPlayCount[championName] = champPlayCount[championName] + 1
        }
      }
    })

    var sortable = []
    for (var champion in champPlayCount) {
      sortable.push([champion, champPlayCount[champion]])
    }

    sortable.sort((a,b) => b[1] - a[1])

    this.setState({
      recentChampion: sortable[0][0]
    })

    // get rank
    var sId = this.state.id

    runQuery(`/rank/${sId}`).then(response => {
      var ranks = response
      var displayRank = ""
      if (ranks.length !== 0) {
        ranks.forEach((rank) => {
          if (rank.queueType === "RANKED_SOLO_5x5") {
            displayRank = rank.tier
          }
        })
        if (displayRank === "") {
          displayRank = ranks[0].tier
        }
      }
      this.setState({
        displayRank: displayRank.toLowerCase()
      })
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
            <div style={{position: 'relative'}}>
            <img
              className="recentChamp"
              alt={`${this.state.recentChampion} splash`}
              src={require(`../../resources/images/champion/splash/${this.state.recentChampion}_0.jpg`)}
            />
            {
              this.state.displayRank !== "" && (
                <img
                  className='rankedEmblem'
                  src={require(`../../resources/images/ranked-emblems/${this.state.displayRank}.png`)}
                  alt='rank'
                  />
              )
            }
            </div>
          )}
          <SummonerSummary data={this.state} />
        </div>
        <MatchHistory storeData={this.storeData} data={this.state} />
      </div>
    );
  }
}

export default Summoner;

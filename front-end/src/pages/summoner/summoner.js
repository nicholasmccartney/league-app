import React, { Component } from "react";
import MatchHistory from "../../components/matchHistory/matchHistory";
import { runQuery } from "../../util/api";

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
    var matchId = recentMatch.gameId;

    runQuery(`/match/${matchId}`)
      .then((data) => {
        this.setState({
          mostRecentMatch: data,
        });
        var recentParticipantId = this.findParticipantId();
        var champ = this.findRecentGameChamp(recentParticipantId);
        this.setState({
          recentChampion: champ
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findParticipantId = () => {
    var summonerName = this.state.name;
    var participantId = null;
    this.state.mostRecentMatch.participantIdentities.forEach((summoner) => {
      if (summoner.player.summonerName === summonerName) {
        participantId = summoner.participantId;
      }
    });
    return participantId;
  };

  findRecentGameChamp = (id) => {
    var recentMatch = this.state.mostRecentMatch;
    var participant = recentMatch.participants[id - 1];
    var champId = participant.championId;

    for (const champ in this.state.championData) {
      var currentChamp = this.state.championData[champ];
      if (parseInt(currentChamp.key, 10) === champId) {
        return currentChamp;
      }
    }
  };

  storeData = (data) => {
    this.setState({
      ...data,
    });
    console.log(this.state);
  };

  render() {
    let champ = this.state.recentChampion
    console.log(this.state)
    return (
      <div className="summoner">
        <div className="summonerTest">
          <div className="summonerName">
            <img className='profileIcon' src={require(`../../resources/images/profileicon/${this.state.profileIconId}.png`)} alt='summonerProfileIcon'/>
            <h3>{this.state.name}</h3>
          </div>
          {champ != null && <img className='recentChamp' alt={`${champ.id} splash`} src={require(`../../resources/images/champion/splash/${champ.id}_0.jpg`)}/>}
        </div>
        <MatchHistory storeData={this.storeData} data={this.state} />
      </div>
    );
  }
}

export default Summoner;

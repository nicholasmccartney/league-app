import React, { Component } from "react";
import { runQuery } from '../../util/api'

import "./matchHistory.css";

class MatchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRecentMatch: null,
      ...props.data,
    };
  }

  findParticipantId = () => {
    var summonerName = this.state.name
    var participantId = null
    this.state.mostRecentMatch.participantIdentities.forEach(summoner => {
      if (summoner.player.summonerName === summonerName) {
        participantId = summoner.participantId;
      }
    });
    return participantId
  }

  findRecentGameChamp = (id) => {
    var recentMatch = this.state.mostRecentMatch
    var participant = recentMatch.participants[id - 1]
    var champId = participant.championId
  }
  

  render() {
    
    return (
      <div className="test">
        match history
        </div>
      
    ) 
  }
}

export default MatchHistory;

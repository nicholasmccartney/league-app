import React, { Component } from "react";
import { runQuery } from "../../util/api";
import { findParticipantId, findRecentGameChamp } from "../../util/matches";
import { champIdToName } from "../../util/championID";

import "./matchHistory.css";

class MatchHistoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRecentMatch: null,
      matchesHTML: null,
      kda: null,
      champion: null,
      ...props.data,
    };
  }

  componentWillMount() {
    var name = this.props.summonerName;
    var match = this.props.match;
    var champ = champIdToName(match.champion);
    champ = champ.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");

    runQuery(`/match/${match.gameId}`).then((response) => {
      var participantId = findParticipantId(name, response);
      var participant = response.participants[participantId - 1];
      this.setState({
        kda: {
          kills: participant.stats.kills,
          deaths: participant.stats.deaths,
          assists: participant.stats.assists,
        },
        champion: champ,
      });
    });
  }

  render() {
    if (this.state.champion !== null && this.state.kda !== null) {
      return (
        <div className="matchHistoryItem">
          {this.state.champion !== null && (
            <img
              className="champTile"
              alt={`${this.state.champion} tile pic`}
              src={require(`../../resources/images/champion/tiles/${this.state.champion}_0.jpg`)}
            />
          )}
          <br />
          {this.state.kda.kills}/{this.state.kda.deaths}/
          {this.state.kda.assists}
        </div>
      );
    } else {
      return null
    }
  }
}

export default MatchHistoryItem;
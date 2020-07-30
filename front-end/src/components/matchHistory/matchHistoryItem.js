import React, { Component } from "react";
import { champIdToName } from "../../util/championID";
import { findParticipantId } from "../../util/matches";
import { runQuery } from "../../util/api";

import "./matchHistory.css";

class MatchHistoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: null,
      mostRecentMatch: null,
      matchesHTML: null,
      kda: null,
      champion: null,
      cs: null,
      vs: null,
      ...props.data,
    };
  }

  creepChecker = (cs) => {
    var csTip = "";
  
    if (cs < 4.22) {
      csTip =
        "Your farm is below most Bronze players! Try focusing on last hitting creeps";
    }
    //Bronze
    else if (cs >= 4.22 && cs < 4.61) {
      csTip =
        "Your farm is consistent with Bronze players.  Make sure you are using your abilities to farm!";
    }
    //Silver
    else if (cs >= 4.61 && cs < 4.96) {
      csTip =
        "Your farm is consistent with Silver players.  Make sure you are zoning the enemy laner in order to get more farm.";
    }
    //Gold
    else if (cs >= 4.96 && cs < 5.22) {
      csTip =
        "Your farm is consistent with Gold players! If you want to take it to the next level try doing some research on wave control!";
    } else if (cs >= 5.22 && cs < 5.45) {
      csTip =
        "Congrats your farm is consistent with Platinum players! Keep up the good work!";
    } else if (cs >= 5.45) {
      csTip =
        "Congratulations! Your farm is consistent with Diamond players!  You made it!";
    }
  };

  cpm = (time) => {
        var creepsPerMin = (time.creepsPerMinDeltas['0-10'] + time.creepsPerMinDeltas['10-20']) / 2;
        return creepsPerMin
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
        cs: participant.stats.totalMinionsKilled,
        vs: participant.stats.visionScore,
        cpm: this.cpm(participant.timeline).toFixed(2)
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
          <div className="stat">
            {"Creep Score:"} <br/>
            {this.state.cs}
          </div>
          <div className="stat">
            {"CPM:"} <br/>
            {this.state.cpm}
          </div>
          <div className="stat">
            Vision Score: <br/>
            {this.state.vs}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MatchHistoryItem;

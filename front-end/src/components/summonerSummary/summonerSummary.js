import React, { Component } from "react";
import MatchSummary from '../matchSummary/matchSummary'
import { runQuery } from "../../util/api";

import "./summonerSummary.css";

class SummonerSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
      recentMatchesHTML: null
    };
  }

  componentWillMount() {
    var recentMatches = this.state.matches.slice(0, 10);

    console.log(recentMatches)

    var recentMatchesHTML = [];
    recentMatches.map((match) => {
      recentMatchesHTML.push(<MatchSummary key={match.gameId} summonerName={this.state.name} match={match}/>);
    });

    this.setState({
        recentMatchesHTML: recentMatchesHTML
    })
  }

  render() {
    return (
        <div className="summaryTest">
            Recent Matches
            <div className="recentMatchesContainer">
                {this.state.recentMatchesHTML}
            </div>
        </div>
    )
  }
}

export default SummonerSummary;

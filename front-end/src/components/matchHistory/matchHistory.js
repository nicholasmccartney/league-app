import React, { Component } from "react";
import MatchHistoryItem from '../matchHistory/matchHistoryItem'
import { runQuery } from '../../util/api'

import "./matchHistory.css";

class MatchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRecentMatch: null,
      matchesHTML: null,
      ...props.data,
    };
  }

  loadMoreMatches = () => {
    var matchesHTML = this.state.matchesHTML;
    matchesHTML.pop();
    var start = matchesHTML.length;
    var matches = this.state.matches.slice(start, start + 10);

    matches.map((match) => {
      matchesHTML.push(
        <MatchHistoryItem
          key={match.gameId}
          summonerName={this.state.name}
          match={match}
        />
      );
    });

    
    matchesHTML.push(
      <button key='loadMoreButton' className="getMoreMatches" onClick={this.loadMoreMatches}>
        Load More Matches
      </button>
    );

    this.setState({
      matchesHTML: matchesHTML,
    });

  };

  componentWillMount() {
    var matches = this.state.matches.slice(0, 10);

    var matchesHTML = [];
    matches.map((match) => {
      matchesHTML.push(
        <MatchHistoryItem
          key={match.gameId}
          summonerName={this.state.name}
          match={match}
        />
      );
    });

    matchesHTML.push(
      <button key='loadMoreButton' className="getMoreMatches" onClick={this.loadMoreMatches}>
        Load More Matches
      </button>
    );

    this.setState({
      matchesHTML: matchesHTML,
    });
  }

  render() {
    return (
    <div className="matchHistoryPane">
      <h3>Match History</h3>
      <div className='matchHistoryItemContainer'>
        {this.state.matchesHTML}
      </div>
      </div>
    )
  }
}

export default MatchHistory;

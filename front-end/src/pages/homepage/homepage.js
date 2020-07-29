import React, { Component } from 'react';
import { runQuery } from '../../config/api'
import Topbar from '../../components/topBar/topBar'
import MatchHistoryItem from '../../components/matchHistory/matchHistoryItem'


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Homepage',
            summonerName: null,
            summonerId: null,
        }
    }

    storeData = (data) => {
        console.log(data)
        this.setState({
            summonerName: data.summonerName,
            summonerId: data.summonerId
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <MatchHistoryItem/>
                    <Topbar storeData={this.storeData}/>
                    {this.state.summonerName}
                    <br/>
                    {this.state.summonerId}
            </div>
        )
    }

}

export default Homepage;
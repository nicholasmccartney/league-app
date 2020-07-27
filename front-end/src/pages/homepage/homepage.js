import React, { Component } from 'react';
import { runQuery } from '../../util/api'
import Topbar from '../../components/topBar/topBar'
import Summoner from '../summoner/summoner'
import Help from '../help/help'


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Homepage',
            summonerName: null,
            summonerId: null,
            currentSummoner: null,
        }
    }

    storeData = (data) => {
        this.setState({
            currentSummoner: data,
        })
        console.log(this.state)
    }

    render() {
        if (this.state.currentSummoner == null) {
            return (
                <div>
                    <Topbar storeData={this.storeData}/>
                </div>
            )
        } else {
            return (
              <div>
                <Topbar storeData={this.storeData} />
                <Summoner currentSummoner={this.state.currentSummoner}/>
              </div>
            );
        }
        }

}

export default Homepage;
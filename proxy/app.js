const express = require("express");
const axios = require("axios");
const cors = require("cors");


const instance = axios.create({
  baseURL: "https://na1.api.riotgames.com",
  headers: {
    "X-Riot-Token": process.env.RIOT_API_TOKEN
  },
});

const app = express();
app.use(cors());

app.get("/:page", (req, res) => {
    var page = req.params.page;
    switch (page) {
        case "Home":
            return 
    }
});

app.get("/summoner/:summoner", (req, res) => {
  var summonerUrl = `/lol/summoner/v4/summoners/by-name/${req.params.summoner}`;
  instance
    .get(summonerUrl)
    .then(function (response) {
      var accountData = {
        'id': response.data.id,
        'accountId': response.data.accountId,
        'puuid': response.data.puuid,
        'name': response.data.name,
        'profileIconId': response.data.profileIconId,
        'revisionDate': response.data.revisionDate,
        'summonerLevel': response.data.summonerLevel,
      }

      var matchListUrl = `/lol/match/v4/matchlists/by-account/${accountData.accountId}`;

      instance
        .get(matchListUrl)
        .then(function(response2) {
          accountData['matches'] = response2.data.matches
          res.json(accountData)
        })
        .catch(function(error) {
          console.log(error)
        })
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/match/:matchId', (req, res) => {
  var url = `/lol/match/v4/matches/${req.params.matchId}`;
  instance.get(url)
    .then(function(response) {
      res.json(response.data)
    })
})

app.get('/rank/:sId', (req, res) => {
  var url = `/lol/league/v4/entries/by-summoner/${req.params.sId}`
  instance.get(url)
    .then(function(response) {
      console.log(response)
      res.json(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
})

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

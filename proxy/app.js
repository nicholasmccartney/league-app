const express = require("express");
const axios = require("axios");
const cors = require("cors");

const instance = axios.create({
  baseURL: "https://na1.api.riotgames.com",
  headers: {
    "X-Riot-Token": process.env.RIOT_API_TOKEN,
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
  var url = `/lol/summoner/v4/summoners/by-name/${req.params.summoner}`;
  instance
    .get(url)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

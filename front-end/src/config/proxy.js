const express = require("express");
const request = require("request");

const app = express();

const api_key = "RGAPI-5b926668-1f7a-48ac-8ac9-4c4af1e5e611";
const api = "https://na1.api.riotgames.com";

app.use((req, res, next, cors) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/jokes/random", (req, res) => {
  request(
    { url: "https://joke-api-strict-cors.appspot.com/jokes/random" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

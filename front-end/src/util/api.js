const axios = require('axios')

const instance = axios.create({
  baseURL:
    "http://LeagueAppFix-env.eba-3bztu5yf.us-east-2.elasticbeanstalk.com/",
    //"localhost:80"
});

export async function runQuery(endpoint) {
    

    return instance.get(endpoint)
    .then(res => {
        return res.data
    })
    .catch(function(error) {
        console.log(error)
    })


}
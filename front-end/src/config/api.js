const axios = require('axios')

const instance = axios.create({
  baseURL:
    "http://leagueoflegendsapp-env.eba-h3i3pvy7.us-east-2.elasticbeanstalk.com/",
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
export function findParticipantId(name, match) {
  var summonerName = name;
  var participantId = null;
  match.participantIdentities.forEach((summoner) => {
    if (summoner.player.summonerName === summonerName) {
      participantId = summoner.participantId;
    }
  });
  return participantId;
};

export function findRecentGameChamp(id) {
  var recentMatch = this.state.mostRecentMatch;
  var participant = recentMatch.participants[id - 1];
  var champId = participant.championId;
  for (const champ in this.state.championData) {
    var currentChamp = this.state.championData[champ];
    if (parseInt(currentChamp.key, 10) === champId) {
      return currentChamp;
    }
  }
};

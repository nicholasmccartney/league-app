import React, { Component } from "react";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "help",
    };
  }

  render() {
      return (
          <html>
          <link rel="stylesheet" href="help.css"></link>
          
          <body>
          <div id="page-wrap">
          <h1><br></br>What is League of Legends?</h1>
	        <p>League of Legends is a Multiplayer Online Battle Arena (MOBA) game, where two teams of five players face off to achieve victory. Players can choose from a pool of over 140 different champions.
	         Each champion has different playstyles and abilities. There are multiple game modes and maps, but the most common mode is played on the map Summoner’s Rift.</p>

            <div class="images">
            <figure>
                <img src="../../resources/images/help/SRift.png" style="width: 35vw; min-width: 330px;" />
                <div style='width: 720px; text-align: center;'><small>Summoner’s Rift. The bottom left side is the Blue side and the top right is the Red side.</small></div>
            </figure>
            </div>

            <h1><br></br>Goal</h1>
            <p>The goal of the game is to destroy the enemy team’s Nexus which is at the heart of the enemy base and is protected by towers, minions, and the enemy team.</p>

            <div class="images">
            <figure>
                <img src="../../resources/images/help/Nexus.png" style="width: 20vw; min-width: 330px;"/>
                <div style='width: 380px; text-align: center;'><small>The Nexus cannot be damaged until the towers protecting it are destroyed.</small></div>
            </figure>
            </div>

            <div class="images">
            <figure>
                <img src="../../resources/images/help/Tower.png" style="width: 20vw; min-width: 330px;"/>
                <div style='width: 380px; text-align: center;'><small>Towers shoot at enemies within range.</small></div>
            </figure>
            </div>

            <div class="images">
            <figure>
                <img src="../../resources/images/help/Minions.png" style="width: 20vw; min-width: 330px;" />
                <div style='width: 380px; text-align: center;'><small>Minions travel down lanes and attack towers.</small></div>
            </figure>
            </div>

            <h1><br></br>The Roles of the Rift</h1>

            <div class="images">
            <figure>
                <img src="../../resources/images/help/Lanes.png" style="width: 35vw; min-width: 330px;" />
            </figure>
            </div>

            <p><br></br>Summoner’s Rift is split into three lanes and the area between the lanes is called the jungle. There are five common roles that are played: Top, Jungle, Mid, Bot, Support.</p>

            <p><strong><br></br>Top:</strong> This position plays in the Top lane and is typically a 1v1 lane with strong solo fighters or durable tanks.</p>

            <p><strong>Jungle:</strong> This position spends most of their time in the jungle. Junglers kill monsters in the jungle, and take down more dangerous monsters like the Dragon and the Baron Nashor. Junglers can influence the other positions since they travel around the map. When they help their laners it is called a “gank”.</p>

            <p><strong>Mid:</strong> This position is played in the Mid lane, which is the center point of the map. Their job can be to play solo like Top lane or they can fight as a team. Mid is very diverse and a lot of Champions can be played in this lane.</p>

            <p><strong>Bot:</strong> The Bot lane is played with 2 positions, the Bot laner and the Support. Bot is a glass cannon type role, they do a lot of damage but have very low defense. Teams that protect this position early on will benefit from the high damage Bot laners can output later in the game. </p>

            <p><strong>Support:</strong> This position plays in the same lane as the Bot laner. The Support’s job is to keep their Bot laner alive, set up kills, and help the team.</p>


            <h1><br></br>Key Words</h1>

            <p><strong>Champions:</strong> These are the characters that can be played in the game. There are different classes of Champions, such as Tank, Fighter, Mage, Assassin, Marksman, Enchanter, and more. There are currently over 140 champions in the game and the number keeps growing.</p>

            <p><strong>Abilities:</strong> The main difference between Champions is their abilities. Champions have 3 basic abilities and one ultimate ability that unlocks at level 6. Players start the game with only one ability. As they get more Experience, they can unlock and power up their other abilities.</p>

            <p><strong>Experience:</strong> Killing minions, monsters, and enemy Champions gains you Experience, which will level you up. Players start the game at level 1 and there is a max level of 18.</p>

            <p><strong>Gold:</strong> Killing minions, monsters, and enemy Champions gives you different amounts of gold, with Champions being worth the most. The gold is used to buy Items.</p>

            <p><strong>Items:</strong> Items increase Champion’s stats and provide unique effects that make the Champions stronger. Usually, the more expensive an Item is, the stronger it is, but some Items work better on certain Champions than others.</p>

            <p><strong>Minions/Monsters:</strong> Minions spawn from the Nexus regularly. They split up evenly and go down each of the three lanes. Monsters spawn in specific areas in the Jungle on both sides of the map and respawn regularly after they are killed. The term for killing minions and monsters is Farming.</p>

            <p><strong>CS:</strong> Stands for Creep Score, it is a stat that combines the number of minions and monsters you have killed. A common measure of performance is CS per minute. This stat is less important for Jungle and Support since Support does not farm, but for Top, Mid, and Bot, a CS per minute of between 7 and 10 is considered very good.</p>
          </div>         
          </body>
          </html>
      )
  }
}

export default Help;

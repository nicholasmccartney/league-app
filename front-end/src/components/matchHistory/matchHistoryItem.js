import React, { Component } from "react";
import { runQuery } from "../../config/api";

//import "./matchHistory.css";

class MatchHistory extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      summonerName: null,
    };


    function creepChecker()
    {
        var csTip = "";

        if(cs< 4.22)
        {
            csTip = "Your farm is below most Bronze players! Try focusing on last hitting creeps";   
        }
        //Bronze
        else if (cs>=4.22 && cs < 4.61)
        {
            csTip = "Your farm is consistent with Bronze players.  Make sure you are using your abilities to farm!";

        }
        //Silver
        else if (cs>=4.61 && cs < 4.96)
        {
            csTip = "Your farm is consistent with Silver players.  Make sure you are zoning the enemy laner in order to get more farm.";
        }
        //Gold
        else if (cs>=4.96 && cs < 5.22)
        {
            csTip = "Your farm is consistent with Gold players! If you want to take it to the next level try doing some research on wave control!";

        }
        else if( cs >= 5.22 && cs <5.45)
        {
            csTip = "Congrats your farm is consistent with Platinum players! Keep up the good work!"
        }
        else if (cs>=5.45)
        {
          csTip="Congratulations! Your farm is consistent with Diamond players!  You made it!"
        }
    }

  }

  render() {
      var x = "test";
      var y = ".069"
      var z = "exp"
    return (
      <div>
        <h3>
            <table border ="1">
                <tr>
                    <th> Catagory </th>
                    <th> Your Data </th>
                </tr>

                <tr>
                    <td> Creep Score </td>
                    <td> {x} </td>
                </tr>

                <tr>
                    <td> Vision Score </td>
                    <td> {y} </td>
                </tr>

                <tr>
                    <td> Exp </td>
                    <td> {z} </td>
                </tr>
            </table>
            
        </h3>
      </div>
    );
  }
}

export default MatchHistory;


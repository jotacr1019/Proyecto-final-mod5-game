import "../text/index";
import { state } from "../../state";

export class Score extends HTMLElement {
    shadowDom = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        const currentState = state.getState()
        const gamesFromHistory = currentState.history;
        
        let myScore = 0;
        let computerScore = 0;

        gamesFromHistory.map((game)=>{
            const resu = state.whoWins(game.myGame, game.computerGame);
            if (resu === "winner"){
                myScore++;
            } else if(resu === "loser"){
                computerScore++;
            }
        })

        this.shadowDom.innerHTML = `
            <div style="
                    display: flex;
                    flex-direction: column;
                    // align-items: center;
                    border: solid 8px #000;
                    height: 200px;
                    padding: 8px 12px;
                    background-color: #fff;
            ">
                <custom-text variant="normal-high" style="
                                                    align-self: center;
                                                    margin-bottom: 20px;
                ">Marcador</custom-text>
                <custom-text variant="normal-short" style="
                                                    align-self: flex-end;
                ">${assingUserName(currentState)}: ${myScore}</custom-text>
                <custom-text variant="normal-short" style="
                                                    align-self: flex-end;
                ">Máquina: ${computerScore}</custom-text>
            </div>
        `
    };
}
customElements.define("custom-score", Score)

function assingUserName(currentState){
    let userNameInScore = "";
        if(currentState.userName !== ""){
            return userNameInScore = currentState.userName;
        } else {
            return userNameInScore = "Tú"
        }
};

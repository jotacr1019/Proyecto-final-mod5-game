import "../../components/button/index"
import "../../components/score/index"
import "../../components/label-win/index"
import "../../components/label-lose/index"
import "../../components/label-tie/index"
import { state } from "../../state"


export function initResults (params){
    const div = document.createElement("div");

    const currentState = state.getState(); 
    const resultInSubcribe = state.whoWins(currentState.currentGame.myGame, currentState.currentGame.computerGame);
    
    if(resultInSubcribe === "winner"){
        div.innerHTML = `
            <custom-label-win></custom-label-win>
            <custom-score class="score"></custom-score>
            <custom-button class="btn" label="Volver a jugar"></custom-button>
            <custom-button class="btn-reset" label="Reiniciar puntaje"></custom-button>
            `
        div.className = "root-results-win";
    }

    if (resultInSubcribe === "loser"){
        div.innerHTML = `
            <custom-label-lose></custom-label-lose>
            <custom-score class="score"></custom-score>
            <custom-button class="btn" label="Volver a jugar"></custom-button>
            <custom-button class="btn-reset" label="Reiniciar puntaje"></custom-button>
            `
        div.className = "root-results-lose";
    }

    if(resultInSubcribe === "tied"){
        div.innerHTML = `
            <custom-label-tie></custom-label-tie>
            <custom-score class="score"></custom-score>
            <custom-button class="btn" label="Volver a jugar"></custom-button>
            <custom-button class="btn-reset" label="Reiniciar puntaje"></custom-button>
            `
        div.className = "root-results-tie";
    }

    const btnReset = div.querySelector(".btn-reset");
    btnReset?.addEventListener("click", ()=>{
        state.setState({currentGame: {myGame: "", computerGame: "" }, history:[], userName: ""})
        localStorage.removeItem("saved-game");
        params.goTo("/inicio")
    })
    
    const btnEl = div.querySelector(".btn");
    btnEl?.addEventListener("click", ()=>{
        params.goTo("/reglas")
    })
        
    return div;
}
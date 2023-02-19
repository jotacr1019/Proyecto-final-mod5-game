const imgOfGame = require("url:../../../src/assets/9ca51c26d4784ebc942633215453adda.png")
import { state } from "../../state"
import "../../components/button/index" 
import "../../components/text/index"
import "../../components/form/index"


export function initStart (params){
    const div = document.createElement("div");

    const currentState = state.getState();
    if (currentState.currentGame.myGame !== ""){
        div.innerHTML = `
            <custom-text class="text-welcome" variant="title">Piedra, Papel o Tijera</custom-text>
            <img class="img-welcome" src="${imgOfGame}" alt="imagen-juego-ppt">
            <custom-button class="button-welcome" label="Empezar"></custom-button>
            `
        div.className = "root-welcome-short";    
    } else {
        div.innerHTML = `
            <custom-text class="text-welcome" variant="title">Piedra, Papel o Tijera</custom-text>
            <img class="img-welcome" src="${imgOfGame}" alt="imagen-juego-ppt">
            <custom-form class="form-welcome"></custom-form>
            <custom-button class="button-welcome" label="Empezar"></custom-button>
            `
        div.className = "root-welcome-long";
    }

    const btnEl = div.querySelector(".button-welcome");
    if(btnEl){
        btnEl.addEventListener("click", ()=>{
            params.goTo("/reglas")
        })
    }

    return div;
}
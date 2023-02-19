import "../../components/button/index" 
import "../../components/text/index"
const imgOfGame = require("url:../../../src/assets/9ca51c26d4784ebc942633215453adda.png")


export function initRules (params){
    const div = document.createElement("div");

    div.innerHTML = `
        <custom-text class="text-rules" variant="body">Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
        <img class="img-rules" src="${imgOfGame}" alt="imagen-juego-ppt">
        <custom-button class="button" label="Jugar"></custom-button>
    `
    div.className = "root-rules";

    const btnEl = div.querySelector(".button");
    if(btnEl){
        btnEl.addEventListener("click", ()=>{
            setTimeout(function(){
                params.goTo("/jugadas")
            }, 400); 
        })
    }

    return div;
}
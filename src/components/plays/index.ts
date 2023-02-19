const paperImage = require("url:../../../src/assets/Untitled-paper.png")
const rockImage = require("url:../../../src/assets/Untitled-rock.png")
const scissorsImage = require("url:../../../src/assets/Untitled-scissors.png")
import { state } from "../../state";

export class Plays extends HTMLElement {
    shadowDom = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
            <div style="
                display:flex;
                align-items: center;
                gap: 8px;
                width: 100%;
                ">
                <div>
                    <img style="
                    width:100px;
                    height: 100px;
                    border-radius: 40px;
                    box-shadow: 5px 10px 10px hsl(240 25% 50% / 0.2);
                " class="img-paper" type="paper" src="${paperImage}" alt="imagen-paper">
                </div>
                <div>
                    <img  style="
                        width:98px;
                        height: 98px;
                        border-radius: 40px;
                        box-shadow: 5px 10px 10px hsl(240 25% 50% / 0.2);
                    " class="img-rock" type="rock" src="${rockImage}" alt="imagen-rock">
                </div>
                <div>
                    <img style="
                    width:100px;
                    height: 100px;
                    border-radius: 40px;
                    box-shadow: 5px 10px 10px hsl(240 25% 50% / 0.2);
                " class="img-scissors" type="scissors" src="${scissorsImage}" alt="imagen-scissors">
                </div>
            </div>
        `

        const imgPaper:any = this.shadowDom.querySelector(".img-paper");
        imgPaper?.addEventListener("click", ()=>{
            imgPaper.style.width = "150px";
            imgPaper.style.height = "150px";
            imgScissors.style.width = "70px";
            imgScissors.style.height = "70px";
            imgRock.style.width = "70px";
            imgRock.style.height = "70px";

            const computerPlay = Math.floor(Math.random() * 3) + 1;

            if (computerPlay === 1){
                state.setMove("paper", "rock")
            }
            if (computerPlay === 2){
                state.setMove("paper", "paper")
            }
            if (computerPlay === 3){
                state.setMove("paper", "scissors")
            }
        });

        const imgScissors:any = this.shadowDom.querySelector(".img-scissors");
        imgScissors?.addEventListener("click", ()=>{
            imgScissors.style.width = "150px";
            imgScissors.style.height = "150px";
            imgPaper.style.width = "70px";
            imgPaper.style.height = "70px";
            imgRock.style.width = "70px";
            imgRock.style.height = "70px";

            const computerPlay = Math.floor(Math.random() * 3) + 1;

            if (computerPlay === 1){
                state.setMove("scissors", "paper")
            }
            if (computerPlay === 2){
                state.setMove("scissors", "scissors")
            }
            if (computerPlay === 3){
                state.setMove("scissors", "rock")
            }
        });

        const imgRock: any = this.shadowDom.querySelector(".img-rock");
        imgRock?.addEventListener("click", ()=>{
            imgRock.style.width = "145px";
            imgRock.style.height = "145px";
            imgPaper.style.width = "70px";
            imgPaper.style.height = "70px";
            imgScissors.style.width = "70px";
            imgScissors.style.height = "70px";

            const computerPlay = Math.floor(Math.random() * 3) + 1;

            if (computerPlay === 1){
                state.setMove("rock", "scissors")
            }
            if (computerPlay === 2){
                state.setMove("rock", "rock")
            }
            if (computerPlay === 3){
                state.setMove("rock", "paper")
            }
        })
    };
}
customElements.define("custom-plays", Plays)
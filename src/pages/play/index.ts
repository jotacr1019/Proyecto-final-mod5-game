import { state } from "../../state"
import "../../components/button/index" 
import "../../components/text/index"
import "../../components/plays/index"
import "../../components/counter/index"

export function initPlays (params){
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="container">
            <custom-counter count="3" class="counter"></custom-counter>
        </div>
        <div class="progress-bar"></div>
        <custom-plays class="custom-plays"></custom-plays>
    `
    div.className = "root-play";

    const progressBar: any = div.querySelector(".progress-bar");
    progressBar.style.visibility = "hidden";

    const counterContent: any = div.querySelector(".counter");
    let counterAttribute: any = counterContent?.getAttribute("count");
    let countNumber: number = JSON.parse(counterAttribute);
    
    const interval = setInterval(function(){
        let newCountNumber = countNumber - 1;
        countNumber = newCountNumber;
        
        if (countNumber <= 0){
            clearInterval(interval)
            div.innerHTML = `
                <div class="container-choose">
                    <h3 class="choose-text">Por favor selecciona una opción antes de que pasen los 3 segundos</h3>
                </div>
                <custom-button label="De acuerdo" class="btn-choose"></custom-button>
            `
            div.className = "root-play-other";

            const rootOtherEl: any = document.querySelector(".root-play-other");
            rootOtherEl.style.animationDuration =  "2s";
            rootOtherEl.style.transitionTimingFunction =  "ease-in";
            rootOtherEl.style.animationFillMode = "both";
            rootOtherEl.style.animationName = "fadeIn";

            const btnChoose = div.querySelector(".btn-choose");
            btnChoose?.addEventListener("click", (e)=>{
                e.preventDefault();
                state.listeners = [];
                params.goTo("/reglas");
            })
        }
    }, 1500);

    state.subscribe(()=>{
        const lastState = state.getState()
        const resultOfWhoWins = state.whoWins(lastState.currentGame.myGame, lastState.currentGame.computerGame);
        
        if(resultOfWhoWins?.includes("winner") || resultOfWhoWins?.includes("loser") || resultOfWhoWins?.includes("tied")){
            div.innerHTML = `
                <custom-plays class="custom-plays-reverse" style="
                                                            transform: rotate(180deg);
                "></custom-plays>
                <div class="progress-bar"></div>
                <custom-plays class="custom-plays"></custom-plays>
            `
            div.className = "root-play-reverse";

            const rootEl: any = document.querySelector(".root-play-reverse");
            rootEl.style.animationDuration =  "3s";
            rootEl.style.transitionTimingFunction =  "ease-in";
            rootEl.style.animationFillMode = "both";
            rootEl.style.animationName = "fadeIn";

            const customPlaysEl: any = div.querySelector(".custom-plays")
            const shadowRootDeCustomPlays = customPlaysEl.shadowRoot;
            const childNodesDeCustomPlays: any = Array.from(shadowRootDeCustomPlays.childNodes);
            customPlaysEl.style.pointerEvents =  "none";

            const customPlaysReverseEl: any = div.querySelector(".custom-plays-reverse")
            const shadowRootDeCustomPlaysReverse = customPlaysReverseEl.shadowRoot;
            const childNodesDeCustomPlaysReverse: any = Array.from(shadowRootDeCustomPlaysReverse.childNodes);
            customPlaysReverseEl.style.pointerEvents =  "none";

            const scissorsEl = childNodesDeCustomPlays[1].querySelector(".img-scissors");
            const paperEl = childNodesDeCustomPlays[1].querySelector(".img-paper");
            const rockEl = childNodesDeCustomPlays[1].querySelector(".img-rock");

            const scissorsReverseEl = childNodesDeCustomPlaysReverse[1].querySelector(".img-scissors")
            const paperReverseEl = childNodesDeCustomPlaysReverse[1].querySelector(".img-paper");
            const rockReverseEl = childNodesDeCustomPlaysReverse[1].querySelector(".img-rock")
        
            if(lastState.currentGame.myGame === "scissors"){
                paperEl.style.opacity = "0.3";
                rockEl.style.opacity = "0.3";
                scissorsEl.style.width = "150px";
                scissorsEl.style.height = "150px";
                rockEl.style.width = "70px";
                rockEl.style.height = "70px";
                paperEl.style.width = "70px";
                paperEl.style.height = "70px";
            }

            if(lastState.currentGame.myGame === "paper"){
                scissorsEl.style.opacity = "0.3";
                rockEl.style.opacity = "0.3";
                paperEl.style.width = "150px";
                paperEl.style.height = "150px";
                rockEl.style.width = "70px";
                rockEl.style.height = "70px";
                scissorsEl.style.width = "70px";
                scissorsEl.style.height = "70px";
            }

            if(lastState.currentGame.myGame === "rock"){
                paperEl.style.opacity = "0.3";
                scissorsEl.style.opacity = "0.3";
                rockEl.style.width = "150px";
                rockEl.style.height = "150px";
                scissorsEl.style.width = "70px";
                scissorsEl.style.height = "70px";
                paperEl.style.width = "70px";
                paperEl.style.height = "70px";
            }

            if(lastState.currentGame.computerGame === "scissors"){
                paperReverseEl.style.opacity = "0.3";
                rockReverseEl.style.opacity = "0.3";
                scissorsReverseEl.style.width = "150px";
                scissorsReverseEl.style.height = "150px";
                rockReverseEl.style.width = "70px";
                rockReverseEl.style.height = "70px";
                paperReverseEl.style.width = "70px";
                paperReverseEl.style.height = "70px";
            }

            if(lastState.currentGame.computerGame === "paper"){
                scissorsReverseEl.style.opacity = "0.3";
                rockReverseEl.style.opacity = "0.3";
                paperReverseEl.style.width = "150px";
                paperReverseEl.style.height = "150px";
                rockReverseEl.style.width = "70px";
                rockReverseEl.style.height = "70px";
                scissorsReverseEl.style.width = "70px";
                scissorsReverseEl.style.height = "70px";
            }

            if(lastState.currentGame.computerGame === "rock"){
                scissorsReverseEl.style.opacity = "0.3";
                paperReverseEl.style.opacity = "0.3";
                rockReverseEl.style.width = "150px";
                rockReverseEl.style.height = "150px";
                paperReverseEl.style.width = "70px";
                paperReverseEl.style.height = "70px";
                scissorsReverseEl.style.width = "70px";
                scissorsReverseEl.style.height = "70px";
            }

            clearInterval(interval) 
        
            let newNumberForCount = 3;
            const intervalInside = setInterval(function(){
                let newCountInside = newNumberForCount - 1;
                newNumberForCount = newCountInside;
                if(newNumberForCount <= 0){
                    timerToRederect()
                    clearInterval(intervalInside)
                }
            }, 1000)
        }
    });

    function timerToRederect(){
        setTimeout(() => {
                params.goTo("/resultados")
        }, 1000);
    }

    return div;
}
type Plays = "rock" | "paper" | "scissors";

type Game = {
    myGame: Plays,
    computerGame: Plays
} 

const state = {
    data: {
        currentGame: { 
            myGame: "",
            computerGame: ""
        },
        history:[],
        userName: ""
    },

    listeners: [],

    getState(){
        return this.data;
    },

    setState(newState){
        this.data = newState;
        for (const cb of this.listeners){
            cb();
            this.listeners = [];
        }
        localStorage.setItem("saved-game", JSON.stringify(newState));
    },

    subscribe(callBack: (any)=>any){
        this.listeners.push(callBack);
    },

    initOfHistory(){
        const dataOfHistory: any = localStorage.getItem("saved-game");
        if(dataOfHistory !== null){
            this.setState(JSON.parse(dataOfHistory))
        }   
    },

    pushToHistory(game: Game){
        const currentState = this.getState();
        currentState.history.push(game);
        this.setState(currentState);
    },

    setMove(myMove: Plays, computerMove: Plays){
        const currentState = this.getState();
        currentState.currentGame.myGame = myMove;
        currentState.currentGame.computerGame = computerMove;
        this.setState(currentState)
        this.pushToHistory({myGame: myMove, computerGame: computerMove})
    },

    whoWins(myPlay: Plays, computerPlay: Plays){
        const winner = "winner";
        const loser = "loser";
        const tied = "tied";
        
        const wonWithScissors: boolean = myPlay === "scissors" && computerPlay === "paper";
        const wonWithPaper: boolean = myPlay === "paper" && computerPlay === "rock";
        const wonWithRock: boolean = myPlay === "rock" && computerPlay === "scissors";

        const lostWithScissors: boolean = myPlay === "scissors" && computerPlay === "rock";
        const lostWithPaper: boolean = myPlay === "paper" && computerPlay === "scissors";
        const lostWithRock: boolean = myPlay === "rock" && computerPlay === "paper";

        const tiedWithScissors: boolean = myPlay === "scissors" && computerPlay === "scissors";
        const tiedWithPaper: boolean = myPlay === "paper" && computerPlay === "paper";
        const tiedWithRock: boolean = myPlay === "rock" && computerPlay === "rock";

        const victory: boolean = [wonWithScissors, wonWithRock, wonWithPaper].includes(true);
        const defeat: boolean = [lostWithScissors, lostWithRock, lostWithPaper].includes(true);
        const tie: boolean = [tiedWithScissors, tiedWithRock, tiedWithPaper].includes(true);

        if(victory){
            return winner;
        };
        if(defeat){
            return loser;
        };
        if(tie){
            return tied;
        };
    },
}

export { state }
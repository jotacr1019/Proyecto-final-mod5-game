type Plays = "rock" | "paper" | "scissors";

type Game = {
    myGame: Plays;
    computerGame: Plays;
};

const state = {
    data: {
        currentGame: {
            myGame: "",
            computerGame: "",
        },
        history: [],
        userName: "",
    },

    listeners: [],

    getState() {
        return this.data;
    },

    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
            this.listeners = [];
        }
        localStorage.setItem("saved-game", JSON.stringify(newState));
    },

    subscribe(callBack: (any) => any) {
        this.listeners.push(callBack);
    },

    initOfHistory() {
        const dataOfHistory: any = localStorage.getItem("saved-game");
        if (dataOfHistory !== null) {
            this.setState(JSON.parse(dataOfHistory));
        }
    },

    pushToHistory(game: Game) {
        const currentState = this.getState();
        currentState.history.push(game);
        this.setState(currentState);
    },

    setMove(myMove: Plays, computerMove: Plays) {
        const currentState = this.getState();
        currentState.currentGame.myGame = myMove;
        currentState.currentGame.computerGame = computerMove;
        this.setState(currentState);
        this.pushToHistory({ myGame: myMove, computerGame: computerMove });
    },

    whoWins(myPlay: Plays, computerPlay: Plays) {
        const winner = "winner";
        const loser = "loser";
        const tied = "tied";

        const gameRules = {
            paper: {
                paper: tied,
                rock: winner,
                scissors: loser,
            },
            rock: {
                scissors: winner,
                rock: tied,
                paper: loser,
            },
            scissors: {
                paper: winner,
                scissors: tied,
                rock: loser,
            },
        };

        return gameRules[myPlay][computerPlay];
    },
};

export { state };

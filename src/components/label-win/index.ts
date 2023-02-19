export class LabelWin extends HTMLElement {
    shadowDom = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
            <div style="
                    border: solid 8px #000;
                    background-color: var(--color-ganador);
                    ">
                <h2 style="
                        color: #fff;
                        font-size: 3.4rem;
                        margin: 0;
                        padding: 8px 15px;
                        text-align: center;
                ">Ganaste</h2>
            </div>
        `
    };
}
customElements.define("custom-label-win", LabelWin)
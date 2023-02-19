export class Button extends HTMLElement {
    shadowDom = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        const label = this.getAttribute("label");

        this.shadowDom.innerHTML = `
            <button style="
                font-family: 'Odibee Sans';
                font-weight: 400;
                font-size: 2.8rem;
                color: #fff;
                height: 75px;
                width: 100%;
                background-color: #006CFC;
                border: none;
                border-radius: 8px;
            ">${label}</button>
        `
    };
}
customElements.define("custom-button", Button)
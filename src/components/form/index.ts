const checkImage = require("url:../../../src/assets/user-check-solid.svg")
import { state } from "../../state";
import "../text/index";

export class Form extends HTMLElement {
    shadowDom = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
            <Form class="form" style="
                                display: flex;
                                flex-direction: column;
                                gap: 4px;
                                padding: 4px;
                                // border: solid 1px #000;
                                border-radius: 4px;
            ">
                <div style="
                        display:grid;
                        grid-template-columns: 70% 1fr;
                        gap: 5px;
                ">
                    <input type="text" name="text" placeholder="Ingresa tu nombre" style="
                                                                                    font-size: 1.2rem;
                                                                                    height: 40px;
                                                                                    padding: 0 8px;
                                                                                    color: var(--color-principal);
                                                                                    background-color: #e1f3f0;
                                                                                    border: 1px solid #000;
                                                                                    border-radius: 8px;
                    "></input>
                    <button style="
                                font-size: 1.1rem;
                                height: 42px;
                                color: #fff;
                                background-color: #006CFC;
                                border: none;
                                border-radius: 8px;
                    ">Agregar</button>
                </div>
            </Form>
        `

        const formEl = this.shadowDom.querySelector(".form");
        formEl?.addEventListener("submit", (e)=>{
            e.preventDefault();
            const f = e.target as any;
            const value = f.text.value;
            if (value !== ""){
                state.setState({
                    ...state.getState(),
                    userName : value,
                })
            };
            
            if (value !== ""){
                this.shadowDom.innerHTML = `
                    <div style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 8px;
                            height: 50px;
                    ">
                        <img src="${checkImage}" style="
                                                    width: 32px;
                                                    height: 32px;
                        ">
                        <h3 style="
                                font-size: 1.8rem;
                                margin: 0;
                                color: var(--color-principal);
                        ">Nombre guardado</h3>
                    </div>
                `
            }
        })
    };
}
customElements.define("custom-form", Form)
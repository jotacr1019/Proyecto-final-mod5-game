function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},o=t.parcelRequire3540;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequire3540=o),o.register("27Lyk",(function(t,n){var s,o;e(t.exports,"register",(()=>s),(e=>s=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var r={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.ca3efc57.js","iAF4K":"9ca51c26d4784ebc942633215453adda.3397d183.png","bpT3q":"user-check-solid.d592f49b.svg","5B1w3":"Untitled-paper.931f838e.png","4c0hM":"Untitled-rock.cd9f0207.png","3oK2w":"Untitled-scissors.eb1a5ce3.png"}'));class r extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=this.getAttribute("label");this.shadowDom.innerHTML=`\n            <button style="\n                font-family: 'Odibee Sans';\n                font-weight: 400;\n                font-size: 2.8rem;\n                color: #fff;\n                height: 75px;\n                width: 100%;\n                background-color: #006CFC;\n                border: none;\n                border-radius: 8px;\n            ">${e}</button>\n        `}}customElements.define("custom-button",r);class i extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=this.getAttribute("variant")||"body",n=document.createElement("span"),s=document.createElement("style");s.innerHTML="\n            .title{\n                font-family: 'Lora';\n                font-size: 4.8rem;\n                font-weight: 700;\n            }\n            .body{\n                font-family: 'Lora';\n                font-size: 2.5rem;\n                font-weight: 600;\n            }\n            .normal-high{\n                font-family: 'Odibee Sans';\n                font-size: 3.4rem;\n                font-weight: 400;\n            }\n            .normal-short{\n                font-family: 'Odibee Sans';\n                font-size: 2.8rem;\n                font-weight: 400;\n            }\n        ",n.className=t,n.textContent=this.textContent,e.appendChild(s),e.appendChild(n)}}customElements.define("custom-text",i);const a={data:{currentGame:{myGame:"",computerGame:""},history:[],userName:""},listeners:[],getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e(),this.listeners=[];localStorage.setItem("saved-game",JSON.stringify(e))},subscribe(e){this.listeners.push(e)},initOfHistory(){const e=localStorage.getItem("saved-game");null!==e&&this.setState(JSON.parse(e))},pushToHistory(e){const t=this.getState();t.history.push(e),this.setState(t)},setMove(e,t){const n=this.getState();n.currentGame.myGame=e,n.currentGame.computerGame=t,this.setState(n),this.pushToHistory({myGame:e,computerGame:t})},whoWins(e,t){const n="scissors"===e&&"rock"===t,s="paper"===e&&"scissors"===t,o="rock"===e&&"paper"===t,r="scissors"===e&&"scissors"===t,i="paper"===e&&"paper"===t,a="rock"===e&&"rock"===t,c=["scissors"===e&&"paper"===t,"rock"===e&&"scissors"===t,"paper"===e&&"rock"===t].includes(!0),l=[n,o,s].includes(!0),m=[r,a,i].includes(!0);return c?"winner":l?"loser":m?"tied":void 0}};var c;c=new URL(o("27Lyk").resolve("bpT3q"),import.meta.url).toString();class l extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){this.shadowDom.innerHTML='\n            <Form class="form" style="\n                                display: flex;\n                                flex-direction: column;\n                                gap: 4px;\n                                padding: 4px;\n                                // border: solid 1px #000;\n                                border-radius: 4px;\n            ">\n                <div style="\n                        display:grid;\n                        grid-template-columns: 70% 1fr;\n                        gap: 5px;\n                ">\n                    <input type="text" name="text" placeholder="Ingresa tu nombre" style="\n                                                                                    font-size: 1.2rem;\n                                                                                    height: 40px;\n                                                                                    padding: 0 8px;\n                                                                                    color: var(--color-principal);\n                                                                                    background-color: #e1f3f0;\n                                                                                    border: 1px solid #000;\n                                                                                    border-radius: 8px;\n                    "></input>\n                    <button style="\n                                font-size: 1.1rem;\n                                height: 42px;\n                                color: #fff;\n                                background-color: #006CFC;\n                                border: none;\n                                border-radius: 8px;\n                    ">Agregar</button>\n                </div>\n            </Form>\n        ';this.shadowDom.querySelector(".form")?.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.text.value;""!==t&&a.setState({...a.getState(),userName:t}),""!==t&&(this.shadowDom.innerHTML=`\n                    <div style="\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                            gap: 8px;\n                            height: 50px;\n                    ">\n                        <img src="${c}" style="\n                                                    width: 32px;\n                                                    height: 32px;\n                        ">\n                        <h3 style="\n                                font-size: 1.8rem;\n                                margin: 0;\n                                color: var(--color-principal);\n                        ">Nombre guardado</h3>\n                    </div>\n                `)}))}}customElements.define("custom-form",l);var m={};function d(e){const t=document.createElement("div");""!==a.getState().currentGame.myGame?(t.innerHTML=`\n            <custom-text class="text-welcome" variant="title">Piedra, Papel o Tijera</custom-text>\n            <img class="img-welcome" src="${m}" alt="imagen-juego-ppt">\n            <custom-button class="button-welcome" label="Empezar"></custom-button>\n            `,t.className="root-welcome-short"):(t.innerHTML=`\n            <custom-text class="text-welcome" variant="title">Piedra, Papel o Tijera</custom-text>\n            <img class="img-welcome" src="${m}" alt="imagen-juego-ppt">\n            <custom-form class="form-welcome"></custom-form>\n            <custom-button class="button-welcome" label="Empezar"></custom-button>\n            `,t.className="root-welcome-long");const n=t.querySelector(".button-welcome");return n&&n.addEventListener("click",(()=>{e.goTo("/reglas")})),t}function u(e){const t=document.createElement("div");t.innerHTML=`\n        <custom-text class="text-rules" variant="body">Presioná jugar\n            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        <img class="img-rules" src="${m}" alt="imagen-juego-ppt">\n        <custom-button class="button" label="Jugar"></custom-button>\n    `,t.className="root-rules";const n=t.querySelector(".button");return n&&n.addEventListener("click",(()=>{setTimeout((function(){e.goTo("/jugadas")}),400)})),t}m=new URL(o("27Lyk").resolve("iAF4K"),import.meta.url).toString();var p;p=new URL(o("27Lyk").resolve("5B1w3"),import.meta.url).toString();var h;h=new URL(o("27Lyk").resolve("4c0hM"),import.meta.url).toString();var y;y=new URL(o("27Lyk").resolve("3oK2w"),import.meta.url).toString();class g extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){this.shadowDom.innerHTML=`\n            <div style="\n                display:flex;\n                align-items: center;\n                gap: 8px;\n                width: 100%;\n                ">\n                <div>\n                    <img style="\n                    width:100px;\n                    height: 100px;\n                    border-radius: 40px;\n                    box-shadow: 5px 10px 10px hsl(240 25% 50% / 0.2);\n                " class="img-paper" type="paper" src="${p}" alt="imagen-paper">\n                </div>\n                <div>\n                    <img  style="\n                        width:98px;\n                        height: 98px;\n                        border-radius: 40px;\n                        box-shadow: 5px 10px 10px hsl(240 25% 50% / 0.2);\n                    " class="img-rock" type="rock" src="${h}" alt="imagen-rock">\n                </div>\n                <div>\n                    <img style="\n                    width:100px;\n                    height: 100px;\n                    border-radius: 40px;\n                    box-shadow: 5px 10px 10px hsl(240 25% 50% / 0.2);\n                " class="img-scissors" type="scissors" src="${y}" alt="imagen-scissors">\n                </div>\n            </div>\n        `;const e=this.shadowDom.querySelector(".img-paper");e?.addEventListener("click",(()=>{e.style.width="150px",e.style.height="150px",t.style.width="70px",t.style.height="70px",n.style.width="70px",n.style.height="70px";const s=Math.floor(3*Math.random())+1;1===s&&a.setMove("paper","rock"),2===s&&a.setMove("paper","paper"),3===s&&a.setMove("paper","scissors")}));const t=this.shadowDom.querySelector(".img-scissors");t?.addEventListener("click",(()=>{t.style.width="150px",t.style.height="150px",e.style.width="70px",e.style.height="70px",n.style.width="70px",n.style.height="70px";const s=Math.floor(3*Math.random())+1;1===s&&a.setMove("scissors","paper"),2===s&&a.setMove("scissors","scissors"),3===s&&a.setMove("scissors","rock")}));const n=this.shadowDom.querySelector(".img-rock");n?.addEventListener("click",(()=>{n.style.width="145px",n.style.height="145px",e.style.width="70px",e.style.height="70px",t.style.width="70px",t.style.height="70px";const s=Math.floor(3*Math.random())+1;1===s&&a.setMove("rock","scissors"),2===s&&a.setMove("rock","rock"),3===s&&a.setMove("rock","paper")}))}}customElements.define("custom-plays",g);class x extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){this.shadowDom.innerHTML='\n            <h2 class="counter" style="\n                                font-family: \'Odibee Sans\';\n                                font-size: 8rem;\n                                font-weight: 700;\n                                margin: 0;\n            ">3</h2>\n        ';const e=this.shadowDom.querySelector(".counter"),t=setInterval((function(){e.addEventListener("change",(()=>{e.textContent=e.textContent})),e.textContent--,e.textContent<=1&&clearInterval(t)}),1500)}}function f(e){const t=document.createElement("div");t.innerHTML='\n        <div class="container">\n            <custom-counter count="3" class="counter"></custom-counter>\n        </div>\n        <div class="progress-bar"></div>\n        <custom-plays class="custom-plays"></custom-plays>\n    ',t.className="root-play";t.querySelector(".progress-bar").style.visibility="hidden";let n=t.querySelector(".counter")?.getAttribute("count"),s=JSON.parse(n);const o=setInterval((function(){if(s=s-1,s<=0){clearInterval(o),t.innerHTML='\n                <div class="container-choose">\n                    <h3 class="choose-text">Por favor selecciona una opción antes de que pasen los 3 segundos</h3>\n                </div>\n                <custom-button label="De acuerdo" class="btn-choose"></custom-button>\n            ',t.className="root-play-other";const n=document.querySelector(".root-play-other");n.style.animationDuration="2s",n.style.transitionTimingFunction="ease-in",n.style.animationFillMode="both",n.style.animationName="fadeIn";t.querySelector(".btn-choose")?.addEventListener("click",(t=>{t.preventDefault(),a.listeners=[],e.goTo("/reglas")}))}}),1500);return a.subscribe((()=>{const n=a.getState(),s=a.whoWins(n.currentGame.myGame,n.currentGame.computerGame);if(s?.includes("winner")||s?.includes("loser")||s?.includes("tied")){t.innerHTML='\n                <custom-plays class="custom-plays-reverse" style="\n                                                            transform: rotate(180deg);\n                "></custom-plays>\n                <div class="progress-bar"></div>\n                <custom-plays class="custom-plays"></custom-plays>\n            ',t.className="root-play-reverse";const s=document.querySelector(".root-play-reverse");s.style.animationDuration="3s",s.style.transitionTimingFunction="ease-in",s.style.animationFillMode="both",s.style.animationName="fadeIn";const r=t.querySelector(".custom-plays"),i=r.shadowRoot,a=Array.from(i.childNodes);r.style.pointerEvents="none";const c=t.querySelector(".custom-plays-reverse"),l=c.shadowRoot,m=Array.from(l.childNodes);c.style.pointerEvents="none";const d=a[1].querySelector(".img-scissors"),u=a[1].querySelector(".img-paper"),p=a[1].querySelector(".img-rock"),h=m[1].querySelector(".img-scissors"),y=m[1].querySelector(".img-paper"),g=m[1].querySelector(".img-rock");"scissors"===n.currentGame.myGame&&(u.style.opacity="0.3",p.style.opacity="0.3",d.style.width="150px",d.style.height="150px",p.style.width="70px",p.style.height="70px",u.style.width="70px",u.style.height="70px"),"paper"===n.currentGame.myGame&&(d.style.opacity="0.3",p.style.opacity="0.3",u.style.width="150px",u.style.height="150px",p.style.width="70px",p.style.height="70px",d.style.width="70px",d.style.height="70px"),"rock"===n.currentGame.myGame&&(u.style.opacity="0.3",d.style.opacity="0.3",p.style.width="150px",p.style.height="150px",d.style.width="70px",d.style.height="70px",u.style.width="70px",u.style.height="70px"),"scissors"===n.currentGame.computerGame&&(y.style.opacity="0.3",g.style.opacity="0.3",h.style.width="150px",h.style.height="150px",g.style.width="70px",g.style.height="70px",y.style.width="70px",y.style.height="70px"),"paper"===n.currentGame.computerGame&&(h.style.opacity="0.3",g.style.opacity="0.3",y.style.width="150px",y.style.height="150px",g.style.width="70px",g.style.height="70px",h.style.width="70px",h.style.height="70px"),"rock"===n.currentGame.computerGame&&(h.style.opacity="0.3",y.style.opacity="0.3",g.style.width="150px",g.style.height="150px",y.style.width="70px",y.style.height="70px",h.style.width="70px",h.style.height="70px"),clearInterval(o);let x=3;const f=setInterval((function(){x=x-1,x<=0&&(setTimeout((()=>{e.goTo("/resultados")}),1e3),clearInterval(f))}),1e3)}})),t}customElements.define("custom-counter",x);class b extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=a.getState(),t=e.history;let n=0,s=0;t.map((e=>{const t=a.whoWins(e.myGame,e.computerGame);"winner"===t?n++:"loser"===t&&s++})),this.shadowDom.innerHTML=`\n            <div style="\n                    display: flex;\n                    flex-direction: column;\n                    // align-items: center;\n                    border: solid 8px #000;\n                    height: 200px;\n                    padding: 8px 12px;\n                    background-color: #fff;\n            ">\n                <custom-text variant="normal-high" style="\n                                                    align-self: center;\n                                                    margin-bottom: 20px;\n                ">Marcador</custom-text>\n                <custom-text variant="normal-short" style="\n                                                    align-self: flex-end;\n                ">${function(e){return""!==e.userName?e.userName:"Tú"}(e)}: ${n}</custom-text>\n                <custom-text variant="normal-short" style="\n                                                    align-self: flex-end;\n                ">Máquina: ${s}</custom-text>\n            </div>\n        `}}customElements.define("custom-score",b);class w extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){this.shadowDom.innerHTML='\n            <div style="\n                    border: solid 8px #000;\n                    background-color: var(--color-ganador);\n                    ">\n                <h2 style="\n                        color: #fff;\n                        font-size: 3.4rem;\n                        margin: 0;\n                        padding: 8px 15px;\n                        text-align: center;\n                ">Ganaste</h2>\n            </div>\n        '}}customElements.define("custom-label-win",w);class v extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){this.shadowDom.innerHTML='\n            <div style="\n                    border: solid 8px #000;\n                    background-color: var(--color-perdedor);\n                    ">\n                <h2 style="\n                        color: #fff;\n                        font-size: 3.4rem;\n                        margin: 0;\n                        padding: 8px 15px;\n                        text-align: center;\n                ">Perdiste</h2>\n            </div>\n        '}}customElements.define("custom-label-lose",v);class S extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){this.shadowDom.innerHTML='\n            <div style="\n                    border: solid 8px #000;\n                    background-color: var(--color-empate);\n                    ">\n                <h2 style="\n                        color: #fff;\n                        font-size: 3.4rem;\n                        margin: 0;\n                        padding: 8px 15px;\n                        text-align: center;\n                ">Empataste</h2>\n            </div>\n        '}}function L(e){const t=document.createElement("div"),n=a.getState(),s=a.whoWins(n.currentGame.myGame,n.currentGame.computerGame);"winner"===s&&(t.innerHTML='\n            <custom-label-win></custom-label-win>\n            <custom-score class="score"></custom-score>\n            <custom-button class="btn" label="Volver a jugar"></custom-button>\n            <custom-button class="btn-reset" label="Reiniciar puntaje"></custom-button>\n            ',t.className="root-results-win"),"loser"===s&&(t.innerHTML='\n            <custom-label-lose></custom-label-lose>\n            <custom-score class="score"></custom-score>\n            <custom-button class="btn" label="Volver a jugar"></custom-button>\n            <custom-button class="btn-reset" label="Reiniciar puntaje"></custom-button>\n            ',t.className="root-results-lose"),"tied"===s&&(t.innerHTML='\n            <custom-label-tie></custom-label-tie>\n            <custom-score class="score"></custom-score>\n            <custom-button class="btn" label="Volver a jugar"></custom-button>\n            <custom-button class="btn-reset" label="Reiniciar puntaje"></custom-button>\n            ',t.className="root-results-tie");t.querySelector(".btn-reset")?.addEventListener("click",(()=>{a.setState({currentGame:{myGame:"",computerGame:""},history:[],userName:""}),localStorage.removeItem("saved-game"),e.goTo("/inicio")}));return t.querySelector(".btn")?.addEventListener("click",(()=>{e.goTo("/reglas")})),t}customElements.define("custom-label-tie",S);const M="/Proyecto-final-mod5-game";function T(){return location.host.includes("github.io")}function E(e){function t(e){const t=T()?M+e:e;history.pushState({},"",t),n(t)}function n(n){const s=T()?n.replace(M,""):n,o=[{path:/\/inicio/,component:d},{path:/\/reglas/,component:u},{path:/\/jugadas/,component:f},{path:/\/resultados/,component:L}];for(const n of o)if(n.path.test(s)){const s=n.component({goTo:t});e?.firstChild&&e.firstChild.remove(),e?.appendChild(s)}}"/"===location.pathname?t("/inicio"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}!function(){a.initOfHistory();E(document.querySelector(".principal-container"))}();
//# sourceMappingURL=index.ca3efc57.js.map

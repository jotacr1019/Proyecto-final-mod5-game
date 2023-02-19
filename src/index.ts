import "./components/button" 
import "./components/text"
import { initRouter } from "./router"
import { state } from "./state"

(function(){
    state.initOfHistory() 
    const containerEl = document.querySelector(".principal-container");
    initRouter(containerEl);
})()
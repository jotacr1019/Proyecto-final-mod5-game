import { initStart } from "./pages/welcome/index";
import { initRules } from "./pages/rules/index"
import { initPlays } from "./pages/play/index"
import { initResults } from "./pages/results/index"

const BASE_PATH = "/Proyecto-final-mod5-game";

function isGithubPages() {
    return location.host.includes("github.io");
}

function initRouter (container: Element | null){
    function goTo(path){
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route){
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        const routes = [
            {
                path: /\/inicio/,
                component: initStart
            },
            {
                path: /\/reglas/,
                component: initRules
            },
            {
                path: /\/jugadas/,
                component: initPlays
            },
            {
                path: /\/resultados/,
                component: initResults
            }
        ];
        for(const r of routes){
            if(r.path.test(route)){
                
                const el = r.component({ goTo: goTo });
                if(container?.firstChild){
                    container.firstChild.remove();
                }
                container?.appendChild(el);
            }
        }
    }
    if(location.pathname === "/"){
        goTo("/inicio")
    } else {
        handleRoute(location.pathname);
    }
    window.onpopstate = function (){
        handleRoute(location.pathname);
    }
}

export { initRouter }
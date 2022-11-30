import Home from "./views/Home.js";
import Contacts from "./views/Contacts.js";
import About from "./views/About.js";
import Events from "./views/Events.js";
import Shop from "./views/Shop.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};
// casts the required page from url
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


function loadHtml(id ,filename){
    console.log(`${filename}`);
    let xhttp;
    let file = filename;
    let element = document.getElementById(id);
    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4) {
                if (this.status == 200) {
                    element.innerHtml = this.responseText;}
                if (this.status == 404) {
                    element.innerHtml = "<h1>.Not Found here</h1>";}
            }
        }
        console.log(xhttp)
        var to = xhttp.open("GET", `static/views/${file}`, true);
        console.log(to);
        xhttp.send();
        return;
    }
    
    
};

const router = async () => {
    const routes = [
        { path: "/", view: "home.html" },
        { path: "/about", view: "about.html" },
        { path: "/shop/:id", view: "shop.html" },
        { path: "/events", view: "events.html" },
        { path: "/contact", view: "contact.html" },
        
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    
    
   return loadHtml("app", `${routes.view}`);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
            
        }
        window.onload = () =>{
            window.preventDefault();
            location.reload();
            return false;
        };
    });
   
      
      router();
        
});
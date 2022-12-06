import Home  from "/static/js/views/Home.js";
import About from "/static/js/views/About.js";
import Shop from "/static/js/views/Shop.js";
import Events from "/static/js/views/Events.js";
import Contacts from "/static/js/views/Contacts.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "", view: Home },
        { path: "/", view: Home },
        { path: "/about", view: About },
        { path: "/shop", view: Shop },
    { path: "/events", view: Events },
    { path: "/contacts", view: Contacts }
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

    const view = new match.route.view(getParams(match));
    var newUrl =  await view.getHtml();
    //document.getElementById("app").innerHTML = await view.getHtml();

    const html = await fetch(newUrl).then((Response)  => Response.text())
    var srcLink = await view.getJs();
    var script = document.getElementById('script');
    script.setAttribute('src',srcLink )
    document.getElementById('content').innerHTML = html;
   

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            //e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
}); 
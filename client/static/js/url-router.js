
console.log("Conncted");
const urlPageTitle = "Home";

document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("ul li a")){
        return;
    }
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        views: "/static/views/404.php",
        title: urlPageTitle,
        description: "Page not Found",
    },
    "/": {
        views: "/static/views/home.php",
        title: urlPageTitle,
        description: "This is Home Page",
    },
    "/about": {
        views: "/static/views/about.php",
        title:urlPageTitle,
        description: "This is the code hub  page",
    },
    "/shop": {
        views: "/static/views/shop.php",
        title:urlPageTitle,
        description: "This is About us Page",
    },
    
    "/events": {
        views: "/static/views/events.php",
        title: urlPageTitle,
        description: "This is the code hub  page",
    },
    "/contact": {
        views: "/static/views/contact.php",
        title: urlPageTitle,
        description: "This is the code hub  page",
    },
    

};

console.log(urlRoutes);

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();

}



const urlLocationHandler = async ()=> {
    
    const location = window.location.pathname;
    if (location.length == 0){
        location = "/";
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.views).then((Response)  => Response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]')

}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();
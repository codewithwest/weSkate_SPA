console.log('Running')
// get the flex container
var shopLayoutCreator = document.getElementById("shop-layout");
for (var i = 0; i < 2; i++){
    // create 2 divs for the left and right nav and display
    var navAndDisplay = document.createElement('div');
    navAndDisplay.setAttribute("id", `navAndDisplay${i}`);
    navAndDisplay.setAttribute("class", `navAndDisplay${i}`);
    //add the divs to the container
    shopLayoutCreator.appendChild(navAndDisplay);
}
var mechCategories = ['SkateBoards' ,'T-Shirts','Hoodies', 'Knits', 'Pants', 'Shorts',]; 
for (let li = 0; li < mechCategories.length; li++) {
    // get the left side nav bar
    var leftNav = document.getElementById("navAndDisplay0");
    //create new list div
    var navListItems = document.createElement('div');
    navListItems.setAttribute("id", "navListItems");
    navListItems.setAttribute("class", `navListItems${i}`);
    // create links
    var linkListItem = document.createElement('a');
    linkListItem.setAttribute("id", "linkListItem");
    linkListItem.setAttribute("class", `linkListItem${i}`);
    linkListItem.setAttribute("href", `#`);
    //create the texts to pass in'to the links
    var linkListItemNames = document.createElement("p");
    var linkListItemNamesText = document.createTextNode(`${mechCategories[li]}`);
    linkListItemNames.appendChild(linkListItemNamesText);
    linkListItem.appendChild(linkListItemNames);
    navListItems.appendChild(linkListItem);
    leftNav.appendChild(navListItems);
    //End of left Side Nav
}
// Right Side display layout
var rightSideDisplay = document.getElementById("navAndDisplay1")
// display layout container
var displayLayout =  document.createElement('div');
displayLayout.setAttribute("id", "displayLayout");
displayLayout.setAttribute("class", `displayLayout`);
rightSideDisplay.appendChild(displayLayout)
// layout nav div
var displayLayoutNavCon = document.createElement('div');
displayLayoutNavCon.setAttribute("id", "displayLayoutNavCo");
displayLayoutNavCon.setAttribute("class", `displayLayoutNavCo`);
var categories = ["SkateBoard","Decks", "wheels", "trucks", "bearing"];
for (let dli = 0; dli < categories.length; dli++) {
    //create list of links
    var createInList = document.createElement('li');
    var InListLink = document.createElement('a');
    var InLinkText = document.createTextNode(categories[dli]);
    //add text to link
    InListLink.appendChild(InLinkText);
    // add link to li parent
    createInList.appendChild(InListLink);
    //add list to div
    displayLayoutNavCon.appendChild(createInList);
}
displayLayout.appendChild(displayLayoutNavCon)
//layout body div
var displayLayoutBody = document.createElement('div');
displayLayoutBody.setAttribute("id", "displayLayoutBody");
displayLayoutBody.setAttribute("class", `displayLayoutBody`);
displayLayout.appendChild(displayLayoutBody);
console.log(displayLayoutBody);

//create flex container div
var flexCont = document.createElement('div');
flexCont.setAttribute("id", "flex-container");
flexCont.setAttribute("class", `flex-container`);
displayLayoutBody.appendChild(flexCont)
// Use add post to add products
function addEvents(){


var posts = ["one", "two","three","four","five","six","seven","eight","nine","ten","eleven","twelve",];
var postsDesc = [
    "Charity skate coming up this saturday  Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
    "Charity skate coming up this satureday Dec 13 2022",
];

//
    function elementEventAdd(){
        //create event cover div element
    for (let i = 0; i < posts.length ; i++) {
        var container = document.getElementById('flex-container');
        var event = document.createElement("div");
        event.setAttribute("id", "event");
        event.setAttribute("class", "event");
        event.style.backgroundImage="url(../assets/event1.jpg)";
        container.appendChild(event);
        //create an rsvp div and append 
        var eventContainer = document.getElementById('event');
        var rsvpContainer = document.createElement('div');
        rsvpContainer.setAttribute("id", `rsvp${i}`);
        rsvpContainer.setAttribute("class", "rsvp");
        event.appendChild(rsvpContainer);
        //Add Button to the rsvp div ellemnt
        var rsvpDiv = document.getElementById(`rsvp${i}`);
        var button = document.createElement("button")
        var buttonTextCreator = document.createElement("p")
        var buttonText = document.createTextNode("RSVP");
        buttonTextCreator.appendChild(buttonText);
        button.appendChild(buttonTextCreator);
        button.addEventListener('click', () => {
        alert("You have Succsefully registered");})
        rsvpDiv.appendChild(button);
        //Create eventName div
        var eventNameCreator = document.createElement('div');
        eventNameCreator.setAttribute("id", `event${i}`);
        eventNameCreator.setAttribute("class", "eventName");
        event.appendChild(eventNameCreator);
        var eventName = document.createElement('p');
        var name = document.createTextNode(posts[i]);
        eventName.appendChild(name);
        eventNameCreator.appendChild(eventName);
        //Create The Desc Div and Contents
        var eventDescCreator = document.createElement('div');
        eventDescCreator.setAttribute("id", `event${i}desc`);
        eventDescCreator.setAttribute("class", "eventdesc");
        event.appendChild(eventDescCreator);
        var eventDesc = document.createElement('p');
        var desc = document.createTextNode(postsDesc[i]);
        eventDesc.appendChild(desc);
        eventDescCreator.appendChild(eventDesc);    
        console.log(event)
        };
    };
elementEventAdd();

};   
addEvents();


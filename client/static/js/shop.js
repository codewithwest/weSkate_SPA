function divCreator(parentContainer, idNames,classNames){
    let container = parentContainer;
    let idName  = idNames;
    let className = classNames;
    var newContainer = document.getElementById(`${container}`);
    var divObj = document.createElement("div");
    divObj.setAttribute("id", `${idName}`);
    divObj.setAttribute("class", `${className}`);
    //divObj.style.backgroundImage="url(/frontend/static/assets/event1.jpg)";
    return newContainer.appendChild(divObj);
}




function addEvents(desiredSection, background){

    let sec = desiredSection;
    let behind = background
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
            var container = document.getElementById(sec);
            var event = document.createElement("div");
            event.setAttribute("id", "event");
            event.setAttribute("class", "event");
            event.style.backgroundImage=`url(/static/assets/${behind}.jpg)`;
            container.appendChild(event);
            /*
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
            */
            
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
           
            };
        };
    elementEventAdd();
    
    };  
    var skateCategories = ["SkateBoard","Decks", "wheels", "trucks", "bearing"];
    var shirtsCategories = ["Golf Shirt","Vests", "Crop Tops", "Tee"];
    var hoodiesCategories = ["Plain Branded","Emroided", "Printed"];
    var knitsCategories = ["double knit","light knit"];
    
    var pantsCategories = ["Trackpants","Sweat","slim fit"];
    var shortsCategories = ["Dri-Fit","cotton"];
    var cat = [skateCategories,shirtsCategories,hoodiesCategories,knitsCategories,pantsCategories,shortsCategories] 

    function addLinks(knownCategory, parentDiv){ 
    let parent = document.getElementById(parentDiv)
    for (let dli = 0; dli < knownCategory.length; dli++) {
        //create list of links
        var createInList = document.createElement('li');
        var InListLink = document.createElement('a');
        InListLink.setAttribute('id',`${knownCategory[dli]}`)
        InListLink.setAttribute('href',"#")
        
        var InLinkText = document.createTextNode(knownCategory[dli]);
        //add text to link
        InListLink.appendChild(InLinkText);
        // add link to li parent
        createInList.appendChild(InListLink);
        //add list to div
        parent.appendChild(createInList);
    }
    } 
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
    linkListItem.setAttribute("id", `${mechCategories[li]}`);
    linkListItem.setAttribute("class", `linkListItem`);
    linkListItem.setAttribute("href", `${mechCategories[li]}`);
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
// display layout container
var SkateBoard = document.getElementById('SkateBoards');
var Shirts = document.getElementById('T-Shirts');
var Hoodies = document.getElementById('Hoodies');
var Knits = document.getElementById('Knits');
var Pants = document.getElementById('Pants');
var Shorts = document.getElementById('Shorts');

divCreator('navAndDisplay1', 'displayLayout', 'displayLayout')
var rightDivCon = document.getElementById('displayLayout')
for (let rdiv = 0; rdiv < mechCategories.length; rdiv++) {
    divCreator('displayLayout', `${mechCategories[rdiv]}R`, 'sections')
}
console.log(rightDivCon)
//left nav clicked link check
function LinkClicked() {
SkateBoard.onclick = function(event) {
    event.preventDefault()
    document.getElementById('SkateBoardsR').style.display="block"
    document.getElementById('T-ShirtsR').style.display="none"
    document.getElementById( 'HoodiesR').style.display="none"
    document.getElementById('KnitsR').style.display="none"
    document.getElementById('PantsR').style.display="none"
    document.getElementById('ShortsR').style.display="none"
    
    }
Shirts.onclick = function(event) {
    event.preventDefault()
    document.getElementById('SkateBoardsR').style.display="none"
    document.getElementById('T-ShirtsR').style.display="block"
    document.getElementById('HoodiesR').style.display="none"
    document.getElementById('KnitsR').style.display="none"
    document.getElementById( 'PantsR').style.display="none"
    document.getElementById('ShortsR').style.display="none"
    
    }
Hoodies.onclick = function(event) {
    event.preventDefault()
    document.getElementById('SkateBoardsR').style.display="none"
    document.getElementById('T-ShirtsR').style.display="none"
    document.getElementById('HoodiesR').style.display="block"
    document.getElementById('KnitsR').style.display="none"
    document.getElementById( 'PantsR').style.display="none"
    document.getElementById('ShortsR').style.display="none"
    
    }
Knits.onclick = function(event) {
    event.preventDefault()
    document.getElementById('SkateBoardsR').style.display="none"
    document.getElementById('T-ShirtsR').style.display="none"
    document.getElementById('HoodiesR').style.display="none"
    document.getElementById('KnitsR').style.display="block"
    document.getElementById( 'PantsR').style.display="none"
    document.getElementById('ShortsR').style.display="none"
    
    }
Pants.onclick = function(event) {
    event.preventDefault()
    document.getElementById('SkateBoardsR').style.display="none"
    document.getElementById('T-ShirtsR').style.display="none"
    document.getElementById('HoodiesR').style.display="none"
    document.getElementById('KnitsR').style.display="none"
    document.getElementById( 'PantsR').style.display="block"
    document.getElementById('ShortsR').style.display="none"
    
    }
Shorts.onclick = function(event) {
    event.preventDefault()
    document.getElementById('SkateBoardsR').style.display="none"
    document.getElementById('T-ShirtsR').style.display="none"
    document.getElementById('HoodiesR').style.display="none"
    document.getElementById('KnitsR').style.display="none"
    document.getElementById( 'PantsR').style.display="none"
    document.getElementById('ShortsR').style.display="block"
    
    }

}
LinkClicked();

for (let nav = 0; nav < mechCategories.length; nav++) {
//nav Container
divCreator(`${mechCategories[nav]}R`,`displayLayoutNavCo${nav}`, 'displayLayoutNavCo')
var displayLayoutNavCon = document.getElementById(`displayLayoutNavCo${nav}`)
//The nav

//displaycontainer
divCreator(`${mechCategories[nav]}R`,`displayLayoutBody${nav}`, "displayLayoutBody")
//display flex-wrap container
//divCreator(`displayLayoutBody${nav}`, `flex-container${nav}`, 'flex-container')
//Events creator
//addEvents(`flex-container${nav}`, `event${nav}`)
}
//adding links
for (let linkIt = 0; linkIt < cat.length; linkIt++) {
    addLinks(cat[linkIt], `displayLayoutNavCo${linkIt}`)

}
for (let b = 0; b < cat[0].length; b++) {
    divCreator(`${mechCategories[0]}R`, `skateboard${b}`, 'sub-sections')
}
for (let b = 0; b < cat[1].length; b++) {
    divCreator(`${mechCategories[1]}R`, `shirts${b}`, 'sub-sections')
}
for (let b = 0; b < cat[2].length; b++) {
    divCreator(`${mechCategories[2]}R`, `hoodies${b}`, 'sub-sections')
}
for (let b = 0; b < cat[3].length; b++) {
    divCreator(`${mechCategories[3]}R`, `knits${b}`, 'sub-sections')
}
for (let b = 0; b < cat[4].length; b++) {
    divCreator(`${mechCategories[4]}R`, `pants${b}`, 'sub-sections')
}
for (let b = 0; b < cat[5].length; b++) {
    divCreator(`${mechCategories[5]}R`, `shorts${b}`, 'sub-sections')
}

function skateLinksCheck() {

let knownCategoryLinks0 = document.getElementById(`${skateCategories[0]}`)
let knownCategoryLinks1 = document.getElementById(`${skateCategories[1]}`)
let knownCategoryLinks2 = document.getElementById(`${skateCategories[2]}`)
let knownCategoryLinks3 = document.getElementById(`${skateCategories[3]}`)
let knownCategoryLinks4 = document.getElementById(`${skateCategories[4]}`)
knownCategoryLinks0.onclick = function(event){
        event.preventDefault()
        document.getElementById(`skateboard${0}`).style.display="block"
        document.getElementById(`skateboard${1}`).style.display="none"    
        document.getElementById(`skateboard${2}`).style.display="none"    
        document.getElementById(`skateboard${3}`).style.display="none"    
        document.getElementById(`skateboard${4}`).style.display="none"    
    
    }
    knownCategoryLinks1.onclick = function(event){
        event.preventDefault()
        document.getElementById(`skateboard${0}`).style.display="none"
        document.getElementById(`skateboard${1}`).style.display="block"    
        document.getElementById(`skateboard${2}`).style.display="none"    
        document.getElementById(`skateboard${3}`).style.display="none"    
        document.getElementById(`skateboard${4}`).style.display="none"    
    
    }
    knownCategoryLinks2.onclick = function(event){
        event.preventDefault()
        document.getElementById(`skateboard${0}`).style.display="none"
        document.getElementById(`skateboard${1}`).style.display="none"    
        document.getElementById(`skateboard${2}`).style.display="block"    
        document.getElementById(`skateboard${3}`).style.display="none"    
        document.getElementById(`skateboard${4}`).style.display="none"    
    
    }
    knownCategoryLinks3.onclick = function(event){
        event.preventDefault()
        document.getElementById(`skateboard${0}`).style.display="none"
        document.getElementById(`skateboard${1}`).style.display="none"    
        document.getElementById(`skateboard${2}`).style.display="none"    
        document.getElementById(`skateboard${3}`).style.display="block"    
        document.getElementById(`skateboard${4}`).style.display="none"    
    
    } 
    knownCategoryLinks4.onclick = function(event){
        event.preventDefault()
        document.getElementById(`skateboard${0}`).style.display="none"
        document.getElementById(`skateboard${1}`).style.display="none"    
        document.getElementById(`skateboard${2}`).style.display="none"    
        document.getElementById(`skateboard${3}`).style.display="none"    
        document.getElementById(`skateboard${4}`).style.display="block"    
    
    }

    

}


function shirtsLinksCheck() {

    let knownCategoryLinks0 = document.getElementById(`${shirtsCategories[0]}`)
    let knownCategoryLinks1 = document.getElementById(`${shirtsCategories[1]}`)
    let knownCategoryLinks2 = document.getElementById(`${shirtsCategories[2]}`)
    let knownCategoryLinks3 = document.getElementById(`${shirtsCategories[3]}`)
   
    knownCategoryLinks0.onclick = function(event){
            event.preventDefault()
            document.getElementById(`shirts${0}`).style.display="block"
            document.getElementById(`shirts${1}`).style.display="none"    
            document.getElementById(`shirts${2}`).style.display="none"    
            document.getElementById(`shirts${3}`).style.display="none"    
            
        
        }
        knownCategoryLinks1.onclick = function(event){
            event.preventDefault()
            document.getElementById(`shirts${0}`).style.display="none"
            document.getElementById(`shirts${1}`).style.display="block"    
            document.getElementById(`shirts${2}`).style.display="none"    
            document.getElementById(`shirts${3}`).style.display="none"    
      
        
        }
        knownCategoryLinks2.onclick = function(event){
            event.preventDefault()
            document.getElementById(`shirts${0}`).style.display="none"
            document.getElementById(`shirts${1}`).style.display="none"    
            document.getElementById(`shirts${2}`).style.display="block"    
            document.getElementById(`shirts${3}`).style.display="none"    
               
        
        }
        knownCategoryLinks3.onclick = function(event){
            event.preventDefault()
            document.getElementById(`shirts${0}`).style.display="none"
            document.getElementById(`shirts${1}`).style.display="none"    
            document.getElementById(`shirts${2}`).style.display="none"    
            document.getElementById(`shirts${3}`).style.display="block"    
               
        
        } 
    }
function hoodiesLinksCheck() {

    let knownCategoryLinks0 = document.getElementById(`${hoodiesCategories[0]}`)
    let knownCategoryLinks1 = document.getElementById(`${hoodiesCategories[1]}`)
    let knownCategoryLinks2 = document.getElementById(`${hoodiesCategories[2]}`)
    
    
    knownCategoryLinks0.onclick = function(event){
            event.preventDefault()
            document.getElementById(`hoodies${0}`).style.display="block"
            document.getElementById(`hoodies${1}`).style.display="none"    
            document.getElementById(`hoodies${2}`).style.display="none"    
            
        
        }
        knownCategoryLinks1.onclick = function(event){
            event.preventDefault()
            document.getElementById(`hoodies${0}`).style.display="none"
            document.getElementById(`hoodies${1}`).style.display="block"    
            document.getElementById(`hoodies${2}`).style.display="none"    

        }
        knownCategoryLinks2.onclick = function(event){
            event.preventDefault()
            document.getElementById(`hoodies${0}`).style.display="none"
            document.getElementById(`hoodies${1}`).style.display="none"    
            document.getElementById(`hoodies${2}`).style.display="block"        
        }

    }
function knitsLinksCheck() {

let knownCategoryLinks0 = document.getElementById(`${knitsCategories[0]}`)
let knownCategoryLinks1 = document.getElementById(`${knitsCategories[1]}`)
knownCategoryLinks0.onclick = function(event){
        event.preventDefault()
        document.getElementById(`knits${0}`).style.display="block"
        document.getElementById(`knits${1}`).style.display="none"    

    }
    knownCategoryLinks1.onclick = function(event){
        event.preventDefault()
        document.getElementById(`knits${0}`).style.display="none"
        document.getElementById(`knits${1}`).style.display="block"    

    }
    

}
function pantsLinksCheck() {
    let knownCategoryLinks0 = document.getElementById(`${pantsCategories[0]}`)
    let knownCategoryLinks1 = document.getElementById(`${pantsCategories[1]}`)
    let knownCategoryLinks2 = document.getElementById(`${pantsCategories[2]}`)
    
    knownCategoryLinks0.onclick = function(event){
            event.preventDefault()
            document.getElementById(`pants${0}`).style.display="block"
            document.getElementById(`pants${1}`).style.display="none"    

        }
        knownCategoryLinks1.onclick = function(event){
            event.preventDefault()
            document.getElementById(`pants${0}`).style.display="none"
            document.getElementById(`pants${1}`).style.display="block"    

        }
        knownCategoryLinks2.onclick = function(event){
            event.preventDefault()
            document.getElementById(`pants${0}`).style.display="none"
            document.getElementById(`pants${1}`).style.display="none"    
            document.getElementById(`pants${2}`).style.display="block"    

        }

    }

function shortsLinksCheck() {
    let knownCategoryLinks0 = document.getElementById(`${shortsCategories[0]}`)
    let knownCategoryLinks1 = document.getElementById(`${shortsCategories[1]}`)
    knownCategoryLinks0.onclick = function(event){
            event.preventDefault()
            document.getElementById(`shorts${0}`).style.display="block"
            document.getElementById(`shorts${1}`).style.display="none"    

        }
        knownCategoryLinks1.onclick = function(event){
            event.preventDefault()
            document.getElementById(`shorts${0}`).style.display="none"
            document.getElementById(`shorts${1}`).style.display="block"    

        }
        

    }
    
skateLinksCheck();
shirtsLinksCheck()
hoodiesLinksCheck()
knitsLinksCheck()
pantsLinksCheck()
shortsLinksCheck()
//Add events attempt
for (let ind = 0; ind < mechCategories.length; ind++) {
   // addEvents(`flex-container${[ind]}`)

}

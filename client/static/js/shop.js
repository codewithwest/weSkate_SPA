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




    var skateCategories = ["SkateBoard","Decks", "wheels", "trucks", "bearing"];
    var shirtsCategories = ["half sleeve","Yoke neck", "Long sleeve Crew neck", "V-neck"];
    var hoodiesCategories = ["Pullover", "Zip Up", "Fitted", "Sleeveless", "Cropped"];
    var knitsCategories = ["double knit","pattern"];
    
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



function addProducts(desiredSection, background, proDescArray, proNameArray){

    let sec = desiredSection;
    let behind = background
    var postsDesc = proDescArray
    var posts = proNameArray
    
    
    
    //
        function elementEventAdd(){
            //create event cover div element
        for (let i = 0; i < posts.length ; i++) {
            var container = document.getElementById(sec);
            var event = document.createElement("div");
            event.setAttribute("id", "event");
            event.setAttribute("class", "event");
            event.style.backgroundImage=`url(/static/assets/${behind}${i}.jpg)`;
            container.appendChild(event);
            
           
            
            
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

             //create an rsvp div and append 
             var eventContainer = document.getElementById('event');
             var rsvpContainer = document.createElement('div');
             rsvpContainer.setAttribute("id", `rsvp${posts[i]}`);
             rsvpContainer.setAttribute("class", "rsvp");
             event.appendChild(rsvpContainer);
             //Add Button to the rsvp div ellemnt
             var rsvpDiv = document.getElementById(`rsvp${posts[i]}`);
             var button = document.createElement("button")
             button.setAttribute('id', `button${i}`)
             //button.setAttribute('type', 'Button')
             var buttonTextCreator = document.createElement("p")
             buttonTextCreator.setAttribute('id', `rsvp${posts[i]}`)
             var buttonText = document.createTextNode('Add to Cart');
             button.appendChild(buttonText);
             button.appendChild(buttonTextCreator);
             button.addEventListener('click', () => {
             alert("You have Succsefully registered");})
             /*
             button.addEventListener('mouseover', () => {
                var newbuttonTextCreator = document.createElement("p")
                 newbuttonTextCreator.setAttribute('id', `rsvp`)
                var newbuttonText = document.createTextNode(`Add to Cart`);
                newbuttonTextCreator.appendChild(newbuttonText)
                const element = document.getElementById(`button${i}`)
                element.replaceChild( newbuttonTextCreator,element.childNodes[0])
                //.innerHTML = 'Add to Cart'
              })
              */
             rsvpDiv.appendChild(button);
           
            };
        };
    elementEventAdd();
    
    };  
    //for skateboard
    //Types od skateboards and desc
    var skateNames = ['mini cruiser', 'Double-Kick Popsicle', 'Carve Skateboard', 'Classic Longboard Skateboard', 'Downhill Longboard Skateboard']
    var skateDesc = [
    'It is the perfect entry-level deck for young children but can also be used by intermediate skaters to cruise around town, pull off a few tricks, ride a bowl, or hit a park', 
    "It's the standard skateboard and the most popular and widely used design. It works well on skateparks, street skating, and on almost all types of riding. They\'re lightweight and a great option for those who are getting into skateboarding for the first time.",
    "The carve skateboard is a design that generates its own speed through effortless pumping.It was designed to mimic the surfboard\'s behavior on the face of the wave on flat ground.It\'s a great option for practicing turns and deep carves, but it also is a favorite plank for riding a bowl.",
    "The longboard is a long and stable skateboard shaped for casual cruising on the boardwalk, fun and laid-back long-distance rides, and skating faster on more or less steep hills.They\'re a good option for first-timers because they offer a large riding platform that makes it easy to learn how to balance.But they\'re also a great pick for skaters of all ages and experience levels.The most common types of longboards feature pintail or twin-tip designs.",
    "The downhill longboard is a skateboard that has been specifically designed to be ridden on steep mountain roads and slalom racing events.It\'s a unique skateboard shaped for a very special purpose and delivers more stability and speed than a classic longboard skate.When bombing hills at top speeds, skaters need a wide wheelbase and cutaway fenders that enable them to slide and control speed more safely.", 
    ]
    divCreator('skateboard0', 'flex-container0', 'flex-container')
    addProducts('flex-container0','event', skateDesc, skateNames)
    //Two Decks
    var deckNames = ['STANDARD SKATE DECKS', 'CRUISER & SHAPED DECKS', 'OLD SCHOOL DECKS', 'LONGBOARD DECKS']
    var deckDesc = [
        'These are the best skateboard decks for beginners because they work well for street skating, skate parks and almost all other styles of skateboarding. Typically ridden with hard wheels, these skateboard decks resemble the shape of a popsicle stick because they feature both a nose and a tail that are exactly or nearly symmetrical.',
        "If transportation is your goal, cruiser decks are our recommended choice. Cruiser decks are usually a similar length to standard decks, but have a large variety of different shapes. They are also typically ridden with soft wheels for a smoother, faster roll on rough surfaces. Compared to longboards, they are lighter and more nimble, allowing you to bob and weave through urban obstacles.",
        "Old School decks pay respect to vintage 80\'s-style skateboards. These decks are much wider and have longer wheelbases than standard decks, making them stable and great for bowl skating and transportation. Extra width and short noses make old school boards more difficult to flip or ollie, so they are not ideal for street skating.",
        "If you are a beginner looking for a large stable board that makes it easy to learn to balance, these are the boards for you. They are also ideal for mellow cruising, pushing long distances and skating down hills at high speeds."
        ]
    divCreator('skateboard1', 'flex-container1', 'flex-container')
    addProducts('flex-container1','event', deckDesc, deckNames)

//Three Wheels
var wheelNames =["Skatepark and Street Wheels","Cruiser Skateboard Wheels","Longboard Skateboard Wheels" ]
var wheelDesc =[
"These skateboard wheels are typically lightweight. And they roll insanely well on most smooth surfaces. They slide almost effortlessly. They\'re precisely what you should choose if you like doing ledges, bowls, rails, and flip tricks.  In addition, they\'re remarkably smooth because they\'re produced from extremely hard polyurethane.The smoothest skateboard wheels also happen to be the hardest. Their hardness ranges from 95a to 104a. That\'s like from just hard to super hard. More on hardness vs softness down the road.Their diameter ranges between 50mm and 53mm. Unsurprisingly, skatepark and street skateboard wheels don\'t handle pebbles and cracks very well. And they\'re almost useless when it comes to riding on gravel.When it comes to pulling off an ollie, powerslides, various flip tricks, and suchlike technical tricks, go with small, hard wheels. Believe me, ollieing on soft wheels feels awkward.",
"These wheels are a lot softer than street and park wheels. And they\'re great when it comes to skating on rough pavements and even cracks.We recommend cruiser skateboard wheels as the best option for skating on asphalt because they\'re incredibly grippy. And they don\'t vibrate all that much on such rough surfaces. They\'re good but not the best wheels for rolling over rough places, though. Longboard wheels are.Their hardness ranges from durometer 78a to 98a. As you can see, they range from very soft to relatively hard. But they\'re not like the hardest wheels in the world.Also, cruiser wheels are larger (in diameter) than street and park wheels. Their diameter stays in the 54 mm - 59 mm range.",
"You won\'t find skateboard wheels that are softer or larger than longboard wheels. In terms of diameter, these wheels measure between 60 and 75 mm.Longboard wheels are the softest wheels you can ride on. They range between 75a to 85a on the durometer scale. Now, 75a is super soft, and 85a is just soft."

]
divCreator('skateboard2', 'flex-container2', 'flex-container')
    addProducts('flex-container2','event', wheelDesc, wheelNames)


//Four Trucks

var trucksNames = ["SKATEBOARD TRUCKS (STANDARD KINGPIN)","LONGBOARD TRUCKS (REVERSE KINGPIN)","HIGH TRUCKS" ,"LOW TRUCKS", "HOLLOW TRUCKS"]
var trucksDesc =[
"Standard kingpin trucks are the most versatile type of trucks and can be used for any type of skateboarding. They are easily adjustable, by tightening or loosening, so you can customize the way your board turns.",
"These are the best skateboard trucks for carving and cruising, or skating fast down hills. Reverse kingpin trucks are usually taller and wider than standard kingpin skateboard trucks, but are highly customizable for many types of riding. ",
"High trucks are the standard, but some skateboard truck brands also offer high and low models. Usually, you'll only see this labeled if the model you are looking at offers both a high and low version. High trucks give you a more responsive turn and a little more wheel clearance so that you can use bigger wheels with less chance of wheel bite.",
"Low trucks are primarily used by technical skaters because they give you quick, responsive pop and a more stable center of gravity. Usually, you'll only see trucks labeled as Low if the model is offered in both high and low configurations, or is only available in a low version.",
"To reduce weight, many trucks are available with hollow kingpins and/or hollow axles. This can make your board pop higher, flick faster, and weigh down your backpack a little less. Lighter trucks can offer benefits to any type of skateboarding, but this is yet another case of personal preference.",
,
]

divCreator('skateboard3', 'flex-container3', 'flex-container')
addProducts('flex-container3','event', trucksDesc, trucksNames)
//Five Bearings
var bearingNames = ["Steel", "Ceramic"]
var bearingDesc =[
"Steel bearings are the industry standard, and are both durable and economical. The quality of the steel can vary. Higher grade steel in premium bearings can make the bearing faster and more durable. The downside of steel is its tendency to rust when exposed to moisture. If you want your bearings to last, keep them well-oiled avoid rolling through puddles or skating in the rain. If you do get them wet, drop in some extra lube, keep rolling or put them by a heater to dry them quickly.",
"Ceramic bearings are harder than steel and deform less when pressure is applied to them. Since they are also heat resistant, they expand less and create less friction at faster speeds. Another benefit is that they do not rust when exposed to moisture, making them great for cruisers and rain boards. The only downside to ceramic bearings is that ceramic itself is a brittle substance. The ceramic is susceptible to breaking if skated under high impact, meaning ceramic bearings are great for commuting and low impact skating, but not ideal for skating big gaps or stair sets.",
]
divCreator('skateboard4', 'flex-container4', 'flex-container')
addProducts('flex-container4','event', bearingDesc, bearingNames)

//End of Skateboards section

var hoodiesNames = ["Pullover", "Zip Up", "Fitted", "Sleeveless", "Cropped"]
var hoodiesDesc = [
    "The pullover hoodie is a loose fitting hooded sweater that you simply pull over your head to wear. The fabric is also usually heavier than a normal sweater for added warmth.",
    "A zip up hoodie has a full length zipper running from the neck to hem line. This makes it easy to get in and out of. In addition, zip up hoodies can be worn unzipped and open to regulate temperature or to be styled differently. They are also notably made with lighter fabric.",
    "As the name says suggests, this style of hoodie is more fitted than its relaxed cousin. The slim fit style offers more mobility which is also assisted by being made with a medium to light weight fabric.",
    "Cut off hoodie or sleeveless hoodies come in a variety of styles. However the most notable feature is that they don’t have sleeves. This gives the wearer greater mobility and can help regulate temperature for active users.",
    "The cropped or crop top hoodie is a female style of sweater. The most pronounced feature, is that the bottom of the sweater (hem) is cut short. It sits around the belly button line exposing the belly."
]

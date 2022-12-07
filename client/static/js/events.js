
function addEvents(){
    var posts = ["Festive Charity Skate III", 
    "Festive Charity Skate II","Festive Charity Skate I",
    "Skate Home",
    "Park Skate",
    "SkateAthon",
    "Winter Home",
    "Winter Park",
    "Early Bird",
    "Late Bird",
    "Skate Home",
    "Park Skate",];
    var state = ["RSVP", "RSVP","RSVP","RSVP","RSVP","RSVP","Re-VISIT","Re-VISIT","Re-VISIT","Re-VISIT","Re-VISIT","Re-VISIT",];
    
    var postsDesc = [
        "Last charity skate event to grow the skating culture.",
        "Second charity skate for everyone to show case thei skating skills.",
        "Our first festive skating event featuring the event sponsors.",
        "Virtual event where everyone tunes in to skate where ever they are.",
        "In Park skate oncoming for all who skate and wish  to try skating for the first time",
        "The new re-invenetd Skating marathon that goes on for 20km of skating non-stop",
        "Home skating virtual events supported by all winter lovers that skate and those that don't",
        "In Park skate oncoming for all who skate and wish  to try skating for the first time",
        "Early morning skating event for theearly birds to start the day fast, the faster the better",
        "For the late bloomers a night skating event, slogan 'The glow in the Dark'",
        "Virtual event where everyone tunes in to skate where ever they are",
        "In Park skate oncoming for all who skate and wish  to try skating for the first time",
        
    
    ];
    
    //
        function elementEventAdd(){
            //create event cover div element
        for (let i = 0; i < posts.length ; i++) {
            var container = document.getElementById('flex-container');
            var event = document.createElement("div");
            event.setAttribute("id", "event");
            event.setAttribute("class", "event");
            event.style.backgroundImage=`url(/static/assets/events/event${i}.jpg)`;
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
            var buttonText = document.createTextNode(`${state[i]}`);
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
           
            };
        };
    elementEventAdd();
    
    };    
    
 addEvents();
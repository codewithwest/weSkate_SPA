
function addEvents(){
    var posts = ["one", "two","three","four","five","six","seven","eight","nine","ten","eleven","twelve",];
    var postsDesc = [
        "Charity skate coming up this  Dec 13 2022",
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
            event.style.backgroundImage="url(/static/assets/event1.jpg)";
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
           
            };
        };
    elementEventAdd();
    
    };    
    
 addEvents();
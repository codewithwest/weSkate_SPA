
function divCreator(parentContainer, idNames,classNames){
    let container = parentContainer;
    let idName  = idNames;
    let className = classNames;
    var newContainer = document.getElementById(`${container}`);
    var divObj = document.createElement("div");
    divObj.setAttribute("id", `${idName}`);
    divObj.setAttribute("class", `${className}`);
    return newContainer.appendChild(divObj);
}

divCreator("contacts", "about-cont","about-cont")

for (let ab = 0; ab < 2; ab++) {
    divCreator("contacts", `about-div${ab}`,"about-div")
}

divCreator("about-div1", `about-div-inner0`,"about-div-inner")
divCreator("about-div1", `about-div-inner1`,"about-div-inner")
divCreator(`about-div-inner0`,"location-div", "location-div" ) 
var localPointer = document.getElementById("location-div")

var where = document.createElement('h2')
var wetext = document.createTextNode("Where to find us")
where.appendChild(wetext)

var textPar = document.createElement('p')
var text = document.createTextNode("52 Corner Dornfontein  and Main Street \n DrownHorf Village \n Building 12 \n Johannesburg Gauteng \n 2001")
textPar.appendChild(text)
localPointer.appendChild(where)
localPointer.appendChild(textPar)
divCreator(`about-div-inner1`,"form-div", "form-div" ) 

var cont = document.createElement('h2')
var conText = document.createTextNode("Reach out To us")

cont.appendChild(conText)


var theForm = document.createElement('form')

var newName = document.createElement('input')
newName.setAttribute('name', "name")
newName.setAttribute('type', "text")
newName.setAttribute('placeholder', "Name") 
newName.setAttribute('required', '');


var email = document.createElement('input')
email.setAttribute('name', "email")
email.setAttribute('type', "email")
email.setAttribute('placeholder', "Email") 
email.setAttribute('required', '');


var Message = document.createElement('input')
Message.setAttribute('name', "text")
Message.setAttribute('type', "textarea")
Message.setAttribute('id', "textarea")
Message.setAttribute('placeholder', "Message") 
Message.setAttribute('required', '');

var newButton = document.createElement('input')
newButton.setAttribute('name', "Button")
newButton.setAttribute('type', "submit")
newButton.setAttribute('value', "Submit")
newButton.setAttribute('id', "button")
newButton.onclick = function(event) {
    event.preventDefault()
    if(newName.value !="" && Message.value !="" && email.value!="")
    {
        alert("Thanks for reaching out we will get back to you as soon as possible")
    }
    else{
        if (newName.value=="") {
        alert("Enter name!!!")
        }
    }if (email.value=="") {
        alert("Enter vaid email!!!")  
        }if (Message.value=="") {
            alert("Enter name !!!")
                
            }
}

divCreator('form-div', "inner-form", "inner-form")
var newForm = document.getElementById('inner-form')

theForm.appendChild(cont)
theForm.appendChild(newName)
theForm.appendChild(email)
theForm.appendChild(Message)

theForm.appendChild(newButton)

newForm.append(theForm)
document.getElementById("about-div0").style.backgroundImage="url(static/assets/contacts/contacts0.jpg)"


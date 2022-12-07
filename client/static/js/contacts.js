
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

var cont = document.createElement('p')
var conText = document.createTextNode("Reach out To us")

cont.appendChild(conText)



var newName = document.createElement('input')
newName.setAttribute('name', "name")
newName.setAttribute('type', "text")
newName.setAttribute('placeholder', "Name") 

var email = document.createElement('input')
email.setAttribute('name', "email")
email.setAttribute('type', "email")
email.setAttribute('placeholder', "Email") 


var Message = document.createElement('input')
Message.setAttribute('name', "text")
Message.setAttribute('type', "textarea")
Message.setAttribute('id', "textarea")
Message.setAttribute('placeholder', "Message") 

var newButton = document.createElement('input')
newButton.setAttribute('name', "Button")
newButton.setAttribute('type', "button")
newButton.setAttribute('value', "Button")
newButton.setAttribute('id', "button")

divCreator('form-div', "inner-form", "inner-form")
var newForm = document.getElementById('inner-form')

newForm.appendChild(cont)
newForm.appendChild(newName)
newForm.appendChild(email)
newForm.appendChild(Message)

newForm.appendChild(newButton)

document.getElementById("about-div0").style.backgroundImage="url(static/assets/contacts/contacts0.jpg)"


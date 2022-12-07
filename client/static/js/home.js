
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

var homeContainer = document.getElementById('home-container')
//create rows
// row chilren
divCreator('home-container', 'rows', 'rows')
for (let ro = 0; ro < 4; ro++) {
    divCreator('rows', `row-child${[ro]}` , 'row-child')
}
// row child 1 child
var topTexts = ["The Thesxt in check", "Thee text in left"]
for (let ro = 0; ro < 2; ro++) {
    divCreator('row-child0', `row-child1-children${[ro]}` , 'row-child1-children')
    divCreator(`row-child1-children${[ro]}`, `text-container${ro}` , 'text-container')
    var textPar = document.createElement('p')
    var text = document.createTextNode(topTexts[ro])
    textPar.appendChild(text)
    var toAp  = document.getElementById(`text-container${ro}`)
    toAp.appendChild(textPar)
}



//row child 2 chilren
for (let roch = 0; roch < 3; roch++) {
    divCreator('row-child1', `row-child2-children${[roch]}` , 'row-child2-children')
}

//row child 2 child 3 button and 1

var textdiv0 = divCreator('row-child2-children0', 'text-cover-left', 'text-cover')
var textdiv1 =divCreator('row-child2-children2', 'text-cover-right', 'text-cover')
var texts =["Use The download link to get our new app", " Available for all devices: Android ,iOS and Huawei Store"]

var textdiv = [textdiv0, textdiv1]

for (let t = 0; t < texts.length; t++) {
    var textPar = document.createElement('p')
    var text = document.createTextNode(texts[t])
    textPar.appendChild(text)
    textdiv[t].appendChild(textPar)
}

//row child 2 child 2 button
divCreator('row-child2-children1', 'button-cover', 'button-cover')
var downButton = document.createElement('input');
downButton.setAttribute('type', 'button');
downButton.setAttribute('value', 'DOWNLOAD');
downButton.setAttribute('name', 'Button');
downButton.setAttribute('onClick', 'alert("download Started")');
document.getElementById('button-cover').appendChild(downButton)

// row child 3


var topTexts = ["Pic Description", "Second one", "third one"]
for (let row = 0; row < topTexts.length; row++) {   
    divCreator('row-child2', `row-child3-children${[row]}` , 'row-child3-children')
    var card = document.getElementById(`row-child3-children${[row]}`);
    card.style.backgroundImage="url(/static/assets/event1.jpg)"
    divCreator(`row-child3-children${[row]}`, `desc-container${row}` , 'desc-container')
    var textPara = document.createElement('p')
    var tText = document.createTextNode(topTexts[row])
    textPara.appendChild(tText)
    var toAppend  = document.getElementById(`desc-container${row}`)
    toAppend.appendChild(textPara)

}



 
divCreator('row-child3', `row-child4-children` , 'row-child4-children')
var farewell = document.getElementById('row-child4-children');
farewell.style.backgroundImage="url(/static/assets/event1.jpg)"
divCreator(`row-child4-children`, `mess-container` , 'mess-container')
var newPar = document.createElement('p')
var fare = document.createTextNode("Meesage from the Founder: \n Hello world")
newPar.appendChild(fare)
var toAppends  = document.getElementById(`mess-container`)
toAppends.appendChild(newPar)






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



//create  4 divs

for (let divs = 0; divs < 4; divs++) {
    divCreator('about',`fourdivs${divs}`, 'fourdivs')
    for (let innerTwo = 0; innerTwo < 2; innerTwo++) {
    divCreator(`fourdivs${divs}`,`inner-two${innerTwo}${divs}`, 'inner-two')
    }
      
}

//Top Div
//Div 1
var leftOne = document.getElementById('inner-two00')
divCreator('inner-two00', 'who', 'who')
divCreator('who', 'who-header', 'who-header')
var whoHead = document.getElementById('who-header')
var whoPara =  document.createElement('h1')
var whoText = document.createTextNode("One on")
whoPara.appendChild(whoText)
whoHead.appendChild(whoPara)
divCreator('who', 'who-body', 'who-body')
var whoBody = document.getElementById('who-body')
var whoBodyPara =  document.createElement('p')
var whoBodyText = document.createTextNode("One on")
whoBodyPara.appendChild(whoBodyText)
whoBody.appendChild(whoBodyPara)

var rightOne = document.getElementById('inner-two11')

divCreator('inner-two11', 'him', 'him')
divCreator('him', 'him-text', 'him-text')
var himText = document.getElementById('him-text')
var para =  document.createElement('p')
var paraText = document.createTextNode("One on")
para.appendChild(paraText)
himText.appendChild(para)
divCreator('him', 'him-pic', 'him-pic')
divCreator('him-pic', 'pic', 'pic')
var picIn = document.getElementById('pic')
picIn.style.backgroundImage="url(/static/assets/event1.jpg)";

var leftTwo = document.getElementById('inner-two02')

divCreator('inner-two02', 'three-text', 'three-text')
var threeText = document.getElementById('three-text')
var paraThree =  document.createElement('p')
var textThree = document.createTextNode("One on")
paraThree.appendChild(textThree)
threeText.appendChild(paraThree)


divCreator('inner-two02', 'three-button', 'three-button')

var but =  document.createElement('input')
but.setAttribute('id', 'button')
but.setAttribute('name', 'Button')
but.setAttribute('type', 'Button')
but.setAttribute('value', 'Partner with US')
document.getElementById('three-button').appendChild(but)



var rightTwo = document.getElementById('inner-two13')

divCreator('inner-two13', 'how', 'how')
var howId = document.getElementById('how')
var howhead =  document.createElement('h1')
var howtext = document.createTextNode("become part of weSkate Today")
howhead.appendChild(howtext)
howId.appendChild(howhead)

divCreator('inner-two13', 'how-desc', 'how-desc')
var howDesc = document.getElementById('how-desc')
var howPara =  document.createElement('p')
var howTextBody = document.createTextNode("How to become part of weSkate")
howPara.appendChild(howTextBody)
howDesc.appendChild(howPara)





















var about = document.getElementById('about')
console.log(about);
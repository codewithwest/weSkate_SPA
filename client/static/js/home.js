
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
function textCreator(pDiv, inputTextNode) {
    var parentD = document.getElementById(pDiv)
    var textPar = document.createElement('p')
    var text = document.createTextNode(inputTextNode)
    textPar.appendChild(text)
    parentD.appendChild(textPar)
}

var homeContainer = document.getElementById('home-container')
//create rows
// row chilren
divCreator('home-container', 'rows', 'rows')
divCreator('rows', 'two-rows1', 'two-rows')
divCreator('rows', 'two-rows0', 'two-rows')


//Upper Row
divCreator('two-rows0', 'upper-three0', 'upper-three')
divCreator('two-rows0', 'upper-three1', 'upper-three')
divCreator('two-rows0', 'upper-three2', 'upper-three')

//upper row box 1
var topTexts = ["Welcome to WeSkate Your one stop shop for skating goods.", 
"From full built boards to customized boards, clothing for all the families needs"];

divCreator('upper-three0', 'three-zero0', 'three-zero')

textCreator('three-zero0', topTexts[0])

divCreator('upper-three0', 'three-zero1', 'three-zero')
textCreator('three-zero1', topTexts[1])
//upper row box 2
divCreator('upper-three1', 'three-one0', 'three-one')
divCreator('upper-three1', 'three-one1', 'three-one')
var downButton = document.createElement('button');
downButton.appendChild(document.createTextNode('Download'))
//downButton.setAttribute('type', 'button');
downButton.setAttribute('value', 'DOWNLOAD');
//downButton.setAttribute('name', 'Button');
downButton.setAttribute('onClick', 'alert("download Started")');
document.getElementById('three-one1').appendChild(downButton)

divCreator('upper-three1', 'three-one2', 'three-one')

var texts =["Use The download link to get our new app", " Available for Android, iOS & Huawei"]


textCreator('three-one0', texts[0])
textCreator('three-one2', texts[1])
    
//upper row box 3
divCreator('upper-three2', 'three-two', 'three-two')

textCreator('three-two', "Our belief:")
textCreator('three-two', "Alone we are powerless but together we can change the world.")

//Lower Row


var topTexts = ["Get your eco-friendly resin based board today! \" made from recycled bio based renewable Ingredients and carbon fibre\"",
 "Skate up Clothing for Your Perfect skating Day", 
"Availble for the whole family too, in style chlothing for the little ones."]
for (let row = 0; row < topTexts.length; row++) {   
    divCreator('two-rows1', `row-child3-children${[row]}` , 'row-child3-children')
    var card = document.getElementById(`row-child3-children${[row]}`);
    card.style.backgroundImage=`url(/static/assets/home/home${row}.jpg)`
    divCreator(`row-child3-children${[row]}`, `desc-container${row}` , 'desc-container')
    var textPara = document.createElement('marquee')
    var tText = document.createTextNode(topTexts[row])
    textPara.appendChild(tText)
    var toAppend  = document.getElementById(`desc-container${row}`)
    toAppend.appendChild(textPara)

}






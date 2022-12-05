import divCreator from "./functions.js";
//Get the Page Container
var mainContainer = document.getElementById('static-container');
//Add a new nav div to the main Container
divCreator('static-container','navContainer', 'navContainer')

    var linkIds = ["Home", 'About us', "Shop", "Events", "Contacts"]
   
    var linkHref = ["/", '/about', "/shop", "/events", "/contacts"]
    divCreator('navContainer', `inner-nav-container0`,'logo-container')
    divCreator('navContainer', `inner-nav-container1`,'nav-container')
    divCreator('inner-nav-container0', 'logo','logo')
    divCreator('inner-nav-container1', `nav`,'nav')
    
    

    for (let li = 0; li < linkIds.length; li++) {
        divCreator('nav', `linkContainer${li}`,'linkContainer')
        var navBarContainer = document.getElementById(`linkContainer${li}`)
        var anchor = document.createElement('a');
        var newText = document.createTextNode(`${linkIds[li]}`) 
        anchor.setAttribute('id', `${linkIds[li]}`) 
        anchor.setAttribute('class', "nav__link") 
        anchor.setAttribute('href',`${linkHref[li]}`);
        anchor.setAttribute('data-link', '');
        anchor.appendChild(newText)
        navBarContainer.appendChild(anchor);
    }

var logos = document.getElementById('logo')
    logos.style.backgroundImage="url(/static/assets/event1.jpg)"
var contentdiv = divCreator('static-container', 'content','content')

divCreator('static-container', 'footer','footer')
var footerdiv = document.getElementById('footer')
//create two footer navs as dividers
divCreator('footer', 'left-footer','left-footer')
divCreator('footer', 'right-footer','right-footer')
//Create 4 divs for content subscribtions but also in a div



var footerDivs = ['left-footer','right-footer'];
for (let fu = 0; fu < footerDivs.length; fu++) {
    divCreator(`${footerDivs[fu]}`, `top-footer${fu}`,'top-footer')
    divCreator(`${footerDivs[fu]}`, `bottom-footer${fu}`,'bottom-footer')
}
var socialNetDivs = ['facebook','twitter', 'whatsapp', 'instagram'];
for (let fu = 0; fu < socialNetDivs.length; fu++) {
    divCreator('bottom-footer0', `net-divs${fu}`,`net-divs`)
    var net = document.getElementById(`net-divs${fu}`)
    net.style.backgroundImage="url(/static/assets/event1.jpg)"
    
}
//create botoom right divs with form
divCreator('bottom-footer1', 'form-container','form-container')
divCreator('form-container', 'form-inner-container','form-inner-container')
//create form
var form = document.createElement('form') 
var textInput = document.createElement('input') 
textInput.setAttribute('name', "email") 
textInput.setAttribute('type',"email") 
textInput.setAttribute('value',"");
var submitButton = document.createElement('button') 
submitButton.setAttribute('name', "button") 
submitButton.setAttribute('type',"button") 
submitButton.setAttribute('value',"");
var submitButtonText = document.createTextNode('Subscribe') 
submitButton.appendChild(submitButtonText)
form.appendChild(textInput)
form.appendChild(submitButton)

document.getElementById('form-inner-container').append(form);

var topfooterText = ["Click on the icons below to follow us on yut favourite social media",
"Enter email bellow to subscibe to get our latest newsletter updates"]
for (let topfu = 0; topfu < topfooterText.length; topfu++) {
    var par = document.createElement('p')
    
    var parText = document.createTextNode(`${topfooterText[topfu]}`);
    var theTopFooterDiv = document.getElementById(`top-footer${topfu}`)
    par.appendChild(parText)
    theTopFooterDiv.appendChild(par)
    
    
}
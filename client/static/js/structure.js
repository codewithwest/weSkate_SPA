//import { emoji } from "node-emoji";
//import * as emoji from "emoji-api";
import divCreator from "./functions.js";
//Get the Page Container
var usernameLogged = await fetch('/api').then((Response)  => Response.json())

var mainContainer = document.getElementById('static-container');
//Add a new nav div to the main Container
divCreator('static-container','navContainer', 'navContainer')
    var linkIds = ["Home", "About", "Shop", "Events", "Contacts"]


   //nav current location signal
   function checkMate(){
    var urlLocation = window.location.href;  
    for (let ki = 0; ki < linkIds.length; ki++) {
        //console.log(urlLocation.includes(linkIds[ki].toLowerCase()))
        if (urlLocation.endsWith("/")) {
        document.getElementById(linkIds[0]).style.fontWeight="bold";
        }
        if (urlLocation.includes(linkIds[ki].toLowerCase())) {
            
            document.getElementById(linkIds[ki]).style.fontWeight="bold"
        }
        else{
            document.getElementById(linkIds[ki]).style.fontWeight="200";
        }
    }
   }
     
//Login Prompt
function logInPopUp(){
    //let productDesc = []
    divCreator('login-cont', `login`, 'login')
    divCreator('login', `inner-login`, 'inner-login')
    function inputcreator(pareDiv, InId, InType, placeH, valueI) {
        var paren = document.getElementById(pareDiv)
        var inP = document.createElement('input')
        inP.setAttribute('id', InId)
        inP.setAttribute('type', InType)
        inP.setAttribute('placeholder', placeH)
        inP.setAttribute('value', valueI)
        paren.appendChild(inP)
    }
    divCreator('inner-login', `login-header`, 'login-header')
    var loginHeaderDiv = document.getElementById(`login-header`)
    var loginHeader = document.createElement('h2')
    loginHeader.appendChild(document.createTextNode('LOGIN'))
    loginHeaderDiv.appendChild(loginHeader)
    var loginform = document.createElement('form')
    loginform.setAttribute('id',"login-form")
    loginform.setAttribute('action',"/")
    loginform.setAttribute("method","post")
    document.getElementById("inner-login").appendChild(loginform)
    inputcreator("login-form", 'email','text', 'username', '')
    inputcreator("login-form",'password','password', 'password','')
    inputcreator("login-form",'button','button', '', 'LOGIN')

    divCreator('inner-login', `forgot-register`, 'forgot-register')
    divCreator(`forgot-register`, `forgot`, 'forgot')
    var forgotHeaderDiv = document.getElementById(`forgot`)
    var forgotHeader = document.createElement('p')
    forgotHeader.appendChild(document.createTextNode('Forgot password?'))
    forgotHeaderDiv.appendChild(forgotHeader)
    divCreator(`forgot-register`, `register`, 'register')
    var registerHeaderDiv = document.getElementById(`register`)
    var registerHeader = document.createElement('p')
    registerHeader.appendChild(document.createTextNode("Don't have an account? Register"))
    registerHeaderDiv.appendChild(registerHeader)

/*
    var submitLogin  = document.getElementById('button') 
    submitLogin.onclick = function(event) {
        event.preventDefault()
        document.getElementById('login').style.display="none"
    }
    */
    
    
    
    
}

//console.log(document.getElementById('login'))
    //console.log(typeof window.location.href)
    var linkHref = ["/", '/about', "/shop", "/events", "/contacts"]
    divCreator('navContainer', `inner-nav-container0`,'logo-container')
    divCreator('navContainer', `inner-nav-container1`,'nav-container')
    divCreator('navContainer', `inner-nav-container2`,'icon-container')


    divCreator('inner-nav-container0', 'logo','logo')
    divCreator('inner-nav-container1', `nav`,'nav')
    divCreator('inner-nav-container2', `icon`,'icon')
    var iconHead = document.getElementById('icon')
    iconHead.style.backgroundImage="url(/static/assets/home/user3.png)"
    divCreator('inner-nav-container2', `usernameT`,'usernameT')
    var userNames = document.getElementById('usernameT')
    var userN = document.createElement('p')
    var data = "west";
    var uName = document.createTextNode(`${usernameLogged.username}`)
    userN.appendChild(uName)
    userNames.appendChild(userN)

    iconHead.onclick = function(event) {
        if (usernameLogged.username != "User") {
            document.getElementById("login").style.display="none"
        }
        else{
            document.getElementById("login").style.display="flex"
        }
    }
    //console.log(document.getElementById("inner-nav-container2"))
    //const emoji = await fetch("/api").then((Response)  => Response.json())
    //document.getElementById("icon").innerText = String.fromCodePoint(0x1F464)
//Create the links
    for (let li = 0; li < linkIds.length; li++) {
        divCreator('nav', `linkContainer${li}`,'linkContainer')
        var navBarContainer = document.getElementById(`linkContainer${li}`)
        var anchor = document.createElement('a');
        var newText = document.createTextNode(`${linkIds[li]}`) 
        anchor.setAttribute('id', `${linkIds[li]}`) 
        anchor.setAttribute('class', "nav__link") 
        anchor.setAttribute('href',`${linkHref[li]}`);
        anchor.setAttribute('data-link', '');
        //anchor.setAttribute('onclick', `checkMate${(linkHref[li])}`)
        anchor.appendChild(newText)
        navBarContainer.appendChild(anchor);
    }
    checkMate()
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
    net.style.backgroundImage=`url(/static/assets/home/footer${fu}.jpg)`
    
}
//create botoom right divs with form
divCreator('bottom-footer1', 'form-container','form-container')
divCreator('form-container', 'form-inner-container','form-inner-container')
//create form
var form = document.createElement('form') 

var textInput = document.createElement('input') 
textInput.setAttribute('name', "email") 
textInput.setAttribute('type',"email") 
textInput.setAttribute('placeholder',"example@gmail.com");
var submitButton = document.createElement('button') 
submitButton.setAttribute('name', "button") 
submitButton.setAttribute('type',"button") 
submitButton.setAttribute('value',"");
var submitButtonText = document.createTextNode('Subscribe') 
submitButton.appendChild(submitButtonText)
form.appendChild(textInput)
form.appendChild(submitButton)
document.getElementById('form-inner-container').append(form);

var topfooterText = ["Click on the icons below to follow us on your favourite social media",
"Enter email bellow to subscibe to get our latest newsletter updates"]
for (let topfu = 0; topfu < topfooterText.length; topfu++) {
    var par = document.createElement('p')
    var parText = document.createTextNode(`${topfooterText[topfu]}`);
    var theTopFooterDiv = document.getElementById(`top-footer${topfu}`)
    par.appendChild(parText)
    theTopFooterDiv.appendChild(par)
}
 
if (usernameLogged.username != "User") {
    document.getElementById("login").style.display="none"
}
//import { emoji } from "node-emoji";
//import * as emoji from "emoji-api";
import divCreator from "./functions.js";
//Get the Page Container

function profilePoPUp(){
    divCreator('content', 'profile','profile')
    divCreator('profile', 'profile-cover','profile-cover')
    divCreator('profile-cover', 'inner-profile','inner-profile')
    divCreator('inner-profile','inner-profile-child0', 'inner-profile-child')
    divCreator('inner-profile-child0','profile-exit', 'profile-exit')
    var profileExit = document.getElementById('profile-exit')
    var pG = document.createElement('p')
    pG.appendChild(document.createTextNode(`X`))
    profileExit.appendChild(pG)
    pG.addEventListener('mouseover',()=>{
        pG.style.cursor="pointer";
    pG.addEventListener('click',(e)=>{
        //e.preventDefault()
        
        document.getElementById('profile').style.display="none";
    })})
    divCreator('inner-profile','inner-profile-child1', 'inner-profile-child')
    var profileExitName = document.getElementById('inner-profile-child1')
    var pU = document.createElement('p')
    pU.appendChild(document.createTextNode(`UserName : ${ifLogged.username}`))
    profileExitName.appendChild(pU)
    divCreator('inner-profile','inner-profile-child2', 'inner-profile-child')
    var profileExitEmail = document.getElementById('inner-profile-child2')
    var pE = document.createElement('p')
    pE.appendChild(document.createTextNode(`Email : ${ifLogged.email}`))
    profileExitEmail.appendChild(pE)
    divCreator('inner-profile','inner-profile-child3', 'inner-profile-child')
    var profileExitLogOut = document.getElementById('inner-profile-child3')
    var pL = document.createElement('a')
    pL.appendChild(document.createTextNode('LogOut'))
    profileExitLogOut.appendChild(pL)
    pL.addEventListener('mouseover',()=>{
        pL.style.cursor="pointer";
    pL.addEventListener('click',(e)=>{
        //e.preventDefault()
        pL.setAttribute('href', '/logout');
        document.getElementById('profile').style.display="none";
    })})
    

    }
     
var getData = await fetch('/api').then((Response)  => Response.json())

var mainContainer = document.getElementById('static-container');
//Add a new nav div to the main Container
divCreator('static-container','navContainer', 'navContainer')
    var linkIds = ["Home", "About", "Shop", "Events", "Contacts"]


   //nav current location signal
   function checkMate(){
    var urlLocation = window.location.href;  
    for (let ki = 0; ki < linkIds.length; ki++) {
        
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
    var linkHref = ["/", '/about', "/shop", "/events", "/contacts"]
    divCreator('navContainer', `inner-nav-container0`,'logo-container')
    divCreator('navContainer', `inner-nav-container1`,'nav-container')
    divCreator('navContainer', `inner-nav-container2`,'icon-container')


    divCreator('inner-nav-container0', 'logo','logo')
    divCreator('inner-nav-container1', `nav`,'nav')
    divCreator('inner-nav-container2', `icon`,'icon')
    var iconHead = document.getElementById('icon')
    iconHead.style.backgroundImage="url(/static/assets/index/user3.png)"
    divCreator('inner-nav-container2', `usernameT`,'usernameT')
    var userNames = document.getElementById('usernameT')
    var userN = document.createElement('p')
    
    var uName = document.createTextNode(``)
    userN.appendChild(uName)
    userNames.appendChild(userN)

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
logos.style.backgroundImage="url(/static/assets/index/logo0.png)"

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
    net.style.backgroundImage=`url(/static/assets/index/footer${fu}.jpg)`
    
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

//Handling login and Registration
//Check on Login/Register
var ifLogged = await fetch('/status').then((Response)  => Response.json())
profilePoPUp()
if (ifLogged.username != "") {
    
    userN.innerHTML = ifLogged.username
    document.getElementById("login").style.display="none";
}
document.getElementById("login").style.display="none"

let emojia = await fetch('/emoji').then((Response)  => Response.json())

iconHead.onclick = function(event) {
    if (userN.innerHTML != 0) {
        document.getElementById("login").style.display="none"
        document.getElementById('profile').style.display='flex'

    }
    else{
        document.getElementById("login").style.display="flex"
    }
}
var redirectRegister = document.getElementById('noAccount')
redirectRegister.addEventListener('mouseover',()=>{
    redirectRegister.style.cursor="pointer";
redirectRegister.addEventListener('click',()=>{
    document.getElementById("signup").style.display="flex";
    document.getElementById("login").style.display="none";
})})

var redirectLogin = document.getElementById('hasAccount')

redirectLogin.addEventListener('mouseover',()=>{
    redirectLogin.style.cursor="pointer";
    redirectLogin.addEventListener('click',()=>{
    
    document.getElementById("signup").style.display="none";
    document.getElementById("login").style.display="flex";

})})

//Button click validation on form submit
var signUpForm = document.getElementById('signupform')
var regUserName = document.getElementById('newusername');
var regEmail = document.getElementById('newemail');
var regPassword = document.getElementById('newpassword');
var regPassword1 = document.getElementById('confirmpassword');


// check ifUsername in database
let k= 0
var uSet =false;
var eSet =false;
var pSet =false;
var p1Set = false;
var status = false

regUserName.addEventListener('change', (e)=>{
    if (regUserName.value.length > 3) {
            getData.forEach((un) => {
                if(regUserName.value == un.name){

                    regUserName.style.borderColor="red"

                }else{
                uSet = true

                regUserName.style.borderColor="green"

                }
            })
        }
        
    else{
    regUserName.style.borderColor="red"
}});
function validateEmail(emailId)
{
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailformat))
{

return true;
}
else
{
console.log("Invalid email address.");
return false;
}
}

regEmail.addEventListener('change', ()=>{

    if (validateEmail(regEmail) == true) {
        getData.forEach((un) => {
        if(regEmail.value == un.email){
            eSet = false
            regEmail.style.borderColor="red"
        }else{
            eSet = true 
            regEmail.focus()
            regEmail.style.borderColor="green"
        }
    })
    }
        else{
            regEmail.focus()
            regEmail.style.borderColor="red"
            eSet = false
        }
});
regPassword.addEventListener('change', ()=>{

    if (regPassword.value.length > 6 && regPassword.value?.match(/[A-Z]/,/[1-9]/,/[a-z]/) != null) {
        pSet=true
        regPassword.style.borderColor="green"
    }  
    else{
        pSet=false
        regPassword.focus()
        regPassword.style.borderColor="red"
    
}});
regPassword1.addEventListener('change', ()=>{
    if (regPassword1.value === regPassword.value) {
        
        p1Set = true
        
        regPassword1.style.borderColor="green"
    }
    else{
        p1Set = false;
        regPassword1.focus()
        regPassword1.style.borderColor="red"
    
}});
signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if ((uSet&& eSet && pSet && p1Set ) === true) {
        document.getElementById("signup").style.display="none"

        status = true;
        e.currentTarget.submit();
        document.getElementById("login").style.display="flex"

    } else {
        signUpForm.focus();
        signUpForm.style.borderColor="red"
    }
});


var luSet = false;
var leSet = false;

var loginUserName = document.getElementById('username')
loginUserName.addEventListener('change', (e)=>{
    if (loginUserName.value.length > 3) {
            getData.forEach((un) => {
                if(loginUserName.value == un.name){
                    luSet = true;
                    loginUserName.style.borderColor="green"
                }else{
                uSet = false
                loginUserName.style.borderColor="red"
                }
            })
        }
    else{

        loginUserName.style.borderColor="red"
}});

var loginEmail = document.getElementById('password');
loginEmail.addEventListener('change', ()=>{
    if (loginEmail.value.length > 5) {
        getData.forEach((un) => {
        if(loginEmail.value == un.password){
            leSet = true
            loginEmail.style.borderColor="green"
        }else{
            leSet = false 
            loginEmail.focus()
            loginEmail.style.borderColor="red"
        }
    })
    }
        else{
            loginEmail.focus()
            loginEmail.style.borderColor="red"
            leSet = false      
        }
});

var loginUpForm = document.getElementById('loginForm'); 
loginUpForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if ((leSet && luSet) === true) {
        document.getElementById("signup").style.display="none"
        status = true;
        e.currentTarget.submit();
        document.getElementById("login").style.display="flex"

    } else {
        loginUpForm.focus();
        loginUpForm.style.borderColor="red"
    }
});
console.log(document.getElementById('content'))
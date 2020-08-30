document.querySelector('.hamburger').addEventListener('click', hamburger, true);
function hamburger(evt){
	var links = document.querySelector('.navigation__links');
	console.log(links.className)

	if (links.className === "navigation__links") {
	   links.className += " responsive";
	 } else {
	   links.className = "navigation__links";
	 }
}

function about(){
    var about= document.getElementById("about");
    about.scrollIntoView();
}
function portefolio(){
    var port= document.getElementById("enkelcarussel");
    port.scrollIntoView();
}
function contact(){
    var contact= document.getElementById("contact");
    contact.scrollIntoView();
}

function home(){
    var home= document.getElementById("home");
    home.scrollIntoView();
}
document.querySelector('#submitContact').addEventListener("click", function(evt){
	console.log('sdfsdf')

	var fname = /[\S]/.test(document.querySelector('#firstName').value);
	var lname = /[\S]/.test(document.querySelector('#lastName').value);

	var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(document.querySelector('#email').value);
	var text = /[\S]/.test(document.querySelector('#contact-texterea').value);


	(fname === true) 	? document.querySelector('#firstNameError').style.display = 'none'
						: document.querySelector('#firstNameError').style.display = 'block';

	(lname === true) 	? document.querySelector('#lastNameError').style.display = 'none'
						: document.querySelector('#lastNameError').style.display = 'block';

	(email === true) 	? document.querySelector('#emailError').style.display = 'none'
						: document.querySelector('#emailError').style.display = 'block';

	(text === true) 	? document.querySelector('#textError').style.display = 'none'
						: document.querySelector('#textError').style.display = 'block';
});

window.addEventListener('scroll', function() {
    var about = document.querySelector("#about");
    var port = document.querySelector("#enkelcarussel");
  
    if (window.scrollY > (about.offsetTop-20)) {
        document.querySelector("#navigation__links-home").className = "navigation__links-default";
        document.querySelector("#navigation__links-about").className = "navigation__links-active";
    }
    else if (window.scrollY < (about.offsetTop-20)){
        document.querySelector("#navigation__links-home").className = "navigation__links-active";
        document.querySelector("#navigation__links-about").className = "navigation__links-default";
    }
    if ((window.scrollY > (port.offsetTop-20)) && (window.scrollY > (about.offsetTop-20))) {
        document.querySelector("#navigation__links-about").className = "navigation__links-default";
        document.querySelector("#navigation__links-port").className = "navigation__links-active";
    }
    else if ((window.scrollY < (port.offsetTop-20)) && (window.scrollY > (about.offsetTop-20))){
        document.querySelector("#navigation__links-about").className = "navigation__links-active";
        document.querySelector("#navigation__links-port").className = "navigation__links-default";
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight &&  (document.querySelector("#navigation__links-port").className === "navigation__links-active")) {
        document.querySelector("#navigation__links-port").className = "navigation__links-default";
        document.querySelector("#navigation__links-contact").className = "navigation__links-active";
    }
    else if (((window.innerHeight + window.scrollY) < document.body.offsetHeight) && (window.scrollY > (port.offsetTop-20))){
        document.querySelector("#navigation__links-port").className = "navigation__links-active";
        document.querySelector("#navigation__links-contact").className = "navigation__links-default";
    }

});
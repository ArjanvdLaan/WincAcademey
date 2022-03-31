const getMenu = document.querySelector('.menu');
const navToggle = document.querySelector(".nav-toggle")
let toggleNavStatus =  false;

navToggle.addEventListener('click', function() {
    if (toggleNavStatus === false) {
        getMenu.style.visibility = "visible";
        toggleNavStatus = true;
    } 
    else if  (toggleNavStatus === true) {
        getMenu.style.visibility = "hidden";
        toggleNavStatus = false;
    } 
});

const getDefaultA = document.querySelector(".grey");
const getOrangeA = document.querySelector(".orange");
const getRedA = document.querySelector(".red");
const getGreenA = document.querySelector(".green");
const getBlueA = document.querySelector(".blue");
const getYellowA = document.querySelector(".yellow");
const getPurpleA = document.querySelector(".purple");

const getBody = document.querySelector("body");
console.log(getBody);

getDefaultA.addEventListener('click', function() {
    getBody.style.backgroundColor = "grey";
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden";
    toggleNavStatus = false;
});

getOrangeA.addEventListener('click', function() {
    getBody.style.backgroundColor = "orange"; 
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden";
    toggleNavStatus = false;
});

getRedA.addEventListener('click', function() {
    getBody.style.backgroundColor = "red";
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden"; 
    toggleNavStatus = false;
});

getGreenA.addEventListener('click', function() {
    getBody.style.backgroundColor = "green";
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden"; 
    toggleNavStatus = false;
});

getBlueA.addEventListener('click', function() {
    getBody.style.backgroundColor = "blue";
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden"; 
    toggleNavStatus = false;
});

getYellowA.addEventListener('click', function() {
    getBody.style.backgroundColor = "yellow";
    getBody.classList.add('transition'); 
    getMenu.style.visibility = "hidden";
    toggleNavStatus = false;
});

getPurpleA.addEventListener('click', function() {
    getBody.style.backgroundColor = "purple";
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden"; 
    toggleNavStatus = false;
});


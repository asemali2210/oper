var navSm = document.getElementById("navSm");
var toggleBtn = document.getElementById("toggleBtn");


var operHeader = document.getElementById("operHeader");
var operNav = document.getElementById("operNav");
var operAbout = document.getElementById("operAbout");
var operAdvantages = document.getElementById("operAdvantages");
var operFqa = document.getElementById("operFqa");
var operPromotion = document.getElementById("operPromotion");



var sideHeading = document.getElementById("sideHeading");
var sideHeaerLogo = document.getElementById("sideHeaerLogo");
var sideHeaderBox = document.getElementById("sideHeaderBox");
var sideHeaderBox = document.getElementById("sideHeaderBox");

var sideAbout = document.getElementById("sideAbout");
var sideAboutBox = document.getElementById("sideAboutBox");

var sideAdvantages = document.getElementById("sideAdvantages");
var sideAdvantagesBox = document.getElementById("sideAdvantagesBox");

var sideHelp = document.getElementById("sideHelp");
var sideHelpBox = document.getElementById("sideHelpBox");

var sidePromotion = document.getElementById("sidePromotion");
var sidePromotionBox = document.getElementById("sidePromotionBox");

var accordingQItems = document.querySelectorAll(".according__q")
var accordingQList = Array.from(accordingQItems);
var accordingAItems = document.querySelectorAll(".according__a")
var accordingAList = Array.from(accordingAItems);

/* toggle Navbar */

toggleBtn.addEventListener('click', function(){
    navSm.classList.contains('toggle--nav') ? navSm.classList.remove('toggle--nav') : navSm.classList.add('toggle--nav');
});

/* toggle Acordding */

accordingQList.forEach((accoQ) => {
    var qId = accoQ.getAttribute('id');
    var queNumber = qId.slice(1);
    var aId = document.getElementById(`a${queNumber}`);
    accoQ.addEventListener("click", function(){
        aId.classList.contains('toggle--according') ? aId.classList.remove('toggle--according') : aId.classList.add('toggle--according');
    })
})

sideHeading.style.height = `${operHeader.getBoundingClientRect().height}px`;
sideHeaerLogo.style.top = `${operNav.getBoundingClientRect().top + 15}px`;
sideHeaderBox.style.top = `70%`;


sideAbout.style.height = `${operAbout.getBoundingClientRect().height}px`;
sideAboutBox.style.bottom = `10%`;


sideAdvantages.style.height = `${operAdvantages.getBoundingClientRect().height}px`;
sideAdvantagesBox.style.bottom = `15%`;


sideHelp.style.height = `${operFqa.getBoundingClientRect().height}px`;
sideHelpBox.style.bottom = `20%`;


sidePromotion.style.height = `${operPromotion.getBoundingClientRect().height}px`;
sidePromotionBox.style.bottom = `15%`;

document.getElementByTagName("body").style.backgroundColor = "#ffff";

console.log(operHeader.getBoundingClientRect())
console.log(sideHeading.getBoundingClientRect())

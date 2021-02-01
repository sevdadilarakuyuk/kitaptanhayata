// window.onscroll = function() {handleScroll()};


var header = document.getElementsByTagName("header")[0];
var main = document.getElementsByClassName("main")[0];
var checkbox = document.getElementById("hidden-checkbox");

var headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
var sticky = main.offsetTop - parseInt(headerHeight, 10) - 10;

console.log(sticky); 

var lastScrollTop = 0;

window.addEventListener("resize", function() {
    sticky = main.offsetTop - parseInt(headerHeight, 10);;
}, false);

// wait for the animation length, plus a bit, then make the element visible
window.setTimeout(function() {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
    document.getElementsByClassName('navbar')[0].style.opacity = '1';
}, 500);

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (!checkbox.checked) {
    if (st > lastScrollTop){
        // downscroll code
        if (st > sticky) {
            header.style.animation = "slide-down 0.7s ease-out both";
            header.style.webkitAnimation = "slide-down 0.7s ease-out both";
            header.style.position = "sticky";
        }
     } else {
        // upscroll code
        if (st > sticky) {
            header.style.animation = "slide-down 0.7s ease-out both";
            header.style.webkitAnimation = "slide-down 0.7s ease-out both";
            header.style.position = "sticky";
        } else if (st > parseInt(headerHeight, 10)) {
            header.style.animation = "slide-up 0.2s ease-in";
            header.style.webkitAnimation = "slide-up 0.2s ease-in";
            header.style.position = "relative";
        } else {
            header.style.animation = "none";
            header.style.position = "relative";
        }
     }
   }
   
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


checkbox.addEventListener("change", function() {
    var l = document.getElementById("menuicon");
    var m = document.getElementById("menutext");
    if (this.checked) {
        header.style.position = "sticky";
        l.innerHTML = "close";
        m.innerHTML = "";
    } else {
        if ( window.pageYOffset > 60 )
            header.style.position = "sticky";
        else
            header.style.position = "relative";
        l.innerHTML = "menu";
        m.innerHTML = "MENU";
    }
});



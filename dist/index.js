// window.onscroll = function() {handleScroll()};

const navbar = document.getElementsByClassName('navbar')[0]
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByClassName("main")[0];
const checkbox = document.getElementById("hidden-checkbox");

console.log(navbar);
console.log(header);
console.log(main);
console.log(checkbox);

const headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
let stickyLevel = main.offsetTop - parseInt(headerHeight, 10) - 10;

console.log(stickyLevel); 

let lastScrollTop = 0;
let isHeaderSticky = false;

window.addEventListener("resize", function() {
    stickyLevel = main.offsetTop - parseInt(headerHeight, 10) - 10;
    console.log(stickyLevel); 
}, false);

// wait for the animation length, plus a bit, then make the element visible
window.setTimeout(function() {
    // navbar.style.opacity = '1';
}, 500);

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   
   if (!checkbox.checked) {
    let st = window.pageYOffset || document.documentElement.scrollTop; 
   // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        // downscroll code
        if (!isHeaderSticky && st >= stickyLevel) {
            isHeaderSticky = true;
            header.style.animation = "slide-down 0.7s ease-out both";
            header.style.webkitAnimation = "slide-down 0.7s ease-out both";
            header.style.position = "sticky";
        }
     } else {
        // upscroll code
        if (isHeaderSticky && st < stickyLevel) {
            isHeaderSticky = false;
            header.style.animation = "slide-up 0.2s ease-in";
            header.style.webkitAnimation = "slide-up 0.2s ease-in";
            header.style.position = "relative";
        }
        if (st <= parseInt(headerHeight, 10) + 20) {
            isHeaderSticky = false;
            header.style.animation = "none";
            header.style.position = "relative";
        }
     }
     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   }
}, false);


checkbox.addEventListener("change", function() {
    var l = document.getElementById("menuicon");
    var m = document.getElementById("menutext");
    if (this.checked) {
        isHeaderSticky = true;
        header.style.position = "sticky";
        l.innerHTML = "close";
        m.innerHTML = "";
    } else {
        if ( window.pageYOffset >= stickyLevel ) {
            isHeaderSticky = true;
            header.style.position = "sticky";
        }
        else {
            isHeaderSticky = false;
            header.style.position = "relative";
        }
        l.innerHTML = "menu";
        m.innerHTML = "MENU";
    }
});

function handleParams () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page')
    const title = document.getElementById("title");
    title.innerHTML = "Kitaptan " +  page;
}



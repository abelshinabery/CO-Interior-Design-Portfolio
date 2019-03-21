// Toggle ham menu
var toggleHamMenu = function() {
    hamMenu.classList.toggle('change');
    listNav.classList.toggle('show-nav');
}


// Navigation 
var hamMenu = document.getElementById('ham-nav');
var listNav = document.getElementById('list-nav');
hamMenu.addEventListener('click', toggleHamMenu);


// Close nav when clicking on link on mobile
var listLink = document.getElementsByClassName('list-nav-link');

for (var i = 0; i < listLink.length; i++) {
    listLink[i].addEventListener('click', toggleHamMenu);
}

// Image overlays

var overlay = document.getElementById('overlay-container');
var overlayImg = document.getElementById('overlay-img');
var imgs = document.getElementsByClassName('gal-img');
console.log(imgs);

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function() {
        overlayImg.src = this.src;
        overlay.classList.add('show-overlay');
    });
}

// Image lazy load

var waitToLoad = document.querySelectorAll('img[data-src]');

for (var i = 0; i < waitToLoad.length; i++) {
    
    waitToLoad[i].setAttribute('src', waitToLoad[i].getAttribute('data-src'));
    
    waitToLoad[i].onload = function() {
        this.removeAttribute('data-src');
    }
}



// Close overlay
var closeOverlay = function() {
    overlay.classList.remove('show-overlay');
};

var closebar = document.getElementById('close-overlay');
closebar.addEventListener('click', closeOverlay);

overlayImg.addEventListener('click', closeOverlay);

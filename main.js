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
var galItems = document.getElementsByClassName('gal-item');
var imgs = document.getElementsByClassName('gal-img');
console.log(imgs);
var title, description;

for (var i = 0; i < imgs.length; i++) {
    
    
    imgs[i].addEventListener('click', function() {
        overlayImg.src = this.src;
        overlay.classList.add('show-overlay');
        
        title = this.nextElementSibling.firstElementChild.textContent;
        description = this.nextElementSibling.lastElementChild.textContent;
                
        document.getElementById('overlay-img-title').innerHTML = title;
        document.getElementById('overlay-img-text').innerHTML = description;
    });
    
}


for (var i = 0; i < galItems.length; i++) {
  
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
    document.getElementById('overlay-img-title').innerHTML = " ";
    document.getElementById('overlay-img-text').innerHTML = " ";
};

var closebar = document.getElementById('close-overlay');
overlay.addEventListener('click', closeOverlay);

overlayImg.addEventListener('click', closeOverlay);

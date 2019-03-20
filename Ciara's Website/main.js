var hamMenu = document.getElementById('ham-nav');
var listNav = document.getElementById('list-nav');

hamMenu.addEventListener('click', function() {
    hamMenu.classList.toggle('change');
    listNav.classList.toggle('show-nav');
});
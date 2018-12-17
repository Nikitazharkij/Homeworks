(function () {
    var menuElement = document.querySelector('.menu'),
        itemsElement = menuElement.querySelector('.menu__container'),
        openItems = 'closed';

    menuElement.addEventListener('click', function () {
        itemsElement.classList.toggle(openItems);
    });
})();

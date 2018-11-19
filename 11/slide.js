(function() {
    "use strict";

    function slideSize() {

document.querySelectorAll('.slides').forEach(function (element) {
    var slideSize = element.clientWidth;
        currentPosition = 0;

    document.querySelectorAll('.arrow').forEach(function (element) {
    var currentPosition = 0,
        size = slideSize();

        element.onclick = function () {
            var name = selectElement.value;

            console.log(name);

/*            currentPosition += size;

            if (currentPosition >= element.scrollWidth) {
                currentPosition = 0;
            }

            element.scroll({left: currentPosition, behavior: 'smooth'});*/
        }
    });

})();

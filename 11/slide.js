(function() {
    "use strict";

    function slideSize() {

        document.querySelectorAll('.slides').forEach(function (element) {
        var slideSize = element.clientWidth;
            return slideSize;
        });
    }

    document.querySelectorAll('.right').forEach(function (element) {
    var currentPosition = 0,
        size = slideSize();

        element.onclick = function () {
            currentPosition += size;

            if (currentPosition >= element.scrollWidth) {
                currentPosition = 0;
            }

            element.scroll({left: currentPosition, behavior: 'smooth'});
        }
    });

})();

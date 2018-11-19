(function() {
    "use strict";

    document.querySelectorAll('.slides').forEach(function (element) {
        var slideSize = element.clientWidth,
            currentPosition = 0,
            elementRight = element.querySelector('.right'),
            elementLeft = element.querySelector('.left');

            elementRight.onclick = function () {
                currentPosition += slideSize;

                if (currentPosition >= element.scrollWidth) {
                    currentPosition = 0;
               }
                console.log(currentPosition);

                element.scroll({left: currentPosition, behavior: 'smooth'});
            }

            elementLeft.onclick = function () {
                currentPosition -= slideSize;
                if (currentPosition <= 0) {
                    currentPosition = element.scrollWidth - slideSize;
               }
                console.log(currentPosition);

                element.scroll({left: currentPosition, behavior: 'smooth'});
            }

    });

})();

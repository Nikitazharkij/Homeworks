(function () {
    "use strict";

    document.querySelectorAll('.container').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.container__content');

        console.log('current value: ', selectElement.value);

        selectElement.onchange = function () {
            removeBlock();

            var name = selectElement.value,
            getTab = getTabByName(tabsContainerElement, name);

            console.log('new value: ', selectElement.value);
            console.log('getTab: ', getTab);

            getTab.classList.add('container__conten_current');
        };
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }

    function removeBlock() {
        document.querySelectorAll('[data-name]').forEach(function (elements) {
            elements.classList.remove('container__conten_current');
        })
    }

})();

(function () {
    "use strict";

    document.querySelectorAll('.container').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.container__tabs');

        console.log('current value: ', selectElement.value);

        selectElement.onchange = function () {
            removeBlock();

            var name = selectElement.value,
            getTab = getTabByName(tabsContainerElement, name);

            console.log('new value: ', selectElement.value);
            console.log('getTab: ', getTab);

            getTab.classList.add('container__tabs_selected');
        };
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }

    function removeBlock() {
        document.querySelectorAll('[data-name]').forEach(function (elements) {
            elements.classList.remove('container__tabs_selected');
        })
    }

})();

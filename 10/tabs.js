(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        console.log('current value: ', selectElement.value);

        selectElement.onchange = function () {
            var name = selectElement.value;

            console.log('new value: ', selectElement.value);

            document.getElementById(name).classList.toggle('tabs-container-tab_selected');
        };
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');


    }
})();

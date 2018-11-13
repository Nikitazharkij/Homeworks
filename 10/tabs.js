(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        console.log('current value: ', selectElement.value);

        selectElement.onchange = function () {
            var name = selectElement.value;

            console.log('new value: ', selectElement.value);
/*удаляем класс tabs-container-tab_selected */
            document.getElementById('first').classList.remove('tabs-container-tab_selected');
            document.getElementById('second').classList.remove('tabs-container-tab_selected');
            document.getElementById('last').classList.remove('tabs-container-tab_selected');
/*добавляем класс tabs-container-tab_selected */

            document.getElementById(name).classList.toggle('tabs-container-tab_selected');
        };
    });

/*Не знаю куда применить эту функцию*/
    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');

    }
})();

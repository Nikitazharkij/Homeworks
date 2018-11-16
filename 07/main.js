"use strict";

(function () {
    console.group("sort");

    var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

        result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);

    console.log('result', result);

        function prioritySort(array, dataPriority){

        //Ищем числа и сортируем по возрастанию

        var arr1 = [];
        for (var i = 0, j = 0; i < array.length; i++) {
            if (typeof (array[i]) === dataPriority[0]) {
                arr1[j] = array[i];
                j++;
            }
        }
        var array1 = arr1.sort();

        //Ищем null
        var arr2 = [];
            for (var i = 0, j = 0; i < array.length; i++) {
                if (array[i] === null) {
                    arr2[j] = array[i];
                    j++;
                }
            }
            var array2 = arr2;

        //Ищем строки и сортируем по алфавиту

            var arr3 = [];
            for (var i = 0, j = 0; i < array.length; i++) {
                if (typeof (array[i]) === dataPriority[2]) {
                    arr3[j] = array[i];
                    j++;
                }
            }
            var array3 = arr3.sort();

        //Ищем объекты

            var arr4 = [];
            for (var i = 0, j = 0; i < array.length; i++) {
                if (typeof (array[i]) === dataPriority[3] && array[i] !== null) {
                    arr4[j] = array[i];
                    j++;
                }
            }
            var array4 = arr4.sort();

        //Ищем undefined

            var arr5 = [];
            for (var i = 0, j = 0; i < array.length; i++) {
                if (typeof (array[i]) === dataPriority[4]) {
                    arr5[j] = array[i];
                    j++;
                }
            }
            var array5 = arr5;

        //Ищем boolean и сортируем по true и false

            var arr6 = [];
            for (var i = 0, j = 0; i < array.length; i++) {
                if (typeof (array[i]) === dataPriority[5]) {
                    arr6[j] = array[i];
                    j++;
                }
            }
            var array6 = arr6.sort().reverse();

            return result = array1.concat(array2, array3, array4, array5, array6);

    };

    console.groupEnd();
    
})();
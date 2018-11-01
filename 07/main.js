"use strict";

(function () {
	console.group("sort");

	var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

		function prioritySort(){

		//Ищем числа и сортируем по возрастанию

		var arr1 = [];
		for (var i = 0, j = 0; i < data.length; i++) {
			if (typeof (data[i]) === "number") {
				arr1[j] = data[i];
				j++;
			}
		}
		var array1 = arr1.sort();

		//Ищем null
		var arr2 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (data[i] === null) {
					arr2[j] = data[i];
					j++;
				}
			}
			var array2 = arr2;

		//Ищем строки и сортируем по алфавиту

			var arr3 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "string") {
					arr3[j] = data[i];
					j++;
				}
			}
			var array3 = arr3.sort();

		//Ищем объекты

			var arr4 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "object" && data[i] !== null) {
					arr4[j] = data[i];
					j++;
				}
			}
			var array4 = arr4.sort();

		//Ищем undefined

			var arr5 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "undefined") {
					arr5[j] = data[i];
					j++;
				}
			}
			var array5 = arr5;

		//Ищем boolean и сортируем по true и false

			var arr6 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "boolean") {
					arr6[j] = data[i];
					j++;
				}
			}
			var array6 = arr6.sort().reverse();

			return result = array1.concat(array2, array3, array4, array5, array6);

	};

		console.log(prioritySort());

	console.groupEnd();
	
})();
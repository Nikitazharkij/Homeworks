"use strict";

(function () {
	console.group("sort");

	var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

		function numberSort() {

			var arr1 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "number") {
					arr1[j] = data[i];
					j++;
				}
			}
			var array1 = arr1.sort();
			return array1;
		}

		console.log(numberSort());

		function nullSort() {

			var arr2 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (data[i] === null) {
					arr2[j] = data[i];
					j++;
				}
			}
			var array2 = arr2;
			return array2;
		}

		console.log(nullSort());

		function stringSort() {

			var arr3 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "string") {
					arr3[j] = data[i];
					j++;
				}
			}
			var array3 = arr3.sort();
			return array3;
		}

		console.log(stringSort());

		function objectSort() {
			var arr4 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "object" && data[i] !== null) {
					arr4[j] = data[i];
					j++;
				}
			}
			var array4 = arr4.sort();
			return array4;
		}

		console.log(objectSort());

		function undefinedSort() {
			var arr5 = [];
			for (var i = 0, j = 0; i < data.length; i++) {
				if (typeof (data[i]) === "undefined") {
					arr5[j] = data[i];
					j++;
				}
			}
			var array5 = arr5;
			return array5;
		}

		console.log(undefinedSort());

	console.groupEnd();

})();

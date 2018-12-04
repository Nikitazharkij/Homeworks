var array1 = [1, 2, 3, 4, 5],
    array2 = [9, 7, 3];

var result1 = reduce(array1),
    result2 = reduce(array2);

console.log('result1:', result1);
// expected result: 15

console.log('result2:', result2);
// expected result: 19

function reduce(array) {
    var result;

    for (var i = 0, result = 0; i < array.length; i++) {
        result = result + array[i];
    }

    return result;
}

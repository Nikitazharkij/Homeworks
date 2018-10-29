var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];
    
    for (var i = 0; i < array1.length + array2.length; i++) {
        if (i < array1.length) {
            result[i] = array1[i];
        } else {
            if (i >= array1.length) {
            result[i] = array2[i - array1.length];
            }
        }
    }
    
console.log("result: ", result);
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    let arr_odd = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arr_odd.push(array[i]);
        } 
    }

    arr_odd.sort((a, b) => a - b);
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] % 2 != 0) {
            array[i] = arr_odd[counter];
            counter++;
        }   
    }
 
    return array;
}

array = [1, 11, 2, 8, 3, 4, 5];
console.log(sortArray(array));
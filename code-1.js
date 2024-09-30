// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(arr1, arr2) {
    let arr_result = [];

    for (let i = 0; i < arr1.length; i++) {
        let word1 = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let word2 = arr2[j];
            
            if (word2.includes(word1) && !arr_result.includes(word1)) {
                arr_result.push(word1);
            }
        }
    }

    return arr_result.sort();
}
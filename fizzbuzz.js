"use strict";

fizzbuzz(60);

function fizzbuzz(max_val) {
    let result;
    for(let i = 0; i <= max_val; i++) {
        if (i % 4 == 0 && i % 6 == 0) {
            result = "fizzbuzz";
        }
        else if (i % 4 == 0) {
            result = "fizz";
        }
        else if (i % 6 == 0) {
            result = "buzz";
        }
        else {
            result = i;
        }

        if (i % 5 == 0) {
            if (result == i) {
                result = "bool";
            }
            else {
                result += "bool";
            }
        }
        console.log(result);
    }
}
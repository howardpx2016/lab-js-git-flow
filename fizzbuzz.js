"use strict";

for(let i = 0; i < 101; i++) {
    if (i % 4 == 0 && i % 6 == 0) {
        console.log("fizzbuzz");
    }
    else if (i % 4 == 0) {
        console.log("fizz");
    }
    else if (i % 6 == 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
    console.log(" ");
}
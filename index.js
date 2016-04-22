'use strict'

var most = require('most');

function* allTheIntegers(interval) {
    let i=0;
    while(true) {
        yield delayPromise(interval, i++);
    }
}

function delayPromise(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

// Log the first 100 integers, at 1 second intervals
most.generate(allTheIntegers, 1000)
    .take(100)
    .observe(x => console.log(x));

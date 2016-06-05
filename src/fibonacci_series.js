'use strict';

function fibonacci_series(n) {
   var Fibonacci = buildFibonacci(n);
    return Fibonacci;
}

function buildFibonacci(n) {
    var Fibonacci = [0,1];

    for(var i = 2; i < n+1; i++){
        Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2];
    }
    return Fibonacci;
}

module.exports = fibonacci_series;

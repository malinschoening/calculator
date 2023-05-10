import React from 'react';

const addition = (first, second) => {
    if(isNaN(first) || isNaN(second)){
        throw new Error('We only work with numbers')
    }

    const sum = +first + +second;
    return Math.floor(sum);
}

const subtraction = (first, second) => {
    if(isNaN(first) || isNaN(second)){
        throw new Error('We only work with numbers')
    }

    const sum = +first - +second;
    return Math.floor(sum);
}

const multiply = (first, second) => {
    if(isNaN(first) || isNaN(second)){
        throw new Error('We only work with numbers')
    }
    return Math.floor(first*second);
}

const division = (first, second) => {
    if(isNaN(first) || isNaN(second)){
        throw new Error('We only work with numbers')
    }
    if(second == 0) {
        return NaN
    } else {
        return Math.floor(first/second);
        }
}

export { addition, subtraction, multiply, division };
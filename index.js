var crypto = require('crypto');

function calc(op1, op2, operation) {
    if (operation === 'sum' || operation === 'add') {
        return op1 + op2;
    }
    else if (operation === 'sub') {
        return op1 - op2;
    }
    else if (operation === 'mul') {
        return op1 * op2;
    }
    else if (operation === 'div') {
        return op1 / op2;
    }
    else if (operation === 'random') {
        const n = crypto.randomInt(0, 100000000);
        return n;
    }
    else if (operation === 'sin') {
        return Math.sin(op1)
    }
    else if (operation === 'cos') {
        return Math.cos(op1)
    }
    else if (operation === 'tan') {
        return Math.tan(op1)
    }
    return 'Not sure what to do!';
}

var result = calc(Number(process.argv[3]), Number(process.argv[4]), process.argv[2]);

console.log(result);


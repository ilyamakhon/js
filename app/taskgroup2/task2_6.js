const sum = function (a, b) {
    return this.sum + a + b;
};

const bind = function (fn, context) {
    const bindArgs = [].slice.call(arguments, 2);
    return function () {
        const fnArgs = [].slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

const bindedSum = bind(sum,{sum: 100});

console.log(bindedSum(10, 25));
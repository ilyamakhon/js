const sum = function (a, b) {
    return this.sum + a + b;
};

const bind = function (fn, context) {
    // обрезаем ненужные аргументы (функцию и контекст)
    const bindArgs = [].slice.call(arguments, 2);
    return function () {
        // здесь все аргументы будут необходимы
        const fnArgs = [].slice.call(arguments);
        // собираем все
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

const bindedSum = bind(sum,{sum: 100});

console.log(bindedSum(10, 25));
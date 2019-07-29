function task2_4_1(arg) {
    return function () {
        return typeof arg === 'number';
    };
}

let decorator = task2_4_1(1);
console.log(decorator());

function task2_4_2(...args) {
    return function decorator2(type) {
        return args.some(arg =>
            typeof arg !== type
        );
    };
}

let decorator2 = task2_4_2('asd', 'asd', '23', 'asd');
console.log(decorator2('string'));
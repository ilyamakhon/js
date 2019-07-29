export default function task3_1() {
    const el = document.getElementById('task3_1');
    el.addEventListener('click', () => {
        range(
            parseInt(prompt('please enter the start of range')),
            parseInt(prompt('please enter the end of range')),
            parseInt(prompt('please enter the step to build an array (for reverse sequence -1)'))
        );
    });
}

function range(startOfRange, endOfRange, stepForArray) {
    const array = [];
    for (startOfRange; startOfRange <= endOfRange; startOfRange++) {
        if (stepForArray === -1) {
            array.unshift(startOfRange);
        } else {
            array.push(startOfRange);
        }
    }
    alert(array);
}

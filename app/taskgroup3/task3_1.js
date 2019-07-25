export default function task3_1() {
    const el = document.getElementById('task3_1');
    el.addEventListener('click', () => {
        let startOfRange = parseInt(prompt('please enter the start of range'));
        let endOfRange = parseInt(prompt('please enter the end of range'));
        let stepForArray = parseInt(prompt('please enter the step to build an array (for reverse sequence -1)'));
        range(startOfRange, endOfRange, stepForArray);
    });
}

function range(startOfRange, endOfRange, stepForArray) {
    let array = [];
    for (startOfRange; startOfRange <= endOfRange; startOfRange++) {
        if (stepForArray === -1) {
            array.unshift(startOfRange);
        } else {
            array.push(startOfRange);
        }
    }
    alert(array);
}
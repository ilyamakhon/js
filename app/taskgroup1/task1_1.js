export default function task1_1() {
    const el = document.getElementById('task1_1');
    el.addEventListener('click', () => {
        doTask1_1();
    });
}

function doTask1_1() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const num1 = parseFloat(prompt('enter number 1'));
        const num2 = parseFloat(prompt('enter number 2'));

        if (!isNumbers(num1, num2)) {
            if (num1 === num2) {
                alert('numbers are equal');
            }

            if (isNumberGreater(num1, num2) || isNumberGreater(num2, num1)) {
                break;
            }
        } else {
            break;
        }
    }
}

function isNumbers(num1, num2) {
    if (isNaN(num1)) {
        alert('first number is not numeric');
        return 1;
    } else if (isNaN(num2)) {
        alert('second number is not numeric');
        return 1;
    }
}

function isNumberGreater(num1, num2) {
    if (num1 > num2) {
        alert('first number is greater then second');
        return 1;
    }
    if (num1 < num2) {
        alert('second number is greater then first');
        return 1;
    }
}
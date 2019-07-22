export default function task1_1() {
    const el = document.getElementById('task1_1');
    el.addEventListener('click', () => {
       doTask1_1();
    });
}

function doTask1_1() {
    while(true) {
        const num1 = parseFloat(prompt('enter number 1'));

        if(isNaN(num1)) {
            alert('first number is not numeric');
            break;
        }

        const num2 = parseFloat(prompt('enter number 2'));

        if(isNaN(num2)) {
            alert('second number is not numeric');
            break;
        }

        if(num1 === num2) {
            alert('numbers are equal');
        }

        if(num1 > num2) {
            alert('first number is greater then second');
        }

        if(num1 < num2) {
            alert('second number is greater then first');
        }
    }
}
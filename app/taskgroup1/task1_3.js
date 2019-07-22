export default function task1_3() {
    const el = document.getElementById('task1_3');
    el.addEventListener('click', () => {
        let fib1 = 1, fib2 = 1;
        let fibSum = 0;
        const n = prompt('please enter the index of element from Fibonacci row: ')

        for(let i = 0; i < n - 2; i++) {
            fibSum = fib1 + fib2;
            fib1 = fib2;
            fib2 = fibSum;
        }

        alert(fib2);
    });
}
export default function task2_3() {
    const el = document.getElementById('task2_3');
    el.addEventListener('click', () => {
        doTask2_3()
    });
}

function doTask2_3() {

    function sequence(start, step) {
        return function generator() {
            return  start += step;
        }
    }

    let generator = sequence(
        parseInt(prompt('enter the start of sequence')),
        parseInt(prompt('enter the step of sequence'))
    );

    alert(`
        ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} ->
        ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} ->
        ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} ->
        ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} ->
        ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} -> ${generator()} 
    `);

}
const array = [3, 2, 1]

for (let i = 0; i <= array.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[i + 1]) {
            min = j
        }
    }
    const t = array[min]
    array[min] = array[i]
    array[i] = t
}

console.log(array)

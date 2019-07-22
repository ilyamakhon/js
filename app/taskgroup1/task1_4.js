export default function task1_4() {
    const el = document.getElementById('task1_4');
    el.addEventListener('click', () => {
        const year = prompt('please enter the year: ');
        const month = prompt('please enter the number of month: (1-12)');
        const day = prompt('please enter the number of day: (1-31)');
        alert(`${year}.${month}.${day} : ${getDay(year, month, day)}`);
    });
}

function getDay(year, month, day) {
    const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday",
                "Friday","Saturday"];

    return days[new Date(year, month-1, day).getDay()];
}
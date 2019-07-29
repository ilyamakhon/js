import DateModel from '../model/datemodel.js';

export default function task1_4() {
    const el = document.getElementById('task1_4');
    el.addEventListener('click', () => {
        const dateModel = new DateModel(
            parseInt(prompt('please enter the year: ')),
            parseInt(prompt('please enter the number of month: (1-12)')),
            parseInt(prompt('please enter the number of day: (1-31)'))
        );
        alert(`${dateModel.year}.${dateModel.month}.${dateModel.day} : ${getDay(dateModel)}`);
    });
}

function getDay(dateModel) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"];

    return days[new Date(dateModel.year, dateModel.month - 1, dateModel.day).getDay()];
}
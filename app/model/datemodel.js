export default class DateModel {
    constructor(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }


    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get month() {
        return this._month;
    }

    set month(value) {
        this._month = value;
    }

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }
}
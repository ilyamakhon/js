export default class Building {
    constructor(numberOfFloors, numberOfEntrances, numberOfApartmentsOnFloor) {
        this.numberOfFloors = numberOfFloors;
        this.numberOfEntrances = numberOfEntrances;
        this.numberOfApartmentsOnFloor = numberOfApartmentsOnFloor;
    }

    set setNumberOfFloors(numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    }

    set setNumberOfEntrances(numberOfEntrances) {
        this.numberOfEntrances = numberOfEntrances;
    }

    set setNumberOfApartmentsOnFloor(numberOfApartmentsOnFloor) {
        this.numberOfApartmentsOnFloor = numberOfApartmentsOnFloor;
    }

    set setWholeAmountOfApartments(wholeAmountOfApartments) {
        this.wholeAmountOfApartments = wholeAmountOfApartments;
    }
}
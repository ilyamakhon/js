export default class Point {

	constructor(firstCoordinate, secondCoordinate) {
		this.firstCoordinate = firstCoordinate;
		this.secondCoordinate = secondCoordinate;
	}

	get getFirstCoordinate() {
		return this.firstCoordinate;
	}

	get getSecondCoordinate() {
		return this.secondCoordinate;
	}

	set setFirstCoordinate(firstCoordinate) {
		this.firstCoordinate = firstCoordinate;
	}

	set setSecondCoordinate(secondCoordinate) {
		this.secondCoordinate = secondCoordinate;
	}
}
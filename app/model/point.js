export default class Point {

	constructor(firstCoordinate, secondCoordinate) {
		this._firstCoordinate = firstCoordinate;
		this._secondCoordinate = secondCoordinate;
	}

	get firstCoordinate () {
		return this._firstCoordinate;
	}

	set firstCoordinate (value) {
		this._firstCoordinate = value;
	}

	get secondCoordinate () {
		return this._secondCoordinate;
	}

	set secondCoordinate (value) {
		this._secondCoordinate = value;
	}
}
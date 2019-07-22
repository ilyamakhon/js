export default class building {

  setData() {
    this.setFloors();
    this.setEntrances();
    this.setApartmentsOnFloor();
  }

  setFloors() {
    this.numberOfFloors = parseInt(prompt('please enter the number of floors'));
  }

  setEntrances() {
    this.numberOfEntrances = parseInt(prompt('please enter the number of entrances'));
  }

  setApartmentsOnFloor() {
    this.numberOfApartmentsOnFloor = parseInt(prompt('please enter the number of apartments on the floor'));
  }

  setWholeAmountOfApartments() {
    this.wholeAmountOfApartments = this.numberOfFloors * this.numberOfApartmentsOnFloor * this.numberOfEntrances;
  }

  validate() {
    let isError = false;
    if(isNaN(this.numberOfFloors) || this.numberOfFloors <= 0 || this.numberOfFloors > 25 ) {
      alert(`wrong number of floors : ${this.numberOfFloors}\nIt must be in range (1-25)`);
      this.setFloors();
      isError = true;
    }

    if(isNaN(this.numberOfEntrances) || this.numberOfEntrances <= 0 || this.numberOfEntrances > 10 ) {
      alert(`wrong number of entrances : ${this.numberOfEntrances}\nIt must be in range (1-10)`);
      this.setEntrances();
      isError = true;
    }

    if(isNaN(this.numberOfApartmentsOnFloor) || this.numberOfApartmentsOnFloor <= 0 || this.numberOfApartmentsOnFloor > 20 ) {
      alert(`wrong number of apartments on landing : ${this.numberOfApartmentsOnFloor}\nIt must be in range (1-20)`);
      this.setApartmentsOnFloor();
      isError = true;
    }

    if (isError) {
      this.validate();
    } else {
      this.setWholeAmountOfApartments();
    }
  }
}
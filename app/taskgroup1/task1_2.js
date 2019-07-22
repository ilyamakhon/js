import Building from '../model/building.js';
export default function task1_2() {
    const el = document.getElementById('task1_2');
    el.addEventListener('click', () => {
        doTask1_2();
    });
}

function doTask1_2() {
    let building = new Building();
    building.setData();
    building.validate();
    let apartmentNumber = parseInt(prompt('please enter apartment number'));

    alert(findApartment(apartmentNumber, building));
}

function findApartment(apartmentNumber, building) {
    const numberOfApartmentsInEntrance = building.numberOfFloors * building.numberOfApartmentsOnFloor;

    for(let entranceNumber = 1; entranceNumber <= building.numberOfEntrances; entranceNumber++) {
        let maxApartmentNumberInEntrance = building.numberOfApartmentsOnFloor * building.numberOfFloors * entranceNumber;

        if(apartmentNumber <= maxApartmentNumberInEntrance) {

            for (let floorNumber = 1; floorNumber <= building.numberOfFloors; floorNumber++) {
                let apartmentFloor = apartmentNumber;

                if (apartmentNumber > numberOfApartmentsInEntrance) {
                    apartmentFloor -= numberOfApartmentsInEntrance * (entranceNumber - 1);
                }
                if (apartmentFloor <= floorNumber * building.numberOfApartmentsOnFloor) {
                    return `${apartmentNumber} apartment is placed in: \n${entranceNumber} entrance\n${floorNumber} floor`;
                }
            }
        }
    }
}
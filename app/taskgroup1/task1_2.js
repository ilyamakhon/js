import Building from '../model/building.js';
export default function task1_2() {
    const el = document.getElementById('task1_2');
    el.addEventListener('click', () => {
        doTask1_2();
    });
}

function doTask1_2() {
    let building = new Building(
        parseInt(prompt('please enter the number of floors')),
        parseInt(prompt('please enter the number of entrances')),
        parseInt(prompt('please enter the number of apartments on the floor'))
    );

    try {
        validate(building);
    } catch (e) {
        switch (e.errorCode) {
            case 1:
                alert(e.errorMessage);
                building[e.setterName] = parseInt(prompt('please enter the number of floors'));
                building.setWholeAmountOfApartments = calculateWholeAmountOfApartments(building);
                console.log(building);
                break;
            case 2:
                alert(e.errorMessage);
                building[e.setterName] = parseInt(prompt('please enter the number of entrances'));
                building.setWholeAmountOfApartments = calculateWholeAmountOfApartments(building);
                console.log(building);
                break;
            case 3:
                alert(e.errorMessage);
                building[e.setterName] = parseInt(prompt('please enter the number of apartments on the floor'));
                building.setWholeAmountOfApartments = calculateWholeAmountOfApartments(building);
                break;
            default:
                break;
        }
    }
    building.setWholeAmountOfApartments = calculateWholeAmountOfApartments(building);
    let apartmentNumber = parseInt(prompt('please enter apartment number'));

    alert(findApartment(apartmentNumber, building));
}

function validate(building) {
    if(isNaN(building.numberOfFloors) || building.numberOfFloors <= 0 || building.numberOfFloors > 25 ) {
        throw {
            errorCode: 1,
            errorMessage: `wrong number of floors : ${building.numberOfFloors} It must be in range (1-25)`,
            setterName: 'setNumberOfFloors'
        };
    }

    if(isNaN(building.numberOfEntrances) || building.numberOfEntrances <= 0 || building.numberOfEntrances > 10 ) {
        throw {
            errorCode: 2,
            errorMessage: `wrong number of entrances : ${building.numberOfEntrances} It must be in range (1-10)`,
            setterName: 'setNumberOfEntrances'
        };
    }

    if(isNaN(building.numberOfApartmentsOnFloor) || building.numberOfApartmentsOnFloor <= 0 || building.numberOfApartmentsOnFloor > 20 ) {
        throw{
            errorCode: 3,
            errorMessage: `wrong number of apartments on landing : ${building.numberOfApartmentsOnFloor} It must be in range (1-20)`,
            setterName: 'setNumberOfApartmentsOnFloor'
        };
    }
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

function calculateWholeAmountOfApartments(building) {
    return building.numberOfFloors * building.numberOfApartmentsOnFloor * building.numberOfEntrances;
}
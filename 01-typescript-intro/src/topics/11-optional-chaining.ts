export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Francisco',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Gabriel']
}   



const returnChildrenNumber = (passenger: Passenger) : number => {
    const howManyChildren = passenger.children?.length || 0;
    console.log( passenger.name + " has " + howManyChildren + " children." );
    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
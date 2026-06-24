export function classDecorator<T extends {new (...args: any[]) : any}>(
    constructor: T
) {
 
    return class extends constructor {

        myProperty: string = 'ABC123';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {

    public myProperty: string = 'ABC123';
 
    print() {
        console.log('Hola Mundo');
    }

}



console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);


export {};

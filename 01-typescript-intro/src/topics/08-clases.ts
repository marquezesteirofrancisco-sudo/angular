

export class Person {

    // public name: string ;
    // private address: string;

    
    constructor(
            public firstName: string, 
            public lastName: string,
            private address: string = 'No address'
        ) {  }

}


// export class Hero extends Person {
   
//     constructor(public alterEgo: string, 
//                 public age: number,
//                 public realName: string) {
//         super(realName, 'New York');
//     };
// }


export class Hero  {

    constructor(public alterEgo: string, 
                public age: number,
                public realName: string,
                public person : Person) {
       
    };
}


const tony = new Person('Bruce', 'Stark', 'Malibu Point 10880');
const ironman = new Hero('Tony Stark', 45, 'Tony Stark', tony);

console.log(ironman); // Error: Property 'address' is private and only accessible within class 'Person'.
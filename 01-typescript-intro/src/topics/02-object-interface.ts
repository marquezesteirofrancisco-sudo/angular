const skills : string []= ['Bash', 'Counter', 'Healing']; ;


interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string | undefined; // optional property
}   

const strinder : Character  = {
    name: 'Strinder',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
 }

strinder.homeTown = 'Pueblo Paleta';

 console.table(strinder);


export {};
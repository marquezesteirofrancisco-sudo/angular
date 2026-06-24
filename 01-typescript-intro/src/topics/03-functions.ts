
function addNumbers( a: number, b: number): number{
    return a + b;
}



function multiplay(firstNumber: number, secondNumber?: number, base: number = 2): number {

    return firstNumber  * base;
}



const result = addNumbers(1, 2);

const multiplayResult: number = multiplay(5);


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const HealCharacter = (character: Character, amount: number): void => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }   
}

strider.showHp();

export {}
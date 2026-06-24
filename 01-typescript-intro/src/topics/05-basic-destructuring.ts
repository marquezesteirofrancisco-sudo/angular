// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }   

// interface Details { 
//     author: string;
//     year: number;
// }


// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: "Mess",
//     details: {
//         author: "John Doe",
//         year: 2020
//     }
// }

// const { song: songName,  details: { author } } = audioPlayer;

// console.log('Song', songName);
// console.log('Author', author);





// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || 'No hay personaje 3';

// console.error('Personaje 3:', trunks);

const [p1, p2, trunks= 'No hay personaje 3'] : string[] = ['Goku', 'Vegeta',];

console.error('Personaje 3:', trunks);

export {};
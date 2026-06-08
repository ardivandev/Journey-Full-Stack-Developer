// Array

let colors = ['red', 'orange', 'yellow', 'green'];
let numbers = [2, 5, 3, 8];

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);

// colors[9] = 'grey';

// console.log(colors);
// console.log(colors[2]);

// Metode Array
console.log(array3.length);
colors.push('black');
console.log(colors);
colors.unshift('white');
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);

console.log(numbers.sort());
console.log(array3);
console.log(array3.indexOf(5));
console.log(array3.includes(5));

colors.splice(0, 2, 'blue');
console.log(colors);
console.log(colors.slice(0, 2));
console.log(array3.reverse());
console.log(array3.join(' '));

const city = ['Bandung', 'Jakarta', 'Surabaya'];
city.push('Banten');
console.log(city);

// Nested Array
const board = [
  [null, null, 'O'],
  ['X', 'O', null],
  ['O', null, 'X'],
];

console.log(board[1][1]);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sapaPemenang(juara1, juara2, ...sisaPeserta) {
  console.log(`Selamat Juara 1: ${juara1}`);
  console.log(`Selamat Juara 2: ${juara2}`);
  console.log(`Terima kasih untuk peserta lainnya:`, sisaPeserta);
}

sapaPemenang('Andi', 'Budi', 'Cici', 'Dedi', 'Eka');

const [satu, dua, tiga] = number;
console.log(satu);
console.log(dua);
console.log(tiga);

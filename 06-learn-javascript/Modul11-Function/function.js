// Function

function showName(name) {
  console.log(`My name is ${name}`);
}

// Lebih Baik Menggunakan Function Expression
// Harus membuat variabel
function calcSum(a, b) {
  return a + b;
}

// Tidak perlu membuat variabel
const calcDivide = function (a, b) {
  return a / b;
};

function duaKaliLemparDadu(func) {
  func();
  func();
}

function lemparDadu() {
  let nilaiDadu = Math.floor(Math.random() * 6) + 1;
  console.log(nilaiDadu);
}

function functionReturnFunction() {
  let nilaiRand = Math.floor(Math.random() * 5) + 1;
  if (nilaiRand === 5) {
    return function () {
      console.log('Kamu mendapatkan nilai tertinggi');
    };
  } else {
    return function () {
      console.log('Kamu mendapatkan nilai terendah');
    };
  }
}

const siswa = {
  nama: 'White Star',
  umur: 17,
  jurusan: 'Rekayasa Perangkat Lunak',
  getInfo: function () {
    console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Jurusan: ${this.jurusan}`);
  },

  getUmur() {
    console.log(`Umur saya adalah ${this.umur}`);
  },
};

function reverseStrings(msg) {
  try {
    console.log(msg.trim().split('').reverse().join(''));
  } catch (error) {
    console.log(error);
  }
}

// Arrow Function
const calcMultiply = (a, b) => a * b;

// Callback Function

const animals = [
  { nama: 'Singa', jenis: 'Karnivora' },
  { nama: 'Beruang', jenis: 'Karnivora' },
  { nama: 'Sapi', jenis: 'Herbivora' },
  { nama: 'Domba', jenis: 'Herbivora' },
];

// const panjangNamaHewan = animals.every((value) => {
//   return value.nama.length === 5;
// });

const panjangNamaHewan = animals.some((value) => {
  return value.nama.length === 5;
});

console.log(panjangNamaHewan);

const namaHewanYangMemilikiHurufS = animals.filter((value) => {
  return value.nama.includes('S');
});

const hewanKarnivora = animals.find((value) => {
  return value.jenis === 'Karnivora';
});

animals.forEach(function (animal) {
  console.log(`${animal.nama} - ${animal.jenis}`);
});

const nameAnimals = animals.map(function (animal) {
  return animal.nama.toUpperCase();
});

const bahanMentah = ['Ayam Mentah', 'Daging Mentah'];
const bahanMatang = bahanMentah.map(function (bahan) {
  return bahan.replace('Mentah', 'Bakar');
});

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jumlahNumber = number.reduce((pre, curr) => {
  return pre + curr;
});

console.log(jumlahNumber);

function greet(msg = 'Bro!') {
  console.log(`Halo ${msg}!`);
}

// Cara Pemanggilan Function
showName('Simon');
duaKaliLemparDadu(lemparDadu);

let result = calcSum(10, 2);
console.log(result);

console.log(calcDivide(10, 2));

functionReturnFunction()();

siswa.getInfo();
siswa.getUmur();
reverseStrings('Hello World');
console.log(nameAnimals);
console.log(bahanMentah);
console.log(bahanMatang);
console.log(calcMultiply(10, 2));
console.log(namaHewanYangMemilikiHurufS);
console.log(hewanKarnivora);
greet();
greet('Ardi');

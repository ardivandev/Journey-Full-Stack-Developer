// Perulangan

for (let i = 1; i <= 5; i += 2) {
  console.log(i);
}

const animals = ['cat', 'dog', 'cow', 'sheep', 'tiger'];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// Nested Loop
for (let i = 1; i <= 10; i++) {
  console.log(`Perkalian Ke-${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// Perulangan While
let index = 1;
while (index <= 5) {
  console.log(index);
  if (index === 3) break;
  index++;
}

for (const element of animals) {
  console.log(element);
}

for (const key in animals) {
  console.log(animals[key]);
}

const scoreMahasiswa = {
  Oliver: 10,
  Mateo: 20,
  Ava: 30,
};

const scores = Object.keys(scoreMahasiswa);
console.log(scores);

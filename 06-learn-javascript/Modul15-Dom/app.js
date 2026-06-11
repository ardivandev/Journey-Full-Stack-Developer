const containerOne = document.querySelector('.container-1');
const titleOne = document.getElementsByTagName('h1');
const paragraphID = document.getElementById('p-id');
const paragraphClass = document.getElementsByClassName('p-class');
const paragraph = document.querySelector('.container-1 p');
const paragraphAll = document.querySelectorAll('.container-1 p');
const image = document.querySelector('.container-1 img');
const buttonUbah = document.getElementById('buttonUbah');

// Mengganti Isi
titleOne[0].textContent = 'Dom (Document Object Model)'; // Kenapa pake kurung siku, karena berdasarkan tag itu bisa banyak
paragraphID.textContent = 'Update manipulasi dom menggunakan id';

// Manipulasi Attributes
image.setAttribute('class', 'img-one');
console.log(image.hasAttribute('class')); // Untuk mengecek attributes ada gak nya
console.log(image.getAttribute('class')); // Untuk mengetahui isi dari attributes itu sendiri
image.removeAttribute('class'); // Untuk menghapus attributes
console.log(image.hasAttribute('class'));

// Styling Dom
titleOne[0].style.color = 'blue';
paragraphID.style.textDecoration = 'line-through';
// img.style.border = '10px solid blue';

// ClassList
buttonUbah.addEventListener('click', () => {
  image.classList.toggle('red'); // On Of
});

paragraphAll.forEach((p) => {
  if (paragraph.classList.contains('p-none')) {
    paragraph.classList.remove('p-none');
  } else {
    p.classList.add('kotak');
  }
});

// Parent, Child dan Sibling
console.log(paragraph.parentElement);
console.log(containerOne.children);
console.log(containerOne.firstElementChild); // Fokus Pada Element
console.log(containerOne.children[2]);
console.log(titleOne[0].nextElementSibling);
console.log(paragraphID.previousSibling); // Fokus pada yang kita tulis di vscode

// Create Element, append dan appendChild
const newImg = document.createElement('img');
const h2 = document.createElement('h2');

newImg.src =
  'https://images.unsplash.com/photo-1780130602799-9bc966904339?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

h2.innerText = 'Hello World';

titleOne[0].insertAdjacentElement('afterend', h2);

// Remove dan RemoveChild
// containerOne.removeChild(paragraphID);
paragraphID.remove();

containerOne.appendChild(newImg);

console.log(newImg);
console.log(containerOne.innerHTML);
console.log(containerOne.textContent);
console.log(containerOne.innerText);
console.log(image.attributes);

// --------------------------------------------------

const button = document.getElementById('button');
const evenBtn = document.getElementById('eventbtn');

button.onclick = function () {
  console.log('You click me');
};

button.onmouseover = function () {
  console.log("Don' touch me");
};

evenBtn.addEventListener('click', () => {
  alert('Clicked');
});

// --------------------------------------------------

const gBtn = document.getElementById('gBtn');
const containerTiga = document.querySelector('.container-3');
const h1 = document.querySelector('.container-3 h1');

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;

  return `rgb(${r}, ${g}, ${b})`;
};

gBtn.addEventListener('click', () => {
  const newColor = generateRandomColor();

  containerTiga.style.backgroundColor = newColor;
  h1.textContent = newColor;
});

// --------------------------------------------------

const buttons = document.querySelectorAll('.container-4 button');
const text = document.querySelectorAll('.container-4 h1');

for (const button of buttons) {
  button.addEventListener('click', colorize);
}

for (const h1 of text) {
  h1.addEventListener('click', colorize);
}

function colorize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}

// --------------------------------------------------

const buttonContainerLima = document.querySelector('.container-5 button');
const input = document.querySelector('.container-5 input');

buttonContainerLima.addEventListener('click', (e) => {
  console.log(e);
});

input.addEventListener('keydown', (e) => {
  console.log(e.key);
  console.log(e.code);
});

input.addEventListener('keyup', () => {
  console.log('Tombol dirilis');
});

// --------------------------------------------------

const form = document.querySelector('.container-6 form');
const inputMsg = document.querySelector('.container-6 form input');
const ulList = document.querySelector('#list');

const lis = document.querySelectorAll('#list li');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // e.stopPropagation();

  const valueInput = inputMsg.value;

  const li = document.createElement('li');
  li.innerText = valueInput;

  ulList.appendChild(li);
  inputMsg.value = '';
});

// for (let li of lis) {
//   li.addEventListener('click', () => {
//     li.remove();
//   });
// }

ulList.addEventListener('click', (e) => {
  e.target.nodeName === 'LI' && e.target.remove();
});

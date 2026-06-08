// IF Statement

let age = 18;
if (age >= 18) {
  console.log('Bisa membuat ktp');
} else {
  console.log('Belum bisa membuat ktp');
}

// IF ELSE-IF ELSE
const hari = 'Minggu';
if (hari === 'Senin') {
  console.log('Selamat bekerja kawan');
} else if (hari === 'Selasa' || hari === 'Rabu' || hari === 'Kamis' || hari === "Jum'at") {
  console.log('Tetap semangat kawan');
} else if (hari === 'Sabtu' || hari === 'Minggu') {
  console.log('Selamat menjalani hari libur kawan');
} else {
  console.log(`${hari} tidak ditemukan`);
}

// Nested IF
// const password = prompt('Masukkan password');
// if (password.length <= 6) {
//   if (!password.includes(' ')) {
//     alert('Password dapat digunakan');
//   } else {
//     alert('Password tidak boleh ada spasi');
//   }
// } else {
//   alert('Password terlalu panjang');
// }

const weapon = 'sniper';
switch (weapon) {
  case 'sniper':
    console.log('Sniper ditangan');
    break;
  case 'ak47':
    console.log('Ak47 ditangan');
    break;
  default:
    console.log('Tidak dapat di identifikasi');
    break;
}

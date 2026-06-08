// SetTimout

// console.log('Pesanan Dibuat');

// setTimeout(() => {
//   console.log('Pesanan Selesai');
// }, 5000);

// setTimeout(() => {
//   console.log('Pesanan Diproses');
// }, 3000);

let waktu = 5;

const hitungMundur = setInterval(() => {
  console.log(`Waktu tersisa ${waktu} detik`);
  waktu--;

  if (waktu < 0) {
    clearInterval(hitungMundur);
    console.log(`Waktu sudah habis`);
  }
}, 1000);

// Dijalankan setiap 1 detik untuk memperbarui waktu saat ini
setInterval(() => {
  const sekarang = new Date();
  const jam = sekarang.toLocaleTimeString(); // Mengambil format 12:30:45

  console.log(`Jam Sekarang: ${jam}`);
  // Jika dihubungkan ke HTML, kodenya bisa seperti:
  // document.getElementById('jam').innerText = jam;
}, 1000);

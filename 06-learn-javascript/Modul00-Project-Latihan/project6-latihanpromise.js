// function prosesPaket(noResi, callbackSelesai) {
//   setTimeout(() => {
//     callbackSelesai(`Paket dengan resi ${noResi} telah selesai disortie dan siap dikirim!`);
//   }, 2000);
// }

// prosesPaket(250, (res) => {
//   console.log(res);
// });

// const cekSaldoBank = (jumlahPenarikan) => {
//   return new Promise((resolve, reject) => {
//     const saldoSaatIni = 1000000;

//     setTimeout(() => {
//       if (jumlahPenarikan <= saldoSaatIni) {
//         resolve('Penarikan sukses! Saldo Anda aman.');
//       } else {
//         reject('Transaksi Gagal! Saldo tidak mencukupi.');
//       }
//     }, 1500);
//   });
// };

// cekSaldoBank(900000)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ====== JANGAN DIUBAH (FUNGSI PEMBANTU) ======
function pesanMakanan() {
  return new Promise((res) => setTimeout(() => res('Nasi Goreng'), 1000));
}
function antarMakanan(makanan) {
  return new Promise((res) => setTimeout(() => res(`${makanan} sudah sampai di rumah`), 1000));
}

// ====== UBAH FUNGSI INI MENJADI ASYNC / AWAIT ======
async function jalankanAplikasi() {
  console.log('Memulai pesanan...');

  let makanan = await pesanMakanan();
  console.log(`Driver sedang membeli: ${makanan}`);

  let statusAntar = await antarMakanan(makanan);
  console.log(`Status: ${statusAntar}`);
  console.log('Selamat makan!');
}

jalankanAplikasi();

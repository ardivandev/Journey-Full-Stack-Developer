// DATA KERANJANG BELANJA
const keranjangBelanja = [
  {
    id: 'P001',
    nama: 'Mouse Gaming',
    harga: 120000,
    jumlah: 1,
  },
  {
    id: 'P002',
    nama: 'Kabel Data Type-C',
    harga: 25000,
    jumlah: 3,
  },
  {
    id: 'P003',
    nama: 'Indomie Goreng',
    harga: 3500,
    jumlah: 5,
  },
  {
    id: 'P004',
    nama: 'Kopi Susu Botol',
    harga: 15000,
    jumlah: 2,
  },
];

// Variabel Untuk Menghitung Total Harga Barang
const totalHargaBarang = keranjangBelanja.map((value) => value.harga * value.jumlah);

// Variabel Untuk Menghitung Total Belanja
const totalBelanja = totalHargaBarang.reduce((pre, curr) => pre + curr, 0);

// Function Diskon
const diskon = (total) => {
  if (total >= 100000) {
    return total * 0.1;
  } else {
    return 0;
  }
};

// Main Function
function showStrukBelanja() {
  console.log(`Total Belanja: Rp.${totalBelanja}`);
  console.log(`Potongan Diskon (10%): Rp.${diskon(totalBelanja)}`);
  console.log(`Total yang Harus Dibayar: Rp.${totalBelanja - diskon(totalBelanja)}`);
}

showStrukBelanja();

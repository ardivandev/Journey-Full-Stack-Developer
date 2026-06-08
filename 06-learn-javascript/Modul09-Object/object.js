// Objects

const mahasiswa = {
  nama: 'Star Boy',
  umur: 20,
  ipk: 3.9,
  jurusan: 'Teknik Informasi',
};

console.log(mahasiswa.nama);
console.log(mahasiswa['jurusan']);

const { nama, umur, ...sisa } = mahasiswa;
console.log(nama);
console.log(umur);
console.log(sisa);

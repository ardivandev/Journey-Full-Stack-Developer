// // Tipe Data Primitif
// let nama: string = 'Ardivan';
// let umur: number = 18;
// let apakahKaryawan: boolean = true;

// // Tipe Data Array & Tuple
// let daftarNilai: number[] = [80, 90];
// let karyawan: [string, number] = ['Alice', 28];

// // Function
// function sapa(nama: string): string {
//   return `Halo, ${nama}!`;
// }

// // Toko Buah
// function hitungTotal(namaBuah: string, harga: number): string {
//   return `Buah ${namaBuah} harganya Rp ${harga.toLocaleString('id-ID')}`;
// }

// let apel: string = hitungTotal('Apel', 5000);
// console.log({ apel });

// // InterFace
// interface Produk {
//   id: number;
//   nama: string;
//   harga: number;
//   stok?: number; // Tanda tanya artinya opsional
// }

// const sepatu: Produk = { id: 1, nama: 'Sepatu Lari', harga: 500000 };
// console.log({ sepatu });

// type Hewan = {
//   id: number;
//   nama: string;
//   tipe: 'karnivora' | 'herbivora' | 'omnivora';
// };

// const singa: Hewan = { id: 1, nama: 'Singa', tipe: 'karnivora' };
// console.log({ singa });

// // Unio Types
// let idPelanggan: string | number;
// idPelanggan = 'USER-01';
// idPelanggan = 102;

// // Tantangan
// interface Mahasiswa {
//   nim: string | number;
//   nama: string;
//   ipk: number;
// }

// function cetakKTM(mahasiswa: Mahasiswa): void {
//   console.log(`
//     Data Mahasiswa:

//     - Nama: ${mahasiswa.nama}
//     - NIM: ${mahasiswa.nim}
//     - IPK: ${mahasiswa.ipk}
//   `);
// }

// const mahasiswa1: Mahasiswa = { nim: 'MHS-01', nama: 'Ardivan', ipk: 3.9 };
// cetakKTM(mahasiswa1);

// // Generics
// function kembalikanData<T>(arg: T): T {
//   return arg;
// }

// let output1 = kembalikanData<string>('Halo');
// let output2 = kembalikanData<number>(12345);
// console.log({ output1 });
// console.log({ output2 });

// class RekeningBank {
//   public namaPemilik: string;
//   private saldo: number;

//   constructor(nama: string, saldoAwal: number) {
//     this.namaPemilik = nama;
//     this.saldo = saldoAwal;
//   }

//   getSaldo() {
//     return this.saldo;
//   }
// }

// class Kotak<T> {
//   public isi: T;

//   constructor(isi: T) {
//     this.isi = isi;
//   }

//   ambilIsi() {
//     return this.isi;
//   }
// }

// const username = new Kotak('Ardivan');
// const age = new Kotak(18);

// console.log(username.ambilIsi());
// console.log(age.ambilIsi());

// interface PunyaNama {
//   nama: string;
// }
// interface PunyaUmur {
//   umur: number;
// }

// type Orang = PunyaNama & PunyaUmur;

// const orang1: Orang = { nama: 'Ardivan', umur: 18 };
// console.log({ orang1 });

// interface Mobil {
//   merk: string;
//   tahun: number;
// }

// type KunciMobil = keyof Mobil; // "merk" | "tahun"

// const properti1: KunciMobil = 'merk';
// console.log(properti1);

// interface User {
//   username: string;
// }
// interface Admin {
//   permissions: string[];
// }

// type SuperUser = User & Admin;

// const user1: SuperUser = { username: 'Ardi', permissions: ['ambil data', 'push data'] };
// console.log({ user1 });

// ===================================================================

// interface PunyaLength {
//   length: number;
// }

// function panjangKarakter<T extends PunyaLength>(arg: T): number {
//   return arg.length;
// }

// function panjangKarakter<T>(arg: string | any[]): number {
//   return arg.length;
// }

// let testString = panjangKarakter('Ardivan');
// console.log(testString);
// let testArray = panjangKarakter([10, 20, 30]);
// console.log(testArray);
// let testAngka = panjangKarakter(123);

function balikPosisi<T>(arg: T[]): T[] {
  return arg.reverse();
}

// Cara Uji:
const angkaTerbalik = balikPosisi([1, 2, 3]); // Harus menghasilkan [3, 2, 1] dan tipenya number[]
const kataTerbalik = balikPosisi(['a', 'b', 'c']); // Harus menghasilkan ["c", "b", "a"] dan tipenya string[]
console.log(angkaTerbalik);
console.log(kataTerbalik);

interface ResponAPI<T> {
  success: boolean;
  pesan: string;
  data: T;
}

function bungkusResponse<T>(data: T): ResponAPI<T> {
  return {
    success: true,
    pesan: 'Data berhasil diambil',
    data: data,
  };
}

// Cara Uji:
const responUser = bungkusResponse({ username: 'Ardivan', role: 'Admin' });
// Di mata TypeScript, responUser.data harus otomatis bertipe { username: string, role: string }

const responProduk = bungkusResponse(['Sepatu', 'Baju']);
console.log(responProduk);
// Di mata TypeScript, responProduk.data harus otomatis bertipe string[]

interface WajibAdaNama {
  nama: string;
}

function ambilNama<T extends WajibAdaNama>(data: T) {
  return data.nama;
}

const obj1 = { nama: 'Ardivan', umur: 18 };
const obj2 = { umur: 18 };

const obj3 = ambilNama(obj1);
console.log({ obj3 });
// const obj4 = ambilNama(obj2);

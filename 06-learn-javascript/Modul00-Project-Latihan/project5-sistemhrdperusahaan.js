class Karyawan {
  #pinAbsensi;

  constructor(nama, gajiPokok, pinAbsensi) {
    this.nama = nama;
    this._gajiPokok = gajiPokok;
    this.#pinAbsensi = pinAbsensi;
  }

  tampilkanProfil() {
    console.log(
      `Nama: ${this.nama} mempunyai gaji pokok sebesar Rp.${this._gajiPokok.toLocaleString('id-ID')}`
    );
  }

  cekPin(inputPin) {
    if (inputPin === this.#pinAbsensi) {
      return true;
    } else {
      return false;
    }
  }
}

class Manager extends Karyawan {
  constructor(nama, gajiPokok, pinAbsensi, tunjangan) {
    super(nama, gajiPokok, pinAbsensi);
    this.tunjangan = tunjangan;
  }

  tampilkanProfil() {
    console.log(
      `Nama: ${this.nama} memiliki total penghasilan Rp.${(this._gajiPokok + this.tunjangan).toLocaleString('id-ID')}`
    );
  }
}

// ==================== DATA DUMMY UNTUK TEST ====================

console.log('=== TEST KARYAWAN BIASA ===');
const stafPemasaran = new Karyawan('Andi', 5000000, 1234);
stafPemasaran.tampilkanProfil();

console.log('Apakah PIN 1111 Benar?', stafPemasaran.cekPin(1111)); // Output: false
console.log('Apakah PIN 1234 Benar?', stafPemasaran.cekPin(1234)); // Output: true
// console.log(stafPemasaran.#pinAbsensi); // Jika di-uncomment, baris ini HARUS ERROR karena private!

console.log('\n=== TEST MANAGER (INHERITANCE) ===');
const bosTech = new Manager('Siti', 15000000, 9999, 5000000);
bosTech.tampilkanProfil();
// Output: Manager bernama Siti memiliki Total Gaji (Termasuk Tunjangan) Rp 20.000.000

console.log('Apakah PIN Manager Benar?', bosTech.cekPin(9999)); // Output: true (Bisa akses fungsi induk!)

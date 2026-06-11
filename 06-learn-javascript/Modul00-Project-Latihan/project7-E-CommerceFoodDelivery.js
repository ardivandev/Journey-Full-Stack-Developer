// Smart Car Rental System

class RentalMobil {
  constructor(tipeMobil, tarifPerHari) {
    this.tipeMobil = tipeMobil;
    this._tarifPerHari = tarifPerHari;
  }

  hitungTarifDasar(jumlahHari) {
    return this._tarifPerHari * jumlahHari;
  }
}

class RentalMobilMewah extends RentalMobil {
  #biayaAsuransiWajib = 150000;

  constructor(tipeMobil, tarifPerHari) {
    super(tipeMobil, tarifPerHari);
  }

  hitungTarifDasar(jumlahHari) {
    return this._tarifPerHari * jumlahHari + this.#biayaAsuransiWajib;
  }
}

class GarasiRental {
  #koleksiMobil = [];

  // Sinkronisasi Database Function
  async sinkronisasiDatabase() {
    console.log('⏳ Sinkronisasi database sedang dilakukan...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.#koleksiMobil = [
          { id: 'M01', nama: 'Avanza', tarif: 350000, mewah: false },
          { id: 'M02', nama: 'Innova Zenix', tarif: 600000, mewah: false },
          { id: 'M03', nama: 'Alphard', tarif: 1500000, mewah: true },
        ];
        console.log('📡 Database garasi berhasil disinkronkan!');
        resolve();
      }, 2500);
    });
  }

  // Sewa Mobil
  async sewaMobilAsync(idMobil, jumlahHari, namaPenyewa) {
    const mobil = this.#koleksiMobil.find((item) => item.id === idMobil);

    if (!mobil) {
      console.log('❌ Mobil dengan ID tersebut tidak tersedia!');
      return;
    }

    console.log(`🔍 Memeriksa kondisi fisik dan bahan bakar mobil [${mobil.nama}]...`);
    await new Promise((res) => setTimeout(res, 1500));

    let mobilGrup;
    if (mobil.mewah === true) {
      mobilGrup = new RentalMobilMewah(mobil.nama, mobil.tarif);
    } else {
      mobilGrup = new RentalMobil(mobil.nama, mobil.tarif);
    }

    const totalBiaya = mobilGrup.hitungTarifDasar(jumlahHari);

    console.log('\n==================================================');
    // Cek status kemewahan untuk menentukan header nota
    if (mobil.mewah) {
      console.log('📄 NOTA RENTAL MOBIL (LUXURY CLASS ✨)');
    } else {
      console.log('📄 NOTA RENTAL MOBIL (REGULER)');
    }
    console.log('--------------------------------------------------');
    console.log(`Penyewa     : ${namaPenyewa}`);
    console.log(`Mobil       : ${mobil.nama}`);
    console.log(`Durasi      : ${jumlahHari} Hari`);
    console.log(`Tarif/Hari  : Rp ${mobil.tarif.toLocaleString('id-ID')}`);

    // Jika mobil mewah, tampilkan baris tambahan untuk info asuransi wajib
    if (mobil.mewah) {
      console.log('Asuransi VIP: Rp 150.000 (Wajib Mobil Mewah)');
    }

    console.log(`Total Biaya : Rp ${totalBiaya.toLocaleString('id-ID')}`);
    console.log('--------------------------------------------------');

    if (mobil.mewah) {
      console.log('Status      : Siap Diantar Driver ke Rumah.');
    } else {
      console.log('Status      : Siap Ambil di Garasi Utama.');
    }
    console.log('==================================================\n');
  }
}

async function jalankanSistem() {
  console.log('=== SISTEM SEWA MOBIL DIGUNAKAN ===\n');

  const aplikasiRental = new GarasiRental();

  // 1. Hubungkan ke server dulu (Delay 2.5 detik)
  await aplikasiRental.sinkronisasiDatabase();

  // 2. Rian sewa Avanza (ID: M01) selama 3 hari
  // Rumus biasa: 350.000 * 3 = Rp 1.050.000
  await aplikasiRental.sewaMobilAsync('M01', 3, 'Rian');

  // 3. Budi sewa Alphard (ID: M03) selama 2 hari
  // Rumus mewah: (1.500.000 * 2) + Asuransi 150.000 = Rp 3.150.000
  await aplikasiRental.sewaMobilAsync('M03', 2, 'Budi');
}

jalankanSistem();

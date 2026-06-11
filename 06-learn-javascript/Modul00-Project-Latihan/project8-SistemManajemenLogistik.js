// Projecct (Sistem Manajemen Logistik & Pengiriman Internasional)

class Pengiriman {
  constructor(namaBarang, berat, biayaPerKg) {
    this.namaBarang = namaBarang;
    this._berat = berat;
    this._biayaPerKg = biayaPerKg;
  }

  hitungTotalOngkir() {
    return this._berat * this._biayaPerKg;
  }
}

class PengirimanExpress extends Pengiriman {
  #flightSecurityTax = 250000;

  constructor(namaBarang, berat, biayaPerKg) {
    super(namaBarang, berat, biayaPerKg);
  }

  hitungTotalOngkir() {
    return super.hitungTotalOngkir() + this.#flightSecurityTax;
  }
}

class PusatLogistik {
  #manifesKargo = [];

  async ambilDataManifesAsync() {
    console.log('\n⏳ Mengambil data manifes kargo dari Bea Cukai...');
    console.log('(...... Menunggu jeda 3 detik ......)');
    return new Promise((resolve) => {
      setTimeout(() => {
        this.#manifesKargo = [
          {
            idResi: 'REG-991',
            namaBarang: 'Buku & Alat Tulis',
            berat: 5,
            ekspres: false,
            biayaPerKg: 15000,
          },
          {
            idResi: 'EXP-002',
            namaBarang: 'Komponen Laptop (Suku Cadang)',
            berat: 3,
            ekspres: true,
            biayaPerKg: 50000,
          },
          {
            idResi: 'EXP-003',
            namaBarang: 'Peralatan Medis Darurat',
            berat: 12,
            ekspres: true,
            biayaPerKg: 45000,
          },
        ];
        console.log('✅ Data manifes kargo berhasil ditarik dari Bea Cukai!');
        resolve();
      }, 3000);
    });
  }

  async prosesPengirimanAsync(idResi, namaPengirim) {
    const resi = this.#manifesKargo.find((item) => item.idResi === idResi);

    if (!resi) {
      console.log(`\n❌ Resi ${idResi} tidak terdaftar di sistem!`);
      return;
    }

    if (resi.berat <= 0) {
      console.log('\n❌ Gagal! Berat barang tidak valid.');
      return;
    }

    console.log(`\n✈️ Memulai pengecekan kargo dan berat untuk barang: ${resi.namaBarang}...`);
    console.log('(...... Menunggu jeda 2 detik ......)');
    await new Promise((res) => setTimeout(res, 2000));

    let resiGrup;
    if (resi.ekspres === true) {
      resiGrup = new PengirimanExpress(resi.namaBarang, resi.berat, resi.biayaPerKg);
    } else {
      resiGrup = new Pengiriman(resi.namaBarang, resi.berat, resi.biayaPerKg);
    }

    const totalOngkir = resiGrup.hitungTotalOngkir();

    console.log('==================================================');

    if (resi.ekspres === true) {
      console.log('📄 NOTA KELAYAKAN TERBANG (PRIORITY EXPRES AIRLINE ✨)');
    } else {
      console.log('📄 NOTA KELAYAKAN TERBANG (REGULER CARGO)');
    }

    console.log('--------------------------------------------------');

    console.log(`Pengirim       : ${namaPengirim}`);
    console.log(`No. Resi       : ${resi.idResi}`);
    console.log(`Nama Barang    : ${resi.namaBarang}`);
    console.log(`Berat Barang   : ${resi.berat} Kg`);
    console.log(`Tarif/Kg       : Rp ${resi.biayaPerKg.toLocaleString('id-ID')}`);
    console.log(`Total Ongkir   : Rp ${totalOngkir.toLocaleString('id-ID')}`);
    console.log('--------------------------------------------------');

    if (resi.ekspres === true) {
      console.log('Status         : Prioritas Utama Cargo Pesawat Garuda.');
    } else {
      console.log('Status         : Lolos Scan X-Ray Pelabuhan Hutan.');
    }

    console.log('==================================================');
  }
}

async function jalankanLogistik() {
  console.log('=== SYSTEM LOGISTIK INTERNASIONAL DIAKTIFKAN ===');

  // 1. Instansiasi class PusatLogistik
  const logistikPusat = new PusatLogistik();

  // 2. Panggil fungsi ambil data (Wajib pakai await karena async)
  await logistikPusat.ambilDataManifesAsync();

  // 3. PENGUJIAN 1: Jalur Reguler (Andi memproses resi REG-991)
  // Ekspektasi: Rumus biasa (5kg * 15.000 = 75.000)
  await logistikPusat.prosesPengirimanAsync('REG-991', 'Andi');

  // 4. PENGUJIAN 2: Jalur Ekspres (Budi memproses resi EXP-002)
  // Ekspektasi: Rumus ekspres ((3kg * 50.000) + Pajak 250.000 = 400.000)
  await logistikPusat.prosesPengirimanAsync('EXP-002', 'Budi');

  // 5. PENGUJIAN 3: Resi Tidak Valid/Ghaib
  // Ekspektasi: Muncul pesan error "Resi REG-UNKNOWN tidak terdaftar di sistem!"
  await logistikPusat.prosesPengirimanAsync('REG-UNKNOWN', 'Caca');
}

// Eksekusi fungsi pengujian utama
jalankanLogistik();

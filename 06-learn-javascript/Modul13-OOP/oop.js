// Factory Function

function createMahasiswa(nama, umur, fakultas) {
  return {
    nama,
    umur,
    fakultas,
    info() {
      console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Fakultas: ${this.fakultas}`);
    },
  };
}

const mahasiswa1 = createMahasiswa('Ardivan', 20, 'Rekayasa Perangkat Lunak');
const mahasiswa2 = createMahasiswa('Boy', 21, 'Teknik Informasi');

mahasiswa1.info();
mahasiswa2.info();

// Contructor Function

function Animals(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
  this.info = function () {
    console.log(`Nama hewan ${this.nama} - jenis ${this.jenis}`);
  };
}

Animals.prototype.getName = function () {
  const { nama } = this;
  console.log(`Halo nama saya ${nama}`);
};

const animal1 = new Animals('Harimau', 'Karnivora');
const animal2 = new Animals('Sapi', 'Herbivora');

animal1.info();
animal1.getName();

// Class

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  colorName() {
    console.log(`Name color is ${this.name}`);
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
}

const blackColor = new Color();

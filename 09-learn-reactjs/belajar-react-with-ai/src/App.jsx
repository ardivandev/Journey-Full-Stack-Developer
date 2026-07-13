import { useState, useEffect } from 'react';
// import Card from './components/Card';
import './assets/css/App.css';

/* function Produk({ nama, harga, stok }) {
  return (
    <>
      <ul>
        <li>Nama Produk: {nama}</li>
        <li> Harga Produk: Rp {harga.toLocaleString('id-ID')}</li>
        <li>Stok Produk: {stok}</li>
      </ul>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function cekCounter(count) {
    if (count <= 0) {
      alert('Tidak Bisa Kurang Dari 0');
      return;
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p className={'result-counter'}>
        Result: {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          Tambah
        </button>
        <button type="button" onClick={() => cekCounter(count)}>
          Kurang
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </p>
    </div>
  );
}

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nama = formData.get('name');
    const age = formData.get('age');

    alert(`Nama : ${nama}, Umur : ${age}`);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Nama : </label>
        <input type="text" name="name" id="name" />
      </p>
      <p
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <label htmlFor="age">Umur : </label>
        <input type="number" name="age" id="age" />
      </p>
      <p>
        <button type="submit">Kirim</button>
      </p>
    </form>
  );
}

function DaftarBuah({ buah }) {
  return (
    <ul>
      {buah.map((item) => (
        <li key={item.id}>{item.nama}</li>
      ))}
    </ul>
  );
}
*/

// function DaftarTugas({ tugas }) {
//   if (tugas) {
//     return (
//       <ul>
//         {tugas.map((item) => (
//           <li key={item.id}>{item.nama}</li>
//         ))}
//       </ul>
//     );
//   } else {
//     return <p>Tidak ada tugas.</p>;
//   }
// }

// function InputNama() {
//   const [nama, setNama] = useState('');
//   return (
//     <>
//       <input type="text" onChange={(e) => setNama(e.target.value)} />
//       <p>{nama}</p>
//     </>
//   );
// }

// function FormLogin() {
//   const [nama, setNama] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const getNama = formData.get('name');
//     const getEmail = formData.get('email');

//     setNama(getNama);
//     setEmail(getEmail);

//     e.target.reset();
//   };

//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={handleSubmit}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '10px',
//           marginBottom: '10px',
//         }}
//       >
//         <input type="text" name="name" id="name" placeholder="Nama" />
//         <input type="email" name="email" id="email" placeholder="Email" />
//         <button type="submit">Kirim</button>
//       </form>
//       {nama && email ? (
//         <p>
//           Nama: {nama}, Email: {email}
//         </p>
//       ) : (
//         <p>Data kosong</p>
//       )}
//     </div>
//   );
// }

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://api.sampleapis.com/codingresources/codingResources')
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((result) => {
          console.table(result);
          setData(result);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <section id="custom-style">
      <h1>Hai 👋, Ardivan</h1>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default App;

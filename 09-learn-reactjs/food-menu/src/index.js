import React from 'react';
import ReactDOM from 'react-dom/client';

import data from './data';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: 'red',
    fontSize: '50px',
  };

  return <h1 style={style}>Warteg Mang Udin</h1>;
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;

  // if (numFoods > 0) {
  //   return (
  //     <ul className="foods">
  //       {data.map((food, index) => {
  //         return <Food {...food} key={index} />;
  //       })}
  //     </ul>
  //   );
  // } else {
  //   return <p>Kosong gan. Besok datang lagi</p>;
  // }

  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        // <React.Fragment>
        <>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam architecto laboriosam
            veritatis provident est incidunt dignissimos odio molestias dicta nulla?
          </p>
          <ul className="foods">
            {data.map((food, index) => {
              return <Food {...food} key={index} />;
            })}
          </ul>
        </>
      ) : (
        // </React.Fragment>
        <p>Kosong gan. Besok datang lagi</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 23;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }

  // return (
  //   <footer className="footer">
  //     {isOpen ? (
  //       <div className="order">
  //         <p>
  //           {new Date().getFullYear()} Warung Mang Uding | Jam Buka {jamBuka} - Jam Tutup {jamTutup}
  //         </p>
  //         <button className="btn">Order</button>
  //       </div>
  //     ) : (
  //       <p>
  //         Maaf gan masih tutup, coba dateng lagi sekitar jam {jamBuka} - {jamTutup}
  //       </p>
  //     )}
  //   </footer>
  // );
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Mang Uding | Jam Buka {jamBuka} - Jam Tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterCloseHour(props) {
  return (
    <p>
      Maaf gan masih tutup, coba dateng lagi sekitar jam {props.jamBuka} - {props.jamTutup}
    </p>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props;

  return (
    <li className={`food ${!stok ? 'sold-out' : ''}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : 'Habis'}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

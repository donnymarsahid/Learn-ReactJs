import React from 'react';

const makanan = [
  {
    nama: 'Soto',
    harga: 12000,
  },
  {
    nama: 'Bakso',
    harga: 10000,
  },
  {
    nama: 'Mie Ayam',
    harga: 7000,
  },
  {
    nama: 'Nasi Goreng',
    harga: 15000,
  },
];

// Reduce
const totalBayar = makanan.reduce((totalHarga, makanan) => {
  return totalHarga + makanan.harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h1>Map</h1>
      <ul>
        {makanan.map((makanan, index) => (
          <li>
            {index + 1}. {makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </ul>
      <h1>Filter harga lebih dari 11.000 </h1>
      <ul>
        {makanan
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1}. {makanan.nama} - Harga {makanan.harga}
            </li>
          ))}
      </ul>
      <h1>Reduce Total Harga</h1>
      <h3>Total Harga : {totalBayar}</h3>
    </div>
  );
};

export default Map;

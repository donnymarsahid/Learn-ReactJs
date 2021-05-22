import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({ makanan, editData, hapusData }) => {
  return (
    <div class="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanan.map((makanan, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.deskripsi}</td>
                <td>{makanan.harga}</td>
                <td>
                  <button onClick={() => editData(makanan.id)}>edit</button>
                  <button onClick={() => hapusData(makanan.id)}>hapus</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;

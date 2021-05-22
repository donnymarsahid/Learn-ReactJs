import React, { Component } from 'react';
import Formulir from './Formulir';
import NavbarComponent from './NavbarComponent';
import Tabel from './Tabel';

export default class index extends Component {
  constructor(props) {
    super(props);

    // Menambah tampilan untuk diinput makanan
    this.state = {
      makanan: [],
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    };
  }

  //   menginput data makanan
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //   mentarget data makanan untuk ditampilkan ke tabel
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === '') {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      alert('Data diupdate');
      const makananSelainDipilih = this.state.makanan
        .filter((makanan) => makanan.id === this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });
      this.setState({
        makanan: [
          ...makananSelainDipilih,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    });
  };

  //   Updaye Data
  editData = (id) => {
    const makananDipilih = this.state.makanan
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });
    this.setState({
      nama: makananDipilih[0].nama,
      deskripsi: makananDipilih[0].deskripsi,
      harga: makananDipilih[0].harga,
      id: makananDipilih[0].id,
    });
  };

  //   Hapus Data
  hapusData = (id) => {
    const makananBaru = this.state.makanan
      .filter((makanan) => makanan.id === this.state.id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      makanan: makananBaru,
    });
  };

  render() {
    console.log(this.state.makanan);
    return (
      <div>
        <NavbarComponent />
        <Tabel makanan={this.state.makanan} editData={this.editData} hapusData={this.hapusData} />
        <div class="container mt-5">
          <h4>Tambah Data</h4>
          <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

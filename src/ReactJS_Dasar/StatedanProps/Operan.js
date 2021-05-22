import React, { Component } from 'react';

export default class Operan extends Component {
  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      // Contoh 1
      //   <div>
      //     <h2>Operan State menjadi Props : {this.props.makanan}</h2>
      //     <button onClick={() => this.props.gantiMakanan('Soto')}>gantiMakanan</button>
      //   </div>

      // Contoh 2 Menggunakan Variabel const
      <div>
        <h2>Operan State menjadi Props : {makanan}</h2>
        <button onClick={() => gantiMakanan('Soto')}>gantiMakanan</button>
      </div>
    );
  }
}

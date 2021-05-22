import React, { Component } from 'react';
import Operan from './Operan';

export default class StateProps extends Component {
  // Contoh State
  constructor(props) {
    super(props);
    this.state = {
      makanan: 'Bakso',
    };
  }
  // Contoh setState
  gantiMakanan = (makananBaru) => {
    this.setState({
      makanan: makananBaru,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.makanan}</h1>
        <button onClick={() => this.gantiMakanan('Soto')}>gantiMakanan</button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    );
  }
}

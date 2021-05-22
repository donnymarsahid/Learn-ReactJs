import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit }) => {
  return (
    <div class="border-top">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama">
          <Form.Label>Nama Makanan</Form.Label>
          <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="deskripsi">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control as="textarea" name="deskripsi" rows={3} value={deskripsi} onChange={(event) => handleChange(event)} />
        </Form.Group>
        <Form.Group controlId="harga">
          <Form.Label>Harga</Form.Label>
          <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kirim
        </Button>
      </Form>
    </div>
  );
};

export default Formulir;

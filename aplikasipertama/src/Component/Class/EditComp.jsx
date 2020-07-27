import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3001"

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: this.props.location.state.id_produk,
            kode_ikan: this.props.location.state.kode_ikan,
            nama_ikan: this.props.location.state.nama_ikan,
            jenis_ikan: this.props.location.state.jenis_ikan,
            harga: this.props.location.state.harga,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

ubahproduk = (id_produk) => {
    const data = qs.stringify({
        id_produk: id_produk,
        kode_ikan: this.state.kode_ikan,
        nama_ikan: this.state.nama_ikan,
        jenis_ikan: this.state.jenis_ikan,
        harga: this.state.harga
    });

    axios.put(api+ '/ubahproduk', data)
    .then(json => {
        if(json === 200){
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        }else {
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        }
    })
}

    render() {
        return (
            <Container>
                <h4>Form Tambah Produk</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}

                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Kode Ikan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_ikan" value={this.state.kode_ikan} onChange={this.handleChange} placeholder="Masukan Kode" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama Ikan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_ikan" value={this.state.nama_ikan} onChange={this.handleChange} placeholder="Masukan Nama Ikan" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Jenis Ikan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jenis_ikan" value={this.state.jenis_ikan} onChange={this.handleChange} placeholder="Masukan Jenis Ikan" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={()=>this.ubahproduk(this.state.id_produk)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>


        )
    }
}

export default EditComp 
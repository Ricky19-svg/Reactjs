import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            kode_ikan: '',
            nama_ikan: '',
            jenis_ikan: '',
            harga: '',
            response: '',
            display:'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addproduk = () => {
        axios.post(api + '/tambahproduk', {
            kode_ikan: this.state.kode_ikan,
            nama_ikan: this.state.nama_ikan,
            jenis_ikan: this.state.jenis_ikan,
            harga: this.state.harga
        }).then(json =>{
            if(json.data.state === 200) {
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
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response }

                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Kode Ikan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_ikan" value={this.state.kode_ikan} onChange={this.handleChange} placeholder="Masukan Kode Ikan" />
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
                                    <Button type="button" onClick={this.Addproduk}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        )
    }
}

export default TambahComp 
import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'reactstrap';
import axios from 'axios'

const api = 'http://localhost:3001'

function HooksUseEffects() {

    const [produk, setproduk] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effect")

        axios.get(api + '/tampil').then(res => {
            setproduk(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2> Data produk</h2>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Kode Ikan</th>
                        <th>Nama Ikan</th>
                        <th>Jenis Ikan</th>
                        <th>Harga</th>
                        <th>Opsi</th>
                    </tr>
                </thead>
                <tbody>
                    {produk.map(produk =>
                        <tr key={produk.id_produk}>
                            <td>{produk.kode_ikan}</td>
                            <td>{produk.nama_ikan}</td>
                            <td>{produk.jenis_ikan}</td>
                            <td>{produk.harga}</td>
                            <td>
                                <Button> Edit </Button>

                                <span> </span>
                                <Button color="danger"> Delete </Button>
                            </td>
                        </tr>
                    )}
                </tbody>

            </Table>
        </Container>


    )


}


export default HooksUseEffects;
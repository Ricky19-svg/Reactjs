import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct () {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://2.bp.blogspot.com/-yVRjdMhN1Ng/VQAuhqyKvKI/AAAAAAAABC4/7RohzAhSX4Y/s1600/Monoculus.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle> Peacock Bass Monoculus </CardTitle>
                    <CardSubtitle>Rp. 350.000</CardSubtitle>
                    <CardText>Peacock Bass merupakan ikan yang sangat populer di kalangan pecinta ikan predator Aqua Friends. Tergolong dalam family Cichlid/Cichla menjadikan ikan ini rakus dan lahap saat makan. Kalian akan melihat pertunjukan menarik dan mengesankan saat ikan ini melahap makanannya.</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    );
}


export default RowProduct; 
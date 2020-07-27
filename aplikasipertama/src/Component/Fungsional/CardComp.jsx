import React from 'react';
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (

        <div>
            <Card>
                <CardImg top width="100%" src="https://2.bp.blogspot.com/-yLxMUVBADqg/VEqx6j0vDZI/AAAAAAAAHgw/VoPaSQgb1_g/s1600/arowana%2Bwallpaper%2Bhd.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Bagi beberapa pecinta ikan, jenis predator menjadi salah satu pilihan untuk dipelihara. Bentuk dan karakternya yang unik membuat beberapa orang kagum dengan ikan ini. Ada banyak sekali jenis ikan predator di dunia ini Aqua Friends. Mulai dari yang sudah punah alias purba, hingga jenis-jenis yang kekinian yang akhirnya dipelihara sebagai ikan hias. Sehingga banyak pecinta hewan yang mulai berlomba-lomba untuk mengoleksinya. </CardText>
                    <Button>
                        <Link to = {
                            {
                                pathname : `/detail/${props.id}`,
                                state : {
                                    judul: props.judul,
                                    tanggal: props.tanggal
                                }
                            }
                        }>Detail</Link>
                    </Button>
                </CardBody>
            </Card>
        </div>

    )

}

export default CardComp;
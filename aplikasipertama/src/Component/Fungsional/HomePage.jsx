import React from 'react'
import { Jumbotron, Button,} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';


function HomePage() {
    return (
        <div>
            <Jumbotron>
            <div className="imageatas">
                    <img src="https://cdn.pixabay.com/photo/2019/01/22/11/31/shark-3947987_960_720.png" alt="" />
                    </div>
                <h1 className="display-3">RR Fish Purwokerto</h1>
                <p className="lead">Jual Berbagai Jenis Ikan Predator</p>
                <hr className="my-2" />
                <p>Jual Ikan Predator Termurah Se Indonesia</p>
                <p className="lead">
                    <Button color="primary">Beli Disini</Button>
                </p>
            </Jumbotron>
        </div>

    )
}

export default HomePage
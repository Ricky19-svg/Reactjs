import React from 'react'
import { Jumbotron, Button,} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';


function HomePage() {
    return (
        <div>
            <Jumbotron>
            <div className="imageatas">
                   <center><img src="https://i.ibb.co/xFKnkWQ/logoikan.webp" alt="logoikan" /></center>
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
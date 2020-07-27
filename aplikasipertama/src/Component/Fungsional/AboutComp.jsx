import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">RR Fish Purwokerto</h1>
                <p className="lead"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg> rickyarddianto.ra@gmail.com</p>
                <p className="lead"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg> 081225144439</p>
<p className="lead"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg> 09:00-21:00</p>
                <hr className="my-2" />
                <p>Purwokerto, Jawa Tengah JL.Sidanegara III</p>
                <p className="lead">
                    <Button color="primary">Hubungi</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul=" Ikan Predator Air Tawar" tanggal="28/06/2020"/></Col>
                    <Col><CardComp id="2" judul="Ikan Predator Air Laut" tanggal="29/06/2020"/></Col>
                    <Col><CardComp id="3" judul="Belajar PHP" tanggal="30/06/2020"/></Col>
                </Row>
            </Container>
        </div>
    )

}

export default AboutComp 
import React, {useEffect, useState} from "react";
import {getPersonajes} from "../funtions/funtions";
import { Card } from 'primereact/card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)
    useEffect(() => {
        getPersonajes(setPersonajes)
    },[])

    return (
        <>
            {personajes !== null ? (
                personajes.map(personaje => (
                    <div key={personaje.id}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Card footer={<img alt="Card" src={personaje.image}/>}>{personaje.name}</Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))
            ) : ('no hay personajes')}
        </>
    )
}

export default Inicio
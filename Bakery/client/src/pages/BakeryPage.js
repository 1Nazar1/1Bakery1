import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row, Toast} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneBakery} from "../http/bakeryAPI";

const BakeryPage = () => {
    const [bakery, setBakery] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneBakery(id).then(data => setBakery(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + bakery.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{bakery.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            5
                        </div>
                    </Row>
                </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 42, border: '5px solid lightgray'}}
                >
                    <h3> {bakery.price} грн.</h3>
                    <Col xs={6}
                         style={{background: "yellow"}}
                    >
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Доставка</strong>
                            </Toast.Header>
                            <Toast.Body >Замовити доставку за номером +38 (066) 755 17 58</Toast.Body>
                        </Toast>
                    </Col>
                    <Col xs={6}>
                        <Button
                            style={{background: "yellow"}}
                            className="d-flex align-items-center justify-content-center"
                            onClick={() => setShow(true)}>Доставка</Button>
                    </Col>
                </Card>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3> {bakery.price} грн.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {bakery.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default BakeryPage;
import React from 'react';
import {Carousel} from "react-bootstrap";
import п from "../assets/п.png";
import fff from "../assets/fff.jpg";
import zz from "../assets/zz.jpg";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    return (

        <Carousel variant="warning">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{background: `url(${п}) no-repeat center center`, width:1080, height: 720, backgroundSize: 'cover', }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{background: `url(${fff}) no-repeat center center`, width:1080, height: 720, backgroundSize: 'cover',}}
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{background: `url(${zz}) no-repeat center center`, width:1080, height: 720, backgroundSize: 'cover',}}
                />
            </Carousel.Item>
        </Carousel>

    );
});

export default Basket;
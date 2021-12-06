import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import BakeryList from "../components/BakeryList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchBakeries, fetchTypes} from "../http/bakeryAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {bakery} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => bakery.setTypes(data))
        fetchBrands().then(data => bakery.setBrands(data))
        fetchBakeries(null, null, 1, 2).then(data => {
            bakery.setBakeries(data.rows)
            bakery.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchBakeries(bakery.selectedType.id, bakery.selectedBrand.id, bakery.page, 4).then(data => {
            bakery.setBakeries(data.rows)
            bakery.setTotalCount(data.count)
        })
    }, [bakery.page, bakery.selectedType, bakery.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <BakeryList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
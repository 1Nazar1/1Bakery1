import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import BakeryItem from "./BakeryItem";

const BakeryList = observer(() => {
    const {bakery} = useContext(Context)

    return (
        <Row className="d-flex">
            {bakery.bakeries.map(bakery =>
                <BakeryItem key={bakery.id} bakery={bakery}/>
            )}
        </Row>
    );
});

export default BakeryList;
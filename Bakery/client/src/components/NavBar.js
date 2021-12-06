import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import bakery1 from "../assets/bakery1.png";
import bk1 from "../assets/bk1.png";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="warning" variant="warning"
                style={{background: `url(${bk1}) no-repeat center center`, width:1600, height: 120, backgroundSize: 'cover'}}>
            <Container>
                <Button variant={"outline-warning"}
                        onClick={() => history.push(BASKET_ROUTE)}
                        style={{background: `url(${bakery1}) no-repeat center center`, width:120, height: 100, backgroundSize: 'cover'}}>

                </Button>
                {user.isAuth ?

                    <Nav className="ml-4" style={{color: 'black'}}>
                        <Button variant={"outline-dark"}
                                onClick={() => history.push(SHOP_ROUTE)}>
                            Асортимент
                        </Button>

                        <Button
                            variant={"outline-dark"}
                            onClick={() => logOut()}
                            className="ml-4"
                        >
                            Вихід
                        </Button>
                        <Button
                            variant={"outline-dark"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Адмінка
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-dark"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
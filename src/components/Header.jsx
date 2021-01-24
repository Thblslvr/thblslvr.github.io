import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Blog from '../Page/Blog'
import Contacts from '../Page/Contacts'
import About from '../Page/About'
import Home from '../Page/Home'



export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href=''>
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-clock align-top'
                                alt=""
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        {/* кнопка появляется при свертке */}
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            {/* добавит все в бг-меню при свертке */}
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/about'>About Us</Nav.Link>
                                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                                <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Search</Button>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path='/blog' component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}

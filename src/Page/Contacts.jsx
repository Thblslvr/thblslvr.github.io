import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Container className ='mt-12' style ={{width:'500px', margin:'20 auto'}}>
                    <h1 className = 'text-center'>Contact Us</h1>
                    <Form>
                        <Form.Group controlId = 'formBasicEmail'>
                            <Form.Label>Email addres</Form.Label>
                            <Form.Control type = 'email' placeholder = 'enter email' />
                            <Form.Text>
                                Gonna share your email with smb who wants it
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId = 'formBasicPassword'>
                            <Form.Label>Example texrarea</Form.Label>
                            <Form.Control as = 'textarea' rows ='3' />
                        </Form.Group>
                        <Form.Group controlId = 'formBasicCheckbox'>
                            <Form.Check type ='checkbox' label = 'check me out' />
                            
                        </Form.Group>
                        <Button variant = 'primary' type ='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

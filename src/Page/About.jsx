import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import tb1 from '../assests/tb1.jpg'
import tb3 from '../assests/tb3.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Tab.Container id = 'left-tabs-example' defaultActiveKey = 'first'>
                        <Row>
                            <Col sm={3}>
                                <Nav variant = 'pills' className = 'flex-column mt-2'>
                                    <Nav.Item>
                                        <Nav.Link eventKey = 'first'>
                                            Design
                                        </Nav.Link>
                                        <Nav.Link eventKey = 'second'>
                                            Blues
                                        </Nav.Link>
                                        <Nav.Link eventKey = 'third'>
                                            Blues with a feeling
                                        </Nav.Link>
                                        <Nav.Link eventKey = 'fourth'>
                                            Blues without feeling
                                        </Nav.Link>
                                        <Nav.Link eventKey = 'fifth'>
                                            Blue boys tune
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm ={9}>
                                <Tab.Content className ='mt-2'>
                                    <Tab.Pane eventKey = 'first'>
                                    <p style={{textAlign: 'center'}}>
                                    <img src='https://www.guitartricks.com/img/artist_banner/t-bone-walker.jpg' alt=""
                                    style={{width:'100%', height: 'auto'}}
                                    /></p>
                                    <p>Aaron Thibeaux "T-Bone" Walker was an American blues guitarist, singer, songwriter and multi-instrumentalist, who was a pioneer and innovator of the jump blues and electric blues sound. </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey = 'second'>
                                        <p style={{textAlign: 'center'}}>
                                        <img src={tb3} alt=""
                                     style={{width:'100%', height: 'auto'}}/>
                                        </p>
                                    <p>Aaron Thibeaux "T-Bone" Walker was an American blues guitarist, singer, songwriter and multi-instrumentalist, who was a pioneer and innovator of the jump blues and electric blues sound. </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey = 'third'>
                                    <p style={{textAlign: 'center'}}>
                                    <img src={tb1} alt=""
                                    style={{width:'100%', height: 'auto'}}/></p>
                                    <p>Aaron Thibeaux "T-Bone" Walker was an American blues guitarist, singer, songwriter and multi-instrumentalist, who was a pioneer and innovator of the jump blues and electric blues sound. </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}

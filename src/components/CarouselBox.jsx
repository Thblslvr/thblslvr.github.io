import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import logo from '../assests/forest.jpg'
import logo1 from '../assests/forest1.jpg'
import logo3 from '../assests/forest3.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            
                            className='d-md-block w-100'
                            src={logo}
                            alt="" />

                        <Carousel.Caption>
                            <h3>
                                Forest Image
                        </h3>
                            <p>
                                ES6 modules are allowed to define default exports and regular exports.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={logo1}
                            style={{width:'100%', height: 'auto'}}
                            alt="" />

                        <Carousel.Caption>
                            <h3>
                                Forest Image
                        </h3>
                            <p>
                                ES6 modules are allowed to define default exports and regular exports.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={logo3}
                            style={{width:'100%', height: 'auto'}}
                            alt="" />

                        <Carousel.Caption>
                            <h3>
                                Forest Image
                        </h3>
                            <p>
                                ES6 modules are allowed to define default exports and regular exports.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}

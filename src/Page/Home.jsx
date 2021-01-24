import React, { Component, createFactory } from 'react'
import { Button, Card, CardDeck, Carousel, Container } from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'


export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
                <Container>
                    <h2 className ='text-center m-4'>Our team</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img 
                            variant = 'top'
                            src ='https://cdn.fishki.net/upload/post/2020/07/30/3382064/tn/4-e1528271698532.jpg'
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>

                                <Card.Text>
                                The city is situated on the Sochi River, along the Black Sea in Southern Russia, with a population of 443,562 residents,[11] up to 600,000 residents in the urban area. The city proper covers an area of 176.77 square kilometers (68.25 sq mi)
                                </Card.Text>
                                <Button >About</Button>
                            </Card.Body>
                            
                        </Card>
                        <Card>

                            <Card.Body>
                                <Card.Title>Developers</Card.Title>

                                <Card.Text>
                                The city is situated on the Sochi River, along the Black Sea in Southern Russia, with a population of 443,562 residents,[11] up to 600,000 residents in the urban area. The city proper covers an area of 176.77 square kilometers (68.25 sq mi)
                                </Card.Text>
                                <Button className = 'mb-2'>About</Button>
                                <Card.Img 
                            variant = 'top'
                            src ='https://www.livekuban.ru/sites/default/files/styles/news/public/node/news/main-image/2020-11/barsuk_65_1024x768.jpg?itok=d4EgVjoY'
                            />
                            </Card.Body>
                            
                        </Card>
                        <Card>
                            <Card.Img 
                            variant = 'top'
                            src ='https://sochistream.ru/wp-content/uploads/2020/10/badger-2030975_960_720.jpg'
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>

                                <Card.Text>
                                The city is situated on the Sochi River, along the Black Sea in Southern Russia, with a population of 443,562 residents,[11] up to 600,000 residents in the urban area. The city proper covers an area of 176.77 square kilometers (68.25 sq mi)
                                </Card.Text>
                                <Button>About</Button>
                            </Card.Body>
                            
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}

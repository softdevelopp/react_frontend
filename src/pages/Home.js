import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Carousel  } from 'react-bootstrap';
import slider1 from '../assets/img/slider1.jpg';
import slider2 from '../assets/img/slider2.jpg';
import slider3 from '../assets/img/slider3.jpg';
import slider4 from '../assets/img/slider4.jpg';


export default function Home() {  
    return (
        <Row>
            <Col  className="">
                <Carousel slide>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src={slider4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        
    )
}
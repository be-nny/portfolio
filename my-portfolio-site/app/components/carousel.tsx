import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '@/public/images/iSABEL logo (dark).png'
export const ControlledCarousel = () => {
    return (
        <Carousel data-bs-theme="light">
            <Carousel.Item>
                <img src={'/images/isabel_poster_1.png'} width={'50%'} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Image1} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Image1} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
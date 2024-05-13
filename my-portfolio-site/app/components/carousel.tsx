import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './carousel.module.css'
export const ControlledCarousel = () => {
    return (
        <Carousel data-bs-theme="light" className={styles.carouselContainer}>
            <Carousel.Item>
                <img src={'/images/featured-img-1.png'} width={'50%'} className={styles.featuredImage}/>
                <Carousel.Caption>
                    <h3>Group Software Engineering Project</h3>
                    <p>
                        This was part of my 2nd year at University.
                        As the University of Exeter is famous for it's green spaces, we were tasked with gamifying sustainability on our campus.
                        Users would be able to scan their barcode items before throwing them away them to earn points and rewards!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'/images/featured-img-2.png'} width={'50%'} className={styles.featuredImage}/>
                <Carousel.Caption>
                    <h3>Excited to Learn</h3>
                    <p>
                        Computer Science has always been a passion of mine, which sparked in my early child hood up until now!
                        My enjoyment still prevails and I'm keen to expand my knowledge.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
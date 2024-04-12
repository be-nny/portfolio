import styles from './Projects.module.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Projects = () =>{
    return(
        <div className={styles.categoryGrid }>
            <Card className={styles.card} data-bs-theme="dark">
                <Card.Img className={styles.cardImgTop} variant="top" src="/images/iSABEL logo (light).png" alt="Card image cap" />
                <Card.Body>
                    <Card.Title>iSABEL Project</Card.Title>
                    <Card.Text>
                        This was my second year group software engineering project to gamify
                        sustainability on our campus using a web scraper. Players would earn points by scanning a barcode before
                        throwing away their rubbish. This implemented using the django framework.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><code>Python</code>, <code>CSS</code>, <code>Django</code>, <code>JavaScript</code></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/be-nny/proj-iSABEL">See code <i className="bi bi-box-arrow-up-right"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className={styles.card} data-bs-theme="dark">
                <Card.Img className={styles.cardImgTop} variant="top" src="/images/keras logo.png" alt="Card image cap" />
                <Card.Body>
                    <Card.Title>Credit Card Default Classifier</Card.Title>
                    <Card.Text>
                        This took a <code>.csv</code> dataset containing data to determine if a person had defaulted their
                        credit card. The model used a sequential layers deep learning approach.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><code>Python</code>, <code>Keras</code></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/be-nny/CCD-keras">See code <i className="bi bi-box-arrow-up-right"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className={styles.card} data-bs-theme="dark">
                <Card.Img className={styles.cardImgTop} variant="top" src="/images/java logo.png" alt="Card image cap" />
                <Card.Body>
                    <Card.Title>Java Connect 4 Robot</Card.Title>
                    <Card.Text>
                        Using <code>opencv</code> my friends and I used the vision processing
                        capabilities to detect the different tokens. This would then go into a logic engine, which
                        would them make a move that was sent to an arduino to tell the robot where to drop a token!
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><code>Java</code>, <code>OpenCV</code></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/be-nny/connect-four-robot">See code <i className="bi bi-box-arrow-up-right"></i></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}
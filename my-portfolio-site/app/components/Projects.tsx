'use client';

import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {ProjectModal} from "@/app/components/projectModal";

export const Projects = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(0);

    const projectObj = {
        "projects": [
            {
                "name": "iSABEL Project",
                "description": "This was my second year group software engineering project to gamify sustainability on our campus using a web scraper. Players would earn points by scanning a barcode before throwing away their rubbish. This implemented using the django framework.",
                "detailedDescription": "The rising popularity of QR codes in recent years has been evident in many areas, such as restaurants, adver- tisements, and even COVID-19 trackers. As such, they work as an excellent tool alongside our barcode scanner. A single, streamlined scanner suited to identifying both information-dense barcodes and location-specific QR codes is a key vision for our project.\n" +
                    "Subsequently, how could we tie these ideas into a cohesive project capable of delivering the successful gamifi- cation of sustainability? After much planning and deliberation, iSABEL imagined a system where users could scan the barcodes of food items purchased on campus and receive XP rewards based on their sustainability ranking. Scanning an item would add it to a user’s virtual ’basket’. After consumption, the user would then locate a suitable bin using a marked map of the campus and scan its QR code, thereby dumping the contents of their ’basket’ into that bin (and, indeed, disposing of their real-life waste suitably!). Items that are vegetarian, vegan, don’t contain palm oil, have recyclable packaging etc., would receive higher points and encourage faster levelling. Players would compete to top the leaderboard as well as earn discount codes as they helped to reduce littering, promote recycling, and more sustainable food options on campus.",
                "git": "https://github.com/be-nny/proj-iSABEL",
                "images" : ['/images/featured-img-1.png', '/images/isabel_poster_1.png'],
                "skills": ["Python", "Django", "Scrum"],
            },
            {
                "name": "Credit Card Default Classifier",
                "description": "This took a .csv dataset containing data to determine if a person had defaulted their credit card. This project is built in python using keras and pandas to format the data and train the model.",
                "detailedDescription": "As mentioned previously, this model uses a FCN, as these networks are used for datasets as opposed to convolutional neural networks, which are used to learn from image data. To start, the data is processed and formatted using pandas, which is a framework for handling large datasets in python, and then various other libraries such as keras are used to create the sequential model. The model uses a selection of dense layers, starting at 64 neurons per layer and ending at 1 - with each dense layer having a relu activation function with the final layer having a sigmoid activation function. Activation functions add non-linearity to the layer, otherwise, each neuron will only be applying a linear transformation to another linear function, which in turn is linear, thus the model won’t learn properly.",
                "git": "https://github.com/be-nny/CCD-keras",
                "images" : ['/images/fig-bias-before-and-after.png', '/images/fig-confusion_mat_bias.png', '/images/fig-final-model.png'],
                "skills": ["Python", "Keras", "Pandas", "Machine Learning"],
            },
            {
                "name": "Java Connect 4 Robot",
                "description": "Using opencv my friends and I used the vision processing capabilities to detect the different tokens. This would then go into a logic engine, which would them make a move that was sent to an arduino to tell the robot where to drop a token!",
                "detailedDescription": "This project went through two iterations - the first one being a fail! A group of friends and I decided to teset our skills by using openCV in Java to use colour masks and edge detection to spot the two different colours on the connect four board. This visual input was used in a connect four algorithm to determine the best move for the robot. Once this move is determined, a rack and pinion moves the token into the correct spot (hopefully!)",
                "git": "https://github.com/be-nny/connect-four-robot",
                "images" : ['/images/connect4-v2-1.jpg','/images/connect4-v2-2.jpg','/images/connect4-v2-3.jpg'],
                "skills": ["Java", "OpenCV", "Edge Detection"],
            }
        ]
    }

    const setModal = (projectNum : number) =>{
        setModalShow(true);
        setModalContent(projectNum);
    }

    return(
        <>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: projectObj.projects.length }).map((_, idx) => (
                    <Col key={idx}>
                        <Card data-bs-theme={"dark"}>
                            <Card.Body>
                                <Card.Title>{projectObj.projects[idx].name}</Card.Title>
                                <Card.Text>
                                    {projectObj.projects[idx].description}
                                </Card.Text>
                                <Button variant="primary rounded-pill" onClick={() => setModal(idx)}>See Inside</Button>
                                <Button variant="outline-primary rounded-pill" style={{marginLeft: "15px"}} href={projectObj.projects[idx].git} rel="noopener noreferrer" target="_blank">GitHub</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <ProjectModal show={modalShow} onHide={() => setModalShow(false)} content={projectObj.projects[modalContent]}/>
        </>
    );
}

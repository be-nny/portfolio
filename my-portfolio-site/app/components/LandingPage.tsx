'use client';

import { motion } from "framer-motion";
import styles_landing from './LandingPage.module.css';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button'
import { TypeAnimation } from 'react-type-animation';
import { scroll } from "framer-motion/dom";

import {ControlledCarousel} from "@/app/components/carousel";
export const LandingPage = () => {

    const [typingStatusLanguage, setTypingStatusLanguage] = useState('c');

    scroll((progress) => {
        if (0 <= progress && progress < 0.1) {
            setTypingStatusLanguage("cpp");
        } else if (0.1 <= progress && progress < 0.2) {
            setTypingStatusLanguage('py');
        } else if (0.2 <= progress && progress < 0.3) {
            setTypingStatusLanguage('java');
        } else if (0.3 <= progress && progress < 0.4) {
            setTypingStatusLanguage('js');
        } else if (0.4 <= progress && progress < 0.5) {
            setTypingStatusLanguage('c');
        } else if (0.5 <= progress && progress < 0.6) {
            setTypingStatusLanguage('sh');
        } else{

        }
    });


    const aboutMeJson = `{
    "name": "Ben Abbott",
    
    "academic-info":
    {
        "university": "The University of Exeter",
        "degree": "BCS Computer Science Degree",
        "graduation-year": 2025,
    },
    
    "favourite-languages": 
    [
        "Java", "Python",
    ],
    
    "learning-languages": 
    [
        "C", "C++",
    ]
}`;

    useEffect(() => {
        import("@/app/scripts/prismjsLoader");
    }, []);

    return(
        <>
            <div className={styles_landing.titleTextContainer}>
                <motion.div
                    initial={{ opacity: 0 , y: -50}}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 1}}
                >
                    <h1 className={styles_landing.titleText}>
                        Hey, I'm Ben.
                        <motion.span
                            className={styles_landing.extensionName}
                            initial={{ opacity: 0}}
                            key={typingStatusLanguage}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0}}
                            transition={{
                                duration: 0.9,
                            }}
                        >
                            <em>{typingStatusLanguage}</em>
                        </motion.span>
                    </h1>
                </motion.div>
                <h1 className={`${styles_landing.subTitle} ${styles_landing.titleText}`}>
                    <TypeAnimation
                        sequence={[
                            'i build stuff.',
                            1000,
                        ]}
                        wrapper="span"
                        speed={25}
                        cursor={false}
                    />
                </h1>
            </div>
            <div className={styles_landing.aboutLayout}>
                <motion.span
                    initial={{ opacity: 0, y: 10}}
                    whileInView={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5, delay: 0.5}}
                >
                    <div className={styles_landing.gridLeft}>
                    <pre>
                        <code className="language-javascript">
                            {aboutMeJson}
                        </code>
                    </pre>
                    </div>
                </motion.span>

                <motion.div
                    initial={{ opacity: 0, y: 10}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1, delay: 1.2}}
                >
                    <div className={styles_landing.gridRight}>
                            <div className={`${styles_landing.subText}`}>
                                Hey, I'm a 2nd year computer science student at the University of Exeter.
                                My strengths are <strong>software engineering</strong> and <strong>full-stack development</strong>.
                                I'm experienced in the DevOps setting using agile and scrum development strategies.
                                I've always been interested in computer science from starting in scratch to building my first computer when I was 12!
                                One of my great passions is music so I try and find ways of interweaving computer science and music together.
                            </div>
                        <motion.div
                            initial={{ opacity: 0, bottom: "-100%" }}
                            whileInView={{ opacity: 1 , bottom: 0}}
                            transition={{ duration: 2}}
                        >
                            <div className={`d-grid gap-1 ${styles_landing.button}`}>
                                <Button variant="outline-primary rounded-pill" size="lg" href={'mailto:ben.abbott1717@gmail.com'}>Lets Connect!</Button>{' '}
                                <div className={`${styles_landing.contactText}`}>
                                    Visit my <a href={"https://github.com/be-nny"} rel="noopener noreferrer" target="_blank">GitHub</a> | <a href={"https://www.linkedin.com/in/ben-abbott-789034262/"} rel="noopener noreferrer" target="_blank">LinkedIn</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 1}}
            >
                <div className={`${styles_landing.featuredContainer}`}>
                    {/*<h1 className={`${styles_landing.titleText}`}>My Favourites</h1>*/}
                    {/*<h1 className={`${styles_landing.titleText} ${styles_landing.subTitle}`}>take a look.</h1>*/}
                    <ControlledCarousel/>
                </div>
            </motion.div>

            <Card className={`text-center ${styles_landing.footer}`} data-bs-theme="dark">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Like what you see?</Card.Title>
                    <Card.Text>
                        See more of what I've done by browsing my projects page!
                    </Card.Text>
                    <Button variant="outline-primary rounded-pill" href={"projects"}>View Projects</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </>
    );
}
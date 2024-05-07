'use client';

import { motion } from "framer-motion";
import styles_landing from './LandingPage.module.css';
import styles_hello_world from './helloWorld.module.css';
import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button'
import { TypeAnimation } from 'react-type-animation';
import {ControlledCarousel} from "@/app/components/carousel";

export const LandingPage = () => {
    const [typingStatusLanguage, setTypingStatusLanguage] = useState('.c');

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
            <motion.div
                initial={{ opacity: 0 , y: -50}}
                animate={{ opacity: 1 , y: 0}}
                transition={{ duration: 1}}
            >
                <h1 className={styles_landing.titleText}>
                    Hey, I'm Ben.
                    <motion.span
                        className={styles_landing.extensionName}
                        key={typingStatusLanguage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <em>{typingStatusLanguage}</em>
                    </motion.span>
                </h1>
            </motion.div>
            <h1 className={styles_landing.titleText} style={{color: "#b6b6b6", fontSize:"100px", fontWeight: "800"}}>
                i build stuff.
            </h1>
            <div className={styles_hello_world.container}>
                <div>
                    <code className={`${styles_hello_world.text}`} style={{visibility:"hidden"}}>
                        <TypeAnimation
                            sequence={[
                                () => {
                                    setTypingStatusLanguage('cpp');
                                },
                                'printf("%s\\n", "Hey, I\'m ben");',
                                800,
                                () => {
                                    setTypingStatusLanguage('py');
                                },
                                'print("Hey, I\'m ben")',
                                800,
                                () => {
                                    setTypingStatusLanguage('java');
                                },
                                'System.out.println("Hey, I\'m ben");',
                                800,
                                () => {
                                    setTypingStatusLanguage('js');
                                },
                                'console.log("Hey, I\'m ben");',
                                800,
                                () => {
                                    setTypingStatusLanguage('c');
                                },
                                'std::cout << "Hey, I\'m ben" << std::endl;',
                                800,
                                () => {
                                    setTypingStatusLanguage('sh');
                                },
                                '$ echo "Hey, I\'m ben"',
                                800,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </code>
                </div>
            </div>
            <div className={styles_landing.aboutLayout}>
                <motion.span
                    initial={{ opacity: 0 , x: -50}}
                    animate={{ opacity: 1 , x: 0}}
                    transition={{ duration: 0.8, delay: 0.3}}
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
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2, delay: 0.8}}
                >
                    <div className={styles_landing.gridRight}>
                            <div className={`${styles_landing.subText}`}>
                                Hey, I'm a 2nd year computer science student at the University of Exeter.
                                My strengths are <strong>back-end</strong> and <strong>full-stack development</strong>.
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
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0, y: 50}}*/}
            {/*    whileInView={{ opacity: 1 , y: 0}}*/}
            {/*    transition={{ duration: 1}}*/}
            {/*>*/}
            {/*<h1 className={styles_landing.subTitle}>*/}
            {/*    Featured*/}
            {/*</h1>*/}
            {/*</motion.div>*/}
            <br/>
        </>
    );
}
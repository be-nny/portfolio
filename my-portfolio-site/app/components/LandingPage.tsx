'use client';

import styles from './LandingPage.module.css';
import emailjs from '@emailjs/browser';
import React, {useEffect, useState} from "react";
import {HelloWorld} from "@/app/components/helloWorld";
import Button from 'react-bootstrap/Button'

export const LandingPage = () => {
    const aboutMeJson = `{
    "name": "Ben Abbott",
    
    "academic-info":
    {
        "university": "The University of Exeter",
        "degree": "BCS Computer Science Degree",
        "gradutation-year": 2025,
    },
    
    "favourite-languages": 
    [
        "Java", "Python"
    ],
    
    "learning-languages": 
    [
        "C", "C++"
    ]
}`;

    useEffect(() => {
        import("@/app/scripts/prismjsLoader");
    }, []);
    return(
        <>
            <h1 className={styles.titleText}>Hey, <br/>I'm Ben.</h1>
            <HelloWorld/>
            <div className={styles.aboutLayout}>
                <div className={styles.gridLeft}>
                    <div className={`${styles.subText}`}>
                        Hey, I'm a 2nd year computer science student at the University of Exeter.
                        My strengths are back-end and full-stack development. I'm experienced
                        in the DevOps setting using agile and scrum development strategies.
                        I've always been interested in computer science from starting in scratch
                        to building my first computer when I was 12! One of my great passions is music so
                        I try and find ways of interweaving computer science and music together.
                    </div>
                    <div className={`d-grid gap-1 ${styles.button}`}>
                        <Button variant="outline-primary" size="lg">Lets Connect!</Button>{' '}
                    </div>
                </div>

                <div className={styles.gridRight}>
                    <pre>
                        <code className="language-javascript">
                            {aboutMeJson}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}
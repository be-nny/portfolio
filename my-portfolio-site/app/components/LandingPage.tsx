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

export const t = () => {
    return(
        <div>
            <h1 className={styles.titleText}>My Portfolio</h1>
            <hr className="my-4" style={{color:"#ffffff"}}/>
            <div className={styles.aboutLayout}>
                <div className="jumbotron">
                    <div className={`${styles.subText}`}>
                        <p>
                            Welcome to my portfolio!
                            My name is Ben Abbott and here you can find some of my projects and skills.
                            I'm a 2nd year computer science student at the University of Exeter.
                            My strengths are primarily back-end related but I also have full-stack experience and my strongest
                            languages are <code>Java</code> and <code>Python</code>. You can see my <a href={"https://www.linkedin.com/in/ben-abbott-789034262/"}>LinkedIn</a> for my full list of
                            experience. If you need to get in touch, feel free to contact me!
                        </p>
                    </div>
                    <hr className="my-4" style={{color:"#ffffff"}}/>
                    <h2 className={styles.subTitle}>Contact Me!</h2>
                    <div className={`${styles.commandLineHeader}`}>
                        <p>
                            <i className="bi bi-x-circle"></i> <i className="bi bi-slash-circle"></i> <i className="bi bi-plus-circle"></i> console last login @ {todaysDate()}
                        </p>
                    </div>
                    <div className={"commandLine"} contentEditable={"true"}>
                        <Console />
                    </div>
                    <div className={`${styles.subText}`}>
                        <p>
                            Got a longer message? Email me at <strong>ben.abbott1717@gmail.com</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function todaysDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const hours = today.getHours()
    const mins = today.getMinutes()
    return `${date}/${month}/${year} ${hours}:${mins}`;
}

function Console() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirm, setConfirm] = useState('')

    const messages = [`~ git(main) $ ./send_email \n~ git(main) $ enter your email >> `, `~ git(main) $ ./send_email \n~ git(main) $ enter your email >> ${email} \n~ git(main) $ enter your message >> `, `~ git(main) $ ./send_email \n~ git(main) $ enter your email >> ${email} \n~ git(main) $ enter your message >> ${message} \n~ git(main) $ send E-mail? [Y/n >> `]
    const [messageNum, setMessageNum] = useState(0);
    const [value, setValue] = useState(messages[0]);

    const handleInput: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(messages[messageNum])){
            setValue(messages[messageNum]);
        } else {
            setValue(inputValue);
            switch (messageNum){
                case 0:
                    setEmail(inputValue.replaceAll(messages[messageNum], ""))
                    break;
                case 1:
                    setMessage(inputValue.replaceAll(messages[messageNum], ""))
                    break;
                case 2:
                    setConfirm(inputValue.replaceAll(messages[messageNum], ""))
            }
        }
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter'){
            if(messageNum < 2){
                setMessageNum(messageNum + 1)
            } else{
                if(confirm.toLowerCase() == "y"){
                    sendEmail(e)
                }

                setMessageNum(0)
                setValue(messages[0].substring((messages[0].length-1)))
                setEmail('')
                setMessage('')
                setConfirm('')
            }
        }
    }



    const sendEmail = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        emailjs.init({
            publicKey: '8XyY5W5it9lwzL929',
            blockHeadless: true,
            blockList: {},
            limitRate: {
                id: 'app',
                throttle: 1000,
            },
        });

        var templateParams = {
            from_name: email,
            to_name: "ben.abbott1717@gmail.com",
            message: message
        };
        setValue("attempting to send email...")
        emailjs.send("service_77zuzrd","template_ks6cur1", templateParams,"8XyY5W5it9lwzL929")
        .then((response) => {
            setValue("SUCCESS! Email sent :) " + response.status + + " " + response.text)
            console.log('SUCCESS! Email Sent :) ', response.status + " " + response.text);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }, (error) => {
            setValue("FATAL! Email not sent :( " + error)
            console.log('FAILED...', error);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    };

    return (
        <div>
          <textarea
              value={value}
              onChange={handleInput}
              onKeyPress={handleEnter}
              style={{fontFamily: 'monospace', resize: 'none', fontWeight: '700'}}
          />
        </div>
    );
}

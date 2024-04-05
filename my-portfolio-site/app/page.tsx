'use client';

import { TypeAnimation } from 'react-type-animation';
import {useState} from "react";
import {Menu} from "@/app/components/Menu";
import {Socials} from "@/app/components/Socials";
import {Projects} from "@/app/components/Projects";
import {Skills} from "@/app/components/Skills";
import {About} from "@/app/components/About";
import {MyProvider, useMyContext} from '@/app/components/MyContext';

const DisplayTab = () =>{
    const { value } = useMyContext();
    switch (value){
        case "projects":
            return <Projects />
        case "about":
            return <About />
        case "skills":
            return <Skills/>
        default:
            return <div>failed to load content</div>
    }
}

export default function Home() {
    const [typingStatusLanguage, setTypingStatusLanguage] = useState('.py');

    return (
    <MyProvider>
        <div className={"console"}>
            <div className={"console_code"}>
                <code className={"console-text"} >
                    <TypeAnimation
                        sequence={[
                            () => {
                                setTypingStatusLanguage('.py');
                            },
                            'print("Hi, I\'m Ben!")',
                            1000,
                            () => {
                                setTypingStatusLanguage('.java');
                            },
                            'System.out.println("Hi, I\'m Ben!");',
                            1000,
                            () => {
                                setTypingStatusLanguage('.js');
                            },
                            'console.log("Hi, I\'m Ben!");',
                            1000,
                            () => {
                                setTypingStatusLanguage('.c');
                            },
                            'std::cout << "Hi, I\'m Ben!" << std::endl;',
                            1000,
                            () => {
                                setTypingStatusLanguage('.sh');
                            },
                            '$ echo "Hi, I\'m Ben!"',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </code>
            </div>
            <style>
                <style>
                    {`
                        .index-module_type__E-SaG::after {
                            content: "";
                            display: inline-block;
                            width: 0.75em;
                            border-bottom: 10px solid;
                            position: relative;
                            top: 5px; /* Adjust the value to move the underscore up or down */
                            left: 5px;
                        }   
                    `}
                </style>
            </style>
            <br/>
            <div className={"console-file-name"}>hello-world{typingStatusLanguage}</div>
        </div>
        {/*<div className={"blur"}></div>*/}
        <div className={"main-container"}>
            <Menu/>
            <DisplayTab/>
            <div className={"footer"}>
                <Socials></Socials>
                <div className={"copyright"}>Ben Abbott 2024© All Rights Reserved.</div>
            </div>
        </div>
    </MyProvider>
  );
}
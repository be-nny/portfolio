import {useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import styles from './helloWorld.module.css';

export const HelloWorld = () => {
    const [typingStatusLanguage, setTypingStatusLanguage] = useState('.py');
    return (
        <div className={styles.container}>
            <div>
                <code className={styles.text} >
                    <TypeAnimation
                        sequence={[
                            () => {
                                setTypingStatusLanguage('.py');
                            },
                            'print("Hello, World!")',
                            1000,
                            () => {
                                setTypingStatusLanguage('.java');
                            },
                            'System.out.println("Hello, World!");',
                            1000,
                            () => {
                                setTypingStatusLanguage('.js');
                            },
                            'console.log("Hello, World!");',
                            1000,
                            () => {
                                setTypingStatusLanguage('.c');
                            },
                            'std::cout << "Hello, World!" << std::endl;',
                            1000,
                            () => {
                                setTypingStatusLanguage('.sh');
                            },
                            '$ echo "Hello, World!"',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </code>
            </div>
            <br/>
            {/*<div className={styles.headerFileName}>hello-world{typingStatusLanguage}</div>*/}
        </div>
    );
}
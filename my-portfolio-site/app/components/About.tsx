import styles from './About.module.css';
import {useState} from "react";

export const About = () => {
    return(
        <div className={styles.aboutLayout}>
            <div className="jumbotron">
                {/*<h1 className={styles.titleText}>Hello, world!</h1>*/}
                <hr className="my-4" style={{color:"#ffffff"}}/>
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
                        console last login @ {todaysDate()}
                    </p>
                </div>
                <div className={"commandLine"} contentEditable={"true"}>
                    <Console />
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

    const handleInput = (e) => {
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

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            if(messageNum < 2){
                console.log(value)
                setMessageNum(messageNum + 1)
            } else{
                console.log(email + "," + message + "," + confirm)

                setMessageNum(0)
                setValue(messages[0].substring((0, messages[0].length-1)))
                setEmail('')
                setMessage('')
                setConfirm('')
            }
        }
    }

    return (
        <div>
          <textarea
              value={value}
              onChange={handleInput}
              onKeyPress={handleEnter}
              style={{fontFamily: 'monospace', resize: 'none'}}
          />
        </div>
    );
}

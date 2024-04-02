import styles from './About.module.css';

export const About = () => {
    return(
        <div className={styles.aboutLayout}>
            <div className="jumbotron">
                <h1 className={styles.titleText}>Hello, world!</h1>
                <div className={styles.subText}>
                    <p>
                        Welcome to my portfolio!
                        My name is Ben Abbott and here you can find some of my projects and skills.
                        I'm a 2nd year computer science student at the University of Exeter.
                        My strengths are prominently back-end development projects but I have some full-stack experience.
                    </p>
                </div>
                <hr className="my-4"/>
                <h2 className={styles.subTitle}>Contact Information</h2>
                <div className="card" style={{width: "18rem"}}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">ben.abboty1717@gmail.com</li>
                        <li className="list-group-item">ba438@exeter.ac.uk</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

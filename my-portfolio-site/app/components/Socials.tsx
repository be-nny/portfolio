import styles from './Socials.module.css';

export const Socials = () =>{
    return (
        <div className={styles.socialsCtn}>
            <ul className={styles.socialsList}>
                <li className={styles.socialsItem}>
                    <a href={"https://github.com/be-nny"} className={styles.socialsLink}>
                        <i className={"bi bi-github"}/>
                    </a>
                </li>
                <li className={styles.socialsItem}>
                    <a href={"https://www.linkedin.com/in/ben-abbott-789034262/"} className={styles.socialsLink}>
                        <i className={"bi bi-linkedin"}/>
                    </a>
                </li>
            </ul>
        </div>
    );
}
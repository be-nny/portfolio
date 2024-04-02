import React from 'react';
import styles from './Menu.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useMyContext } from './MyContext';

export const Menu = () => {
    const { setValue } = useMyContext();

    const handleClick = (value: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setValue(value);
    };

    return (
        <div className={"SocialsLinksCtn"}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <a href="" className={styles.menuLink} onClick={(event) => handleClick('projects', event)}>
                        <i className={`bi bi-award ${styles.menuIcon}`} />
                    </a>
                    <div className={`${styles.menuItemText} ${styles.myWorkText}`}>Projects</div>
                </li>
                <li className={styles.menuItem}>
                    <a href="" className={styles.menuLink}  onClick={(event) => handleClick('skills', event)}>
                        <i className={`bi bi-graph-up-arrow ${styles.menuIcon}`} />
                    </a>
                    <div className={`${styles.menuItemText} ${styles.mySkillsText}`}>Skills</div>
                </li>
                <li className={styles.menuItem}>
                    <a href="" className={styles.menuLink}  onClick={(event) => handleClick('about', event)}>
                        <i className={`bi bi-person-circle ${styles.menuIcon}`} />
                    </a>
                    <div className={`${styles.menuItemText} ${styles.aboutMeText}`}>Me</div>
                </li>
            </ul>
        </div>
    );
};

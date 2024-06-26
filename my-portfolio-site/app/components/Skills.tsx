'use client';

import styles from './Skills.module.css';
import { motion } from "framer-motion";
import React from "react";

export const Skills = () => {
    return(
        <div>
            <div className={styles.skillsGridLayout}>
                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0, 0.5]
                            }} data-bs-theme="dark">
                    <div>
                        <h5 className="card-title"><code>Java</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">3+ Years of Experience</h6>
                        <p className="card-text small">
                            Good understanding of theoretical concepts and practices such as patterns, concurrency, generics, etc...
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} data-bs-theme="dark">
                    <div className="card-body">
                        <h5 className="card-title"><code>Python</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">5+ Years of Experience</h6>
                        <p className="card-text small">
                            I have the most experience in this language and feel very comfortable using it!
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} data-bs-theme="dark">
                    <div className="card-body">
                        <h5 className="card-title"><code>ML/AI</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">1 Year of Experience</h6>
                        <p className="card-text small">
                            Intermediate understanding of FCNs and CNNs alongside how to build these models.
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} data-bs-theme="dark">
                    <div className="card-body">
                        <h5 className="card-title"><code>SQL</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">2+ Years of Experience</h6>
                        <p className="card-text small">
                            I understand the key principles when it comes to designing a relational database, DDL/DML, and SQL.
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} data-bs-theme="dark">
                    <div className="card-body">
                        <h5 className="card-title"><code>Golang</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">1 Year of Experience</h6>
                        <p className="card-text small">
                            Used this language in industry with cloud applications in the DevOpps setting.
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} data-bs-theme="dark">
                    <div className="card-body">
                        <h5 className="card-title"><code>Full Stack Development</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">1 Year of Experience</h6>
                        <p className="card-text small">
                            Comfortable with the flow of data from the front-end to the back-end, and I understand the importance of network security in this area.
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} data-bs-theme="dark">
                    <div className="card-body">
                        <h5 className="card-title"><code>Haskell</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">1 Year of Experience</h6>
                        <p className="card-text small">
                            Used functional programming languages like this alongside <code>Prolog</code> with well rounded knowledge with the paradigms that come with them.
                        </p>
                    </div>
                </motion.div>

                <motion.div className={`card ${styles.card}`} style={{height: "230px"}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} data-bs-theme="dark"
                            transition={{
                                duration: 0.3,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                    <div className="card-body">
                        <h5 className="card-title"><code>C/C++</code></h5>
                        <h6 className="card-subtitle mb-2 text-muted">1 Year of Experience</h6>
                        <p className="card-text small">
                            Although my understanding isn't the most advanced as its my newest language, I understand the importance of memory management in this language.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

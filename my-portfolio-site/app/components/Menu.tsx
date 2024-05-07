import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import styles_hello_world from "@/app/components/helloWorld.module.css";
import { TypeAnimation } from 'react-type-animation';

export const Menu = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
                <Container>
                    <Nav className="me-auto" variant="underline">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <code className={`${styles_hello_world.text}`} >
                                <TypeAnimation
                                    sequence={[
                                        'printf("%s\\n", "Hey, I\'m ben");',
                                        800,
                                        'print("Hey, I\'m ben")',
                                        800,
                                        'System.out.println("Hey, I\'m ben");',
                                        800,
                                        'console.log("Hey, I\'m ben");',
                                        800,
                                        'std::cout << "Hey, I\'m ben" << std::endl;',
                                        800,
                                        '$ echo "Hey, I\'m ben"',
                                        800,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </code>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href={"https://github.com/be-nny"}>
                            <i className={"bi bi-github"}/>
                        </Nav.Link>
                        <Nav.Link href={"https://www.linkedin.com/in/ben-abbott-789034262/"}>
                            <i className={"bi bi-linkedin"}/>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
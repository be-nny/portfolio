import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from 'react-bootstrap/Card';

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
                    <Nav className="ml-auto">
                        <Nav.Link href={"https://github.com/be-nny"}>
                            <i className={"bi bi-github"}/>
                        </Nav.Link>
                        <Nav.Link href={"https://www.linkedin.com/in/ben-abbott-789034262/"}>
                            <i className={"bi bi-linkedin"}/>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link className={"small"} href={"https://sketchfab.com/3d-models/planet-earth-bce3ea48781c4f02a8c52d2678220d07"}>Model Credit</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
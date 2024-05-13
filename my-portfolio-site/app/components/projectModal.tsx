import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import styles from "@/app/components/carousel.module.css";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

interface ProjectModalProps{
    show: boolean;
    onHide: () => void;
    content: any;
}


export function ProjectModal(props: ProjectModalProps){
    return(
        <>
            <Modal
                {...props}
                data-bs-theme="dark"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable={true}
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{color:"white"}}>
                        {props.content.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<h4 style={{color:"white"}}>About</h4>*/}
                    <ListGroup>
                        <ListGroup.Item action href={props.content.git} rel="noopener noreferrer" target="_blank">GitHub</ListGroup.Item>
                        <ListGroup.Item>
                            <Stack direction="horizontal" gap={2}>
                                {Array.from({ length: props.content.images.length }).map((_, i) => (
                                    <Badge pill bg="info">
                                        {props.content.skills[i]}
                                    </Badge>
                                ))}
                            </Stack>
                        </ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <Carousel>
                        {Array.from({ length: props.content.images.length }).map((_, i) => (
                            <Carousel.Item>
                                <img src={props.content.images[i]} width={'400px'} className={styles.featuredImage}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Overview</Accordion.Header>
                            <Accordion.Body>
                                {props.content.description}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Project</Accordion.Header>
                            <Accordion.Body>
                                {props.content.detailedDescription}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

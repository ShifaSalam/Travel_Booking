import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row,Col } from 'react-bootstrap';

function TourImages() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='p-3'>
    <img src="https://www.ekeralatourism.net/wp-content/uploads/2016/11/munnar2-768x504.jpg" height={"100px"} className='rounded-1' alt="" onClick={handleShow} />
    </div>
    <div>
    <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Calicut</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img className='img-fluid' src="https://1.bp.blogspot.com/-Gl4TZ17gAQo/UTEpqynJWII/AAAAAAAABGM/lRicXRPm_Q0/s1600/soarindiakeral1.jpg" alt="img" />
                        </Col>
                        <Col>
                            {/* <p>{project.overview}</p>
                            <h6>{project.languages}</h6>
                            <div className='mt-3 p-3 d-flex justify-content-between'>
                                <a href={project.github}>
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a href={project.demo}>
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </div> */}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
    </div>
    </>
  )
}

export default TourImages
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import base_url from '../Services/base_url';


function TourImages({ photo, tour }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState([]);

    // console.log(photo)
    console.log(tour)
    const photoUrl = `${base_url}/${photo}`

    const handlePhotoClick = (photoUrl) => {
        const tourDetails = tour.find(tours => tours.photo.includes(photo));
        console.log(tourDetails)
        setSelectedTour(tourDetails);
        setIsModalOpen(true);
        console.log(selectedTour)


    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <div className='py-2' style={{cursor:'pointer'}} >
                <img src={photo && `${base_url}/${photo}`} width={'100%'} alt="tour-img" height={'300px'} className='rounded-1 gallery' onClick={() => handlePhotoClick(photoUrl)} />
            </div>
            <div>
                <Modal
                    show={isModalOpen}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedTour.packageName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <img src={photo && `${base_url}/${photo}`} width={'100%'} alt="tour-img" height={'300px'} />
                            <Col md='8'>
                                <h3>{selectedTour.state}</h3>
                            </Col>
                            <Col className='mt-2'>
                                <i class="fa-solid fa-users-line fa-lg"></i> {selectedTour.maxGroupSize} People
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="info" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default TourImages
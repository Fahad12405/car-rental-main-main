import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import Swal from "sweetalert2";
import { loadingContent } from "./general/general-components";

const ContactSection = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({})
    const [, setCaptchaResult] = useState(false);

    const handleFormChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCaptchaChange = value => {
        setCaptchaResult(value);
    };

    const handleContactSubmit = event => {
        event.preventDefault();
        setIsLoading(true);

        addDoc(collection(db, "forms"), formData)
            .then(() => {
                setIsLoading(false);
                Swal.fire({
                    title: "Good job!",
                    text: "All changes saved!",
                    icon: "success"
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            });
    };

    return (
        <div id="contact-section" className="pb-5"> {/* Added padding-bottom */}
            <Container className="pt-4">
                <Row className="mb-5">
                    <Col>
                        <h1 className="fs-1 text-center text-uppercase">Get In Touch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="primary-bg-color py-5 rounded-top">
                            <Row className="justify-content-center">
                                <Col xs={8} className="text-center">
                                    {
                                        !isLoading
                                            ?
                                            <Form onSubmit={handleContactSubmit}>
                                                <Form.Control type="text" name="name" placeholder="Name" className="mb-2" onChange={handleFormChange} required />
                                                <Form.Control type="email" name="email" placeholder="Email" className="mb-2" onChange={handleFormChange} required />
                                                <Form.Control type="tel" name="phone" placeholder="Phone Number" className="mb-2" onChange={handleFormChange} required />
                                                <Form.Control as="textarea" name="message" rows={3} placeholder="Message" className="mb-2" onChange={handleFormChange} required />
                                                
                                               
                                            </Form>
                                            :
                                            loadingContent
                                    }
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactSection;

import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: '#7c5dfa',
            transition: { duration: 0.3 },
        },
    };

    const socialIconVariants = {
        hover: {
            scale: 1.2,
            color: '#7c5dfa',
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.5rem' }}>Let's get in touch!</h2>
                            <p className="text-muted" style={{ fontSize: '1rem' }}>
                                Got questions about GoGetWell.AI? Our team is here to help. Contact us
                                for quick and friendly support.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 p-md-5">
                            <Row className="gy-4">
                                <Col md={6}>
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-2">
                                            <Phone className="text-primary me-2" size={20} />
                                            <h6 className="fw-semibold text-dark mb-0">Phone</h6>
                                        </div>
                                        <p className="text-muted">+91 9811396858</p>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-2">
                                            <Mail className="text-success me-2" size={20} />
                                            <h6 className="fw-semibold text-dark mb-0">Email</h6>
                                        </div>
                                        <p className="text-muted">hello@gogetwell.ai</p>
                                    </div>
                                    <div>
                                        <h6 className="fw-semibold text-dark mb-2">Connect With Us</h6>
                                        <div className="d-flex gap-3">
                                            <motion.a
                                                href="#"
                                                variants={socialIconVariants}
                                                initial="initial"
                                                whileHover="hover"
                                                className="text-primary"
                                                style={{ fontSize: '1.5rem' }}
                                            >
                                                <FaTwitter />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                variants={socialIconVariants}
                                                initial="initial"
                                                whileHover="hover"
                                                className="text-primary"
                                                style={{ fontSize: '1.5rem' }}
                                            >
                                                <FaLinkedinIn />
                                            </motion.a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formFullName">
                                            <Form.Label className="fw-semibold text-dark">Full Name</Form.Label>
                                            <div className="d-flex align-items-center">
                                                <User className="text-muted me-2" size={18} />
                                                <Form.Control type="text" placeholder="Enter your name" className="rounded-pill border-0 bg-light" />
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label className="fw-semibold text-dark">Email</Form.Label>
                                            <div className="d-flex align-items-center">
                                                <Mail className="text-muted me-2" size={18} />
                                                <Form.Control type="email" placeholder="Enter your email" className="rounded-pill border-0 bg-light" />
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formMessage">
                                            <Form.Label className="fw-semibold text-dark">Message</Form.Label>
                                            <Form.Control as="textarea" rows={4} placeholder="Your message here..." className="rounded-lg border-0 bg-light" />
                                        </Form.Group>

                                        <motion.button
                                            variants={buttonVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            type="submit"
                                            className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                                        >
                                            Submit <span style={{ marginLeft: '0.5rem' }}>&gt;</span>
                                        </motion.button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
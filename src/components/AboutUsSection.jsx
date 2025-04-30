
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutUsImage from "../assets/about-us-imageDoodle.gif";
import { LightningChargeFill, PersonFill } from 'react-bootstrap-icons';

const AboutUsSection = () => {
    return (
        <section className="section bg-white py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <motion.img
                            src={aboutUsImage}
                            alt="About Us Team"
                            className="img-fluid"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                    </Col>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="section-title mb-4">About Us</h2>
                            <p className="lead mb-3">
                                We are a pioneering AI-driven platform focused on revolutionizing the medical tourism
                                industry. By addressing inefficiencies and disorganization, we empower healthcare
                                facilitators to modernize their operations, attract more patients, and deliver seamless,
                                personalized care across borders.
                            </p>
                            <p className="mb-4">
                                Our cutting-edge solutions are designed to streamline processes and enhance the overall
                                patient experience.
                            </p>
                            <Row className="mt-3">
                                <Col md={6} className="d-flex align-items-center mb-3">
                                    <LightningChargeFill size={30} className="me-2 text-primary" />
                                    <div>
                                        <h4 className="mb-1 fw-bold">Modern Solutions</h4>
                                        <p className="small text-muted">Leveraging AI technology for healthcare</p>
                                    </div>
                                </Col>
                                <Col md={6} className="d-flex align-items-center mb-3">
                                    <PersonFill size={30} className="me-2 text-info" />
                                    <div>
                                        <h4 className="mb-1 fw-bold">Patient-Centric</h4>
                                        <p className="small text-muted">Personalized healthcare experiences</p>
                                    </div>
                                </Col>
                            </Row>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUsSection;
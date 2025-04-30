import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import our_m_img from "../assets/our_mission.gif"


const OurMissionSection = () => {
    return (
        <section className="section py-5" style={{ background: 'linear-gradient(to right, #f0f2ff, #e0e7ff)' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="mb-4">
                            <h2 className="section-title mb-3">Our Mission</h2>
                            <p className="lead">
                                Our mission is to simplify the complex medical tourism process by leveraging advanced AI
                                tools that optimize healthcare facilitators' operations, maximize revenue opportunities, and
                                provide patients with personalized and stress-free treatment journeys.
                            </p>
                            <p>
                                We strive to become the leading platform for healthcare tourism management and digital
                                transformation.
                            </p>
                        </div>
                        <Row className="mt-4">
                            <Col md={6} className="mb-4">
                                <motion.div
                                    className="d-flex align-items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <FaRegCheckCircle size={24} className="text-success" />
                                    <div>
                                        <h5 className="fw-bold">AI-Powered Solutions</h5>
                                        <p className="small text-muted">Optimizing operations with advanced technology</p>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col md={6} className="mb-4">
                                <motion.div
                                    className="d-flex align-items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <FaArrowTrendUp size={24} className="text-warning" />
                                    <div>
                                        <h5 className="fw-bold">Growth Focus</h5>
                                        <p className="small text-muted">Maximizing revenue and opportunities</p>
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img
                            src={our_m_img}
                            alt="Medical Team"
                            className="img-fluid rounded"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurMissionSection;

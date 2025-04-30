import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Clock, MessageSquare } from 'lucide-react';
import challanges_img from "../assets/challenges_solve.gif";

const ChallengesSection = () => {
    return (
        <section
            style={{
                background: "white",
                padding: '80px 0'
            }}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <img
                                src={challanges_img}
                                alt="Challenges"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ borderRadius: '20px' }}
                            />
                        </motion.div>
                    </Col>

                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        >
                            <h2 style={{
                                color: '#111827',
                                fontWeight: '700',
                                fontSize: '2.5rem',
                                marginBottom: '1rem'
                            }}>
                                The Challenges We Solve
                            </h2>

                            <p style={{ color: '#374151', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Medical tourism, especially in India, is plagued by disorganization and inefficiency.
                                Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient
                                support, and missed growth opportunities.
                            </p>

                            <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                Our platform addresses these pain points by streamlining lead management and improving
                                operational efficiency for facilitators and hospitals alike.
                            </p>

                            <div className="mt-5">
                                <motion.div
                                    className="d-flex align-items-start p-3 mb-3 rounded-4 shadow-sm bg-white"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{ gap: '15px' }}
                                >
                                    <Clock className="text-primary mt-1" size={28} />
                                    <div>
                                        <h5 style={{ fontWeight: '600', color: '#111827' }}>Efficient Operations</h5>
                                        <p style={{ color: '#6b7280', marginBottom: 0 }}>Streamlined booking and management</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="d-flex align-items-start p-3 rounded-4 shadow-sm bg-white"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{ gap: '15px' }}
                                >
                                    <MessageSquare className="text-success mt-1" size={28} />
                                    <div>
                                        <h5 style={{ fontWeight: '600', color: '#111827' }}>Enhanced Support</h5>
                                        <p style={{ color: '#6b7280', marginBottom: 0 }}>Improved patient communication</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChallengesSection;

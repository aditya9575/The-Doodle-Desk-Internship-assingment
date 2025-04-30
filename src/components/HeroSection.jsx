import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section style={{
            background: 'linear-gradient(to right, #20002c, #cbb4d4)',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '60px 20px',
            textAlign: 'center'
        }}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}
                        >
                            AI Front Office
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            style={{ fontSize: '2.5rem', fontWeight: '600', color: '#E0E0E0', marginBottom: '30px' }}
                        >
                            For Healthcare Agents
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            style={{ fontSize: '1.3rem', marginBottom: '40px', color: '#f0f0f0' }}
                        >
                            Create your <span style={{ color: '#ffeb3b' }}>AI Store</span> in 2 minutes<br />
                            Scale with <span style={{ color: '#ffeb3b' }}>Digital Marketing</span> superpowers
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <motion.div whileHover={{ scale: 1.08 }}>
                                <Button
                                    style={{
                                        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                        border: 'none',
                                        padding: '12px 40px',
                                        fontSize: '1.2rem',
                                        borderRadius: '50px',
                                        fontWeight: '600',
                                        boxShadow: '0px 4px 20px rgba(0, 114, 255, 0.5)'
                                    }}
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="d-flex justify-content-center gap-5 flex-wrap mt-5"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
                                    2100<span style={{ color: '#ffeb3b' }}>+</span>
                                </h2>
                                <p style={{ margin: 0 }}>Qualified Doctors</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
                                    1000<span style={{ color: '#ffeb3b' }}>+</span>
                                </h2>
                                <p style={{ margin: 0 }}>Hospitals</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
                                    800<span style={{ color: '#ffeb3b' }}>+</span>
                                </h2>
                                <p style={{ margin: 0 }}>Treatment Plans</p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;

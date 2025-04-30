import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const linkVariants = {
        hover: {
            scale: 1.05,
            color: '#7c5dfa',
            transition: { duration: 0.2 },
        },
    };

    const socialIconVariants = {
        hover: {
            scale: 1.2,
            color: '#7c5dfa',
            transition: { duration: 0.2 },
        },
    };

    return (
        <footer className="py-3" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e0e0e0' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="text-center text-md-start">
                        <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                            © {new Date().getFullYear()} gogetwell.ai
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className="d-flex justify-content-center gap-3">
                            <motion.a
                                href="#"
                                variants={linkVariants}
                                initial="initial"
                                whileHover="hover"
                                className="text-muted"
                                style={{ fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                href="#"
                                variants={linkVariants}
                                initial="initial"
                                whileHover="hover"
                                className="text-muted"
                                style={{ fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                Terms of Service
                            </motion.a>
                            <motion.a
                                href="#"
                                variants={linkVariants}
                                initial="initial"
                                whileHover="hover"
                                className="text-muted"
                                style={{ fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                Pricing Policy
                            </motion.a>
                            <motion.a
                                href="#"
                                variants={linkVariants}
                                initial="initial"
                                whileHover="hover"
                                className="text-muted"
                                style={{ fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                Editor Policy
                            </motion.a>
                        </div>
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        <div className="d-flex justify-content-end gap-3">
                            <motion.a
                                href="#"
                                variants={socialIconVariants}
                                initial="initial"
                                whileHover="hover"
                                className="text-primary"
                                style={{ fontSize: '1.2rem' }}
                            >
                                <FaTwitter />
                            </motion.a>
                            <motion.a
                                href="#"
                                variants={socialIconVariants}
                                initial="initial"
                                whileHover="hover"
                                className="text-primary"
                                style={{ fontSize: '1.2rem' }}
                            >
                                <FaLinkedinIn />
                            </motion.a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
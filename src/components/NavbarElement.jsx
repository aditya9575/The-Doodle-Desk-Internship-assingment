import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from "../assets/doodle desk logo.png"


const NavbarElement = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Navbar expand="lg" style={{ background: 'linear-gradient(to right, #20002c, #cbb4d4)' }} variant="dark" className="py-3 shadow-sm">
                <Container>

                    <Navbar.Brand href="#home">
                        <img
                            src="/assets/doodle desk logo.png"

                            alt="MakeWell Logo"
                            width="150"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mx-auto gap-4">
                            {['About Us', 'FAQ', 'Contact Us'].map((text, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    key={index}
                                >
                                    <Nav.Link href={`#${text.replace(/\s+/g, '').toLowerCase()}`} style={{ fontWeight: '500', fontSize: '1.1rem', color: 'white' }}>
                                        {text}
                                    </Nav.Link>
                                </motion.div>
                            ))}
                        </Nav>


                        <div className="d-flex gap-3">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button variant="outline-light" className="rounded-pill px-4">Login</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button variant="light" className="rounded-pill px-4 text-primary fw-bold">Get Started</Button>
                            </motion.div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
};

export default NavbarElement;

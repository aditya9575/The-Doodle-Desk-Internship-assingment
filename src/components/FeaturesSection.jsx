import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaLightbulb,
    FaProcedures,
    FaQuestionCircle,
    FaFileMedicalAlt,
    FaChartLine,
    FaDatabase,
    FaGlobe,
    FaCreditCard,
    FaSearch,
} from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Custom AI-Powered Website',
            desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
            icon: FaLightbulb,
            color: '#6c63ff',
        },
        {
            title: 'Enhanced Patient Conversion',
            desc: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
            icon: FaProcedures,
            color: '#a78bfa',
        },
        {
            title: 'Real-Time Query Handling',
            desc: 'Instant response system for patient inquiries with AI-powered chat support.',
            icon: FaQuestionCircle,
            color: '#5eead4',
        },
        {
            title: 'Medical Report Analysis',
            desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
            icon: FaFileMedicalAlt,
            color: '#f472b6',
        },
        {
            title: 'Improved Lead Generation',
            desc: 'Data-driven lead generation strategies to attract and engage potential patients.',
            icon: FaChartLine,
            color: '#818cf8',
        },
        {
            title: 'Comprehensive Healthcare Database',
            desc: 'Extensive medical information database for accurate patient guidance and support.',
            icon: FaDatabase,
            color: '#3b82f6',
        },
        {
            title: 'Multilingual Support',
            desc: 'Breaking language barriers with comprehensive multilingual communication tools.',
            icon: FaGlobe,
            color: '#22c55e',
        },
        {
            title: 'Seamless Payment Handling',
            desc: 'Secure and efficient payment processing for medical services globally.',
            icon: FaCreditCard,
            color: '#facc15',
        },
        {
            title: 'Marketing And SEO Support',
            desc: 'Optimized digital presence with advanced SEO and marketing strategies.',
            icon: FaSearch,
            color: '#ea580c',
        },
    ];

    const cardVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    return (
        <section
            className="py-5"
            style={{
                background: 'linear-gradient(135deg, #c9d6ff 0%, #E2E2E2 100%)',
                fontFamily: 'sans-serif',
            }}
        >
            <Container>
                <h2 className="text-center mb-4" style={{ fontWeight: 600, color: '#333' }}>
                    Our Comprehensive Solutions
                </h2>
                <Row className="gy-4">
                    {features.map((feature, idx) => (
                        <Col md={4} key={idx}>
                            <motion.div
                                initial="initial"
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <Card className="h-100 shadow-sm border-0 rounded-md">
                                    <Card.Body className="d-flex flex-column align-items-center p-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                                            style={{
                                                backgroundColor: feature.color + '1a',
                                                color: feature.color,
                                                width: '60px',
                                                height: '60px',
                                            }}
                                        >
                                            <feature.icon size={30} />
                                        </div>
                                        <Card.Title className="text-center mb-2" style={{ fontWeight: 500, fontSize: '1.25rem' }}>
                                            {feature.title}
                                        </Card.Title>
                                        <Card.Text className="text-center text-muted" style={{ fontSize: '0.9rem' }}>
                                            {feature.desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesSection;
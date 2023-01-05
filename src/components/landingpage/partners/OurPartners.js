import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import '../../../css/OurPartners.css'
import { partners } from '../../../data/partners'

const OurPartners = () => {
  return (
    <Container id="ourpartners" className='partner' fluid="md">
        <Row justify-content-center="true">
            <Col xs={12} >
                <h1>Our Partners</h1>
                <p>We are honored to have the following partners in our operations.</p>
            </Col>
        </Row>
        <Row>
            {partners.map((partner) => (
                <Col style={{marginBottom: "60px" }} xs={12} md={4} sm={12} lg={2} key={partner.id} gap={6}>
                    <a href={partner.link} target="_blank" rel="noreferrer">
                    <Card className="partner-card">
                        <Card.Img variant="top" src={partner.image} />
                    </Card>
                    <Card.Title as="h5">{partner.name}</Card.Title>
                    </a>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default OurPartners

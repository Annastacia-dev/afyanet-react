import React from "react";
import { Container,Row, Col, Card } from 'react-bootstrap';
import { services } from '../../../data/theServices'


function Services(){
return (
<>
<div>
    
<Container id="services" className="service" >
<h1>Services</h1>
<Row>
            {services.map((service) => (
                <Col style={{marginBottom: "60px" }} xs={12} md={5} lg={2} key={service.id}>
            <Card className="service-card">
             <Card.Img variant="top" src={service.image} />
                  
              </Card>
                    <Card.Title as="h5">{service.name}</Card.Title>
                   <Card.Text>{service.text}</Card.Text>
                </Col>
            ))}
        </Row>
</Container>
</div>
</>
   
 )
}

export default Services
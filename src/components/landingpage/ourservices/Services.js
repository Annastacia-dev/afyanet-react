import React from "react";
import { Container,Row, Col} from 'react-bootstrap';
import { services } from '../../../data/theServices'
import './service.css'


function Services(){
return (
<>
<div>
    
<Container id="services" className="services" >
<h1 className="service-title">Services</h1>
<Row>
    {services.map((service) => {
        const {id,name,text,icon} = service;
        return (
            <Col key={id} md={4} sm={12} gap={6}>
            <div className="service">
              <i>{icon}</i>
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          </Col>
        )
    })}
        
</Row>
</Container>
</div>
</>
   
 )
}

export default Services
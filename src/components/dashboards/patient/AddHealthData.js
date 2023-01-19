import React,{ useState } from 'react'
import { useContext } from 'react'
import { PatientContext } from '../../../context/patient';
import { Row, Col, Form } from 'react-bootstrap'


const AddHealthData = () => {

    const { patient } = useContext(PatientContext);

    const [formData, setFormData] = useState({
        bloodPressure: '',
        weight: '',
        height: '',
        temperature: '',
    });

    const { bloodPressure, weight, height, temperature } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://afyanet-127t.onrender.com/medical_records/${patient.medical_record.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                blood_pressure: bloodPressure,
                weight: weight,
                height: height,
                temperature: temperature,
            }),
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(data => {
                        console.log(data)
                        window.location.reload();
                    })
                } else {
                    r.json().then(data => {
                        console.log(data.errors)
                    })
                }
            })
    }

  return (
    <div>
        <Row className="mt-5">
            <Col md={12} className="allergies mb-4">
                <h5>Health Data</h5>
                <Form>
                    <Form.Group controlId="formBasicBloodPressure">
                        <Form.Label>Blood Pressure</Form.Label>
                        <Form.Control type="text" rows={3} name="bloodPressure" value={bloodPressure} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" rows={3} name="weight" value={weight} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text" rows={3} name="height" value={height} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicTemperature">
                        <Form.Label>Temperature</Form.Label>
                        <Form.Control type="text" rows={3} name="temperature" value={temperature} onChange={handleChange} />
                    </Form.Group>
                    <button className="btn btn-primary" onClick={handleSubmit}>Save</button>       
                </Form>
            </Col>
        </Row>
    </div>
  )
}

export default AddHealthData
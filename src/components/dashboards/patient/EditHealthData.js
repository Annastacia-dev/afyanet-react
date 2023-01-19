import React,{useState, useContext} from 'react'
import { PatientContext } from '../../../context/patient'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditHealthData = () => {

    const { patient } = useContext(PatientContext);

    const [bloodPressure, setBloodPressure] = useState(patient.medical_record.blood_pressure)
    const [weight, setWeight] = useState(patient.medical_record.weight)
    const [height, setHeight] = useState(patient.medical_record.height)
    const [temperature, setTemperature] = useState(patient.medical_record.temperature)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://afyanet-127t.onrender.com/medical_records/${patient.medical_record.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`

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
                        toast.success('Health Data Updated Successfully',{
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                            transition: 'slide',
                            style: { backgroundColor: '#9263CB'}
                        })
                        window.location.reload()
                    })
                } else {
                    r.json().then(data => {
                        console.log(data.errors)
                    })
                }
            }
            )
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
                transition={'slide'}
             />
            <Row>
                <Col md={6}>
                    <Form.Group controlId="bloodPressure">
                        <Form.Label>Blood Pressure</Form.Label>
                        <Form.Control type="text" placeholder="Enter Blood Pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="weight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="height">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="temperature">
                        <Form.Label>Temperature</Form.Label>
                        <Form.Control type="text" placeholder="Enter Temperature" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default EditHealthData
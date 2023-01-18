import React,{ useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const UpdateDiagnosis = ({appointment}) => {

    console.log(appointment)

    const [diagnosis, setDiagnosis] = useState('')
    const [treatment, setTreatment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://afyanet-127t.onrender.com/appointments/${appointment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                diagnosis: diagnosis,
                treatment: treatment
            })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => {
                    console.log(data)
                    toast.success('Diagnosis updated successfully',{
                        position: 'top-center',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                        transition: 'slide',
                        style: {backgroundColor: '#9263CB'}
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
         />
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group controlId="diagnosis">
                        <Form.Label>Diagnosis</Form.Label>
                        <Form.Control type="text" placeholder="Enter diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="treatment">
                        <Form.Label>Prescription</Form.Label>
                        <Form.Control type="text" placeholder="Enter treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Update Diagnosis
            </Button>
        </Form>
    </div>
  )
}

export default UpdateDiagnosis

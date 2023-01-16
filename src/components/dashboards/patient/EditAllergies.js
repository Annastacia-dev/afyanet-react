import React,{ useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PatientContext } from '../../../context/patient'


const EditAllergies = () => {

    const { patient } = useContext(PatientContext);

    const [allergies, setAllergies] = useState(patient.medical_record.allergies)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://afyanet-127t.onrender.com/medical_records/${patient.medical_record.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                allergies: allergies,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => {
                    toast.success('Allergies Updated Successfully',{
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
            transition='slide'
            style={{ backgroundColor: '#9263CB'}}
         />
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Allergies
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Allergies" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Update</Button>
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}

export default EditAllergies
import React,{ useContext, useState } from 'react'
import { PatientContext } from '../../../context/patient'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../display/Loading'


const EditProfile = () => {

    const { patient, error, loading } = useContext(PatientContext)

    const [firstName, setFirstName] = useState(patient && patient.first_name)
    const [lastName, setLastName] = useState(patient && patient.last_name)
    const [email, setEmail] = useState(patient && patient.email)
    const [phone, setPhone] = useState(patient && patient.phone_number)
    const [location, setLocation] = useState(patient && patient.location)
   

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {

            fetch(`https://afyanet-127t.onrender.com/patients/${patient.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`,

            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phone,
                location: location
            })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => {
                    console.log(data)
                    toast.success('Profile updated successfully',{
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
        })

        },100);
    }


    if (loading) {
        return <div><Loading /></div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

  return (
    <div>
        <ToastContainer 
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            progress={undefined}
            theme='colored'
            transition='slide'
        />
        <Row className="justify-content-center">
            <Col md={8}>
                <Form onSubmit={handleSubmit}
                >
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Update</Button>
                </Form>
            </Col>
        </Row>            
    </div>
  )
}

export default EditProfile
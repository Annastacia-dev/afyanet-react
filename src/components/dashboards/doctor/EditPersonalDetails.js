import React, { useContext, useState } from "react"
import { DoctorContext } from '../../../context/doctor'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../display/Loading'



function EditPersonalDetails(){
    const { doctor, error, loading } = useContext(DoctorContext)

    const [firstName, setFirstName] = useState(doctor && doctor.first_name)
    const [lastName, setLastName] = useState(doctor && doctor.last_name)
    const [email, setEmail] = useState(doctor && doctor.email)
    const [phone, setPhone] = useState(doctor && doctor.phone_number)
    const [location, setLocation] = useState(doctor && doctor.location)


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://afyanet-127t.onrender.com/doctors/${doctor.id}`, {
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
                    toast.error('Error updating profile',{
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
                })
            }
        }
        )
        

    }

    if (loading) {
        return <div><Loading /></div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return(
        <>
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
            style={{backgroundColor: '#9263CB'}}
        />

        <Row className="justify-content-right">
            <Col md={8}>
                <Form onSubmit={handleSubmit}>  
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
        </>
    )
        
    };
export default EditPersonalDetails
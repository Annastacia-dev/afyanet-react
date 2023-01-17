import React, { useContext, useState } from "react"
import { DoctorContext } from '../../../context/doctor'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../display/Loading'



function Profile(){
    const { doctor, error, loading } = useContext(DoctorContext)

    const [firstName, setFirstName] = useState(doctor && doctor.first_name)
    const [lastName, setLastName] = useState(doctor && doctor.last_name)
    const [email, setEmail] = useState(doctor && doctor.email)
    const [phone, setPhone] = useState(doctor && doctor.phone_number)
    const [location, setLocation] = useState(doctor && doctor.location)
    const [specialty, setSpecialty] = useState(doctor && doctor.specialty)
    const [contract_length, setContractLength] = useState (doctor && doctor.contract_length)
    const [days_available_weekly, setDaysAvailableWeekly] = useState (doctor && doctor.days_available_weekly)
    const [specific_days_times_available, setSpecificDaysTimesAvailable] = useState (doctor && doctor.specific_days_times_available)
    const [image, setImage] = useState("")

    const submitImage = () =>{
        const dataTransfer = new dataTransfer()
        dataTransfer.append("file",image)
        dataTransfer.append("upload_present","x6awyq1u")
        dataTransfer.append("cloud_name","dh7okwoep")

        fetch("https://api.cloudinary.com/v1_1/dh7okwoep/image/upload",{
            method:"post",
            body:dataTransfer
       })
       dataTransfer
        .then((res)=>res.json)
        .then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            'image: ', image,
            'first name: ', firstName,
            'last name: ', lastName,
            'email: ', email,
            'phone: ', phone,
            'location: ', location,
            'specialty:', specialty,
            'contract_length: ', contract_length,
            'days_available_weekly: ', days_available_weekly,
            'specific_days_times_available: ',  specific_days_times_available
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
        
        <div>
            <div>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                    <button>onClick={setImage}upload</button>

            </div>
        </div>

        <Row className="justify-content-right">
            <Col md={8}>
                <Form onSubmit={handleSubmit}>
                   
                    <Form.Group controlId="formBasicProfilePicture">
                        <Form.Label>Profile Picture</Form.Label>
                        
                        <Form.Control type="file" onChange={(e) => submitImage(e.target.files)} />
                    </Form.Group>
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
                    <Form.Group controlId="formBasicSpecialty">
                        <Form.Label>Specialty</Form.Label>
                        <Form.Control type="text" placeholder="Enter specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Update</Button>
                   
                   
                    <Form.Group controlId="formBasicContractLength">
                        <Form.Label>Contract_length</Form.Label>
                        <Form.Control type="text" placeholder="Enter contract_length" value={contract_length} onChange={(e) => setContractLength(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicDaysAvailableWeekly">
                        <Form.Label>Days_Available_Weekly</Form.Label>
                        <Form.Control type="text" placeholder="days_available_weekly" value={days_available_weekly} onChange={(e) => setDaysAvailableWeekly(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formSpecificDaysTimesAvailable">
                        <Form.Label>Specific_Days_Times_Available</Form.Label>
                        <Form.Control type="text" placeholder="specific_days_times_available" value={specific_days_times_available} onChange={(e) => setSpecificDaysTimesAvailable(e.target.value)} />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Update</Button>
                </Form>
            </Col>
        </Row>  
        </>
    )
        
    };
export default Profile
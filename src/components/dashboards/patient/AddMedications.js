import React,{ useState, useContext} from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { PatientContext } from '../../../context/patient';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMedications = () => {

  const { patient } = useContext(PatientContext);

  const [ medications, setmedications] = useState('');

  const handleMedications = (e) => {
    setmedications(e.target.value)
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://afyanet-127t.onrender.com/medical_records/${patient.medical_record.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          medications: medications,
          patient_id: patient.id
      }),
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          setTimeout(() => {
            toast.success('Medications saved successfully', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }, 1000);
          window.location.reload();
        })
      } else {
        r.json().then(data => {
          console.log(data.errors)
        })
      }
    } )
  }




  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
       />
      <Row className="mt-5">
        <Col md={12} className="medications mb-4">
          <p>Medications</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} value={medications} onChange={handleMedications}/>
            </Form.Group>
            <button className="btn btn-primary">Save</button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default AddMedications
import React,{ useState, useContext} from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { PatientContext } from '../../../context/patient';

const AddAllergies = () => {

  const { patient } = useContext(PatientContext);

  const [ allergies, setAllergies] = useState('');

  const handleAllergies = (e) => {
    setAllergies(e.target.value)
  }

//  A patient has one medical record , path "https://afyanet-127t.onrender.com/patient_profile"

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://afyanet-127t.onrender.com/patient_profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        medical_record: {
          allergies: allergies,
          patient_id: patient.id
        }
      }),
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          console.log(data)
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
      <Row className="mt-5">
        <Col md={12} className="allergies mb-4">
          <p>Allergies</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} value={allergies} onChange={handleAllergies}/>
            </Form.Group>
            <button className="btn btn-primary">Save</button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default AddAllergies
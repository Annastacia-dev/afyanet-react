import React,{ useContext } from 'react'
import PatientSidebar from './PatientSidebar'
import {Row, Col, Table} from 'react-bootstrap'
import { PatientContext } from '../../../context/patient';

const PatientMedicalRecords = () => {

  const { patient } = useContext(PatientContext);

  console.log(patient)


  return (
    <div className="d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid sidecontentcontainer">
            <Row className="sidecontent px-5 mt-5">
              <Col md={12} className="mb-4">
                <p>Health Data</p>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Blood Pressure</th>
                      <th>Weight</th>
                      <th>Height</th>
                      <th>Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                      <tr>
                        <td>{patient && patient.medical_record.blood_pressure} mmHg</td>
                        <td>{patient && patient.medical_record.weight} kgs</td>
                        <td>{patient && patient.medical_record.height} ft</td>
                        <td>{patient && patient.medical_record.temperature}&deg;C</td>
                      </tr>
                     }
                  </tbody>
                </Table>
              </Col>
              <Col md={12} className="mb-4">
                <p>Allergies</p>
                {
                  // convert string to list
                  patient && patient.medical_record.allergies.split(',').map((allergy, index) => {
                    return <li key={index}>{allergy}</li>
                  }
                  )
                }
                 
              </Col>
              <Col md={12} className="mb-4">
                <p>Medications</p>
                {
                  // convert string to list
                  patient && patient.medical_record.medications.split(',').map((medication, index) => {
                    return <li key={index}>{medication}</li>
                  }
                  )
                }
              </Col>
            </Row>
          </div>
        </div>
      
    </div>
  )
}

export default PatientMedicalRecords
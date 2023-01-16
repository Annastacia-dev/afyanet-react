import React,{ useContext } from 'react'
import PatientSidebar from './PatientSidebar'
import {Row, Col, Table} from 'react-bootstrap'
import { PatientContext } from '../../../context/patient';
import '../../../css/PatientMedicalRecords.css'
import AddAllergies from './AddAllergies';
import AddMedications from './AddMedications';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PatientMedicalRecords = () => {

  const { patient } = useContext(PatientContext);

  console.log(patient)


  return (
    <div className="patient-medical-records d-flex" id="wrapper">
      <PatientSidebar />
        <div id="page-content-wrapper">
          <div className="container-fluid sidecontentcontainer">
            <Row className="sidecontent px-5 mt-5">
              <Col md={12} className="health-data mb-4">
                <p>Health Data</p>
                <Table>
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
                        <td>{patient && patient.medical_record && patient.medical_record.blood_pressure} mmHg</td>
                        <td>{patient && patient.medical_record && patient.medical_record.weight} kgs</td>
                        <td>{patient && patient.medical_record && patient.medical_record.height} ft</td>
                        <td>{patient && patient.medical_record && patient.medical_record.temperature}&deg;C</td>
                      </tr>
                     }
                  </tbody>
                </Table>
              </Col>
              <Col md={12} className="allergies mb-4">
                <p>Allergies</p>
                {
                  // if patient has no allergies, render add allergies button,else edit allergies button
                  patient && patient.medical_record && patient.medical_record.allergies.length > 0 ? (
                    <button className="btn btn-primary"><i className="fa-solid fa-pen"></i></button>
                  ) : (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-plus"></i>Add</button>} 
                    modal
                    nested
                    >
                     <AddAllergies/> 
                    </Popup>
                  )
                }
                {
                  // if patient has allergies, convert the string to list

                  patient && patient.medical_record && patient.medical_record.allergies.length > 0 ? (
                    <ul>
                      {
                        patient.medical_record.allergies.split(',').map((allergy, index) => (
                          <li key={index}>{allergy}</li>
                        ))
                      }
                    </ul>
                  ) : (
                    <h5>No allergies</h5>
                  )
                }   
              </Col>
              <Col md={12} className="medications mb-4">
                <p>Medications</p>
                {
                  // if patient has no medications, render add medications button,else edit medications button
                  patient && patient.medical_record && patient.medical_record.medications.length > 0 ? (
                    <button className="btn btn-primary"><i className="fa-solid fa-pen"></i></button>
                  ) : (
                    <button className="btn btn-primary"><i className="fa-solid fa-plus"></i>Add</button>
                  )
                }
                {
                  // if patient has medications, convert the string to list

                  patient && patient.medical_record && patient.medical_record.medications.length > 0 ? (
                    <ul>
                      {
                        patient.medical_record.medications.split(',').map((medication, index) => (
                          <li key={index}>{medication}</li>
                        ))
                      }
                    </ul>
                  ) : (
                    <h5>No medications</h5>
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
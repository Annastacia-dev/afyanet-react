import React,{ useContext } from 'react'
import PatientSidebar from './PatientSidebar'
import {Row, Col, Table, Card} from 'react-bootstrap'
import { PatientContext } from '../../../context/patient';
import '../../../css/PatientMedicalRecords.css'
import AddAllergies from './AddAllergies';
import AddMedications from './AddMedications';
import AddHealthData from './AddHealthData';
import EditAllergies from './EditAllergies';
import EditMedications from './EditMedications';
import EditHealthData from './EditHealthData';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const PatientMedicalRecords = () => {

  const { patient } = useContext(PatientContext);

  console.log('patient',patient)


  return (
    <>
    <div className="patient-medical-records d-flex" id="wrapper">
      <PatientSidebar />
        <div className='medical-records-desktop' id="page-content-wrapper">
          <div className="container-fluid sidecontentcontainer">
            <Row className="sidecontent px-5 mt-5">
              <Col md={12} className="health-data mb-4">
                <p style={{marginTop:"10px"}}>Health Data <span>
                {
                          patient && patient.medical_record && patient.medical_record.blood_pressure && patient.medical_record.weight && patient.medical_record.height && patient.medical_record.temperature ? (
                            <Popup trigger={<button className='healthdata-edit'><i className="fa-solid fa-edit"></i>Edit</button>}
                            modal
                            nested
                            >
                              <EditHealthData/>
                            </Popup>
                          ) : (
                            <Popup trigger={<button className='healthdata-add'><i className="fa-solid fa-plus"></i>Add</button>}
                            modal
                            nested
                            >
                              <AddHealthData/>
                            </Popup>
                          )

                }
                  </span></p>
                
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
                  patient && patient.medical_record && patient.medical_record.allergies && patient.medical_record.allergies.length > 0 ? (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-pen"></i>Edit</button>}
                    modal
                    nested
                    >
                      <EditAllergies/>
                    </Popup>
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

                  patient && patient.medical_record && patient.medical_record.allergies && patient.medical_record.allergies.length > 0 ? (
                    <ul>
                      {
                        patient.medical_record.allergies.split(',').map((allergy, index) => (
                          <li key={index}><i className="fa-solid fa-angle-right"></i>{allergy}</li>
                        ))
                      }
                    </ul>
                  ) : (
                    <h5>No allergies</h5>
                  )
                }   
              </Col>
              <Col md={12} className="patient-records-medications mb-4">
                <p>Medications</p>
                {
                  // if patient has no medications, render add medications button,else edit medications button
                  patient && patient.medical_record && patient.medical_record.medications && patient.medical_record.medications.length > 0 ? (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-pen"></i>Edit</button>}
                    modal
                    nested
                    >
                      <EditMedications/>
                    </Popup>
                    
                  ) : (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-plus"></i>Add</button>}
                    modal
                    nested
                    >
                      <AddMedications/>
                    </Popup>
                  )
                }
                {
                  // if patient has medications, convert the string to list

                  patient && patient.medical_record && patient.medical_record.medications && patient.medical_record.medications.length > 0 ? (
                    <ul>
                      {
                        patient.medical_record.medications.split(',').map((medication, index) => (
                          <li key={index}><i className="fa-solid fa-angle-right"></i> {medication}</li>
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

        {/* Mobile Phone */}

        <div className='medical-records-phone' id="page-content-wrapper">
          <div className="container-fluid sidecontentcontainer">
            <Row className="sidecontent px-5 mt-5">
              <Col md={12} className="health-data mb-4">
                <p className='heading'>Health Data
                {
                          patient && patient.medical_record && patient.medical_record.blood_pressure && patient.medical_record.weight && patient.medical_record.height && patient.medical_record.temperature ? (
                            <Popup trigger={<button className='healthdata-edit'><i className="fa-solid fa-edit"></i></button>}
                            modal
                            nested
                            >
                              <EditHealthData/>
                            </Popup>
                          ) : (
                            <Popup trigger={<button className='healthdata-add'><i className="fa-solid fa-plus"></i>Add</button>}
                            modal
                            nested
                            >
                              <AddHealthData/>
                            </Popup>
                          )

                }
                </p>
                
                <Card>
                     {
                      <>
                        <p>Blood Pressure:
                          <br/>
                          {patient && patient.medical_record && patient.medical_record.blood_pressure} mmHg</p>
                        <p>Weight:
                          <br/>
                          {patient && patient.medical_record && patient.medical_record.weight} kgs</p>
                        <p>Height:
                          <br/>
                          {patient && patient.medical_record && patient.medical_record.height} ft</p>
                        <p>Temperature:
                          <br/>
                          {patient && patient.medical_record && patient.medical_record.temperature}&deg;C</p>
                      </>
                     }
                </Card>
              </Col>
              <Row>
              <Col md={12} className="allergies mb-4">
                <p>Allergies</p>
                {
                  // if patient has no allergies, render add allergies button,else edit allergies button
                  patient && patient.medical_record && patient.medical_record.allergies && patient.medical_record.allergies.length > 0 ? (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-pen"></i>Edit</button>}
                    modal
                    nested
                    >
                      <EditAllergies/>
                    </Popup>
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

                  patient && patient.medical_record && patient.medical_record.allergies && patient.medical_record.allergies.length > 0 ? (
                    <ul>
                      {
                        patient.medical_record.allergies.split(',').map((allergy, index) => (
                          <li key={index}><i className="fa-solid fa-angle-right"></i>{allergy}</li>
                        ))
                      }
                    </ul>
                  ) : (
                    <h5>No allergies</h5>
                  )
                }   
              </Col>
              </Row>
              <Row>
              <Col md={12} className="patient-records-medications mb-4">
                <p>Medications</p>
                {
                  // if patient has no medications, render add medications button,else edit medications button
                  patient && patient.medical_record && patient.medical_record.medications && patient.medical_record.medications.length > 0 ? (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-pen"></i>Edit</button>}
                    modal
                    nested
                    >
                      <EditMedications/>
                    </Popup>
                    
                  ) : (
                    <Popup trigger={<button className="btn btn-primary"><i className="fa-solid fa-plus"></i>Add</button>}
                    modal
                    nested
                    >
                      <AddMedications/>
                    </Popup>
                  )
                }
                {
                  // if patient has medications, convert the string to list

                  patient && patient.medical_record && patient.medical_record.medications && patient.medical_record.medications.length > 0 ? (
                    <ul>
                      {
                        patient.medical_record.medications.split(',').map((medication, index) => (
                          <li key={index}><i className="fa-solid fa-angle-right"></i> {medication}</li>
                        ))
                      }
                    </ul>
                  ) : (
                    <h5>No medications</h5>
                  )
                }
               
              </Col>
              </Row>
            </Row>
          </div>
        </div>






      
    </div>

   



    </>
  )
}

export default PatientMedicalRecords
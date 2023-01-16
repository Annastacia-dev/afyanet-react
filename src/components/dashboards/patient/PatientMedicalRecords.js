import React,{ useContext } from 'react'
import PatientSidebar from './PatientSidebar'
import {Row, Col, Table} from 'react-bootstrap'
import { PatientContext } from '../../../context/patient';

const PatientMedicalRecords = () => {

  const { patient } = useContext(PatientContext);


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
                        patient && patient.medical_records && patient.medical_records.map((record, index) => {
                          return (
                            <tr key={index}>
                              <td>{record.blood_pressure ? record.blood_pressure : '0' }</td>
                              <td>{record.weight ? record.weight : '0' }</td>
                              <td>{record.height ? record.height : '0' }</td>
                              <td>{record.temperature ? record.temperature : '0' }</td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </Table>
              </Col>
              <Col md={12} className="mb-4">
                <p>Allergies</p>
                 
              </Col>
            </Row>
          </div>
        </div>
      
    </div>
  )
}

export default PatientMedicalRecords
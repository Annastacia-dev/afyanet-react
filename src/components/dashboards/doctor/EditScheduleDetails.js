import React,{useState, useContext } from 'react'
import { DoctorContext } from '../../../context/doctor'
import { Row, Col, Form} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditScheduleDetails = () => {

  const { doctor } = useContext(DoctorContext)

  const [contractLength, setContractLength] = useState(doctor.contract_length)
  const [specificDaysTimesAvailable, setSpecificDaysTimesAvailable] = useState(
    new Date(doctor.specific_days_times_available).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  )

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [selectedDays, setSelectedDays] = useState([])

    const handleDaysChange = (e) => {
        e.preventDefault();
        const { name } = e.target;
        if (selectedDays.includes(name)) {
            setSelectedDays(selectedDays.filter(day => day !== name))
        } else {
            setSelectedDays([...selectedDays, name])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          contract_length: contractLength,
          specific_days_times_available: specificDaysTimesAvailable,
          days_available_weekly: selectedDays.join(', ')
        }
        fetch(`https://afyanet-127t.onrender.com/doctors/${doctor.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(data)
        })
        .then(r => {
          if (r.ok) {
            r.json().then(data => {
              console.log(data)
              toast.success('Schedule Details Updated Successfully',{
                position: "top-center",
                autoClose: 3000,
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
            r.json().then(errors => {
              console.log(errors)
            })
          }
        })
    }

  



  return (
    <div>
    <Form onSubmit={handleSubmit}>
      < ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
       />
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Contract Length</Form.Label>
            <Form.Control type="number" value={contractLength} onChange={(e) => setContractLength(e.target.value)} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Days Available Weekly</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicDaysAvailable">
                                    {
                                        days.map((day, index) => (
                                            <Form.Check
                                                key={index}
                                                label={day}
                                                name={day}
                                                type="checkbox"
                                                id={day}
                                                value={day}
                                                onChange={handleDaysChange}
                                                checked={selectedDays.includes(day)}
                                            />
                                        )
                                        )
                                            
                                    }
                                    
            </Form.Group>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Time Available</Form.Label>
            <Form.Control type="time" value={specificDaysTimesAvailable} onChange={(e) => setSpecificDaysTimesAvailable(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <button type="submit" className="btn btn-primary">Submit</button>
  </Form>
  </div>
  )
}

export default EditScheduleDetails
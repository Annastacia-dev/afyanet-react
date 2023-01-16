import axios  from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


function DoctorsProfile(){
  let navigate = useNavigate();
  const {id} = useParams();
  const [doctor, setDoctor] = useState({
    first_name:"",
    last_name:"", 
    email:"", 
    phone_number:"",  
    location:"", 
    specialty:"", 
    contract_length:"", 
    days_available_weekly:"", 
    specific_days_times_available:""
  });

const {first_name, last_name, email, phone_number, location, specialty, contract_length, days_available_weekly, specific_days_times_available} = doctor;
const onInputchange = e =>{
  setDoctor ({...doctor, [e.target.name]: e.target.value});
};

useEffect(()=>{
  loadDocter();

},[]);


const onSubmit = async e => {
  e.preventDefault();
  await axios.patch(`https://afyanet-127t.onrender.com/doctors/${id}`, doctor);
  navigate.push("/profile");
};

const loadDocter = async () => {
  const result = await axios.patch(`https://afyanet-127t.onrender.com/doctors/${id}`,doctor);
  setDoctor(result.data);
};


return(

<section style="background-color: #eee;">
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
      </div>
    </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <form onSubmit={e => onSubmit(e)}></form>
            <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor first_name"
              name="first_name"
              value={first_name}
              onChange={e =>onInputchange(e)}
              />
            </div>
            <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor last_name"
              name="last_name"
              value={last_name}
              onChange={e =>onInputchange(e)}
              />
            </div>
            <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor email"
              name="email"
              value={email}
              onChange={e =>onInputchange(e)}
              />
            </div>
            <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor phone_number"
              name="phone_number"
              value={phone_number}
              onChange={e =>onInputchange(e)}
              />
            </div>
            <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor location"
              name="location"
              value={location}
              onChange={e =>onInputchange(e)}
              />
            </div>
            <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor specialty"
              name="specialty"
              value={specialty}
              onChange={e =>onInputchange(e)}
              />
            </div>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Edit Personal Details</button>
            </div>
            </div>
          </div>
        </div>
        </div>
       
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-9">
                <p class="text-muted mb-0">Schedule Details</p>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
              <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor contract_length"
              name="contract_length"
              value={contract_length}
              onChange={e =>onInputchange(e)}
              />
            </div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
              <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor days_available_weekly"
              name="days_available_weekly"
              value={days_available_weekly}
              onChange={e =>onInputchange(e)}
              />
            </div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
              <div>
              <br/>
              <input
              type="text"
              placeholder="Enter Doctor specific_days_times_available"
              name="specific_days_times_available"
              value={specific_days_times_available}
              onChange={e =>onInputchange(e)}
              />
            </div>
              </div>
            </div>
            <div>
            <div class="row">
              <div class="col-sm-9">
                <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Edit Schedule Details</button>
              
            </div>

              </div>
            </div>
          </div>
        
   </section>
)
};

export default DoctorsProfile
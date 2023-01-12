import React from "react";
import DoctorSideBar from './DoctorSideBar';
import DoctorProfile from './DoctorProfile';

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
            <img src="data:image/jpeg;base64,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" alt="avatar"
              class="rounded-circle img-fluid" style="width: 150px;"/>
            <h5 class="my-3">John Olive</h5>
            <p class="text-muted mb-1"> john@gmail.com</p>
            <p class="text-muted mb-4">0712345678</p>
            <p class="text-muted mb-4">Karen</p>
            <p class="text-muted mb-4">Optician</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Edit Personal Details</button>
            </div>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <p class="mb-0">https://mdbootstrap.com</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                <p class="mb-0">@mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
            </ul>
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
                <p class="text-muted mb-0">Available for the next 6months</p>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <p class="text-muted mb-0">Available from Monday to Friday</p>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <p class="text-muted mb-0">Available from 10.00am to 6.00pm</p>
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
        </div>
   </section>

export default DoctorsProfile
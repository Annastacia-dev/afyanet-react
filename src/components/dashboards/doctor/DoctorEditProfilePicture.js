import React, { useState, useContext } from 'react';
import axios from 'axios';
import { DoctorContext } from '../../../context/doctor';
import { ToastContainer, toast } from 'react-toastify';
import '../../../css/EditProfilePicture.css';

function DoctorEditProfilePicture() {
  const [profilePicture, setProfilePicture] = useState('');
  const [loading, setLoading] = useState(false);

    const { doctor } = useContext(DoctorContext);

  const handleUpload = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'afyanet');

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dauveffyr/image/upload', formData);
      setProfilePicture(res.data.secure_url);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  const handleUpdate = async () => {
    try {
      await fetch(`https://afyanet-127t.onrender.com/doctors/${doctor.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ profile_picture: profilePicture })
      });
        toast.success('Profile picture updated successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: 'slide',
            style: {backgroundColor: '#9263CB'}
        });
        window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='edit-profile-picture container'>
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
        />
        <h5>Update Profile Picture</h5>
      <input type="file" onChange={handleUpload} />
        <br />
      {loading && <p><strong>Uploading image...</strong></p>}
      <br />
      <br />
      <button className='btn btn-primary' onClick={handleUpdate} disabled={loading}>Update</button>
    </div>
  );
}

export default DoctorEditProfilePicture

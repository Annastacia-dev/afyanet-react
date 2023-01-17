import React, { useState, useContext } from 'react';
import axios from 'axios';
import { PatientContext } from '../../../context/patient';
import { ToastContainer, toast } from 'react-toastify';

function AddProfilePicture() {
  const [profilePicture, setProfilePicture] = useState('');
  const [loading, setLoading] = useState(false);

    const { patient } = useContext(PatientContext);

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
      await axios.patch(`https://afyanet-127t.onrender.com/patients/${patient.id}`, { profile_picture: profilePicture });
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
    <div className='container' style={{
         height: '410px',
         marginTop: "10px", 
         display:'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         }}>
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
        <h5 style={{marginTop: "-100px", marginBottom:"100px"}}>Update Profile Picture</h5>
      <input style={{marginLeft:"100px"}} type="file" onChange={handleUpload} />
        <br />
      {loading && <p><strong>Uploading image...</strong></p>}
      <br />
      <br />
      <button className='btn btn-primary' onClick={handleUpdate} disabled={loading}>Update</button>
    </div>
  );
}

export default AddProfilePicture;

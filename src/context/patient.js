import React, { useState, useEffect, createContext } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
    
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://afyanet-127t.onrender.com/patient_profile',{
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
        .then(r => {
          if (r.ok){
            r.json().then(data => {
              setPatient(data)
              setLoading(false)
            })
          } else {
            r.json().then(data => {
              setError(data.error)
              setLoading(false)
            })
          }
        } )
        
    }, []);

    
    // Specialists

    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
      fetch('https://afyanet-127t.onrender.com/specialties')
        .then((res) => res.json())
        .then((data) => {
          setSpecialists(data);
        });
    }, []);

  
    return (
        <PatientContext.Provider value={{ patient, specialists, setPatient, error, loading }}>
            {children}
        </PatientContext.Provider>
    );
};

export { PatientContext, PatientProvider };
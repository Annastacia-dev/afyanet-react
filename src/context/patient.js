import React, { useState, useEffect, createContext } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
    
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('http://localhost:3000/patient_profile')
        .then(response => response.json())
        .then(data => {
          setPatient(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);

  
    return (
        <PatientContext.Provider value={{ patient, setPatient, error, loading }}>
            {children}
        </PatientContext.Provider>
    );
};

export { PatientContext, PatientProvider };
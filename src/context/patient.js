import React, { useState, useMemo, createContext } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
    
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useMemo(() => {
      async function fetchPatient() {
        try {
          const response = await fetch('http://localhost:3000/patient_profile');
          const data = await response.json();
          setPatient(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
  
      fetchPatient();
    }, []);


    return (
        <PatientContext.Provider value={{ patient, setPatient, error, loading }}>
            {children}
        </PatientContext.Provider>
    );
};

export { PatientContext, PatientProvider };
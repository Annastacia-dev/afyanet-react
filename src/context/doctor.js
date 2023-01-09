import React, { useState, useMemo, createContext } from "react";

const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
    
    const [doctor, setDoctor] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useMemo(() => {
      async function fetchDoctor() {
        try {
          const response = await fetch('http://localhost:3000/doctor_profile');
          const data = await response.json();
          setDoctor(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
  
      fetchDoctor();
    }, []);


    return (
        <DoctorContext.Provider value={{ doctor, setDoctor, error, loading }}>
            {children}
        </DoctorContext.Provider>
    );
};

export { DoctorContext, DoctorProvider };
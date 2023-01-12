import React, { useState, useEffect, createContext } from "react";

const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
    
    const [doctor, setDoctor] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetch("http://localhost:3000/doctor_profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then (r => {
            if (r.ok) {
                r.json().then(data => {
                    setDoctor(data)
                    setLoading(false)
                })
            } else {
                r.json().then(data => {
                    setError(data.error)
                    setLoading(false)
                })
            }
        })
    }, []);

    return (
        <DoctorContext.Provider value={{ doctor, setDoctor, error, loading }}>
            {children}
        </DoctorContext.Provider>
    );
};

export { DoctorContext, DoctorProvider };
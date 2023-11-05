import React, { createContext, useState, useContext } from 'react';

export const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        gross: '',
        card: '',
        car: '',
        student: '',
        appraised: '',
        down: '',
        loan: '',
        mortgage: '',
        rating: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <FormContext.Provider value={{ formData, setFormData, handleInputChange }}>
            {children}
        </FormContext.Provider>
    );
};

import React, { useEffect, createContext, useState, useContext } from 'react';

export const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(() => {
        const localData = localStorage.getItem('formData');
        return localData ? JSON.parse(localData) : {
            gross: '',
            card: '',
            car: '',
            student: '',
            appraised: '',
            down: '',
            loan: '',
            mortgage: '',
            rating: '',
        };
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch('http://localhost:5000/get-message');
                if (response.ok) {
                    const data = await response.json();
                    setFormData(prevFormData => ({ ...prevFormData, ...data }));
                } else {
                    console.error('Failed to fetch message');
                }
            } catch (error) {
                console.error('Error fetching message:', error);
            }
        };

        fetchMessage();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            const updatedFormData = {
                ...prevFormData,
                [name]: value
            };
            localStorage.setItem('formData', JSON.stringify(updatedFormData));
            return updatedFormData;
        });
    };

    return (
        <FormContext.Provider value={{ formData, setFormData, handleInputChange }}>
            {children}
        </FormContext.Provider>
    );
};

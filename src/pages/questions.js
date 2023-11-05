import React, { useState } from 'react';
import { useFormContext } from '../api/formcontext';
import { Link } from 'react-router-dom';

export default function Questions() {
  const { formData, handleInputChange } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setIsSubmitting(false);
      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Failed to send data.');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error occurred:', error);
    }
  };

  const handleClosePopup = () => {
    setIsSubmitting(false);
  };

  const labelMap = {
    rating: 'Credit Score',
    loan: 'Loan Amount',
    down: 'Down Payment Amount',
    appraised: 'Home Appraised Value',
    car: 'Monthly Car Payment',
    card: 'Monthly CC Payment',
    student: 'Student Loan Payment',
    mortgage: 'Est. Monthly Mortgage Payment',
    gross: 'Gross Monthly Income',
  };

  console.log(formData);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Loan Application</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(formData).filter(([key, value]) => value !== '').map(([key, value]) => (
            <div key={key} className="relative z-0">
              <input
                type="number"
                name={key}
                id={key}
                value={value}
                onChange={handleInputChange}
                required
                className="block py-2.5 px-4 w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <label htmlFor={key} className="text-sm font-medium text-gray-700">
                {labelMap[key]}
              </label>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <div>
              <Link to="/reject" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                Reject
              </Link>
            </div>
            <div>
              <Link to="/approve" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                Approve
              </Link>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        {isSubmitting && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg">Processing...</h2>
              <button
                onClick={handleClosePopup}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

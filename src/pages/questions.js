import React, { useState } from 'react';
import { useFormContext } from '../api/formcontext';
import { Link } from 'react-router-dom';

export default function Questions() {
  const { formData, handleInputChange } = useFormContext();
  {/*const [formData, setFormData] = useState({
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
*/}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Failed to send data.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  {/*const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };*/}

  console.log(formData);

  return (
    <div className="bg-blue-100 h-full flex justify-center items-center">

      <div className="bg-blue-800 p-8 rounded shadow-lg text-white w-1/2">
        <form onSubmit={handleSubmit}>

          {/* Gross Monthly Income Input */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="gross"
              id="gross"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              //required
              value={formData.gross}
              onChange={handleInputChange}

            />
            <label
              htmlFor="gross"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Gross Monthly Income
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="card"
              id="card"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              //required

              value={formData.card}
              onChange={handleInputChange}
            />
            <label
              htmlFor="card"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Credit Card Payment
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="car"
              id="car"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // required

              value={formData.car}
              onChange={handleInputChange}
            />
            <label
              htmlFor="car"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Car Payment
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="student"
              id="student"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // required
              value={formData.student}
              onChange={handleInputChange}
            />
            <label
              htmlFor="student"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Student Loan Payments
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="appraised"
              id="appraised"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              //required
              value={formData.appraised}
              onChange={handleInputChange}
            />
            <label
              htmlFor="appraised"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Appraised Value
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="down"
              id="down"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              //required
              value={formData.down}
              onChange={handleInputChange}
            />
            <label
              htmlFor="down"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Down Payment
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="loan"
              id="loan"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              // required
              value={formData.loan}
              onChange={handleInputChange}
            />
            <label
              htmlFor="loan"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Loan Amount
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="mortgage"
              id="mortgage"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              //required
              value={formData.mortgage}
              onChange={handleInputChange}
            />
            <label
              htmlFor="mortgage"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Monthly Mortgage Payment
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="rating"
              id="rating"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              //required
              value={formData.rating}
              onChange={handleInputChange}
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Credit Score
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link to="/reject">REJECT</Link>
      <Link to="/approve">APPROVE</Link>
    </div>
  );
}

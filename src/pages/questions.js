import React, { useState } from 'react';

export default function Questions() {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));

    const handleInputChange = (index, event) => {
        const newValues = [...inputValues];
        newValues[index] = event.target.value;
        setInputValues(newValues);
    };

    return (
        <div>
            {inputValues.map((value, index) => (
                <input
                    className="bg-gray-100 m-4"
                    key={index}
                    type="text"
                    value={value}
                    onChange={(event) => handleInputChange(index, event)}
                />
            ))}
        </div>
    );
}

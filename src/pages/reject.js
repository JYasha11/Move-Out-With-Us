import React from 'react';
import ScenarioCard from '../components/cardScenario';
import { useFormContext } from '../api/formcontext';

//import house from '../assets/house-3.jpg'

export default function Reject() {
    const valueMappings = {
        debtAmount: '',
        score: formData.rating,
        overage: '$15,000'
    };

    const { formData } = useFormContext();
    console.log(formData);
    return (
        <div className="flex h-screen bg-blue-100">
            <div className="mt-8 w-3/5 overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
                <ScenarioCard scenarioKey="rejected" values={valueMappings} />
                <ScenarioCard scenarioKey="increaseDownPayment" values={valueMappings} />
                <ScenarioCard scenarioKey="lowCredit" values={valueMappings} />
                <ScenarioCard scenarioKey="transferDebt" values={valueMappings} />
                <ScenarioCard scenarioKey="existingDebt" values={valueMappings} />
                <ScenarioCard scenarioKey="keepRenting" values={valueMappings} />

            </div>

            <div className="bg-white w-2/5 overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
                {/*<img src={house} alt="Description" />*/}
                <p>hi</p>
            </div>
        </div >
    );
}

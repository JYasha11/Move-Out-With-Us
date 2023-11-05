import React from 'react';
import ScenarioCard from '../components/cardScenario';
import { useFormContext } from '../api/formcontext';
import Separator from '../components/separator';

export default function Reject() {
    const { formData } = useFormContext();
    console.log("***MESSAGE***" + formData.message);
    const valueMappings = {
        debtAmount: '10,000',
        score: formData.rating,
    };

    return (
        <div className="flex h-screen bg-blue-50">
            <div className="mt-8 w-3/5 p-6 overflow-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100">
                <h1 className="font-semibold text-3xl mb-6 text-blue-800">Loan Application Verdict</h1>
                <ScenarioCard scenarioKey="rejected" values={valueMappings} />

                <Separator />
                {["increaseDownPayment", "lowCredit", "transferDebt", "existingDebt", "keepRenting"].map(scenarioKey => (
                    <React.Fragment key={scenarioKey}>
                        <ScenarioCard scenarioKey={scenarioKey} values={valueMappings} />
                    </React.Fragment>
                ))}
            </div>

            <div className="bg-white w-2/5 overflow-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100">
                <h1 className="font-medium text-2xl px-6 pt-10 text-blue-800">Available Options</h1>
                <div className="relative overflow-hidden pt-6 px-6">
                    <iframe
                        src="/map2.html"
                        title="map"
                        style={{
                            width: '100%',
                            height: 'calc(100vh - 4rem)', 
                            border: 'none',
                        }}
                    />
                </div>
            </div>
        </div >
    );
}

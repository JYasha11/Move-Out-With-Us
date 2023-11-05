import React from 'react';
import Card from '../components/card';
import PropTypes from 'prop-types';
import debt from '../assets/card-asset/debt.png';
import credit from '../assets/card-asset/credit.png';
import cc from '../assets/card-asset/cc.png';
import home from '../assets/card-asset/home.png';
import money from '../assets/card-asset/money.png';
import rent from '../assets/card-asset/rent.png';
import rejected from '../assets/card-asset/rejected.png';
import approved from '../assets/card-asset/approved.png';
import stable from '../assets/card-asset/stable-income.png';
import goodcredit from '../assets/card-asset/good-credit.png';
import stableincome from '../assets/card-asset/balance.png';
import piggy from '../assets/card-asset/piggy.png';
import worker from '../assets/card-asset/worker.png';

const scenarios = {
    rejected: {
        title: 'Your Loan Has Been Rejected',
        content: 'We dont believe you are financially ready to invest in property. Find out why.',
        image: rejected,
        imageAlt: 'rejected',
    },
    existingDebt: {
        title: 'Existing Previous Debt',
        content: 'You currently owe {debtAmount}. Consider your studen, car, or other loans when applying for a mortgage.',
        image: debt,
        imageAlt: 'debt'
    },
    lowCredit: {
        title: 'Low Credit Score',
        content: 'Your credit score of {score} may affect your loan conditions.',
        image: credit,
        imageAlt: 'credit card'
    },
    transferDebt: {
        title: 'Transfer Debt To A Lower Interest Card/Loan',
        content: 'Replace this later with something logical',
        image: cc,
        imageAlt: 'transfer to another cc'
    },
    tooExpensive: {
        title: 'Budget Overrun',
        content: 'The property is over your budget by {overage}. Please reconsider your options.',
        image: home,
        imageAlt: 'home'
    },
    increaseDownPayment: {
        title: 'Increase Your Down Payment',
        content: 'This property may be more attainable if you are able to increase your budget.',
        image: money,
        imageAlt: 'money'
    },
    keepRenting: {
        title: 'Continue To Rent While Saving More For A Down Payment',
        content: 'This property is out of your budget, continue to save up and monitor real estate prices.',
        image: rent,
        imageAlt: 'rent'
    },
    approved: {
        title: "Your Loan Has been Approved",
        content: 'We believe you are ready to start your journey on becoming a homeowner',
        image: approved,
        imageAlt: 'approved',
    },
    stableIncome: {
        title: 'Stable and Sufficient Income Verified',
        content: 'Your consistent and reliable income stream demonstrates financial stability and the capability to meet mortgage obligations, which makes you an ideal candidate for a home loan.',
        image: stable,
        imageAlt: 'secure safe'
    },
    healthyCredit: {
        title: 'Healthy Credit Score Achieved',
        content: 'Your excellent credit score reflects responsible credit management and qualifies you for favorable loan conditions.',
        image: goodcredit,
        imageAlt: 'credit score meter'
    },
    goodDebtRatio: {
        title: 'Favorable Debt-to-Income Ratio',
        content: 'Your debt-to-income ratio is within the desirable range, ensuring you can comfortably afford your mortgage payments.',
        image: stableincome,
        imageAlt: 'balanced scales'
    },
    largeDownPayment: {
        title: 'Significant Down Payment Available',
        content: 'The substantial down payment you can provide reduces the loan amount and the interest, thereby enhancing the terms of your loan.',
        image: piggy,
        imageAlt: 'pile of cash'
    },
    employmentHistory: {
        title: 'Proven Employment Stability',
        content: 'Your long-term employment and career growth show a stable source of income, indicating reliability in meeting loan repayments.',
        image: worker,
        imageAlt: 'employment badge'
    },
};

const replacePlaceholders = (content, values) => {
    return content.replace(/{(\w+)}/g, (_, key) => values[key]);
};

const ScenarioCard = ({ scenarioKey, values }) => {
    const scenario = scenarios[scenarioKey];

    if (!scenario) {
        console.error(`Scenario with key "${scenarioKey}" not found.`);
        return null;
    }

    const content = replacePlaceholders(scenario.content, values);

    return (
        <Card title={scenario.title} image={scenario.image} imageAlt={scenario.imageAlt}>
            <p>{content}</p>
        </Card>
    );
};

ScenarioCard.propTypes = {
    scenarioKey: PropTypes.oneOf(Object.keys(scenarios)).isRequired,
    values: PropTypes.object,
};

export default ScenarioCard;

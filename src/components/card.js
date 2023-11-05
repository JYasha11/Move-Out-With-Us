import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, className, image, imageAlt }) => {
    const cardClasses = `mb-8 mx-auto grid grid-cols-3 rounded-2xl overflow-hidden shadow-lg bg-white ${className} w-3/5`;

    return (
        <div className={cardClasses}>
            <div className="col-span-2 p-6 flex flex-col justify-between">
                {title && <p className="font-bold text-xl mb-2">{title}</p>}
                <div>{children}</div>
            </div>
            {image && (
                <div className="col-span-1 flex justify-center items-center">
                    <img src={image} alt={imageAlt} className="max-h-32 max-w-32" />
                </div>
            )}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
};

Card.defaultProps = {
    className: '',
    title: '',
    image: '',
    imageAlt: '',
};

export default Card;

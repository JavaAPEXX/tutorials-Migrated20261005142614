import React from 'react';

type ResultComponentProps = {
    data?: Record<string, any>;
};

export const ResultComponent: React.FC<ResultComponentProps> = ({ data = {} }) => {
    const { message } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>{message}</h2>
            </div>
        </div>
    );
};

export default ResultComponent;

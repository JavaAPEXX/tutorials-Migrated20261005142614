import React from 'react';

type ViewGreetingComponentProps = {
    data?: Record<string, any>;
};

export const ViewGreetingComponent: React.FC<ViewGreetingComponentProps> = ({ data = {} }) => {
    const { message } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>{message}</h2>
            </div>
        </div>
    );
};

export default ViewGreetingComponent;

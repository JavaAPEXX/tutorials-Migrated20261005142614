import React from 'react';

type WebInfGreetingComponentProps = {
    data?: Record<string, any>;
};

export const WebInfGreetingComponent: React.FC<WebInfGreetingComponentProps> = ({ data = {} }) => {
    const { message } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>Hello {message}</h1>
            </div>
        </div>
    );
};

export default WebInfGreetingComponent;

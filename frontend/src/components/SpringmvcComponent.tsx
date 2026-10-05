import React from 'react';

type SpringmvcComponentProps = {
    data?: Record<string, any>;
};

export const SpringmvcComponent: React.FC<SpringmvcComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Spring MVC configured to work with Apache Tiles</h2>
            </div>
        </div>
    );
};

export default SpringmvcComponent;

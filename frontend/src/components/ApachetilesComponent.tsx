import React from 'react';

type ApachetilesComponentProps = {
    data?: Record<string, any>;
};

export const ApachetilesComponent: React.FC<ApachetilesComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Tiles with Spring MVC Demo</h2>
            </div>
        </div>
    );
};

export default ApachetilesComponent;

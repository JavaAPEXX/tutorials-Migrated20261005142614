import React from 'react';

type ViewSuccessComponentProps = {
    data?: Record<string, any>;
};

export const ViewSuccessComponent: React.FC<ViewSuccessComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Activation Successful!</h2>
            </div>
        </div>
    );
};

export default ViewSuccessComponent;

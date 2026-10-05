import React from 'react';

type ViewFailureComponentProps = {
    data?: Record<string, any>;
};

export const ViewFailureComponent: React.FC<ViewFailureComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Activation Failed</h2>
            </div>
        </div>
    );
};

export default ViewFailureComponent;

import React from 'react';

type ViewSampleComponentProps = {
    data?: Record<string, any>;
};

export const ViewSampleComponent: React.FC<ViewSampleComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>This is the body of the sample view</h1>
            </div>
        </div>
    );
};

export default ViewSampleComponent;

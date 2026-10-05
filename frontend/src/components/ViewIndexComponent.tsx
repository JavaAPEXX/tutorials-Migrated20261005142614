import React from 'react';

type ViewIndexComponentProps = {
    data?: Record<string, any>;
};

export const ViewIndexComponent: React.FC<ViewIndexComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>This is the body of the index view</h1>
            </div>
        </div>
    );
};

export default ViewIndexComponent;

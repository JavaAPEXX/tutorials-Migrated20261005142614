import React from 'react';

type View2Sample2ComponentProps = {
    data?: Record<string, any>;
};

export const View2Sample2Component: React.FC<View2Sample2ComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>This is the body of the sample2 view</h1>
            </div>
        </div>
    );
};

export default View2Sample2Component;

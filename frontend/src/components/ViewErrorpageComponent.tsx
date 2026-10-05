import React from 'react';

type ViewErrorpageComponentProps = {
    data?: Record<string, any>;
};

export const ViewErrorpageComponent: React.FC<ViewErrorpageComponentProps> = ({ data = {} }) => {
    const { errorMsg } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>{errorMsg}</h1>
            </div>
        </div>
    );
};

export default ViewErrorpageComponent;

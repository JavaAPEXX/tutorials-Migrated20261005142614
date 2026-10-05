import React from 'react';

type DemoComponentProps = {
    data?: Record<string, any>;
};

export const DemoComponent: React.FC<DemoComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <span>PushBuilder demo</span>
            <br>
            <img src="<c:url value="/resources/logo.png"/>" alt="Logo"
                height="126" width="411">
            <br>
            </div>
        </div>
    );
};

export default DemoComponent;

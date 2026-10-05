import React from 'react';

type JspVarByElComponentProps = {
    data?: Record<string, any>;
};

export const JspVarByElComponent: React.FC<JspVarByElComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div>Open the browser console to see the message.</div>
            </div>
        </div>
    );
};

export default JspVarByElComponent;

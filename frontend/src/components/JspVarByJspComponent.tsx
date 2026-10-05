import React from 'react';

type JspVarByJspComponentProps = {
    data?: Record<string, any>;
};

export const JspVarByJspComponent: React.FC<JspVarByJspComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div>Open the browser console to see the message.</div>
            </div>
        </div>
    );
};

export default JspVarByJspComponent;

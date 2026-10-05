import React from 'react';

type JspUnknownComponentProps = {
    data?: Record<string, any>;
};

export const JspUnknownComponent: React.FC<JspUnknownComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <p>Sorry, this command is not known!</p>
            </div>
        </div>
    );
};

export default JspUnknownComponent;

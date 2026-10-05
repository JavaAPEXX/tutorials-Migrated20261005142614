import React from 'react';

type JspExamplethreeComponentProps = {
    data?: Record<string, any>;
};

export const JspExamplethreeComponent: React.FC<JspExamplethreeComponentProps> = ({ data = {} }) => {
    const { text } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>Bound Value</h1>
        	<p>You said: {text}</p>
            </div>
        </div>
    );
};

export default JspExamplethreeComponent;

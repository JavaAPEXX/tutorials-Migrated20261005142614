import React from 'react';

type JspExampletwoComponentProps = {
    data?: Record<string, any>;
};

export const JspExampletwoComponent: React.FC<JspExampletwoComponentProps> = ({ data = {} }) => {
    const { greetings } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>Java in Static Page Example</h1>
        	
            <p>{greetings}</p>
            </div>
        </div>
    );
};

export default JspExampletwoComponent;

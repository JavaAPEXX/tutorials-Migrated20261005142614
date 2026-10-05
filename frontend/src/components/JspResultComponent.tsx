import React from 'react';

type JspResultComponentProps = {
    data?: Record<string, any>;
};

export const JspResultComponent: React.FC<JspResultComponentProps> = ({ data = {} }) => {
    const { country, email, name, province } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>User Information</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Province:</strong> {province}</p>
                <p><strong>Country:</strong> {country}</p>
            </div>
        </div>
    );
};

export default JspResultComponent;

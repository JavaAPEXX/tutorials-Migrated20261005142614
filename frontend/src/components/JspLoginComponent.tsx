import React, { useState } from 'react';

type JspLoginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspLoginComponent: React.FC<JspLoginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'name': '',
        'color': '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="auth-card-container">
            <div className="modern-card auth-card">
                <form onSubmit={handleSubmit} name="userForm" action="login" method="POST">
                <label>Your Name:</label>
                <input type="text" name="name"/>
        
                <label>UI Color:</label>
                <input type="text" name="color"/>
        
                <button type="submit">Confirm</button>
            </form>
            </div>
        </div>
    );
};

export default JspLoginComponent;

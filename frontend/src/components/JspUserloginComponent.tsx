import React, { useState } from 'react';

type JspUserloginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspUserloginComponent: React.FC<JspUserloginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'userId': '',
        'userName': '',
        'age': '',
    });
    const { request } = data;

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
                <p>Update your User Details:</p>
        
        	<form onSubmit={handleSubmit} action="update">
        		User ID: <input type="text" name="userId" value='{request.getAttribute("id")}' disabled /><br /> User Name:
        		<input type="text" name="userName" /> Age: <input type="number" name="age" /> <br /> <input type="submit" value="Update" />
        	</form>
            </div>
        </div>
    );
};

export default JspUserloginComponent;

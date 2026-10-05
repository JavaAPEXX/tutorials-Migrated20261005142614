import React, { useState } from 'react';

type ViewUserhomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewUserhomeComponent: React.FC<ViewUserhomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { message } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div id="container">
        
            <h2>New User</h2>
            {(Boolean(message)) && (<div className="message green">{message}</div>)}
        
            <form:form action="/spring-mvc-basics/user" modelAttribute="newUserForm">
        
                <form:errors path="" cssClass="error"/>
                <br />
        
                <label htmlFor="email">Email: </label>
                <form:input path="email" id="emailInput" />
                <form:errors path="email" cssClass="error" />
                <br/>
        
                <label htmlFor="verifyEmail">Verify email: </label>
                <form:input path="verifyEmail" id="verifyEmailInput" />
                <form:errors path="verifyEmail" cssClass="error" />
                <br/>
        
                <label htmlFor="password">Password: </label>
                <form:input path="password" type="password" id="passwordInput" />
                <form:errors path="password" cssClass="error" />
                <br/>
        
                <label htmlFor="verifyPassword">Verify password: </label>
                <form:input path="verifyPassword" type="password" id="verifyPasswordInput" />
                <form:errors path="verifyPassword" cssClass="error" />
                <br/>
        
                <input type="submit" value="Submit" />
            </form:form>
        </div>
            </div>
        </div>
    );
};

export default ViewUserhomeComponent;

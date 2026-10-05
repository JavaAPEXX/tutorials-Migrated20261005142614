import React, { useState } from 'react';

type RegistrationComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const RegistrationComponent: React.FC<RegistrationComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});

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
                <form:form method="POST" modelAttribute="user" action="register">
        		<form:label path="email">Email: </form:label>
        		<form:input path="email" type="text"/>
        		<br />
        		<form:label path="password">Password: </form:label>
                <form:input path="password" type="password" />
                <br />
                <input type="submit" value="Submit" />
        	</form:form>
            </div>
        </div>
    );
};

export default RegistrationComponent;

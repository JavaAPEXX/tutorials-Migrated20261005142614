import React, { useState } from 'react';

type HomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const HomeComponent: React.FC<HomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'textField': '',
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
        <div className="modern-container">
            <div className="modern-card">
                <sec:authorize access="!isAuthenticated()">
                Login
            </sec:authorize>
            
            <sec:authorize access="isAuthenticated()">
                Logout
            </sec:authorize>
            
            <sec:authorize access="isAuthenticated()">
                <h2>
                    Welcome back, <sec:authentication property="name" />
                </h2>         
                <sec:authorize access="hasRole('ADMIN')">
                    Manage Users
                </sec:authorize>
                <form onSubmit={handleSubmit} method="post">
                    <sec:csrfInput />
                    Text Field: <br /> <input type="text" name="textField" />
                    <input type="submit" value="Submit form with CSRF input" />
                </form>
                <sec:authorize url="/userManagement">
                    <a href="/userManagement">Manage Users</a>
                </sec:authorize>
            </sec:authorize>
            </div>
        </div>
    );
};

export default HomeComponent;

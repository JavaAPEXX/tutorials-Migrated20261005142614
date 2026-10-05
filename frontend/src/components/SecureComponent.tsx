import React, { useState } from 'react';

type SecureComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const SecureComponent: React.FC<SecureComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'parameterName': '',
    });
    const { _csrf, pageContext } = data;

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
                <h3>Home Page</h3>
        
        <p>
            Hello <b>{pageContext.request.remoteUser}</b><br>
            Roles: <b><sec:authentication property="principal.authorities" /></b>
        </p>
        
        <form onSubmit={handleSubmit} action="logout" method="post">
            <input type="submit" value="Logout" />
            <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
        </form>
            </div>
        </div>
    );
};

export default SecureComponent;

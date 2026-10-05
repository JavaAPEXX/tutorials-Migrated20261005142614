import React, { useState } from 'react';

type JspSuccessComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspSuccessComponent: React.FC<JspSuccessComponentProps> = ({ data = {}, onSubmit }) => {
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
                <main>
                     <div className="wrapper">
                        <h1>Congrats! You've logged in.</h1>
                        <a href="{pageContext.request.contextPath}/secured/socket">Click to chat!</a>
                        <a href="{pageContext.request.contextPath}/">Click to start over (you will still be authenticated)!</a>
                     </div>
                </main>
                
                <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
            </div>
        </div>
    );
};

export default JspSuccessComponent;

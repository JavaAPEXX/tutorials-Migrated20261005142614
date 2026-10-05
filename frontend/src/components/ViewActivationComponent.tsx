import React, { useState } from 'react';

type ViewActivationComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewActivationComponent: React.FC<ViewActivationComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        '_eventId': '',
        '_eventId': '',
    });
    const { flowExecutionUrl } = data;

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
                <h2>Hello World!</h2>
        
        
        
        
        <form onSubmit={handleSubmit} method="post" action={flowExecutionUrl}>
        
            <input type="hidden" name="_eventId" value="activate" />
            <input type="submit" value="Proceed" />
        
        </form>
        
        <form onSubmit={handleSubmit} method="post" action={flowExecutionUrl}>
        
            <input type="hidden" name="_eventId" value="cancel" />
            <input type="submit" value="Cancel" />
        
        </form>
            </div>
        </div>
    );
};

export default ViewActivationComponent;

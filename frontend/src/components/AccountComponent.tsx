import React, { useState } from 'react';

type AccountComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AccountComponent: React.FC<AccountComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'dep': '',
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
                <form onSubmit={handleSubmit} action="bankAccount" method="post">
                Amount: <input type="text" size="5" name="dep"/> 
                &nbsp;&nbsp;
                <input type="submit" value="Deposit" />
        </form>
            </div>
        </div>
    );
};

export default AccountComponent;

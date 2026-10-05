import React, { useState } from 'react';

type ViewCsrfhomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewCsrfhomeComponent: React.FC<ViewCsrfhomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'accountNo': '',
        'amount': '',
        'parameterName': '',
    });
    const { _csrf } = data;

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
                <h1>CSRF test on Origin</h1>
        	<a href="transfer?accountNo=1234&amount=100">Transfer Money to John</a>
        	
        	<form onSubmit={handleSubmit} action="transfer" method="POST">
               <label>Account Number</label> <input name="accountNo" type="number"/>
               <label>Amount</label>         <input name="amount" type="number"/>
               <input type="hidden" name={_csrf.parameterName} value={_csrf.token} />
               <input type="submit" />
        	</form>
            </div>
        </div>
    );
};

export default ViewCsrfhomeComponent;

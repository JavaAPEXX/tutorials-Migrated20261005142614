import React, { useState } from 'react';

type ViewLoginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewLoginComponent: React.FC<ViewLoginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'username': '',
        'password': '',
        'remember-me': '',
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
                <h1>Login</h1>
        
        	<form onSubmit={handleSubmit} name='f' action="login" method='POST'>
        
        		<div className="modern-table-wrapper"><table className="modern-table">
        			<tr>
        				<td>User:</td>
        				<td><input type='text' name='username' value='' /></td>
        			</tr>
        			<tr>
        				<td>Password:</td>
        				<td><input type='password' name='password' /></td>
        			</tr>
        			<tr>
        				<td>Remember Me:</td>
        				<td><input type="checkbox" name="remember-me" /></td>
        			</tr>
        			<tr>
        				<td><input name="submit" type="submit" value="submit" /></td>
        			</tr>
        		</table></div>
        
        	</form>
            </div>
        </div>
    );
};

export default ViewLoginComponent;

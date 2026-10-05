import React, { useState } from 'react';

type AuthorizeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AuthorizeComponent: React.FC<AuthorizeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'scope': '',
    });
    const { client, scope, scopes } = data;

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
                <div className="container">
            <p><h3>Want to Authorize scopes for client : {client.clientId} ?</h3></p>
            <hr>
        
            <form onSubmit={handleSubmit} method="post" action="authorize">
                <div className="modern-table-wrapper"><table className="modern-table">
                    <tr>
                        <td valign="top">Scopes :</td>
                        <td>
                            <c:forTokens items={scopes} delims=" " var="scope">
                                <input type="checkbox" name="scope" value={scope} />{scope}</input><br/>
                            </c:forTokens>
                        </td>
                    </tr>
        
                    <tr>
                        <td colspan="2">
                            <input type="submit" name="approval_status" value="YES"/>
                            <input type="submit" name="approval_status" value="NO"/>
                        </td>
                    </tr>
                </table></div>
            </form>
        
        </div>
            </div>
        </div>
    );
};

export default AuthorizeComponent;

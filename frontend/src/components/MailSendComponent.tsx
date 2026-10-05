import React, { useState } from 'react';

type MailSendComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const MailSendComponent: React.FC<MailSendComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { additionalInfo, headerText, messageLabel } = data;

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
                <div>
                <h3>{headerText}</h3>
                <form:form method="POST" modelAttribute="mailObject" >
                    <fieldset>
                        <div style="float:left;">
                            <div className="modern-table-wrapper"><table className="modern-table" width="300">
                                <tr>
                                    <th><label htmlFor="input_to">To</label></th>
                                    <td><form:input path="to" id="input_to" type="email"/>
                                        <small>Enter email address</small><br/>
                                        <form:errors path="to" cssStyle="color:red;font-size:small"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="input_subject">Subject</label></th>
                                    <td><form:input path="subject" id="input_subject"/>
                                        <small>Enter the subject</small><br/>
                                        <form:errors path="subject" cssStyle="color:red;font-size:small"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="input_text">{messageLabel}:</label></th>
                                    <td><form:textarea path="text" rows="5" cols="50" id="input_text"/>
                                        <form:errors path="text" cssStyle="color:red;font-size:small"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <input type="submit" value="Send" />
                                    </td>
                                </tr>
                            </table></div>
                        </div>
                        <div style="float:left; word-wrap: break-word; margin-left: 50px; width: 400px; color: grey">
                            {additionalInfo}
                        </div>
                    </fieldset>
                </form:form>
            </div>
            </div>
        </div>
    );
};

export default MailSendComponent;

import React, { useState } from 'react';

type MailSendhtmlComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const MailSendhtmlComponent: React.FC<MailSendhtmlComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { templateEngines } = data;

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
                <h3>Send Email Using Text Template</h3>
                <form:form method="POST" modelAttribute="mailObject" >
                    <fieldset>
                        <div style="width: 100%;max-width: 1280px">
                            <div className="modern-table-wrapper"><table className="modern-table">
                                <tr>
                                    <th><label htmlFor="input_to">Recipient email</label></th>
                                    <td><form:input path="to" id="input_to" type="email"/>
                                        <small>Enter email address</small><br/>
                                        <form:errors path="to" cssStyle="color:red;font-size:small"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="input_recipient_name">Recipient name</label></th>
                                    <td><form:input path="recipientName" id="input_recipient_name"/>
                                        <small>Enter the recipient name</small><br/>
                                        <form:errors path="recipientName" cssStyle="color:red;font-size:small"/>
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
                                    <th><label htmlFor="input_text">Text</label></th>
                                    <td><form:textarea path="text" rows="5" cols="50" id="input_text"/>
                                        <form:errors path="text" cssStyle="color:red;font-size:small"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="input_sender_name">Sender name</label></th>
                                    <td><form:input path="senderName" id="input_sender_name"/>
                                        <small>Enter the sender name</small><br/>
                                        <form:errors path="senderName" cssStyle="color:red;font-size:small"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="input_template_engine">Template Engine</label></th>
                                    <td><form:select path="templateEngine" id="input_template_engine" items={templateEngines}/>
                                        <small>Select the template engine</small><br/>
                                        <form:errors path="templateEngine" cssStyle="color:red;font-size:small"/>
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
                    </fieldset>
                </form:form>
            </div>
            </div>
        </div>
    );
};

export default MailSendhtmlComponent;

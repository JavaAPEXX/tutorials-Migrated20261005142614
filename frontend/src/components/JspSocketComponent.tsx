import React, { useState } from 'react';

type JspSocketComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspSocketComponent: React.FC<JspSocketComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'from': '',
        'to': '',
        'text': '',
        'parameterName': '',
    });
    const { _csrf, context, pageContext } = data;

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
                <c:set var="context" scope="session" value={pageContext.request.contextPath}/>
                <main>
                    <div className="wrapper">
                        <h1>Socket Chat</h1>
                        <div id="all">
                            <h3>(Chat With Everyone)</h3>
                            <input type="text" id="from" placeholder="Choose Your Username"/>
                            <button id="connectAll" ng-click="connectAll('{context}');">Connect All</button>
                            <button id="subscribeAll" ng-click="subscribeAll();">Subscribe All</button>
                        </div>
                        <div id="specific">
                            <h3>(Chat With A Specific User)</h3>
                            <input type="text" id="to" placeholder="Choose a Recipient"/>
                            <button id="connectSpecific" ng-click="connectSpecific('{context}');">Connect Specific</button>
                            <button id="subscribeSpecific" ng-click="subscribeSpecific();">Subscribe Specific</button>
                        </div>
                        <div id="conversationDiv">
                            <h3>(Send and See Messages)</h3>
                            <input type="text" id="text" placeholder="Write a message..."/>
                            <button id="sendMessage" ng-click="sendMessage('{context}');">Send</button>
                            <div id="response"></div>
                            <button id="disconnect" disabled="disabled" ng-click="disconnect();">Disconnect</button>
                        </div>
                        <a href="{context}/secured/success">Click to go back!</a>
                        <a href="{context}/">Click to start over (you will still be authenticated)!</a>
                    </div>
                </main>
                
                <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
            </div>
        </div>
    );
};

export default JspSocketComponent;

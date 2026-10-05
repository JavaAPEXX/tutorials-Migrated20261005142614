import React from 'react';

type JspUpdateComponentProps = {
    data?: Record<string, any>;
};

export const JspUpdateComponent: React.FC<JspUpdateComponentProps> = ({ data = {} }) => {
    const { sessionData } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                Hi, User : {sessionData.getAttribute("userId")}
        
        	<br> Your User Data has been updated as below :
        	<br> User Name: {sessionData.getAttribute("userName")}
        	<br> Age : {sessionData.getAttribute("age")}
            </div>
        </div>
    );
};

export default JspUpdateComponent;

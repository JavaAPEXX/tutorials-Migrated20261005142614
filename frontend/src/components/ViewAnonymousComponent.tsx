import React from 'react';

type ViewAnonymousComponentProps = {
    data?: Record<string, any>;
};

export const ViewAnonymousComponent: React.FC<ViewAnonymousComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>Anonymous page</h1>
        
        	<a href="<c:url value="/login.html" />">To Login</a>
            </div>
        </div>
    );
};

export default ViewAnonymousComponent;

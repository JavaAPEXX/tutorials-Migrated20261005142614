import React from 'react';

type AdminpageComponentProps = {
    data?: Record<string, any>;
};

export const AdminpageComponent: React.FC<AdminpageComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>This is the body of the sample admin page</h1>
        
            This page is only visible to an admin
            <br/>
        
            <a href="<c:url value="/perform_logout" />">Logout</a>
            </div>
        </div>
    );
};

export default AdminpageComponent;
